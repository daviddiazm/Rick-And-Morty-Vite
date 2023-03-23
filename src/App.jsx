import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'
import { getRandomNumbers } from './assets/utils/getRandomNumbers'
import Location from './components/Location';
import ResidentsList from './components/ResidentsList';

function App() {
  const [locationInfo, setLocationInfo] = useState(null)
  const [idLocationValue, setIdLocatioValue] = useState()

  const getIdLocationRandom = () => getRandomNumbers(1, 126);

  const loadLocationInfo = async (idLocation) => {
    try {
      const URL = `https://rickandmortyapi.com/api/location/${idLocation}`
      const res = await axios.get(URL);
      console.log(res.data);
      setLocationInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  const idLocationHandleChange = (e) => {
    const newValue = e.target.value;
    if (/^[0-9]{0,3}$/.test(newValue)) {
      setIdLocatioValue(newValue)
    }
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    if (idLocationValue) loadLocationInfo(idLocationValue);
    else loadLocationInfo(getIdLocationRandom())
  }

  useEffect(() => {
    loadLocationInfo(getIdLocationRandom());
  }, [])

  return (
    <div className="App">

      <section className='idSearch'>
        <form action="" onSubmit={handelSubmit}>
          <input type="search" value={idLocationValue} onChange={idLocationHandleChange} />
          <input type="submit" value="Search" />
        </form>
      </section>

      <section>
        {!locationInfo ? <p>Loading</p>
          : <Location {...locationInfo} />}
      </section>

      <section>
        {!locationInfo ? <p>Loading List</p>
          : <ResidentsList residents={locationInfo.residents} />}
      </section>
    </div>
  )
}

export default App
