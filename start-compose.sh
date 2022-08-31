#!/bin/bash
#Start docker compose
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
echo Starting!!