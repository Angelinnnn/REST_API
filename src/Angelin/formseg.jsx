import React, { useState } from 'react';

const formseg = () => {
    let country = [
        { id: 1, value: "India", name: "India" },
        { id: 2, name: "New Zealand" },
        { id: 3, name: "United Kingdom" }
    ];
    let states = [
        { id: 1, name: "Andhra Pradesh", country_id: 1 },
        { id: 2, name: "Arunachal Pradesh", country_id: 1 },
        { id: 3, name: "Assam", country_id: 1 },
        { id: 4, name: "Bihar", country_id: 1 },
        { id: 5, name: "Chhattisgarh", country_id: 1 },
        { id: 6, name: "Tamil Nadu", country_id: 1 }
    ];
    let districts = [
        { id: 1, name: "Chennai", state_id: 6 },
        { id: 2, name: "Madurai", state_id: 6 },
        { id: 3, name: "Trichy", state_id: 6 },
        { id: 4, name: "Salem", state_id: 6 }
    ];

    let [selectedc, setc] = useState("");
    const change = (e) => {
        const cont = e.target.value;
        setc(cont);
        const selectedCountry = country.find(i => i.id == parseInt(cont));
        console.log("Selected Country:", selectedCountry.name);
    }

    let [selecteds, sets] = useState("");
    const changes = (a) => {
        const state = a.target.value;
        sets(state);
        const selectedState = states.find(i => i.id == parseInt(state));
        console.log("Selected State:", selectedState.name);
    }

    let [selectedd, setd] = useState("");
    const changed = (d) => {
        const dis = d.target.value;
        setd(dis);
        const selectedDis = districts.find(i => i.id == parseInt(dis));
        console.log("Selected District:", selectedDis.name);
    }

    let filtered = states.filter(i => i.country_id == selectedc);
    let fil = districts.filter(j => j.state_id == selecteds);

    return (
        <div>
            <label>Country</label>
            <select onChange={change}>
                <option value="">Country</option>
                {country.map(c => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                ))}
                <option value="other">Other</option>
            </select><br />

            {selectedc === "other" && (
                <div>
                    <label>Other Country</label>
                    <input type='text' placeholder='country'></input>
                </div>
            )}

            <label>State</label>
            <select onChange={changes}>
                <option value="">State</option>
                {filtered.map(s => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                ))}
            </select><br />

            <label>District</label>
            <select onChange={changed}>
                <option value="">District</option>
                {fil.map(d => (
                    <option key={d.id} value={d.id}>{d.name}</option>
                ))}
            </select>
        </div>
    );
}

export default formseg;
