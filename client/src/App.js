import './App.css';
import Main from './components/views/Main';
import Detail from './components/Detail';
import Update from './components/Update';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; //this is new
import {useState} from 'react'

function App() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({})

  const removeFromDom = productId => {
    setProducts(products.filter(product => product._id !== productId));
}
  return (
    <div className="App">
<BrowserRouter>
        <Routes>
          <Route element={<Main products={products} setProducts={setProducts}/>} path="/home" default />
          <Route element={<Detail removeFromDom={removeFromDom} product={product} setProduct={setProduct}/>} path="/products/:id" />
          <Route element={<Update/>} path="/products/edit/:id"/>
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
