import os
import openai
from dotenv import load_dotenv
from flask import Flask, render_template

load_dotenv()

openai.api_key= os.getenv("OPENAI_API_KEY")


app = Flask(__name__)


@app.route("/")
def home():
        return  render_template('index.html')

def build_conversation_dict(messages: list) -> list[dict]:
        return [
                {"role": "user" if i % 2 == 0 else "assistant", "content": message}
                for i, message in enumerate(messages)
        ]

if __name__ == '__main__':
      app.run(debug=True, host='127.0.0.1', port=5000)
print(build_conversation_dict(messages=["Bonjour, comment ça va?", "ça va bien et toi?", "Super merci"]))


