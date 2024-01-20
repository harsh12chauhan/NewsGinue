import React, { useEffect, useState,useContext, useId } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import Card from '../Components/Card';
import Context from '../context/Context';


const Home = (props) => {

  const [data,setData] = useState([]);
  const [state,setState] = useState("general");
  
  const {userId,category,business,sports,entertainment,technology,health,science,setCategory,setBusiness,setSports,setTechnology,setEntertainment,setScience,setHealth} = useContext(Context);

  const handleData = async()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${state}&apiKey=${props.apikey}&page=${props.page}&pageSize=${props.pageSize}`;
    await axios.get(url)
    .then(news =>setData(news.data.articles))
    .catch(error=>error)   
  }

  const categoryUpdate = async()=>{
    await axios.put(`http://localhost:5000/category/${userId}`,{business,sports,entertainment,technology,health,science})
      .then(res=>{res})
      .catch(err=>{console.log("Internal server error")});
    }

  const categorySelect = (st)=>{
    if(st == "business"){
      setBusiness(business+0.1)
    }else if (st == "sports") {
      setSports(sports+0.1)
    } else if(st == "entertainment"){
      setEntertainment(entertainment+0.1)
    }else if(st == "technology"){
      setTechnology(technology+0.1)
    }else if(st == "health"){
      setHealth(health+0.1)
    }else if(st == "science"){
      setScience(science+0.1)
    }
  }

  const recommend =async()=>{
    await axios.get(`http://localhost:5000/recommend/${userId}`)
    .then(res=>setState(res.data))
    .catch(err=>err)
  }
  
  useEffect(()=>{
      setCategory(state);
      categorySelect(state);
      handleData(); 
      categoryUpdate();
  },[state])

  // console.log("this is cato-> " + state);
  // console.log(business," ",sports," ",entertainment," ",technology," ",health," ",science);

  return (
    <>
      <div>
        <Navbar/>      
        <div className='flex justify-center mt-4 sticky top-11 z-10'>
          <button className='mx-2 px-4 py-2 rounded-full scale-75 cursor-pointer transition ease-in-out delay-110 bg-blue-200 hover:-translate-y-1 hover:scale-90  focus:bg-blue-400' value="general"        onClick={e=>setState(e.target.value) }>GENERAL</button>
          <button className='mx-2 px-4 py-2 rounded-full scale-75 cursor-pointer transition ease-in-out delay-110 bg-blue-200 hover:-translate-y-1 hover:scale-90  focus:bg-blue-400' value="recomended"     onClick={recommend}>RECOMENDED</button>
          <button className='mx-2 px-4 py-2 rounded-full scale-75 cursor-pointer transition ease-in-out delay-110 bg-blue-200 hover:-translate-y-1 hover:scale-90  focus:bg-blue-400' value="business"       onClick={e=>setState(e.target.value) }>BUSINESS</button>
          <button className='mx-2 px-4 py-2 rounded-full scale-75 cursor-pointer transition ease-in-out delay-110 bg-blue-200 hover:-translate-y-1 hover:scale-90  focus:bg-blue-400' value="sports"         onClick={e=>setState(e.target.value) }>SPORTS</button>
          <button className='mx-2 px-4 py-2 rounded-full scale-75 cursor-pointer transition ease-in-out delay-110 bg-blue-200 hover:-translate-y-1 hover:scale-90  focus:bg-blue-400' value="entertainment"  onClick={e=>setState(e.target.value) }>ENTERTAINMENT</button>
          <button className='mx-2 px-4 py-2 rounded-full scale-75 cursor-pointer transition ease-in-out delay-110 bg-blue-200 hover:-translate-y-1 hover:scale-90  focus:bg-blue-400' value="technology"     onClick={e=>setState(e.target.value) }>TECHNOLOGY</button>
          <button className='mx-2 px-4 py-2 rounded-full scale-75 cursor-pointer transition ease-in-out delay-110 bg-blue-200 hover:-translate-y-1 hover:scale-90  focus:bg-blue-400' value="health"         onClick={e=>setState(e.target.value) }>HEALTH</button>
          <button className='mx-2 px-4 py-2 rounded-full scale-75 cursor-pointer transition ease-in-out delay-110 bg-blue-200 hover:-translate-y-1 hover:scale-90  focus:bg-blue-400' value="science"        onClick={e=>setState(e.target.value) }>SCIENCE</button>
        </div>

        <div className="bg-gray-100 w-full min-h-screen gap-3 flex-wrap flex justify-center items-center mt-5 mb-5">
          {
            data.map(item=>(
              <Card news={item} key={item.title}/>
              ))
            }
        </div>
      </div>
    </>
  )
}

export default Home;
