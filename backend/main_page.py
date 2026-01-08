from fastapi import APIRouter

router = APIRouter()

BIO = """
After 18 years of living in Taipei, I moved to Atlanta and am now a senior at Emory. I study Computer Science & Business Administration but also love engineering, sustainability, cultures, and learning all sorts of things!

Scroll to see what I spend my time on :)
"""

GITHUB_LINK = "https://github.com/gina-wang-1021"
LINKEDIN_LINK = "https://www.linkedin.com/in/yi-chi-wang/"

@router.get("/intro")
def get_intro():
    return {
        "title": "Hello! Welcome to Gina’s personal page.",
        "bio": BIO,
        "links": [
            {"label": "GitHub", "url": GITHUB_LINK},
            {"label": "LinkedIn", "url": LINKEDIN_LINK},
        ]
    }

@router.get("/engineering_work")
def get_engineering_work_exp():
    # call Supabase endpoint and fetch from technical_work
    return {}

@router.get("/personal_projects")
def get_personal_projects():
    # call Supabase endpoint and fetch from projects
    return {}

@router.get("/other")
def get_other_experience():
    # call Supabase endpooint and fetch from other
    return {}