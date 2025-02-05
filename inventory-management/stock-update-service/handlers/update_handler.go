package handlers

import (
	"net/http"
	"stock-update-service/database"
	"stock-update-service/models"

	"github.com/gin-gonic/gin"
)

// UpdateStock permite modificar manualmente el stock de un producto
func UpdateStock(c *gin.Context) {
	productID := c.Param("product_id")
	var request models.StockUpdateRequest

	if err := c.BindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	_, err := database.DB.Exec(`UPDATE "Products" SET stock = $1 WHERE id = $2`, request.Stock, productID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update stock"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Stock updated successfully"})
}

// RestoreStock permite restaurar stock cuando un pedido es cancelado
func RestoreStock(c *gin.Context) {
	var request models.StockRestoreRequest

	if err := c.BindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	_, err := database.DB.Exec(`UPDATE "Products" SET stock = stock + $1 WHERE id = $2`, request.Quantity, request.ProductID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to restore stock"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Stock restored successfully"})
}
