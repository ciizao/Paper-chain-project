package main

import (
	"log"

	"stock-query-service/config"
	"stock-query-service/database"
	"stock-query-service/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	config.LoadEnv()

	database.ConnectDB()
	defer database.DB.Close()

	router := gin.Default()
	routes.SetupRoutes(router)

	log.Println("Starting stock-query-service on port 8082...")
	router.Run(":8082")
}
