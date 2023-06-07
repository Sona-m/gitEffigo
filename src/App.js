
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import {Provider} from 'react-redux';
import store from './Store/store';

function App() {
  return (
    <div className="App">
     
                      
      <Navbar/>
         <Routes>
           <Route path= '/' element = {<Home/>} />
           <Route path = '/Cart' element = {<Cart/>} />
         </Routes>
    </div>
  );
}

export default App;
