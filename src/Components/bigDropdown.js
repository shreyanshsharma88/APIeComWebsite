import { useState } from "react";
import Dropdown from "./Dropdown";
import "../App.css"

import { BsCart4 } from 'react-icons/bs'
import { BiSearchAlt2 } from 'react-icons/bi'
import { FiGift } from 'react-icons/fi'
import { RiArrowDropDownLine } from 'react-icons/ri'

export function OpenButton({ buttonText, setButtonText, buttonClicked, setButtonClicked, sP, ssP }) {

    return (
        <div className="whiteHeader">

            <div className="buttons"
                style={{ width: "330px" }} >

                <button
                    className="openButton"

                    onClick={
                        () => {
                            if (buttonClicked == false) {
                                setButtonClicked(true);
                            }
                            else {
                                setButtonClicked(false)
                            }

                            if (buttonText == "Open Filters") {
                                setButtonText("Close Filters")
                            }
                            else {
                                setButtonText("Open Filters")
                            }
                        }
                    }>{buttonText}</button>



                <select value={sP.get('orderBy')}
                    className="openButton"
                    onChange={(e) => {

                        sP.delete("orderBy")

                        sP.append('orderBy', e.target.value)

                        ssP(sP)
                    }}>

                    <option value={""}>Sort</option>
                    <option value={"Ascending Price"}>Price : Low to High</option>
                    <option value={"Descending Price"}>Price : High to Low</option>
                    <option value={"newest"} >Newest</option>
                    <option value={"hotGifts"}>Hot Gifts</option>
                    <option value={"Promotions"}>Promotions</option>

                </select>

            </div>


            <h1 style={{ fontWeight: "400" }}>To&From</h1>

            <span className="cart" style={{ fontWeight: "400", width: "150px" ,display:"flex", justifyContent:"space-between"}}>
                
                
                <div>{<BiSearchAlt2/>} </div>
                <div>{<BsCart4/>}</div>
                <div>{<FiGift/>}</div>
            </span>

        </div>
    )
}


export default function BigDropdown({ state, sP, ssP, genderVal, setGenderVal, occasionVal, setOccasionVal, relationVal, setRelationVal}) {

    const [buttonText, setButtonText] = useState("Open Filters")

    const [buttonClicked, setButtonClicked] = useState(false)


    // console.log(buttonClicked)
    return (
        <div>
            <OpenButton buttonText={buttonText} setButtonText={setButtonText} buttonClicked={buttonClicked} setButtonClicked={setButtonClicked} sP={sP} ssP={ssP}  />

            {buttonClicked && <Dropdown state={state} sP={sP} ssP={ssP} genderVal={genderVal} setGenderVal={setGenderVal} occasionVal={occasionVal} setOccasionVal={setOccasionVal} relationVal={relationVal} setRelationVal={setRelationVal} setButtonText={setButtonText} setButtonClicked={setButtonClicked} />}


        </div>
    )
}