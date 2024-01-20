import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import loginPoster from '../assets/loginPoster.jpg'

const Register = () => {

  const[name,setName] = useState('');
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');

  const navigate = useNavigate();

  const navigationClick = ()=>{
    navigate('/');
  } 

  const handleSubmit = async()=>{
    const business=0,sports=0,entertainment=0,technology=0,health=0,science=0;
    if(name!="" && email!="" && password !=""){
      await axios.post('http://localhost:5000/createuser',{name,email,password,business,sports,entertainment,technology,health,science})
      .then(res=>{
        if(res.status == 200){
          navigate('/home');
        }
      })
      .catch(err=>{console.log("Internal server error")})
    }else{
      console.error(404,"Please fill all the details");
    }
  }

  return (
    <div className="w-full h-screen flex items-start">

    <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center">

        <div className='w-full flex flex-col max-w-[400px]'>
          <div className="w-full flex flex-col mb-2">
            <h3 className='text-3xl font-semibold mb-2'>Register</h3>
            <p className='text-base mb-2'>Welcome  Let's Create your new account. </p>
          </div>

          <div className='w-full flex flex-col'>
            <input 
              type="text" 
              placeholder='Name' 
              className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' name="name" onChange={(e)=>{setName(e.target.value)}}/>
            <input 
              type="email" 
              placeholder='Email' 
              className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' name="email" onChange={(e)=>{setEmail(e.target.value)}}/>

            <input 
              type="password" 
              placeholder='Password' 
              className='w-full text-black py-2 my-4 bg-transparent 
              border-b border-black outline-none focus:outline-none' name="password" onChange={(e)=>{setPassword(e.target.value)}}/>
          </div>

          <div className="w-full flex flex-col my-4">
            <button className='w-full text-white my-2 font-semibold bg-[#060606] rounded-md  p-4 text-center flex items-center justify-center' onClick={handleSubmit}>Register</button>

            <div className="w-full flex items-center justify-center relative py-2">
              <div className="w-full h-[1px] bg-black/40"></div>
              <p className='text-lg absolute text-black/80 bg-[#f5f5f5]'>or</p>
            </div>
            <button className='w-full text-[#060606] my-2 font-semibold bg-white border-2 border-black/40  rounded-md p-4 text-center flex items-center justify-center cursor-pointer' onClick={navigationClick} >Login </button>
          </div>
        </div>
    </div>
    <div className="relative w-1/2 h-full flex flex-col">
      <div className="absolute top-[20%] left-[10%] w-[80%] flex flex-col bg-white">
        <h1 className='text-4xl text-black font-bold my-4 m-4'>NewsGinue</h1>
        <p className='text-black font-normal mb-3 mx-4'>Personalized News Aggregator</p>
      </div>
      <img src={loginPoster} alt="img" className='w-full h-full object-cover'/>
    </div>
  </div>
  )
}

export default Register