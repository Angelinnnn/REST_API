import React from 'react'
// import './StorageStyle.css';

localStorage.clear();
const StorageObjects = () => {
    let local_arr=[{Name:"Tony"},
    {Rollno:"7"},
      {Marks:"90"},
        {Grade:"A"},
        {Contact:"9987563493"},
        {Bloodgroup:"A1+ve"}
    ];
//stringify
let local_stringified_data=JSON.stringify(local_arr);
localStorage.setItem("local_data",local_stringified_data); //key,value
//parsed
let local_get_data=localStorage.getItem("local_data");//key
let local_parse_data=JSON.parse(local_get_data);

const key=local_parse_data.map(i=>Object.keys(i)[0]); //Explained Below
const value=local_parse_data.map(i=>Object.values(i)[0]);

//-----------------------------------------------
sessionStorage.clear();
let session_arr=[{Name:"Chadwik"},
        {Rollno:"2"},
        {Marks:"80"},
        {Grade:"B"},
        {Contact:"908768964"},
        {Bloodgroup:"A-ve"}
    ];

  //   let keys=Object.keys(session_arr?.[0])
  //   let vals=Object.values(session_arr?.[0])
  //   }

//stringify
let session_stringified_data=JSON.stringify(session_arr);
console.log("session_stringified_data",session_stringified_data);
sessionStorage.setItem("session_data",session_stringified_data); //key,value
//parsed
let session_get_data=sessionStorage.getItem("session_data");//key
let session_parse_data=JSON.parse(session_get_data);

const keys=session_parse_data.map(i=>Object.keys(i)[0]); //(i)->Current value in the array. [0]-> 0th value in the array. which is the only value. so it removes the array and stores it the the variable
const values=session_parse_data.map(i=>Object.values(i)[0]);//Object->Method. keys-> key value. values-> values


// session_arr.map((obj, index) => {
//   let keys = Object.keys(obj)[0];
//   let values = Object.values(obj)[0];
// });


  return (
    <div>
        <u><h1>LOCAL STORAGE</h1></u>
        <h3>KEY</h3>
      {
        key.map((item)=>
            (   
                <div>
                <p>{item}</p>
                </div>
            ))
      }
      <h3>VALUE</h3>
        {
        value.map((item)=>
            (   
                <div>
                <p>{item}</p>
                </div>
            ))
      }
<br/><u><h1>SESSION STORAGE</h1></u>
<h3>KEY</h3>
      {
        keys.map((i)=>
            (   
                <div>
                <p>{i}</p>
                </div>
            ))
      }
      <h3>VALUE</h3>
        {
        values.map((i)=>
            (   
                <div>
                <p>{i}</p>
                </div>
            ))
      }
    </div>
  )
}

export default StorageObjects
