import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  const { name, age } = props
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {props.name}, you are {props.age} year old</p>
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

const App = () => {
  const name = 'peter'
  const age = '10'
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="george" age={26 + 10}/>
      <Hello name={name} age={age} />
      <Footer />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
