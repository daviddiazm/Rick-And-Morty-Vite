import React from 'react'
import ResidentInfo from './ResidentInfo';
import './ResidentsList.css'

const ResidentsList = ({residents}) => {

  return (
    <section className='ResidentList'>
      {!residents ? <p>LOADING</p> : residents.map((resident) => (
        <ResidentInfo urlResident={resident} key={resident} />
      ))}
    </section>
  )
}

export default ResidentsList