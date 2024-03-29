import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]  = useState(15)

  //let counter = 15

  const addValue = () => {
    if (counter < 20) { // Check if counter is less than 20

      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // differnce b/w these two statement is that above one if called multiple time it will update only one time because 
      //It doesn't guarantee that React will batch multiple updates
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      //It ensures that the state update is based on the previous state (prevCounter), not the current state (counter).
      //This is an example of using the functional form of the setState function provided by the useState hook.
      //It guarantees that React will batch multiple setState calls into a single update, preventing potential issues with stale state values.
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
