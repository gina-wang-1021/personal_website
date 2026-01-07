from fastapi import APIRouter

router = APIRouter()

@router.get("/profile")
def get_profile():
    return {
        "name": "Gina Wang",
        "bio": "Software engineer",
        "links": [
            {"label": "GitHub", "url": "https://github.com/gina-wang-1021"},
            {"label": "LinkedIn", "url": "https://www.linkedin.com/in/yi-chi-wang/"},
        ]
    }