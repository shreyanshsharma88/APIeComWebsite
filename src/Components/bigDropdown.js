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
                    {/* {buttonText} */}
                    Show Filters
                </button>

                <select
                    value={sP.get('order') ?? "SortBY"}
                    className="openButton"
                    onChange={(e) => {
                        sP.delete("order")
                        setSortVal(e.target.value);
                        sP.append("order", e.target.value)
                        ssP(sP)
                    }}
                >
                    <option value={""} hidden>Sort By</option>
                    <option value={"Ascending Price"}>Price : Low to High</option>
                    <option value={"Descending Price"}>Price : High to Low</option>
                    <option value={"newest"}>Newest</option>
                    <option value={"hotgift"}>Hot Gifts</option>
                    <option value={"discount_percentage"}>Promotions</option>
                    <option value={"toandfrom"}>To&From Marketplace</option>
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

function DisplaySortOptions({ sP, sortVal, setSortVal, ssP, displayValues, setDisplayValues }) {
    let sVal = sP.get("order")
    if (!sVal) {
        return;
    }

    // TODO: Price display change


    if (sortVal === "Ascending Price") {

        setDisplayValues("")
        setSortVal("Price : Low to High")
    }

    else if (sortVal === "Descending Price") {
        setDisplayValues("");
        setSortVal("Price : High to Low")


    }
    else if (sortVal === "newest" || sortVal === "hotgift" || sortVal === "Promotions") {
        setDisplayValues("Sort: ")

        if (sortVal === "newest") {
            setSortVal("Newest")

        }
        if (sortVal === "hotgift") {
            setSortVal("Hot Gifts")

        }

    }
    if (sortVal === "discount_percentage") {
        setSortVal("Promotions")

    }

    if (sortVal === "toandfrom") {
        setSortVal("To&From Marketplace")

    }



    return (
        <span
            style={{
                backgroundColor: "#E8EFF1",
                padding: "20px",
                borderRadius: "15px",
                // width: "270px",
                // height: "40px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
            {displayValues} {sortVal}
            <div
            className="cross"
            style={{padding:"10px"}}

                onClick={() => {
                    sP.delete('order');
                    ssP(sP)
                    setSortVal("")
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
                    setSortVal={setSortVal}
                />
            )}
        </div>
    );
}
