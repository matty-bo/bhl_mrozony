from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import water_meters

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(water_meters.router)


@app.get("/")
async def root():
    return {"message": "Icey you!"}
