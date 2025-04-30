from pymongo import MongoClient as mc
from django.shortcuts import render
import os
from dotenv import load_dotenv

load_dotenv()
cl = mc(os.getenv("mu"))
db = cl["time_line"]
coll = db["timenux"]

def home(request):
    ent = list(coll.find().sort("_id",-1))
    return render(request,"main/index.html",{"ent":ent})

def exp(request):
    return render(request,"main/exp.html")

def soc(request):
    return render(request,"main/soc.html")
