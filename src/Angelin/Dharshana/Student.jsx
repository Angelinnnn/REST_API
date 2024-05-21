import React from 'react';

const Students = () => {
  let stu_db = [
    {name:"Ashlyn", sub1:94, sub2: 91, sub3: 90, sub4:97, sub5:98}, 
    {name:"Blair", sub1:80, sub2: 85, sub3: 92, sub4:89, sub5:86}, 
    {name:"Courtney", sub1:70, sub2: 75, sub3: 82, sub4:73, sub5:80}, 
    {name:"Delia", sub1:65, sub2: 55, sub3: 52, sub4:43, sub5:38}, 
    {name:"Edeline", sub1:90, sub2: 91, sub3: 99, sub4:94, sub5:96}, 
    {name:"Fallon", sub1:89, sub2: 84, sub3: 87, sub4:80, sub5:81}, 
    {name:"Genevieve", sub1:91, sub2: 89, sub3: 92, sub4:93, sub5:98}, 
    {name:"Hadley", sub1:76, sub2: 65, sub3: 72, sub4:83, sub5:88}, 
    {name:"Isla", sub1:80, sub2: 75, sub3: 62, sub4:83, sub5:67},
    {name:"Janessa", sub1:80, sub2: 65, sub3: 42, sub4:53, sub5:48}

  ];

  let grand_total=stu_db.reduce((sum,value)=>sum+=(value.sub1+value.sub2+value.sub3+value.sub4+value.sub5),0)

  let totalmarks = (i) => {
    return i.sub1 + i.sub2 + i.sub3 + i.sub4 + i.sub5;
  };
 
  let colstotal=(j)=>{
    return stu_db.reduce((total, student) => total + student[j], 0);
  }

  return (
    <div>
        <h2>CBSE Board Examination Details(2023-2024)</h2>
     <center> <table>
        <thead>
          <tr>
            <th rowspan="2">Reg No</th>
            <th rowspan="2">Name</th>
            <th colspan="5">Mark</th>
            <th rowspan="2">Total</th></tr>
            <tr>
            <th>English</th>
            <th>Tamil</th>
            <th>Maths</th>
            <th>Physics</th>
            <th>Chemistry</th>
          </tr>
        </thead>
        <tbody>
          {stu_db.map((i, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{i.name}</td>
              <td>{i.sub1}</td>
              <td>{i.sub2}</td>
              <td>{i.sub3}</td>
              <td>{i.sub4}</td>
              <td>{i.sub5}</td>
              <td>{totalmarks(i)}</td>
            </tr>
          ))}

         <th colspan="2">Total</th>
            <td>{colstotal("sub1")}</td>
            <td>{colstotal("sub2")}</td>
            <td>{colstotal("sub3")}</td>
            <td>{colstotal("sub4")}</td>
            <td>{colstotal("sub5")}</td>
            <td>{grand_total}</td>

        </tbody>
      </table></center>
    </div>
  );
}

export default Students