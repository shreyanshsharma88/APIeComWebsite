import { useState } from "react";
import Dropdown from "./Dropdown";
import "../App.css"

import { BsCart4 } from 'react-icons/bs'
import {BiSearchAlt2} from 'react-icons/bi'
import {FiGift} from 'react-icons/fi'
import {RiArrowDropDownLine} from 'react-icons/ri'

export function OpenButton({buttonText,setButtonText, buttonClicked, setButtonClicked }) {

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



                <select value={"sort By"}
                    className="openButton">

                    <option>Sort By</option>
                    <option>Price : Low to High</option>
                    <option>Price : High to Low</option>
                    <option>Newest</option>
                    <option>Hot Gifts</option>
                    <option>Promotions</option>

                </select>

            </div>


            <h1 style={{ fontWeight: "400" }}>To&From</h1>

            <span className="cart" style={{ fontWeight: "400", width: "280px" }}>Search and Cart</span>
            
        </div>
    )
}


export default function BigDropdown({state, sP , ssP , genderVal , setGenderVal , occasionVal , setOccasionVal , relationVal , setRelationVal}) {
    
    console.log(state.genders)
    const [buttonText, setButtonText] = useState("Open Filters")

    const [buttonClicked, setButtonClicked] = useState(false)


    // console.log(buttonClicked)
    return (
        <div>
            <OpenButton buttonText={buttonText} setButtonText={setButtonText} buttonClicked={buttonClicked} setButtonClicked={setButtonClicked} />

            {buttonClicked && <Dropdown state={state} sP={sP} ssP={ssP} genderVal={genderVal} setGenderVal={setGenderVal} occasionVal={occasionVal} setOccasionVal={setOccasionVal} relationVal={relationVal} setRelationVal={setRelationVal} setButtonText={setButtonText} setButtonClicked={setButtonClicked} />} 
        </div>
    )
}