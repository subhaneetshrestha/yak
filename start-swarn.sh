#!/bin/bash
docker stack deploy -c docker-compose.yml -c docker-compose.prod.yml yakapp