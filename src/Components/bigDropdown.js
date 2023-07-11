import { useState } from "react";
import Dropdown from "./Dropdown";
import "../App.css";

import { BsCart4 } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { FiGift } from "react-icons/fi";



export function OpenButton({
    buttonText,
    setButtonText,
    buttonClicked,
    setButtonClicked,
    sP,
    ssP,
    setSortVal,
}) {
    return (
        <div className="whiteHeader">
            <div className="buttons" style={{ width: "330px" }}>
                <button
                    className="openButton"
                    onClick={() => {
                        if (buttonClicked == false) {
                            setButtonClicked(true);
                        } else {
                            setButtonClicked(false);
                        }

                        if (buttonText == "Open Filters") {
                            setButtonText("Close Filters");
                        } else {
                            setButtonText("Open Filters");
                        }
                    }}
                >
                    {buttonText}
                </button>

                <select
                    value={sP.get("orderBy") ?? "sort"}
                    className="openButton"
                    onChange={(e) => {
                        sP.delete("orderBy")
                        setSortVal(e.target.value);
                        sP.append("orderBy", e.target.value)
                        ssP(sP)
                    }}
                >
                    <option value={""}>Sort</option>
                    <option value={"Ascending Price"}>Price : Low to High</option>
                    <option value={"Descending Price"}>Price : High to Low</option>
                    <option value={"newest"}>Newest</option>
                    <option value={"hotGifts"}>Hot Gifts</option>
                    <option value={"Promotions"}>Promotions</option>
                </select>
            </div>

            <h1 style={{ fontWeight: "400" }}>To&From</h1>

            <span
                className="cart"
                style={{
                    fontWeight: "400",
                    width: "150px",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <div>{<BiSearchAlt2 />} </div>
                <div>{<BsCart4 />}</div>
                <div>{<FiGift />}</div>
            </span>
        </div>
    );
}

function DisplaySortOptions({ sP, sortVal, setSortVal, ssP }) {
    let sVal = sP.get("orderBy")
    if (!sVal) {
        return;
    }

    // TODO: Price display change
    
    let displayValues = "Sort"

    if(sortVal === "Ascending Price"){

        setSortVal("Price : Low to High")
        displayValues=" ";
    }

    if(sortVal === "Descending Price"){
        
        setSortVal("Price : High to Low")
        displayValues = " hehe";
      
    }



    return (
        <span
            style={{
                backgroundColor: "#E8EFF1",
                padding: "10px",
                borderRadius: "15px",
                width: "270px",
                height: "40px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
            {displayValues}: {sortVal}
            <div
                
                    onClick={() => {
                        sP.delete('orderBy');
                        ssP(sP)
                    }}
                >
                    &times;
                
            </div>
        </span>
    );
}
export { DisplaySortOptions };
export default function BigDropdown({
    state,
    sP,
    ssP,
    genderVal,
    setGenderVal,
    occasionVal,
    setOccasionVal,
    relationVal,
    setRelationVal,
    sortVal,
    setSortVal,
}) {
    const [buttonText, setButtonText] = useState("Open Filters");

    const [buttonClicked, setButtonClicked] = useState(false);

    // console.log(buttonClicked)
    return (
        <div>
            <OpenButton
                buttonText={buttonText}
                setButtonText={setButtonText}
                buttonClicked={buttonClicked}
                setButtonClicked={setButtonClicked}
                sP={sP}
                ssP={ssP}
                setSortVal={setSortVal}
            />

            {buttonClicked && (
                <Dropdown
                    state={state}
                    sP={sP}
                    ssP={ssP}
                    genderVal={genderVal}
                    setGenderVal={setGenderVal}
                    occasionVal={occasionVal}
                    setOccasionVal={setOccasionVal}
                    relationVal={relationVal}
                    setRelationVal={setRelationVal}
                    setButtonText={setButtonText}
                    setButtonClicked={setButtonClicked}
                    sortVal={sortVal}
                />
            )}
        </div>
    );
}
