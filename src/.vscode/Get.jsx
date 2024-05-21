import React from 'react'
import { useState,useEffect } from 'react';


const Get = () => {
  const [breeds, setBreeds] = useState([]); 
    useEffect(() => {
        const apiUrl = 'https://dogapi.dog/api/v2/breeds';

        fetch(apiUrl) //promise
          .then(response => { //Handles info from fetch as promise
            if (!response.ok) { 
              throw new Error('Network response was not ok');
            }
            return response.json();
          }) 
          .then(data => {
            setBreeds(data.data);
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }, []);
  return (
    <div>
      <h1>Dog Breeds</h1>
      <ul>
        {breeds.map(breed => (
          <li key={breed.id}>{breed.attributes.name}</li>
        ))}
        </ul>
    </div>
  );
}

export default Get
