import { useState } from "react";
import Dropdown from "./Dropdown";
import "../App.css"
export function OpenButton({ buttonClicked, setButtonClicked }) {
    return (
        <div className="whiteHeader">
            
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
                    }
                }>Open Filters</button>
                {/* <button>iski maa ka</button> */}
        </div>
    )
}



export default function BigDropdown() {

    const [buttonClicked, setButtonClicked] = useState(false)

    console.log(buttonClicked)
    return (
        <div>
            <OpenButton buttonClicked={buttonClicked} setButtonClicked={setButtonClicked} />

            {buttonClicked && <Dropdown />}
        </div>
    )
}