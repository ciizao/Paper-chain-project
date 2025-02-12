const config = require("../config/config");

const searchProducts = async (req, res) => {
  try {
    const { category, brand } = req.query;

    console.log("Enviando petición a list-product-service en:", config.listProductServiceGraphQL);

    const response = await fetch(config.listProductServiceGraphQL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query: "{ catalogProducts { id name price category brand image_url } }" })
    });

    console.log("Respuesta recibida de list-product-service:", response.status);

    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.statusText}`);
    }

    const responseData = await response.json();
    if (!responseData.data || !responseData.data.catalogProducts) {
      throw new Error("No data received from list-product-service");
    }

    let products = responseData.data.catalogProducts;

    if (category) {
      products = products.filter(product => product.category === category);
    }
    if (brand) {
      products = products.filter(product => product.brand === brand);
    }

    res.json(products);
  } catch (error) {
    console.error("Error fetching products from list-product-service:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

module.exports = { searchProducts };



