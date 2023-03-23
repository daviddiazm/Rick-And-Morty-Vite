import React from 'react'
import ResidentInfo from './ResidentInfo';

const ResidentsList = ({residents}) => {

  return (
    <section>
      {!residents ? <p>LOADING</p> : residents.map((resident) => (
        <ResidentInfo urlResident={resident} key={resident} />
      ))}
    </section>
  )
}

export default ResidentsList