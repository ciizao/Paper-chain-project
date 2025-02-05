package main

import (
	"log"

	"stock-reservation-service/config"
	"stock-reservation-service/database"
	"stock-reservation-service/routes"

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
	log.Println("Starting stock-reservation-service on port 8083...")
	router.Run(":8083")
}
