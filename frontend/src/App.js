
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footers';
import SignUp from './components/SignUp';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
  <BrowserRouter>
     <Nav/>
   <Routes>
   <Route path="/" element={<h1>Product Component</h1>}></Route>  
   <Route path="/add" element={<h1>Add Product Component</h1>}></Route>
   <Route path="/update" element={<h1>update Product Component</h1>}></Route>
   <Route path="/logout" element={<h1>logout Component</h1>}></Route>
   <Route path="/profile" element={<h1>Profile Component</h1>}></Route>
   <Route path="/signup" element={<SignUp/>}/>
   </Routes>
   </BrowserRouter>
    <Footer/>  
    
    </div>
  );
}

export default App;
