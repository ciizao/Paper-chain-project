package handlers

import (
	"net/http"
	"stock-query-service/database"
	"stock-query-service/models"

	"github.com/gin-gonic/gin"
)

// GetStock consulta el stock de un producto en la base de datos
func GetStock(c *gin.Context) {
	productID := c.Param("product_id")
	var product models.Product

	err := database.DB.Get(&product, `SELECT id, name, stock FROM "Products" WHERE id = $1`, productID)

	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Product not found"})
		return
	}

	c.JSON(http.StatusOK, product)
}
