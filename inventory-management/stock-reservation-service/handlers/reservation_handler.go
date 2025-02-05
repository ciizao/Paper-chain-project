package handlers

import (
	"net/http"
	"stock-reservation-service/database"
	"stock-reservation-service/models"

	"github.com/gin-gonic/gin"
)

// ReserveStock maneja la reserva de stock al hacer checkout
func ReserveStock(c *gin.Context) {
	var request models.StockReservationRequest

	if err := c.BindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	// Verificar si hay suficiente stock disponible
	var availableStock int
	err := database.DB.Get(&availableStock, `SELECT stock FROM "Products" WHERE id = $1`, request.ProductID)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Product not found"})
		return
	}

	if availableStock < request.Quantity {
		c.JSON(http.StatusConflict, gin.H{"error": "Not enough stock available"})
		return
	}

	// Reservar stock
	_, err = database.DB.Exec(`UPDATE "Products" SET stock = stock - $1 WHERE id = $2`, request.Quantity, request.ProductID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to reserve stock"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Stock reserved successfully"})
}
