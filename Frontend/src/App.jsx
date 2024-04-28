import './App.css';
import Navbar from "../src/Components/Common/Navbar";
import Login from "../src/pages/Login";
import Home from "../src/pages/Home";
import Signup from "../src/pages/Signup";
import Createlisting from "../src/pages/Createlisting";
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/login' Component={Login} />
          <Route path='/signup' Component={Signup}/>
          <Route path='/new' Component={Createlisting} />
        </Routes>

    </>
  )
}

export default App
