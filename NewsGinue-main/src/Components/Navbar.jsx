import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../context/Context';

const Navbar = () => {

  const navigate = useNavigate();
  const {setUserId} = useContext(Context);

  const handleLogout=()=>{
    setUserId("")
    navigate('/');
  }
  return (
  <header className='sticky top-0 z-10 bg-white' >
    <div className='flex justify-start border shadow-lg items-center'>
      <h1 className='mt-4 m-4 text-2xl '>NewsGeniue</h1>
      <button className='absolute left-[90%] border border-black bg-black text-white rounded-full m-4 px-4 py-1 justify-end hover:scale-105 duration-300' onClick={handleLogout}>Logout</button>
    </div>
  </header>
  )
}

export default Navbar