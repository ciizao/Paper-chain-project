package models

type Product struct {
	ID    string `db:"id" json:"id"`
	Name  string `db:"name" json:"name"`
	Stock int    `db:"stock" json:"stock"`
}
