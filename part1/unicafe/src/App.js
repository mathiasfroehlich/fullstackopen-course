import { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good) / all * 100
  if (all > 0) {
    return (
      <>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {all}</p>
        <p>average {average}</p>
        <p>positive {positive}</p>
      </>
    )
  } else {
    return (<p>No feedback given</p>)
  }
} 

const FeedbackButton = ({name, handler }) => {
  return (<button onClick={handler}>{name}</button>)
}

const App = () => {
  const [good, addGood] = useState(0)
  const [neutral, addNeutral] = useState(0)
  const [bad, addBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <FeedbackButton handler={() => addGood(good + 1)} name="good" />
      <FeedbackButton handler={() => addNeutral(neutral + 1)} name="neutral" />
      <FeedbackButton handler={() => addBad(bad + 1)} name="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
