import React from 'react'
import './App.css'
import Name from './Components/Name'
import Price from './Components/Price'
import Des from './Components/Des'
import Image from './Components/Image'

const App = () => {
  const firstName = ''

  return (
    <>
      
      <div className='container'>
        
        <div className='box'>
          <div className='card'>
            <div className='img-box'>
              <Image/>
            </div>
            <div className='content'>
              <Name/>
              <Price/>
            </div>
            <div className='description'>
              <Des/>
            </div>
          </div>
        </div>

      </div>

      <div className='name'>
      {firstName? `Hello ${firstName}!`: `Hello there!`}
      {firstName && <Image/>}
      </div>

    </>
  )
  
  
}

export default App
