// src/components/SaleForm.js
import React, { useState } from 'react';

function SaleForm({ addSale, products }) {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedProduct || !quantity) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    // Cria um objeto de venda
    const sale = {
      product: selectedProduct,
      quantity: parseInt(quantity),
      total: products.find(p => p.name === selectedProduct).price * quantity
    };

    // Adiciona a venda ao estado de vendas
    addSale(sale);

    // Limpar os campos do formulário
    setSelectedProduct('');
    setQuantity('');
  };

  return (
    <div>
      <h2>Registrar Venda</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="product">Produto:</label>
          <select
            id="product"
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
          >
            <option value="">Selecione um produto</option>
            {products.map((product) => (
              <option key={product.id} value={product.name}>
                {product.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="quantity">Quantidade:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <button type="submit">Registrar Venda</button>
      </form>
    </div>
  );
}

export default SaleForm;
