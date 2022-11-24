const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
} 

const Content = (props) => {
  const partsContent = props.parts.map((part, index) => {
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

const Total = (props) => {
  const totalExercises = props.parts.map(el => el.exercises).reduce((a, b) => a + b, 0)
  return (
    <p>Number of exercises {totalExercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
}

export default App;
