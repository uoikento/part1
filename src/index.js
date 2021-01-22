import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Hello = ({ name, age }) => {
  // const { name, age } = props
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} year old</p>
      <p> so you are probably born in {bornYear()}</p>
    </div>
  )
}
const Footer = () => {
  return (
    <div>
      Greetings
    </div>
  )
}

const Display = ({counter}) => <div>{counter}</div>


const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
      {text}
    </button>
)

const App = () => {
  const [ counter, setCounter ] = useState(0)
  
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={increaseByOne}
        text='plus'
      />
      <Button
        handleClick={setToZero}
        text='zero'
      />
      <Button
        handleClick={decreaseByOne}
        text='minus'
      />
    </div>
  )
}

// let counter = 1

// const refresh = () => {
//   ReactDOM.render(<App counter={counter} />,
//   document.getElementById('root'))
// }

// refresh()
// counter += 1
// refresh()
// counter += 1
// refresh()
// setInterval(() => {
//   refresh()
//   counter += 1
// }, 1000)
  // const name = 'peter'
  // const age = '10'
  // return (
  //   <>
  //     <h1>Greetings</h1>
  //     <Hello name="george" age={26 + 10}/>
  //     <Hello name={name} age={age} />
  //     <Footer />
  //   </>
  // )
// }

ReactDOM.render(<App />, document.getElementById('root'))
