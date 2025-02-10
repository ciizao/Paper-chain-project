#!/bin/bash

# Asegurar que las variables de entorno están disponibles
export REGISTRATION_DB_URL=${REGISTRATION_DB_URL}
export LOGIN_DB_URL=${LOGIN_DB_URL}
export LOGOUT_DB_URL=${LOGOUT_DB_URL}
export JWT_SECRET_KEY=${JWT_SECRET_KEY}
export JWT_ALGORITHM=${JWT_ALGORITHM}
export JWT_EXPIRATION_MINUTES=${JWT_EXPIRATION_MINUTES}

echo "🚀 Deteniendo contenedores antiguos..."
docker-compose down

echo "🧹 Eliminando contenedores y volúmenes antiguos..."
docker system prune -af

echo "📄 Creando archivo .env con las credenciales..."
cat <<EOF > .env
REGISTRATION_DB_URL=${REGISTRATION_DB_URL}
LOGIN_DB_URL=${LOGIN_DB_URL}
LOGOUT_DB_URL=${LOGOUT_DB_URL}
JWT_SECRET_KEY=${JWT_SECRET_KEY}
JWT_ALGORITHM=${JWT_ALGORITHM}
JWT_EXPIRATION_MINUTES=${JWT_EXPIRATION_MINUTES}
EOF

echo "📦 Descargando imágenes más recientes desde Docker Hub..."
docker-compose pull

echo "🚀 Iniciando microservicios con Docker Compose..."
docker-compose up -d

echo "✅ Despliegue exitoso."



