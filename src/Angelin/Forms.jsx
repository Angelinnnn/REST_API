import React, { useState, useEffect} from 'react'
import './fstyle.css';

const Forms = () => {
   let country=[
    {id:1, value:"India",name:"India"},
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
const [show_other_district, show_set_other_district]=useState(false)
let [select_country,set_country]=useState("")
const changed_country=(e)=>
    {
        const cont=(e.target.value);
        set_country(cont)
        set_state("");
        set_district("");
        show_set_other_district(false);
        const selected_country = country.find(i=>i.id==parseInt(cont));
        console.log("Selected Country:",selected_country.name)
    }
    

let [select_state,set_state]=useState("")
const changed_state=(a)=>
    {
        const state=(a.target.value);
        set_state(state);
        show_set_other_district(false);
    const selected_state = states.find(i=>i.id==parseInt(state));
    console.log("Selected State:",selected_state.name)
    }

let [select_district,set_district]=useState("") 
const[other_district, set_other_district]=useState("")
const changed_district = (d) => {
    const dis = d.target.value;
    set_district(dis);
    if (dis === "other") { //if other is clicked means
        show_set_other_district(true); //provide the inputfield
    } else {
        const selected_dis = districts.find(i => i.id == parseInt(dis));
        console.log("Selected District:",selected_dis.name)
        show_set_other_district(false);
    }
}
    
    const district_change = (e) => { //triggered whenever user gives input in the textbox
        set_other_district(e.target.value); //updates the set
    }
    const enter_key = (e) => {
        if (e.key === 'Enter') 
            {
                console.log("Other District:", other_district);
            }
        }

let filtered=states.filter(i=>i.country_id==select_country)
let fil=districts.filter(j=>j.state_id==select_state)
  return (
    <div>
        <h1>FORMS</h1>
       <fieldset><center>
        <legend></legend>
        <br/>
            <label>Country: </label>
            <select onChange={changed_country}>
                <option value="">Select a country</option>
                {country.map(c=>(
                    <option value={c.id}>{c.name}</option>
                ))}
            </select><br/><br/>
            <label>State: </label>
            <select onChange={changed_state} value={select_state}>
                <option value="">Select a State</option>
                {filtered.map(s=>(
                    <option value={s.id}>{s.name}</option>
                ))}
            </select><br/><br/>
            <label>District: </label>
            <select onChange={changed_district} value={select_district}>
                <option value="">Select a District</option>
                {fil.map(d=>(
                    <option value={d.id}>{d.name}</option>
                ))}
                <option id="other" value="other">Other</option>
            </select><br/><br/>
            {
            show_other_district && (
                <input type="text" placeholder="Enter a District" onChange={district_change} onKeyDown={enter_key}/>
            )
            
        }
        </center>
        </fieldset>

    </div>
  )
}

export default Forms
