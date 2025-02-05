package main

import (
	"log"

	"stock-query-service/config"
	"stock-query-service/database"
	"stock-query-service/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	// Cargar variables de entorno
	config.LoadEnv()

	// Conectar a la base de datos
	database.ConnectDB()
	defer database.DB.Close()

	// Configurar el router
	router := gin.Default()
	routes.SetupRoutes(router)

	// Iniciar el servidor
	log.Println("Starting stock-query-service on port 8082...")
	router.Run(":8082")
}
