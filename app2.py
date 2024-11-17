from flask import Blueprint

app2 = Blueprint('app2', __name__)

@app2.route('/')
def app2_home():
    return "Welcome to Application 2"