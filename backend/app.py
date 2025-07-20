from flask import Flask, request, jsonify
from flask_cors import CORS
import openai

app = Flask(__name__)
CORS(app)

openai.api_key = "YOUR_OPENAI_KEY"

@app.route('/api/match', methods=['POST'])
def match_users():
    data = request.get_json()
    user1 = data['user1']
    user2 = data['user2']

    shared = []
    for key in ['music', 'movies', 'books']:
        if user1.get(key) == user2.get(key):
            shared.append(key)

    score = f"{len(shared) * 33}%"
    prompt = f"Create a fun icebreaker message for two people who like the same {', '.join(shared)}."

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}]
    )

    return jsonify({
        "compatibility": score,
        "shared_tastes": shared,
        "icebreaker": response['choices'][0]['message']['content']
    })

if __name__ == '__main__':
    app.run(debug=True)
