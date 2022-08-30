#!/bin/bash
#End docker compose
docker-compose -f docker-compose.yml -f docker-compose.dev.yml down
echo Ended!!