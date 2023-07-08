import React from 'react'
import "./App.css";
import BigDropdown, { OpenButton } from './Components/bigDropdown';
function Nav() {
  return (
    <div className='nav'>
      <h3>Login</h3>
      <h3>|</h3>
      <h3>Signup</h3>
    </div>)
}



export default function App() {

  return (
    <div>
      <Nav />
     
      <BigDropdown />
    </div>
  )
}
