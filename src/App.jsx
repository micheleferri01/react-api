import axios from "axios"
import { useState, useEffect } from "react"

const baseUrl = 'https://lanciweb.github.io/demo/api';

export default function App() {
  const [actors, setActors] = useState([])
  
  const getActresses = (apiUrl = baseUrl + '/actresses') => {
    axios.get(apiUrl).then( (res) => {
      console.log(res.data);
    })
  }

  useEffect(() => {
    getActresses();
  }, [])
  
  return (
    <>
      
    </>
  )
}

