import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.preprocessing import MinMaxScaler

# Sample user interactions data
user_interactions = [
    {"user": "user1", "destination": "Paris", "rating": 5, "food": 4, "climate": 5, "historical_places": 5, "no_of_people_visited": 100},
    {"user": "user2", "destination": "London", "rating": 4, "food": 3, "climate": 4, "historical_places": 4, "no_of_people_visited": 150},
    {"user": "user3", "destination": "Paris", "rating": 3, "food": 5, "climate": 3, "historical_places": 5, "no_of_people_visited": 120},
    # Add more user interactions
]

# Convert data to DataFrame
df = pd.DataFrame(user_interactions)

# Define weights for each factor
weights = {
    "rating": 0.3,
    "food": 0.2,
    "climate": 0.2,
    "historical_places": 0.2,
    "no_of_people_visited": 0.1
}

# Apply weights to each factor
df["weighted_rating"] = df["rating"] * weights["rating"]
df["weighted_food"] = df["food"] * weights["food"]
df["weighted_climate"] = df["climate"] * weights["climate"]
df["weighted_historical_places"] = df["historical_places"] * weights["historical_places"]
df["weighted_no_of_people_visited"] = df["no_of_people_visited"] * weights["no_of_people_visited"]

# Create a user-destination matrix
user_destination_matrix = df.pivot_table(index='user', columns='destination', values=['weighted_rating', 'weighted_food', 'weighted_climate', 'weighted_historical_places', 'weighted_no_of_people_visited'], fill_value=0)

# Normalize the matrix using Min-Max scaling
scaler = MinMaxScaler()
user_destination_matrix_normalized = scaler.fit_transform(user_destination_matrix)

# Calculate cosine similarity between users
user_similarity = cosine_similarity(user_destination_matrix_normalized)

# Function to get recommendations for a user
def get_recommendations(user):
    # Get user row index
    user_index = df['user'].unique().tolist().index(user)
    
    # Calculate the weighted average of destination ratings based on user similarity
    weighted_sum = user_similarity[user_index].dot(user_destination_matrix_normalized)
    recommendation_scores = weighted_sum / user_similarity[user_index].sum()

    # Get recommendations sorted by score
    recommendations = pd.Series(recommendation_scores, index=user_destination_matrix.columns.levels[1]).sort_values(ascending=False)

    return recommendations

# Example usage
user1_recommendations = get_recommendations("user1")
print("Recommendations for user1:")
print(user1_recommendations)
