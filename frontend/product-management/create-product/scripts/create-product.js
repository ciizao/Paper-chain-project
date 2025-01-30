document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        detail: document.getElementById("detail").value,
        price: parseFloat(document.getElementById("price").value),
        category: document.getElementById("category").value, 
        stock: parseInt(document.getElementById("stock").value) 
    };

    fetch("/api/products/create-product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        document.getElementById("message").textContent = "Producto creado correctamente!";
        document.getElementById("productForm").reset();
    })
    .catch(error => {
        document.getElementById("message").textContent = "Error al crear el producto.";
        console.error("Error:", error);
    });
});

