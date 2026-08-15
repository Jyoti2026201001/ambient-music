
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh"}}>
      <h1 style={{color:"red", fontSize:"10rem"}}>Hello World!!</h1>
    </div>
    </>
  )
}

export default App
