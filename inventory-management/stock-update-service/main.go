package main

import (
	"log"

	"stock-update-service/config"
	"stock-update-service/database"
	"stock-update-service/routes"

	"github.com/gin-gonic/gin"
)

func main() {

	config.LoadEnv()

	database.ConnectDB()
	defer database.DB.Close()

	router := gin.Default()
	routes.SetupRoutes(router)

	log.Println("Starting stock-update-service on port 8084")
	router.Run(":8084")
}
