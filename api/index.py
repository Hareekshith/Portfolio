import os
from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from bson.objectid import ObjectId 
from dotenv import load_dotenv
MONGO_URI = os.environ.get('mu')
DB_NAME = "time_line"
COLLECTION_NAME = "timenux"

# Initialize Flask app
app = Flask(__name__)
CORS(app) 

client = None

def get_mongo_client():
    """Connects to MongoDB using environment variable."""
    global client
    if client is None and MONGO_URI:
        # Use try-except in case URI is missing or connection fails
        try:
            # Setting server selection timeout to avoid long waits in serverless environment
            client = MongoClient(MONGO_URI, serverSelectionTimeoutMS=5000) 
            # Force connection test
            client.admin.command('ping')
        except Exception as e:
            print(f"MongoDB connection error: {e}")
            raise ConnectionError("Failed to connect to MongoDB.")
    return client

def fetch_timeline_entries(limit=None):
    """Fetches timeline entries from MongoDB."""
    try:
        client = get_mongo_client()
        if not client:
             print("No MongoDB client available.")
             return []

        db = client[DB_NAME]
        coll = db[COLLECTION_NAME]
        
        # Build the query and sort (descending by _id to show newest first)
        cursor = coll.find().sort("_id", -1)
        if limit is not None:
            cursor = cursor.limit(limit)
            
        entries = []
        for entry in cursor:
            # Convert ObjectId to string for JSON serialization
            if '_id' in entry:
                entry['_id'] = str(entry['_id']) 
            entries.append(entry)
            
        return entries
        
    except ConnectionError:
        return [] # Return empty list if connection failed
    except Exception as e:
        print(f"Error fetching timeline data: {e}")
        return []

# Endpoint to get the three most recent entries for the Home page
@app.route('/api/timeline/recent', methods=['GET'])
def get_recent_timeline():
    entries = fetch_timeline_entries(limit=3)
    return jsonify(entries)

# Endpoint to get all timeline entries for the Timeline page
@app.route('/api/timeline/all', methods=['GET'])
def get_full_timeline():
    entries = fetch_timeline_entries()
    return jsonify(entries)

# Catch-all route for debugging or undefined paths
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return jsonify({
        "status": "running", 
        "message": "Vercel Serverless Function is active. Use /api/timeline/recent or /api/timeline/all"
    })

# For local testing only
if __name__ == '__main__':
    app.run(debug=True, port=5000)
