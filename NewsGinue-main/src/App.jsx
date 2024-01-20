import React from 'react'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

// import Tracker from './context/Tracker'
import Context from './context/Context'
import { useContext } from 'react'

const App = () => {

  const apikey = import.meta.env.VITE_API_BASE_URL;
  const pageSize = 40;

  const {userId} = useContext(Context);
  
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/register' element={ <Register/>}/>
          <Route path='/home' element={<Home apikey={apikey} key="general" pageSize={pageSize} page={1} country="in" category={"general"+"sports"} />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App