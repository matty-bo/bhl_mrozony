from fastapi import FastAPI
from .routers import water_meters


app = FastAPI()
app.include_router(water_meters.router)


@app.get("/")
async def root():
    return {"message": "Icey you!"}
