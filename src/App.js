import React, { useState } from 'react'
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router,Routes } from 'react-router-dom';


import "./styles/App.scss";
import "./styles/navbar.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Todo from './components/Todo';

function App() {
  const[but,setbut] = useState(false);
  const togglebut = () =>{
    setbut((prev)=>!prev);
  }
  return (
    <Router>
        {
          but ? <Todo/> : <><Navbar toggle={togglebut} /><Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
        <Footer/></>
        }
      {/* <Navbar toggle={togglebut}/> */}
      {/* <Routes>
        <Route exact path='/' element={<Home/>} />
      </Routes> */}
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
