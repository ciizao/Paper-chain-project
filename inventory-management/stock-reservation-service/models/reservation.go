package models

type StockReservationRequest struct {
	ProductID string `json:"product_id"`
	Quantity  int    `json:"quantity"`
}
