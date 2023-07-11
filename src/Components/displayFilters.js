

export default function DisplayFilters({displayStr ,string, sP, data, ssP }) {
    let filterID = sP.get(string);
    let filterVal = ""
    
    if(filterID===""){
        return;
    }
        data.map((items) => {
            if (items.id === filterID) {
                filterVal = items.name;
            }
        })
    
    // console.log(filterVal)
    return (
        <span style={{ backgroundColor: "pink", padding: "10px", borderRadius: "15px", width: "150px", height: "40px", display: "flex", justifyContent: "space-between", alignItems: "center" }} >
            <h4>{displayStr}</h4>
            <h4>{filterVal} </h4>
            <h4 
            // onClick={()=>{
            //     sP.delete(string);
            //     ssP(sP)}}
                 >&times;</h4>
        </span>
    )
}