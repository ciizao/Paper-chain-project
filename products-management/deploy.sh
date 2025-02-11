#!/bin/bash

docker-compose down

docker system prune -af

cat <<EOF > .env
DB_HOST_PRODUCT=${DB_HOST_PRODUCT}
DB_PORT_PRODUCT=${DB_PORT_PRODUCT}
DB_USER_PRODUCT=${DB_USER_PRODUCT}
DB_PASSWORD_PRODUCT=${DB_PASSWORD_PRODUCT}
DB_NAME_PRODUCT=${DB_NAME_PRODUCT}
EOF

docker-compose pull

docker-compose up -d

