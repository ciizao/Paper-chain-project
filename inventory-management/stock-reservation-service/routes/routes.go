package routes

import (
	"stock-reservation-service/handlers"

	"github.com/gin-gonic/gin"
)

// SetupRoutes configura las rutas del microservicio
func SetupRoutes(router *gin.Engine) {
	router.POST("/reserve-stock", handlers.ReserveStock)
}
