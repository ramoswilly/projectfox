from flask import Flask, render_template
import random
import json

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get-fact')
def get_fact():
    with open('facts.json') as f:
        facts = json.load(f)
    return random.choice(facts)

if __name__ == '__main__':
    app.run(debug=True)
