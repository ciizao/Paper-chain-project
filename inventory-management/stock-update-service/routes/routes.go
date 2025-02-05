package routes

import (
	"stock-update-service/handlers"

	"github.com/gin-gonic/gin"
)

// SetupRoutes configura las rutas del microservicio
func SetupRoutes(router *gin.Engine) {
	router.PUT("/stock/update/:product_id", handlers.UpdateStock)
	router.POST("/stock/restore", handlers.RestoreStock)
}
