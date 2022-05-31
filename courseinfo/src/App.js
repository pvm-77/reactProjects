// import { useState } from "react";

const Header = (props) => {
  return <div className="card-header">{props.name}</div>;
};
const Content = ({ courseParts }) => {
  // console.log(courseParts);
 
  // const oddNumber=[1,2,3,4,5];
  // const sum=oddNumber.reduce(function(total,num){
  //   return total+num;

  // })
  // console.log(sum);

  return (
    <div>
      <ul>
        {
          courseParts.map(coursePart => <li key={coursePart.id}>{coursePart.name } {coursePart.exercises}</li>)}
      </ul>
    </div>
  );
};
const Total = (props) => { 
  const total=props.data.reduce((acc,cur)=>acc+cur.exercises,0);
  return <div>Total of {total} exercises</div>
  
  
}
  
  





function App() {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        id: 1,
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        id: 2,
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        id: 3,
        name: "State of a component",
        exercises: 14,
      },
      {
        id: 4,
        name: "Redux",
        exercises: 11,
      },
    ],
  };
  return (
    <>
      <Header name={course.name} />
      <Content courseParts={course.parts} />
      <Total data={course.parts}/>
    </>
  );
}

export default App;
