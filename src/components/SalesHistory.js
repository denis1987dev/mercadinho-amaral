// src/components/SalesHistory.js
import React from 'react';

function SalesHistory({ sales }) {
  return (
    <div className="sales-history">
      <h2>Histórico de Vendas</h2>
      {sales.length === 0 ? (
        <p>Não há vendas registradas ainda.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Quantidade</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale, index) => (
              <tr key={index}>
                <td>{sale.product}</td>
                <td>{sale.quantity}</td>
                <td>R${sale.total.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default SalesHistory;
