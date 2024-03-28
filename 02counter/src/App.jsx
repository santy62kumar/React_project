import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]  = useState(15)

  //let counter = 15

  const addValue = () => {
    if (counter < 20) { // Check if counter is less than 20
      setCounter(counter => counter + 1);
    }
    //counter = counter + 1
    // or setCounter(counter + 1)
    // setCounter(prevCounter => prevCounter + 1)
   
    
  }

  const removeValue = () => {
    if (counter > 0) { 
      // Check if counter is greater than 0
      setCounter(counter => counter - 1);
      //setCounter(counter - 1)
    }
  }
  
  

  return (
    <>
     <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
