
from flask import Flask, render_template
from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

client = MongoClient(os.getenv("mu"))
db = client["time_line"]
coll = db["timenux"]

@app.route('/')
def home():
    ent = list(coll.find().sort("_id", -1).limit(3))
    return render_template("index.html", ent=ent)

@app.route('/exp')
def exp():
    return render_template("exp.html")

@app.route('/soc')
def soc():
    return render_template("soc.html")

@app.route('/tl')
def tl():
    ent = list(coll.find().sort("_id", -1))
    return render_template("tl.html", ent=ent)

if __name__ == '__main__':
    app.run(debug=True, port="8080")

