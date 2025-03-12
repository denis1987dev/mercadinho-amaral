import React, { useState } from 'react';

function ProductForm({ addProduct }) {
  const [product, setProduct] = useState({ name: '', price: '', quantity: '' });

  const handleInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product);
    setProduct({ name: '', price: '', quantity: '' }); // Limpar o formulário
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nome do Produto"
        value={product.name}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Preço"
        value={product.price}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="quantity"
        placeholder="Quantidade"
        value={product.quantity}
        onChange={handleInputChange}
      />
      <button type="submit">Adicionar Produto</button>
    </form>
  );
}

export default ProductForm;
