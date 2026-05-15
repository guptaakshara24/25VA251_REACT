import './App.css'
import Demo from './component/Demo'
import Props from './component/Props'
import StudentReg from './component/forms/StudentReg'   // fixed case

function App() {
  const name = "ABES College";

  const students = [
    { name: "Virat", rollno: "28", course: "Btech" },
    { name: "Samriddhi", rollno: "27", course: "Btech" }
  ];

  return (
    <>
      <h1>Welcome to React</h1>
      <h2>Hello {name}</h2>

      <Demo />
      <Props students={students} />

      {/* Added StudentReg component */}
      <StudentReg />
    </>
  );
}

export default App;