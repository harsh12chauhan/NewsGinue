import {useState} from 'react';
import Context from './Context';
import axios from 'axios';

const Tracker = (props) => {

    const [business,setBusiness] = useState(0);
    const [sports,setSports] = useState(0);
    const [entertainment,setEntertainment] = useState(0);
    const [technology,setTechnology] = useState(0);
    const [health,setHealth] = useState(0);
    const [science,setScience] = useState(0);
    const [userId,setUserId] = useState('');

    const[category,setCategory] = useState('');

  return (
    <Context.Provider value={
        {
          userId,category,business,sports,entertainment,technology,health,science,
          setUserId,setBusiness,setCategory,setSports,setTechnology,setEntertainment,setScience,setHealth,
        }
    }>
    {props.children}
  </Context.Provider>
  )
}

export default Tracker