import logo from './logo.svg';
import './App.css';

import Navbar from './component/Navbar';


import Home from './component/Home';
import { BrowserRouter , Router, Routes,Route } from 'react-router-dom';
import Story from './component/Story';
import Manu from './component/Manu';
import Use from './component/Use';





function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route  element={<Navbar/>}>
          <Route index element={<Home/>} />
          <Route path='Story' element={<Story/>}/>
          <Route path='Manu' element={<Manu/>}/>
        
          


        </Route>
      </Routes>
      </BrowserRouter>
      {/* <Use/> */}


  
    </div>
  );
}

export default App;
