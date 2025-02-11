package routes

import (
	"stock-query-service/handlers"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(router *gin.Engine) {
	router.GET("/stock/:product_id", handlers.GetStock)
}
