from pymongo import MongoClient as mc
from flask import Flask, render_template
import os
from dotenv import load_dotenv

load_dotenv()
cl = mc(os.getenv("mu"))
db = cl["time_line"]
coll = db["timenux"]

app = Flask(__name__)

@app.route("/")
def home():
    ent = list(coll.find().sort("_id",-1))
    return render_template("index.html",ent=ent)

@app.route("/Exp")
def exp():
    return render_template("Exp/index.html")

@app.route("/Soc")
def soc():
    return render_template("Soc/index.html")

if (__name__=="__main__"):
    app.run(debug=True, port=5000)
