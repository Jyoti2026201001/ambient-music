import "./App.css";
import TimeBackground from './background/TimeBasedBackground.jsx';
import { useState } from 'react';


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <TimeBackground />
    </>
  )
}

export default App
