#!/bin/bash

docker-compose down

docker system prune -af

cat <<EOF > .env
REGISTRATION_DB_URL=${REGISTRATION_DB_URL}
LOGIN_DB_URL=${LOGIN_DB_URL}
LOGOUT_DB_URL=${LOGOUT_DB_URL}
JWT_SECRET_KEY=${JWT_SECRET_KEY}
JWT_ALGORITHM=${JWT_ALGORITHM}
JWT_EXPIRATION_MINUTES=${JWT_EXPIRATION_MINUTES}
EOF

docker-compose pull

docker-compose up -d


