from flask import Flask, render_template
import random
import json
from prometheus_flask_exporter import PrometheusMetrics

app = Flask(__name__)
metrics = PrometheusMetrics(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get-fact')
def get_fact():
    with open('facts.json') as f:
        facts = json.load(f)
    return random.choice(facts)

@app.route('/health')
def health_check():
    return {"status": "ok"}, 200

if __name__ == '__main__':
    app.run(debug=True)
