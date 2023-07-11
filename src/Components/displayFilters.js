export default function DisplayFilters({
  displayValue,
  filterValue,
  sP,
  data,
  ssP,
}) {
  let filterID = sP.get(filterValue);
  let filterVal = "";

  // let sort = sP.get("orderBy")

  // if(sort){
  //     console.log("sort exist, write more stuff")

  //     // return(
  //     //     <h1>{sort}</h1>
  //     // )
  // }

  if (!filterID) {
    return;
  }

  data.map((items) => {
    if (items.id === filterID) {
      filterVal = items.name;
    }
  });

  // console.log(filterVal)
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
      }}
    >
      <p>{displayValue}</p>
      <p>{filterVal} </p>
      <h4
      onClick={()=>{
          sP.delete(filterValue);
          ssP(sP)}}
      >
        &times;
      </h4>
    </span>
  );
}
