
// import { useState } from "react";

const Header=(props)=>{
  return(
    <div>
      <h1>{props.name}</h1>
    </div>
  )

}
const Content=()=>{

}
const Total=()=>{

}

function App() {
  const course={
    id:1,
    name:"Half Stack application development",
    parts:[
      {
        id:1,
        name:"Fundamentals of React",
        exercises:10
      },
      {
        id:2,
        name:"Using props to pass data",
        exercises:7
      },
      {
        id:3,
        name:"State of a component",
        exercises:14
      },
      {
        id:4,
        name:"Redux",
        exercises:11
      }
    ]
  };
  return (
    <>
      <Header name="Half Stack application development"/>
      <Content />
      <Total />
    </>
  );
}

export default App;
