from flask import Flask, Response, request
from flask_ngrok import run_with_ngrok
import pymongo
import json
import os

# Get the current directory
current_dir = os.path.dirname(__file__)

# Construct the path to 'config.json'
config_path = os.path.join(current_dir, 'config.json')

try:
    with open(config_path) as file:
        params = json.load(file)["params"]
except FileNotFoundError:
    print(f"Error: 'config.json' not found in the directory: {current_dir}")
    exit(1)
except json.JSONDecodeError:
    print(f"Error: Unable to parse 'config.json'. Make sure it's a valid JSON file.")
    exit(1)

app = Flask(__name__)
run_with_ngrok(app)  # Use Ngrok to expose the app to the internet

try:
    client = pymongo.MongoClient(params['client_url'])
    db = client[params['db']]
except pymongo.errors.ConnectionFailure:
    print(f"Error: Unable to connect to MongoDB with the provided URL: {params['client_url']}")
    exit(1)
except KeyError:
    print("Error: 'client_url' or 'db' not found in 'params' of 'config.json'")
    exit(1)

@app.route('/webhook', methods=['POST', 'GET'])
def webhook():
    try:
        req = request.get_json(force=True)
        query = req["queryResult"]["queryText"]
        result = req["queryResult"]["fulfillmentText"]

        data = {"Query": query, "Result": result}
        mycol = db["trawhizdb1"]
        mycol.insert_one(data)
        print("Data got inserted into the database")

        return Response(status=200)
    except Exception as e:
        print(f"Error: {e}")
        return Response(status=500)

if __name__ == "__main__":
    # Specify the host and port directly in the run method
    app.run()
