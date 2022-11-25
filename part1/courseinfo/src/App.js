const Header = ({course}) => <h1>{course.name}</h1>

const Part = (props) => <p>{props.name} {props.exercises}</p>

const Content = ({course}) => {
  const partsContent = course.parts.map((part, index) => {
    return (
      <Part key={index} name={part.name} exercises={part.exercises} />
    )
  })

  return (
    <p>
      { partsContent }
    </p>
  )
}

const Total = ({course}) => {
  const totalExercises = course.parts.map(el => el.exercises).reduce((a, b) => a + b, 0)
  return (
    <p>Number of exercises {totalExercises}</p>
  )
}

const App = () => {
  const course = 
  {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 }
    ]
  }
  
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
}

export default App;
