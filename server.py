from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()
cl = MongoClient(os.getenv("mu"))
db = cl["portfonux"]
coll = db["dbd_logs"]

