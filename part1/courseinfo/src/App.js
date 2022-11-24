const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, your are {props.age} years old!</p>
    </div>
  )
}

const App = () => {
  const name = 'Mathias'
  const age = 31

  return (
    <>
      <h1>Greetings</h1>
      <Hello name={name} age={age} />
    </>
  );
}

export default App;
