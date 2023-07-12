import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { useSearchParams } from "react-router-dom";
import BigDropdown, { OpenButton } from "./Components/bigDropdown";
import DisplayFilters from "./Components/displayFilters";
import Nav from "./Components/nav";
import { DisplaySortOptions } from "./Components/bigDropdown";

export default function App() {

  const [sP, ssP] = useSearchParams();
  const [state, setState] = useState({
    occasions: [],
    relationships: [],
    genders: [],
  });

  const [genderVal, setGenderVal] = useState(sP.get("gender") ?? "");
  const [occasionVal, setOccasionVal] = useState(sP.get("occasion") ?? "");
  const [relationVal, setRelationVal] = useState(sP.get("relationship") ?? "");

  const [sortVal, setSortVal] = useState(sP.get("order" ?? ""));

  const [displayValues, setDisplayValues] = useState("Sort:")



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
          .then((res) => res.data),
      ]);
      setState({
        occasions,
        relationships,
        genders,
      });
    })();
  }, []);



  return (
    <div>
      <Nav />
      <BigDropdown
        state={state}
        // stateGen={state.genders} stateOcc={state.occasions} stateRel={state.relationships}
        sP={sP}
        ssP={ssP}
        genderVal={genderVal}
        setGenderVal={setGenderVal}
        occasionVal={occasionVal}
        setOccasionVal={setOccasionVal}
        relationVal={relationVal}
        setRelationVal={setRelationVal}
        sortVal={sortVal}
        setSortVal={setSortVal}
      />
      <p style={{ padding: "10px" }}>Home/Gifts</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "25px",
        }}
      >

        <DisplayFilters
          displayValue={"Gift For: "}
          filterValue={"gender"}
          sP={sP}
          data={state.genders}
          ssP={ssP}
          setVal={setGenderVal}
        />
        <DisplayFilters
          displayValue={"Occasion: "}
          filterValue={"occasion"}
          sP={sP}
          data={state.occasions}
          ssP={ssP}
          setVal={setOccasionVal}
        />
        <DisplayFilters
          displayValue={"Relationship: "}
          filterValue={"relationship"}
          sP={sP}
          data={state.relationships}
          ssP={ssP}
          setVal={setRelationVal}
        />

        {sortVal && <DisplaySortOptions sP={sP} sortVal={sortVal} setSortVal={setSortVal} ssP={ssP} displayValues={displayValues} setDisplayValues={setDisplayValues} />}

        {/* <DisplayFilters string={"order"} sP={sP} data={state.relationships} /> */}
      </div>

      <button onClick={() => {
        setGenderVal("");
        setOccasionVal("");
        setRelationVal("");
        setSortVal("")
        ssP({});
        
      }
      }>remove all</button>
    </div>
  );
}
