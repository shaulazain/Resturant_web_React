import './App.css';
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Menu from './Pages/Menu'
import PagenotFound from './Pages/PagenotFound'

import { BrowserRouter, Routes , Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='*' element={<PagenotFound/>}/>


      </Routes>
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
