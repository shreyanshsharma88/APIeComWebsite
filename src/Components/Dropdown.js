
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function MyButtons({changeURL }){
  return(
    <button 
    onClick={
      changeURL
    }>apply changes</button>
  )
}



function MyDropDowns({ data,  setVal, val}) {
  return (
    <select
      value={val}
      onChange = {(e) => {
        // changeURL()
        setVal(e.target.value);
      }}
    >
      <option value="">None</option>
      {data.map((item) => (
        <option value={item.id} key={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  )
}

function Nav() {
  return (
    <div className='nav'>
      <h3>Login</h3>
      <h3>Signup</h3>
    </div>)
}

export default function Dropdown() {


    const [sP, ssP] = useSearchParams();
    const [state, setState] = useState({
      occasions: [],
      relationships: [],
      genders: []
    });
  
    
    const [genderVal , setGenderVal] = useState(sP.get("gender") ?? "")
    const [occasionVal , setOccasionVal] = useState(sP.get("occasion") ??"")
    const [relationVal , setRelationVal] = useState(sP.get("relationship") ??"")
  
  console.log("genderval:  "+genderVal)
  console.log("occval:  "+occasionVal)
  console.log("relval:  "+relationVal)



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

  console.log(state.occasions)


  function updateMyUrl() {
    ssP({
      gender: genderVal,
      occasion: occasionVal,
      relationship: relationVal})
  }
 
  return (

    <div className="App">
      <Nav />
      <MyDropDowns data={state.genders} setVal={setGenderVal} val ={genderVal}/>
      <MyDropDowns data={state.occasions} setVal ={setOccasionVal} val ={occasionVal}/>
      <MyDropDowns data={state.relationships} setVal={setRelationVal} val={relationVal} />
      <MyButtons changeURL={updateMyUrl} />
    </div>
  );
}
