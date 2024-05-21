import React from 'react'
import { useState,useEffect } from 'react';


const Get = () => {
  const [show_data, set_data] = useState(); 
    useEffect(() => {
        const url = 'https://dogapi.dog/api/v2/breeds';

        fetch(url) //promise
          .then(response => { //Handles info from fetch as promise
            if (!response.ok) { 
              throw new Error('Network response was not ok');
            }
            return response.json();
          }) 
          .then(data => {
            set_data(data.data); //data1=response object from url 
          })                      //data2=specific data property in response object
          .catch(error => {
            console.log('Error:', error);
          });
      },[]);
  return (
    <div>
      <h1>FETCHING DATA</h1>
     <ol> {show_data?(show_data.map((i)=>(<li><b>id:</b> {i.id}<br/><br/><b>Name: </b>{i.attributes.name}<br/><br/> {}</li>))):(<p>Cannot Display</p>)}</ol>
     {/* {show_data?<p>{JSON.stringify(show_data)}</p>:<p>Cannot Display</p> } */}
    </div>  
  );
}

export default Get
