import axios from "axios"
import { useState, useEffect } from "react"

const baseUrl = 'https://lanciweb.github.io/demo/api';

export default function App() {
  const [actresses,setActresses] = useState([])
  const [actors, setActors] = useState([])
  
  const getActresses = (apiUrl = baseUrl + '/actresses') => {
    axios.get(apiUrl).then( (res) => {
      console.log(res.data);
      setActresses(res.data);
    })
  }

  const getActors = (apiUrl = baseUrl + '/actors') => {
    axios.get(apiUrl).then((res) => {
      console.log(res.data);
      setActors(res.data);
    })
  }

  useEffect(() => {
    getActresses();
    getActors()
  }, [])

  return (
    <>
    <div className="py-4">
      <h1 className='text-center'>Actresses</h1>
    </div>
      <div className="container">
        <div className="row g-3">
          {
            actresses.map((actor) =>
            <div key={actor.id} className="col-4 rounded">
              <div className="custom-card h-100">
                <img src={actor.image} alt={actor.name} className="card-image"/>
                <div className="card-body p-2">
                  <h2 className="card-title pb-3">{actor.name}</h2>
                  <ul className="card-text list-unstyled">
                    <li><span className="fw-bold">Birth date:</span> {actor.birth_year}</li>
                    <li><span className="fw-bold">Nationality:</span> {actor.nationality}</li>
                    <li><span className="fw-bold">Biography:</span> {actor.biography}</li>
                    <li><span className="fw-bold">Awards:</span> {actor.awards} </li>
                  </ul>
                </div>
              </div>
            </div>
            )
          }
        </div>
      </div>

      <div className="py-4">
        <h1 className='text-center'>Actors</h1>
      </div>
      <div className="container">
        <div className="row g-3">
          {
            actors.map((actor) =>
              <div key={actor.id} className="col-4 rounded">
                <div className="custom-card h-100">
                  <img src={actor.image} alt={actor.name} className="card-image" />
                  <div className="card-body p-2">
                    <h2 className="card-title pb-3">{actor.name}</h2>
                    <ul className="card-text list-unstyled">
                      <li><span className="fw-bold">Birth date:</span> {actor.birth_year}</li>
                      <li><span className="fw-bold">Nationality:</span> {actor.nationality}</li>
                      <li><span className="fw-bold">Biography:</span> {actor.biography}</li>
                      <li><span className="fw-bold">Awards:</span> {actor.awards} </li>
                    </ul>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}

