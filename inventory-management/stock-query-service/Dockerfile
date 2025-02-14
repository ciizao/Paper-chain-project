FROM golang:1.23 AS builder

WORKDIR /app

COPY . .

RUN go mod tidy

RUN GOOS=linux GOARCH=amd64 go build -o stock-query-service

FROM alpine:latest

RUN apk --no-cache add ca-certificates libc6-compat

WORKDIR /root/

COPY --from=builder /app/stock-query-service .

RUN chmod +x stock-query-service

EXPOSE 8082

CMD ["./stock-query-service"]


