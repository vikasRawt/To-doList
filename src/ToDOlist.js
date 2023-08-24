import React, { useState } from "react";

function ToDOlist() {
  const [activity, setactivity] = useState("");
  const [listData, setlistData] = useState([]);

  function addActivity() {
    // setlistData([...listData,activity])
    // console.log(listData);
    // the data gets add in the array by this but as state is asynchronus
    //  hence it takes some time to show the solution is :--

    setlistData((listData) => {
      const updateList = [...listData, activity];
      console.log(updateList);
      setactivity("");
      // when u enter anything after that the input feild will get empty.
      return updateList;
    });
  }

  function removeActivity(i){
 const updateListdata= listData.filter( (elem,id)=>{
    return i!=id;
 })
 setlistData(updateListdata);
  }

  function removeAll(){
    setlistData([]);
  }
  return (
    <>
      <div className="container">
        <div className="header"> ToDo List</div>
        <input
          type="text"
          placeholder="Add your Activity"
          value={activity}
          onChange={(e) => setactivity(e.target.value)}
        />
        {/* value variable is used to store the activity so that we can render it later */}

        <button onClick={addActivity}>Add</button>
        <p className="list-heading">Your Activities</p>
        {listData !==[] &&
          listData.map((data, i) => {
            return (
              <p key={i}>
                  <div className="listData">{data}</div>

                  <button className="btn-position" onClick={()=>removeActivity(i)}>Remove(-)</button>
            
              </p>
            );
          })}
          
      {listData.length >=1 && <button onClick={removeAll} >Remove-All</button>}
      </div>
     
    </>
  );
}
export default ToDOlist;
