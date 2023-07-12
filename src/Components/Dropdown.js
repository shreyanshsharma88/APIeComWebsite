import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "../App.css";

function MyButtons({
    setButtonText,
    changeURL,
    deleteChanges,
    setButtonClicked,
}) {
    function setBtnClk() {
        // setButtonClicked(false);
        setButtonText("Open Filters");
    }
    return (
        <div className="mybutton">
            <button
                className="btn del"
                onClick={() => {
                    {
                        setBtnClk();
                    }
                    {
                        deleteChanges();
                    }
                }}
            >
                Delete changes
            </button>
            <button
                className="btn"
                onClick={() => {
                    // setButtonClicked(false)
                    {
                        setBtnClk();
                    }
                    {
                        changeURL();
                    }
                }}>
                apply changes
            </button>
        </div>
    );
}

function ShowMeGiftsBox({ setGenderVal, setOccasionVal, setRelationVal, ssP, setButtonClicked, setButtonText }) {
    return (
        <div className="ShowMeGiftsBox" onClick={() => {
            setGenderVal("");
            setOccasionVal("");
            setRelationVal("");
            ssP({
                //   gender: "",
                //   occasion: "",
                //   relationship: "",
            });
            setButtonClicked(false);
            setButtonText("Open Filters")
        }}>
            {/* <button className="showGift">JUST SHOW ME THE GIFTS</button> */}
            <h5 >JUST SHOW ME THE GIFTS</h5>
        </div>
    )
}

function MyDropDowns({ data, searchValue, setVal, val }) {
    return (
        <div className="selectTag">
            <p className="txt">{searchValue}</p>

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
    );
}

export default function Dropdown({
    state,
    sP,
    ssP,
    genderVal,
    setGenderVal,
    occasionVal,
    setOccasionVal,
    relationVal,
    setRelationVal,
    setButtonText,
    setButtonClicked,
    sortVal,
}) {
    function updateMyUrl() {

        if (sortVal === "") {
            ssP({
                gender: genderVal,
                occasion: occasionVal,
                relationship: relationVal

            });
        }


        else {
            ssP({
                gender: genderVal,
                occasion: occasionVal,
                relationship: relationVal,
                order: sortVal

            })

        }
    }

    function deleteChanges() {
        setGenderVal("");
        setOccasionVal("");
        setRelationVal("");
        ssP({
            //   gender: "",
            //   occasion: "",
            //   relationship: "",
        });
    }

    return (
        <div className="App">

            <h1 onClick={() => { setButtonClicked(false) }}> &times; </h1>

            <h3>FILTERS: </h3>
            <ShowMeGiftsBox setGenderVal={setGenderVal} setOccasionVal={setOccasionVal} setRelationVal={setRelationVal} ssP={ssP} setButtonClicked={setButtonClicked} setButtonText={setButtonText} />
            <hr style={{ marginTop: "35px" }}></hr>
            <MyDropDowns
                data={state.genders}
                searchValue={"gender"}
                setVal={setGenderVal}
                val={genderVal}
            />

            <MyDropDowns
                data={state.occasions}
                searchValue={"occasion"}
                setVal={setOccasionVal}
                val={occasionVal}
            />

            <MyDropDowns
                data={state.relationships}
                searchValue={"relationship"}
                setVal={setRelationVal}
                val={relationVal}
            />

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
