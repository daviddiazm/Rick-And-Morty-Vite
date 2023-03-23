import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LoaderTarget from './loaders/LoaderTarget';


const ResidentInfo = ({ urlResident }) => {
  const [residentInfo, setResidentInfo] = useState(null);


  const loadResidentInfo = async () => {
    try {
      const res = await axios.get(urlResident)
      setResidentInfo(res.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadResidentInfo()
  }, [])

  return (
    <>
      {!residentInfo ? <LoaderTarget/>
        : <article key={urlResident}>
          <div><img src={residentInfo.image} alt={residentInfo.name} /></div>
          <div>
            <h3>Nombre: {residentInfo.name}</h3>
            <p>Status: {residentInfo.status}</p>
            <p>Species: {residentInfo.species}</p>
            <p>Typye: {residentInfo.type}</p>
            <p>Gender: {residentInfo.gender}</p>
            <p>Origin: {residentInfo.origin.name}</p>
            <p>Episodes : {residentInfo.episode.length}</p>
          </div>
        </article>
      }
    </>
  )
}

export default ResidentInfo