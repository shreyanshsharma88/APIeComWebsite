import React from 'react'
import { useState, useEffect } from 'react';
import "./App.css";
import { useSearchParams } from "react-router-dom";
import Dropdown from './Components/Dropdown';
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


  const [sP, ssP] = useSearchParams();
  const [state, setState] = useState({
    occasions: [],
    relationships: [],
    genders: []
  });

  const [genderVal, setGenderVal] = useState(sP.get("gender") ?? "")
  const [occasionVal, setOccasionVal] = useState(sP.get("occasion") ?? "")
  const [relationVal, setRelationVal] = useState(sP.get("relationship") ?? "")

  useEffect(() => {
    (async () => {
      const [occasions, relationships, genders] = await Promise.all([
        fetch(
          `https://api.toandfrom.com/v2/relationship?all=true&status=activate`
        )
          .then((res) => res.json())
          .then((res) => res.data),
        fetch(`https://api.toandfrom.com/v2/occasion?all=true&status=activate`)
          .then((res) => res.json())
          .then((res) => res.data),
        fetch(`https://api.toandfrom.com/v2/gender?all=true&status=activate`)
          .then((res) => res.json())
          .then((res) => res.data)
      ]);
      setState({
        occasions,
        relationships,
        genders
      });
    })();
  }, []);

  //console.log(state.genders)



  return (
    <div>
      <Nav />
      <BigDropdown
       state={state} 
      // stateGen={state.genders} stateOcc={state.occasions} stateRel={state.relationships} 
      sP={sP} ssP={ssP} 
      genderVal={genderVal} setGenderVal={setGenderVal} 
      occasionVal={occasionVal} setOccasionVal={setOccasionVal} 
      relationVal={relationVal} setRelationVal={setRelationVal} />
      {/* <Dropdown stateGen={state.genders} stateOcc={state.occasions} stateRel={state.relationships} sP={sP} ssP={ssP} genderVal={genderVal} setGenderVal={setGenderVal} occasionVal={occasionVal} setOccasionVal={setOccasionVal} relationVal={relationVal} setRelationVal={setRelationVal}  /> */}
      <DatafromAPI />

    </div>
  )
}
