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
            <h5 >JUST SHOW ME THE GIFTS</h5>
        </div>
    )
}

function MyDropDowns({ data, searchValue, setVal, val, sP, ssP }) {



    return (
        <div className="selectTag">
            {/* <p className="txt">{searchValue}</p> */}

            <select
                className="drops"
                style={{ width: "350px", height: "70px" }}
                value={val ?? sP.get(searchValue)}
                onChange={(e) => {
                    // changeURL()
                    setVal(e.target.value);
                }}
            >
                <option value="" hidden>None</option>
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
    setSortVal
}) {
    function updateMyUrl() {


        const params = {};
        if (genderVal !== "") {
            params.gender = genderVal;
        }
        if (occasionVal !== "") {
            params.occasion = occasionVal;
        }
        if (relationVal !== "") {
            params.relationship = relationVal;
        }
        if (sortVal !== "") {
            params.orderby = sortVal;
        }
        ssP(params);


        // if (!sortVal) {
        //     ssP({
        //         gender: genderVal,
        //         occasion: occasionVal,
        //         relationship: relationVal

        //     });
        // }
        // if (sortVal) {
        //     ssP({
        //         gender: genderVal,
        //         occasion: occasionVal,
        //         relationship: relationVal,
        //         order: sortVal

        //     })

        // }

        if (genderVal === "" && occasionVal === "" && relationVal === "") {
            ssP({});
        }

    }

    function deleteChanges() {
        setGenderVal("");
        setOccasionVal("");
        setRelationVal("");
        setSortVal("")
        setButtonClicked(false)
        ssP({
            //   gender: "",
            //   occasion: "",
            //   relationship: "",
        });
    }

    return (
        <div className="App">

            <h1 className="cross" style={{ marginTop: "0.5px" }} onClick={() => { setButtonClicked(false) }}> &times; </h1>


            <ShowMeGiftsBox setGenderVal={setGenderVal} setOccasionVal={setOccasionVal} setRelationVal={setRelationVal} ssP={ssP} setButtonClicked={setButtonClicked} setButtonText={setButtonText} />
            <hr style={{ marginTop: "35px" }}></hr>
            <h3>FILTERS: </h3>
            <h4>Gender</h4>
            <MyDropDowns
                data={state.genders}
                searchValue={"gender"}
                setVal={setGenderVal}
                val={genderVal}
                sP={sP}
                ssP={ssP}
            />
            <h4>Occasion</h4>
            <MyDropDowns
                data={state.occasions}
                searchValue={"occasion"}
                setVal={setOccasionVal}
                val={occasionVal}
                sP={sP}
                ssP={ssP}
            />
            <h4>Relationship</h4>
            <MyDropDowns
                data={state.relationships}
                searchValue={"relationship"}
                setVal={setRelationVal}
                val={relationVal}
                sP={sP}
                ssP={ssP}
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
