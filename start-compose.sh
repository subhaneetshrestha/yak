#!/bin/bash
#Start docker compose
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build --scale node-app=2
echo Starting!!