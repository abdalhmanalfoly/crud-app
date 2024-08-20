import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Nafbar from './e-commerc/navBar';
import Slider from './e-commerc/slider';
import ProductList from './e-commerc/productsList';
import { Route , Routes } from 'react-router-dom';
import About from './e-commerc/about';
import Detailsproduct from './e-commerc/Detailsproduct';
import Sidebar from './crudApp/sidebar';
import Navbarc from './crudApp/nafbar';
import './App.css';
import Home from './crudApp/Home';
import Product from './crudApp/product';
import ProductAdd from './crudApp/products';
import Detailsproductview from './crudApp/Detalls'
function App(){
 // return(

      <>
      <div >
        <Nafbar/>

        <Routes>
        <Route path='/' element={<>
          <Slider/>
          <ProductList/>
        </>}/>
        <Route path='About' element={<><About/></>}/>
          <Route path='product/:productId' element={<Detailsproduct />}/>
       </Routes>

      </div>
      </>
  //)
  return(
  <>

  <div className='contanier'><Navbarc/>
    <div className='row'>
      <div className='col-2 sidebar'>
        <Sidebar/>
      </div>
      <div className='col-10'>
        <Routes>
          
          <Route path='/' element={<Product/>}/>
          <Route path='/product' element={<Home/>}/>
          <Route path='/addProduct' element={<ProductAdd/>}/>
          <Route path='/product/view/:productID' element={<Detailsproductview/>}/>
        </Routes>
        
      </div>
    </div>
  </div>
  </>

  )
}
export default App