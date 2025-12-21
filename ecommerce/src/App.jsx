import { useState } from 'react'
import HomePage from './pages/HomePage'
import ProductList from './pages/ProductList';

const App = () => {
  const [page, setPage] = useState();
  return (
    <div>
      <button onClick={()=>setPage("home")}>Home</button>
      <button onClick={()=>setPage("productlist")}>ProductList</button>

      {page === "home" && <HomePage />}
      {page==="productlist" && <ProductList/>}
    </div>
  )
}

export default App
