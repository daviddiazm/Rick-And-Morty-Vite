import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LoaderTarget from './loaders/LoaderTarget';
import './ResidentInfo.css'


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

  const statusForCss = (residentInfo) => {
    const status = residentInfo.status;
    // console.log(status);
    if(status == "Alive") return"#4AB648";
    else if (status == "Dead") return"#B94343";
    else if (status == "unknown") return"#938686";
  }

  useEffect(() => {
    loadResidentInfo()
  }, [])

  return (
    <div className='Original_Resident--Info'>
      {!residentInfo ? <LoaderTarget />
        : <article key={urlResident} className="Resident--Info">

          <div className='Resident__img'>
            <img src={residentInfo.image} alt={residentInfo.name} />
          </div>

          <div className='ResidentInfo__container'>

            <div className='Resident__name'>{residentInfo.name}</div>

            <div className='Resident__Status'>
              <div className='Status__Text'>
                {residentInfo.status.toUpperCase()}
              </div>
              <div className='Status__Point' style={{backgroundColor: statusForCss(residentInfo)}}></div>
            </div>

            <div className='ResidentInfo_Specifications Resident__Species'>
              <p>Species:</p>
              <div >{residentInfo.species}</div>
            </div>

            {/* <p>Gender: {residentInfo.gender}</p> */}

            <div className='ResidentInfo_Specifications Resident__Origin'>
              <p>Origin:</p>
              <div>{residentInfo.origin.name}</div>
            </div>

            <div className='ResidentInfo_Specifications Resident__Episodes'>
              <p>Episodes :</p>
              <div>{residentInfo.episode.length}</div>
            </div>
          </div>
        </article>
      }
    </div>
  )
}

export default ResidentInfo