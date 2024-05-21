import React, { useState } from 'react'

const Form = () => {
   let country=[
    {id:1,name:"India"},
    {id:2,name:"New Zealand"},
    {id:3,name:"United Kingdom"}
   ];
let states=[
    {id:1,name:"Andhra Pradesh",country_id:1},
    {id:2,name:"Arunachal Pradesh",country_id:1},
    {id:3,name:"Assam",country_id:1},
    {id:4,name:"Bihar",country_id:1},
    {id:5,name:"Chhattisgarh",country_id:1},
    {id:6,name:"Tamil Nadu", country_id:1}
];
let districts=[
    {id:1,name:"Chennai",state_id:6},
    {id:2,name:"Madurai",state_id:6},
    {id:3,name:"Trichy",state_id:6},
    {id:4,name:"Salem",state_id:6}
]
let [selected,set]=useState("")
const change=(e)=>
    {
        set(e.target.value)
    }
let filtered=states.filter(i=>i.country_id==selected)
  return (
    <div>
      <html>
        <body>
            <label>Choose a Country</label>
            <select onChange={change}>
                <option value="">Choose a Country</option>
                {country.map(c=>(
                    <option value={c.id}>{c.name}</option>
                ))}
            </select>
            <label>Choose a State</label>
            <select>
                {filtered.map(f=>(
                    <option value={f.value}>{f.name}</option>
                ))}
            </select>
        </body>
      </html>
    </div>
  )
}

export default Form
