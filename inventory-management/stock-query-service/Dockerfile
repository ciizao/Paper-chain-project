# Etapa 1: Construcción del binario en una imagen de Go
FROM golang:1.23 AS builder

WORKDIR /app

# Copia los archivos del proyecto al contenedor
COPY . .

# Descargar dependencias
RUN go mod tidy

# Compilar el binario para Linux con la arquitectura correcta
RUN GOOS=linux GOARCH=amd64 go build -o stock-query-service

# Etapa 2: Imagen final basada en Alpine
FROM alpine:latest

# Instalar dependencias necesarias
RUN apk --no-cache add ca-certificates libc6-compat

WORKDIR /root/

# Copiar el binario desde la imagen de compilación
COPY --from=builder /app/stock-query-service .

# Asegurar permisos de ejecución
RUN chmod +x stock-query-service

# Exponer el puerto del servicio
EXPOSE 8082

# Definir el comando de inicio
CMD ["./stock-query-service"]

