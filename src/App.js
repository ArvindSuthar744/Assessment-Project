import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Navigation from './Navigation';
import Adminpanel from './Adminpanel';
import View from './View';
import Edit from './Edit';
import Add from './Add';

function App() {
  return (
    <div>
       
        <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Header/>}></Route>
          <Route path='/admin' element={<Adminpanel/>}></Route>
          <Route path='/view/:viewId' element={<View/>}></Route>
          <Route path='/add' element={<Add/>}></Route>
          <Route path='/edit/:editId' element={<Edit/>}></Route>
        </Routes>
        </BrowserRouter>   
    </div>
  );
}




export default App;
