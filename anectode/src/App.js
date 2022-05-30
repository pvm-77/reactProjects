
import { useState } from 'react';
import RandomAnecDote from './components/RandomAnecDote';
import Button from './components/Button';
import Vote from './components/Vote';

// import voteImg from './voting-box.png';
function App() {

  // generate random number between 0 and variable length of anecdotes array
  const generateRandomNumber = (sizeOfAnectodeArray) => {
    return Math.floor(Math.random() * sizeOfAnectodeArray);
  }
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ];
  const [selectedRandomAnecdoteIndex, setSelectedRandomAnecdoteIndex] = useState(generateRandomNumber(anecdotes.length));
  const handleGenerateNextRandomAnectode = () => {
    const randomIndex = generateRandomNumber(anecdotes.length);
    setSelectedRandomAnecdoteIndex(randomIndex);
  }
  const [totalVotes, setTotalVotes] = useState(Array(anecdotes.length-1).fill(0));

  const handleVoteCount = () => {
    const newTotalVotes = [...totalVotes];
    newTotalVotes[selectedRandomAnecdoteIndex] += 1;
    setTotalVotes(newTotalVotes);

  }
  return (
    <div>
      <div className='d-flex justify-content-center'>
        <RandomAnecDote data={anecdotes[selectedRandomAnecdoteIndex]} />
        <Vote voteCount={totalVotes} />
      </div>
      <div className='d-flex justify-content-center'>
        <Button buttonTitle='Vote' onClick={handleVoteCount} />
        <Button onClick={handleGenerateNextRandomAnectode} buttonTitle='next anecdote' />
      </div>
    </div>
  );
}

export default App;
