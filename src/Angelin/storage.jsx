import React from 'react'

const Storage = () => {
    localStorage.clear();
    localStorage.setItem("Morning","Breakfast");
    localStorage.setItem("Afternoon","Lunch");
    localStorage.setItem("Night","Dinner");
    let m=localStorage.getItem("Morning");
    let a=localStorage.getItem("Afternoon");
    let n=localStorage.getItem("Night");
    const local_item=[];
 for(let i=0;i<localStorage.length;i++)
      {
        let local_key=localStorage.key(i);
        let local_val=localStorage.getItem(local_key);
        local_item.push(
            <li>
                Key: {local_key} <br/>
                Value: {local_val}<br/><br/>
            </li>
        )
      } 

      sessionStorage.clear();
      sessionStorage.setItem("Apple","Fruit");
      sessionStorage.setItem("Onion","Vegetable");
      sessionStorage.setItem("Wheat","Grain");
      let ap=sessionStorage.getItem("Apple");
      let o=sessionStorage.getItem("Onion");
      let w=sessionStorage.getItem("Wheat");

      const session_item=[];
   for(let i=0;i<sessionStorage.length;i++)
        {
          let session_key=sessionStorage.key(i);
          let session_val=sessionStorage.getItem(session_key);
          session_item.push(
              <li>
                  Key: {session_key} <br/>
                  Value: {session_val}<br/><br/>
              </li>
          )
        } 
  return (
    <div>
    <h1>Local Storage</h1>
    <ul>{local_item}</ul>
      <h1>Session Storage</h1>
      <ul>{session_item}</ul>
    </div>
  )
}

export default Storage
