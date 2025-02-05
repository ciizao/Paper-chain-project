package main

import (
	"log"

	"stock-update-service/config"
	"stock-update-service/database"
	"stock-update-service/routes"

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
	log.Println("Starting stock-update-service on port 8084...")
	router.Run(":8084")
}
