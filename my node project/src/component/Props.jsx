import React from 'react'

function Props( {students = []}) {
    const studentsList = [];

    for (let x in students) {
        studentsList.push(
         <div key={x} style={{backgroundColor:'#CCC'}}>
        <h2>{students[x].name}</h2>
        <h2>{students[x].rollno}</h2>
        <h3>{students[x].course}</h3>
    </div>
    );
}

return(
    <div style={{display: 'flex', gap: '10px' , margin: '0 auto'}}>
        {studentsList}
    </div>
);
}
export default Props