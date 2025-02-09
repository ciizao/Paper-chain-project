FROM golang:1.23 AS builder

WORKDIR /app
COPY . .

RUN go mod tidy

RUN GOOS=linux GOARCH=amd64 go build -o stock-reservation-service

FROM alpine:latest

RUN apk --no-cache add ca-certificates libc6-compat

WORKDIR /root/

COPY --from=builder /app/stock-reservation-service .

RUN chmod +x /root/stock-reservation-service

EXPOSE 8083


CMD ["./stock-reservation-service"]
