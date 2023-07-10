import React from 'react'
import "./App.css";
import BigDropdown, { OpenButton } from './Components/bigDropdown';
function Nav() {
  return (
    <div className='nav'>

      
        <h3>Take gift quiz</h3>
      
<div >
      <span>Login</span>
      <span> |  </span>
      <span>Signup</span>
      </div>
    </div>)
}

function DatafromAPI() {
  return (
    <div className='someData'
    >
      {/* <h1>Product data</h1> */}
      <h1>Product Data</h1>
    </div>
  )
}

export default function App() {

  return (
    <div>
      <Nav />
      
      <BigDropdown />
      
      <DatafromAPI/>
      
    </div>
  )
}
