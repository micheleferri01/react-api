import axios from "axios"
import { useState, useEffect } from "react"
import ActressesCards from "./components/ActressesCards";
import ActorsCards from "./components/ActorsCards";

const baseUrl = 'https://lanciweb.github.io/demo/api';

export default function App() {
  const [actresses, setActresses] = useState([])
  const [actors, setActors] = useState([])
  const [gender, setGender] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    Promise.all([
      axios.get(baseUrl + '/actresses'),
      axios.get(baseUrl + '/actors')
    ])
      .then(([actressesRes, actorsRes]) => {
        setActresses(actressesRes.data);
        setActors(actorsRes.data);
        setError(false);
      })
      .catch((err) => {
        setError(true);
        console.error(err)});
  }, [])

  return (
    <>
      <div className="container pb-4">
        <div className="py-4">
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

        {error && <div className="alert alert-danger">
          We are sorry, there has been an error. Try again.
        </div>}

        {gender === 'Female' && <>
          <div className="py-4">
            <h1 className='text-center'>Actresses</h1>
          </div>
            <div className="row g-4">
              <ActressesCards actresses={actresses} />
            </div>
        </>
        }

        {gender === 'Male' && <>
          <div className="py-4">
            <h1 className='text-center'>Actors</h1>
          </div>
            <div className="row g-4">
              <ActorsCards actors={actors} />
            </div>
        </>}

        {gender === '' && <>
          <div className="py-4">
            <h1 className='text-center'>All Actors</h1>
          </div>
            <div className="row g-4">

              <ActorsCards actors={actors} />

              <ActressesCards actresses={actresses} />
            </div>
        </>}
      </div>
    </>
  )
}

