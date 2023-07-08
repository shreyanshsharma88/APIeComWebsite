
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "../App.css";

function MyButtons({ changeURL , deleteChanges}) {
    return (
        <div className="mybutton">

<button
            className="btn del"
            onClick={deleteChanges}
                >Delete changes</button>
            <button
            className="btn"
                onClick={
                    changeURL
                }>apply changes</button>
            

            {/* <button onClick={deleteFilter}> Clear Changes </button> */}

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


export default function Dropdown() {


    const [sP, ssP] = useSearchParams();
    const [state, setState] = useState({
        occasions: [],
        relationships: [],
        genders: []
    });


    const [genderVal, setGenderVal] = useState(sP.get("gender") ?? "")
    const [occasionVal, setOccasionVal] = useState(sP.get("occasion") ?? "")
    const [relationVal, setRelationVal] = useState(sP.get("relationship") ?? "")

    console.log("genderval:  " + genderVal)
    console.log("occval:  " + occasionVal)
    console.log("relval:  " + relationVal)



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
            relationship: relationVal
        })
    }

    function deleteChanges(){
        setGenderVal("")
        setOccasionVal("")
        setRelationVal("")
        ssP({gender: "",
            occasion: "",
            relationship: ""})
    }

    return (

        <div className="App">
            
            <MyDropDowns data={state.genders} string={"gender"} setVal={setGenderVal} val={genderVal} />

            <MyDropDowns data={state.occasions} string={"occasion"} setVal={setOccasionVal} val={occasionVal} />

            <MyDropDowns data={state.relationships} string={"relationship"} setVal={setRelationVal} val={relationVal} />
            
            
                <MyButtons changeURL={updateMyUrl} deleteChanges={deleteChanges}/>
           
            <h1></h1>

        </div>
    );
}
