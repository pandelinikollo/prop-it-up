import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Product from './Components/Product'
import './App.css'



function App() {

  return (
    <>
      <div className='App'>
        <Product
          firstname = "Doe"
          lastname = "Jane"
          age = {45}
          haircolor = "Black"
        />
          <Product
          firstname = "Smith"
          lastname = "John"
          age = {88}
          haircolor = "Brown"
        />
          <Product
          firstname = "Fillore"
          lastname = "Millard"
          age = {50}
          haircolor = "Brown"
        />  
          <Product
          firstname = "Smith"
          lastname = "Maria"
          age = {62}
          haircolor = "Brown"
        />  


      </div>

    </>
  )
}

export default App
