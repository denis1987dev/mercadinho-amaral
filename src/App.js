import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import SaleForm from './components/SaleForm';
import SalesHistory from './components/SalesHistory';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [sales, setSales] = useState([]); // Estado para registrar as vendas

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const addSale = (sale) => {
    setSales([...sales, sale]);
  };

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/">Produtos</Link></li>
            <li><Link to="/vendas">Vendas</Link></li>
            <li><Link to="/historico">Histórico</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route 
            path="/" 
            element={
              <div>
                <ProductForm addProduct={addProduct} />
                <ProductList products={products} />
              </div>
            } 
          />
          <Route path="/vendas" element={<SaleForm addSale={addSale} products={products} />} />
          <Route path="/historico" element={<SalesHistory sales={sales} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
