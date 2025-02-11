package main

import (
	"log"

	"stock-reservation-service/config"
	"stock-reservation-service/database"
	"stock-reservation-service/routes"

	"github.com/gin-gonic/gin"
)

func main() {

	config.LoadEnv()

	database.ConnectDB()
	defer database.DB.Close()

	router := gin.Default()
	routes.SetupRoutes(router)

	log.Println("Starting stock-reservation-service on port 8083")
	router.Run(":8083")
}
