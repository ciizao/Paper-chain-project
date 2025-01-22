import os
from dotenv import load_dotenv

# path to file .env
env_path = os.path.join(os.path.dirname(__file__), ".env")
load_dotenv(dotenv_path=env_path)

# read variables
DATABASE_URL = os.getenv("DATABASE_URL")
SECRET_KEY = os.getenv("SECRET_KEY", "default_secret_key")

#print("Loaded DATABASE_URL:", DATABASE_URL)
#print("Loaded SECRET_KEY:", SECRET_KEY)

if not DATABASE_URL:
    raise ValueError("DATABASE_URL is not set in the environment")








