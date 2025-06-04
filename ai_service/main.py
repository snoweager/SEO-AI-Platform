from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import openai
import os

# Load environment variable (for local development)
from dotenv import load_dotenv
load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")

app = FastAPI()

class PromptRequest(BaseModel):
    prompt: str

@app.post("/generate")
async def generate_text(req: PromptRequest):
    try:
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[{"role": "user", "content": req.prompt}],
            temperature=0.7,
            max_tokens=800
        )
        return {"content": response.choices[0].message["content"].strip()}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
