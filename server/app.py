from flask import Flask, request, jsonify
from pymongo import MongoClient
from bson import ObjectId
import os
from dotenv import load_dotenv
import bcrypt
from flask_cors import CORS

load_dotenv()

app = Flask(__name__)
CORS(app) 

mongo_uri = f"mongodb+srv://jaysaran666:pass123@cluster0.waooc6z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
client = MongoClient(mongo_uri)
db = client['Users']
collection = db['UserData']

@app.route('/logging_in', methods=['POST'])
def logging_in():
    data = request.json 
    username = data.get('username')  # Corrected
    password = data.get('password')  # Corrected

    if not username or not password: 
        return jsonify({"valid": False, "message": "Username and password are required"}), 400
   
    user = collection.find_one({'username': username})  # Changed db.users to collection

    if user:
        if bcrypt.checkpw(password.encode('utf-8'), user['password']):
            return jsonify({"valid": True, "message": "Login successful"}), 200
        else:
            return jsonify({"valid": False, "message": "Invalid username or password"}), 401
    else:
        return jsonify({"valid": False, "message": "Invalid username or password"}), 401

@app.route('/signing_up', methods=['POST'])
def signing_up():
    data = request.json
    username = data.get('username')  # Corrected
    password = data.get('password')  # Corrected

    if not username or not password:
        return jsonify({"success": False, "message": "Username and password are required"}), 400

    existing = collection.find_one({'username': username})
    if existing:
        return jsonify({"success": False, "message": "Username already exists!"}), 409
    
    hashed_pwrd = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())
    
    collection.insert_one({
        "username": username,
        "password": hashed_pwrd
    })
    
    return jsonify({"success": True, "message": "User registered successfully"}), 201

@app.route('/test_db', methods=['GET'])
def test_db():
    try:
        # The ismaster command is cheap and does not require auth.
        client.admin.command('ismaster')
        return "Connected successfully to MongoDB!", 200
    except Exception as e:
        return f"Failed to connect to MongoDB. Error: {str(e)}", 500

if __name__ == '__main__':
    app.run(debug=True)