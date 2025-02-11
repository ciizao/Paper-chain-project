package routes

import (
	"stock-reservation-service/handlers"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(router *gin.Engine) {
	router.POST("/reserve-stock", handlers.ReserveStock)
}
