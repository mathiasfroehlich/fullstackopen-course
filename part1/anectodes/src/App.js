import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, addVotes] = useState(Array(anecdotes.length).fill(0))

  const getRandomAnectode = () => Math.floor(Math.random() * anecdotes.length)

  const addVoteForSelected = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    addVotes(newVotes)
  }

  // const getMaxVote = () => anecdotes[0]
  const getMaxVote = () => {
    const maxId = votes.indexOf(Math.max(...votes))
    return maxId !== -1 ? anecdotes[maxId] : ''
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <button onClick={() => setSelected(getRandomAnectode())}>Next anectode</button>
      <button onClick={() => addVoteForSelected()}>vote</button>
      <p>{getMaxVote()}</p>
    </div>
  )
}

export default App