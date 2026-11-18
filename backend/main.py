from datetime import datetime, timezone
import json
import os
from pathlib import Path
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field

app = FastAPI(title="Portfolio API", version="1.0.0")

allowed_origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]
frontend_url = os.getenv("FRONTEND_URL")
if frontend_url:
    allowed_origins.append(frontend_url.rstrip("/"))

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_origin_regex=r"https://.*\.vercel\.app",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

INQUIRIES_FILE = Path(__file__).parent / "inquiries.jsonl"


class ContactInquiry(BaseModel):
    name: str = Field(..., min_length=2, max_length=120)
    email: EmailStr
    message: str = Field(..., min_length=10, max_length=4000)


@app.get("/health")
def health_check():
    return {"status": "ok"}


@app.post("/api/contact")
def submit_inquiry(payload: ContactInquiry):
    record = {
        "submitted_at": datetime.now(timezone.utc).isoformat(),
        "name": payload.name.strip(),
        "email": str(payload.email),
        "message": payload.message.strip(),
    }

    with INQUIRIES_FILE.open("a", encoding="utf-8") as f:
        f.write(json.dumps(record) + "\n")

    return {
        "status": "received",
        "message": f"Thanks {record['name']}, your project inquiry has been logged.",
    }
