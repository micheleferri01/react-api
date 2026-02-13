import axios from "axios"
import { useState, useEffect } from "react"

const baseUrl = 'https://lanciweb.github.io/demo/api';

export default function App() {
  const [actresses, setActresses] = useState([])
  const [actors, setActors] = useState([])
  const [gender, setGender] = useState('');

  const getActresses = (apiUrl = baseUrl + '/actresses') => {
    axios.get(apiUrl).then((res) => {
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
      <div className="container py-4">
        <div className="row justify-content-end">
          <div className="col-auto">
            <label htmlFor="gender" className="label-form">Filter by gender</label>
            <select onChange={(e) => setGender(e.target.value)} name="gender" id="gender" className="form-control">
              <option value="">All</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>
      </div>
      {gender === 'Female' && <>
        <div className="py-4">
          <h1 className='text-center'>Actresses</h1>
        </div>
        <div className="container">
          <div className="row g-4">
            {
              actresses.map((actor) =>
                <div key={actor.id} className="col-4 rounded">
                  <div className="custom-card text-bg-light h-100">
                    <img src={actor.image} alt={actor.name} className="card-image text-bg-light" />
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
      }

      {gender === 'Male' && <>
        <div className="py-4">
          <h1 className='text-center'>Actors</h1>
        </div>
        <div className="container">
          <div className="row g-4">
            {
              actors.map((actor) =>
                <div key={actor.id} className="col-4 rounded">
                  <div className="custom-card text-bg-light h-100">
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
      </>}

      {gender === '' && <>
        <div className="py-4">
          <h1 className='text-center'>All Actors</h1>
        </div>
        <div className="container">
          <div className="row g-4">
            {
              actors.map((actor) =>
                <div key={actor.id} className="col-4 rounded">
                  <div className="custom-card text-bg-light h-100">
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

            {
              actresses.map((actor) =>
                <div key={actor.id} className="col-4 rounded">
                  <div className="custom-card text-bg-light h-100">
                    <img src={actor.image} alt={actor.name} className="card-image text-bg-light" />
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
      </>}
    </>
  )
}

