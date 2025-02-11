package routes

import (
	"stock-update-service/handlers"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(router *gin.Engine) {
	router.PUT("/stock/update/:product_id", handlers.UpdateStock)
	router.POST("/stock/restore", handlers.RestoreStock)
}
