import React from 'react'
import loading from '../assets/loading.gif'

function Spinner() {
  return <img src={loading} alt='Loading...' style={{
      width: '100', margin: 'auto', display: 'block' 
  }}/>
}

export default Spinner