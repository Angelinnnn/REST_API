import React, { useState } from 'react'

const Et = () => {
    let category=[
        {id:1, name:"Vegetables" },
        {id:2, name:"Fruits" },
        {id:3, name:"Sweets"},
        {id:4, name:"Oil"}
    ];
    let product=[
        {id:1, name:"Beans", category_id:1},
        {id:2, name:"Cabbage",category_id:1},
        {id:3, name:"Carrot", category_id:1},
        {id:4, name:"Apple", category_id:2},
        {id:5, name:"Orange", category_id:2},
        {id:6, name:"Mango", category_id:2},
        {id:7, name:"Toffee", category_id:3},
        {id:8, name:"Chocolate", category_id:3},
        {id:9, name:"Lollipop", category_id:3},
        {id:10, name:"Coconut Oil", category_id:4},
        {id:11, name:"Refined Oil", category_id:4},
        {id:12, name:"Palm Oil", category_id:4}
    ];
let [selected,set]=useState("") 
const changed=(e)=>{
    set(e.target.value) 
}
let filtered=product.filter(i=>i.category_id==selected)


  return (
    <div>
        <html>
    <head>
    </head>
<center><h1>Drop-Down</h1><br></br>
      <label>Select Category </label>
<select onChange={changed}>
    <option value="">Choose a Category</option>
    {category.map(c=>(
    <option value={c.id}>{c.name}</option>))}

</select>

<label style={{marginLeft:"20px"}}>Select Product </label>
<select>
    {filtered.map(f=>(
    <option value={f.id}>{f.name}</option>))}
</select>
</center>
</html>
    </div>
    
  )

}
export default Et
