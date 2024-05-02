import './App.css';
import Navbar from "../src/Components/Common/Navbar";
import Login from "../src/pages/Login";
import Home from "../src/pages/Home";
import Signup from "../src/pages/Signup";
import Createlisting from "../src/pages/Createlisting";
import { Route, Routes } from 'react-router-dom';
import ViewListing from './pages/ViewListing';
import Public from "./Components/Core/Auth/Public";
import Private from './Components/Core/Auth/Private';
import Categorylisting from "./pages/Categorylisting";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/view' Component={ViewListing} />
        <Route path='/listing/:category' Component={Categorylisting} />

        {/* prvate routes */}
        <Route element={
          <Public>
            <Signup />
          </Public>
        } >
          <Route path='/signup' Component={Signup} />
        </Route>

        <Route element={
          <Public>
            <Login />
          </Public>
        } >
          <Route path='/login' Component={Login} />
        </Route>

        <Route element={
          <Private>
            <Createlisting />
          </Private>
        }>
          <Route path='/new' Component={Createlisting} />
        </Route>

      </Routes>

    </>
  )
}

export default App
