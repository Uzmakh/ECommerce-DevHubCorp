import { useState } from 'react'
import HomePage from './pages/HomePage'
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import AddToCart from './pages/AddToCart';

const App = () => {
  const [page, setPage] = useState("productdetail");
  const [selectedProductId, setSelectedProductId] = useState(1);
  
  const navigateToProductDetail = (productId) => {
    setSelectedProductId(productId);
    setPage("productdetail");
  };
  
  return (
    <div>
      <div style={{ position: 'fixed', top: 0, left: 10, display: 'flex', gap: '10px', background: 'white', padding: '10px', borderRadius: '5px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}> 
        <button onClick={()=>setPage("home")}>Home</button>
        <button onClick={()=>setPage("productlist")}>ProductList</button>
        <button onClick={()=>setPage("productdetail")}>ProductDetail</button>
        <button onClick={()=>setPage("addtocart")}>AddToCart</button>
      </div>

      {page === "home" && <HomePage />}
      {page==="productlist" && <ProductList onProductClick={navigateToProductDetail} />}
      {page==="productdetail" && <ProductDetail productId={selectedProductId} />}
      {page==="addtocart" && <AddToCart />}
    </div>
  )
}

export default App
