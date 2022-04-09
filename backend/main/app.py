from fastapi import FastAPI
from .routers import watermeters


app = FastAPI()
app.include_router(watermeters.router)


@app.get("/")
async def root():
    return {"message": "Icey you!"}
