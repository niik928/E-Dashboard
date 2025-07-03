
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footers';
import SignUp from './components/SignUp';
import Login from './components/Login';
import PrivateComponent from './components/PrivateComponent';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import ProductList from './components/ProductList';
function App() {
  return (
    <div className="App">
  <BrowserRouter>
     <Nav/>
   <Routes>

    <Route element={<PrivateComponent/>}>
   <Route path="/" element={<ProductList/>}></Route>  
   <Route path="/add" element={<AddProduct/>}></Route>
   <Route path="/update/:id" element={<UpdateProduct/>}></Route>
   <Route path="/logout" element={<h1>logout Component</h1>}></Route>
   <Route path="/profile" element={<h1>Profile Component</h1>}></Route>
    
   </Route>
   
   <Route path="/signup" element={<SignUp/>}/>
  <Route path="/login" element={<Login/>}/>
   </Routes>
   </BrowserRouter>
    <Footer/>  
    
    </div>
  );
}

export default App;
