FROM golang:1.23 AS builder

WORKDIR /app

COPY . .

RUN go mod tidy

RUN GOOS=linux GOARCH=amd64 go build -o stock-update-service

FROM alpine:latest

RUN apk --no-cache add ca-certificates libc6-compat

WORKDIR /root/

COPY --from=builder /app/stock-update-service .

RUN chmod +x stock-update-service

EXPOSE 8084

CMD ["./stock-update-service"]

