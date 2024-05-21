import React from 'react'

const Task3final = () => {
    let Studentdetails=[
        {name:"Agilan",tamil:80,english:70,maths:88,physics:76,chemistry:80,computer:92},
       {name:"Steve",tamil:67,english:90,maths:65,physics:89,chemistry:88,computer:79}, 
       {name:"Natasha",tamil:78,english:86,maths:95,physics:45,chemistry:68,computer:85},
       {name:"Tony",tamil:36,english:78,maths:40,physics:80,chemistry:77,computer:96},
       {name:"Enoch",tamil:68,english:94,maths:86,physics:92,chemistry:78,computer:100},   
       {name:"Chadwik",tamil:79,english:63,maths:64,physics:40,chemistry:80,computer:84},
       {name:"Zendaya",tamil:90,english:78,maths:53,physics:84,chemistry:68,computer:84},
       {name:"Gaikwad",tamil:77,english:80,maths:98,physics:60,chemistry:96,computer:73}, 
       {name:"Emma",tamil:91,english:94,maths:99,physics:93,chemistry:98,computer:99}, 
       {name:"Ron",tamil:77,english:95,maths:55,physics:49,chemistry:61,computer:86},   
];
let grand_total=Studentdetails.reduce((sum,value)=>sum+=(value.chemistry+value.computer+value.english+value.maths+value.physics+value.tamil),0)
    let total=(student)=>
        {
            return student.tamil+student.english+student.maths+student.physics+student.chemistry+student.computer;
        };
    let coltotal=(subject)=>
        {
            return Studentdetails.reduce((total,stud)=>total+stud[subject],0)
        };
     
  return (

    <div>
         <h1><u>Student Mark Details</u></h1>
        <center>
        <table border="1">
            <thead><tr>
                <th rowspan="2">Sno</th>
                <th rowspan="2">Name</th>
                <th colspan="6">Marks</th>
                <th rowspan="2">Total</th>
                </tr>
                <tr>
        <th>Tamil</th>
        <th>English</th>
        <th>Physics</th>
        <th>Chemistry</th>
        <th>Maths</th>
        <th>Computer Science</th>
        </tr>
            </thead>
            <tbody>
                {Studentdetails.map((student,index)=>
                (<tr key={index}>
                    <td>{1+index}</td>
                    <td>{student.name}</td>
                    <td>{student.tamil}</td>
                    <td>{student.english}</td>
                    <td>{student.maths}</td>
                    <td>{student.physics}</td>
                    <td>{student.chemistry}</td>
                    <td>{student.computer}</td>
                    <td>{total(student)}</td>
                </tr>)
                )}
                <tr>
                    <th colspan="2">Total</th>
                    <td>{coltotal("tamil")}</td>
                    <td>{coltotal("english")}</td>
                    <td>{coltotal("maths")}</td>
                    <td>{coltotal("physics")}</td>
                    <td>{coltotal("chemistry")}</td>
                    <td>{coltotal("computer")}</td>
                    <td>{grand_total}</td>

                </tr>
            </tbody>
        </table>
        </center>

    </div>
  )
};

export default Task3final
