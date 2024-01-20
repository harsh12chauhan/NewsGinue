import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import Context from '../context/Context';
import axios from 'axios';

const Card = (props) => {

  const {title,description,urlToImage,url} = props.news;

  const {userId,category,business,sports,entertainment,technology,health,science,setBusiness,setSports,setTechnology,setEntertainment,setScience,setHealth} = useContext(Context);

  const handleClick = async()=>{
    if(category == "business"){
      setBusiness(business+0.2)
    }else if (category == "sports") {
      setSports(sports+0.2)
    } else if(category == "entertainment"){
      setEntertainment(entertainment+0.2)
    }else if(category == "technology"){
      setTechnology(technology+0.2)
    }else if(category == "health"){
      setHealth(health+0.2)
    }else if(category == "science"){
      setScience(science+0.2)
    }

    await axios.put(`http://localhost:5000/category/${userId}`,{business,sports,entertainment,technology,health,science})
    .then(res=>{res})
    .catch(err=>{console.log("Internal server error")});
  }
  
  return (
    (title&&description&&urlToImage)?
    <div className="w-[30%] p-2 bg-white rounded-xl transform transition-all hover:-translate-y-1 duration-300 shadow-lg hover:shadow-2xl">
        <img className="h-60 w-[100%] object-cover rounded-xl" src={urlToImage} alt=""/>
        <div className="p-2">
          <h2 className="font-bold text-lg mb-2 ">{title.length>25?title.slice(0,25) +"...":title}</h2>
          <p className="text-sm text-gray-600">{description.length>50?description.slice(0,50)+ "...":description}</p>
        </div>
        <div className="m-2">
          <Link role='button' to={url}  target="_blank" className="text-white bg-blue-600 px-3 py-1 rounded-md hover:bg-blue-700 mb-4"onClick={handleClick}>Learn More</Link>
        </div>
    </div>:<></>
  )
}

export default Card


