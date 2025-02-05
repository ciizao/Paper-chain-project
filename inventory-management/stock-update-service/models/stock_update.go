package models

type StockUpdateRequest struct {
	ProductID string `json:"product_id"`
	Stock     int    `json:"stock"`
}

type StockRestoreRequest struct {
	ProductID string `json:"product_id"`
	Quantity  int    `json:"quantity"`
}
