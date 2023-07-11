
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "../App.css";

function MyButtons({ setButtonText, changeURL, deleteChanges, setButtonClicked }) {
    function setBtnClk() {
        setButtonClicked(false)
        setButtonText("Open Filters")
    }
    return (
        <div className="mybutton">

            <button
                className="btn del"
                onClick={deleteChanges}
            >Delete changes</button>
            <button
                className="btn"
                onClick={() => {
                    // setButtonClicked(false)
                    { setBtnClk() }
                    { changeURL() }
                }
                }>apply changes</button>


        </div>
    )
}



function MyDropDowns({ data, string, setVal, val }) {
    return (
        <div className="selectTag">

            <p className="txt">{string}</p>

            <select
                className="drops"
                style={{ width: "350px", height: "70px" }}
                value={val}
                onChange={(e) => {
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

        </div>
    )
}


export default function Dropdown({ state, sP, ssP, genderVal, setGenderVal, occasionVal, setOccasionVal, relationVal, setRelationVal,
    setButtonText, setButtonClicked
}) {

    console.log(sP)

    console.log("genderval:  " + genderVal)
    console.log("occval:  " + occasionVal)
    console.log("relval:  " + relationVal)

    function updateMyUrl() {
        ssP({
            gender: genderVal,
            occasion: occasionVal,
            relationship: relationVal
        })
    }

    function deleteChanges() {
        setGenderVal("")
        setOccasionVal("")
        setRelationVal("")
        ssP({
            gender: "",
            occasion: "",
            relationship: ""
        })
    }

    return (

        <div className="App">

            <MyDropDowns data={state.genders} string={"gender"} setVal={setGenderVal} val={genderVal} />

            <MyDropDowns data={state.occasions} string={"occasion"} setVal={setOccasionVal} val={occasionVal} />

            <MyDropDowns data={state.relationships} string={"relationship"} setVal={setRelationVal} val={relationVal} />

            <MyButtons
                setButtonText={setButtonText}
                changeURL={updateMyUrl}
                deleteChanges={deleteChanges}
                setButtonClicked={setButtonClicked}
            />

            <h1></h1>

        </div>
    );
}