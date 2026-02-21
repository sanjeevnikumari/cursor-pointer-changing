import React, { useState } from 'react'

const App = () => {
  const[dot,setdot]=useState([]);

  const handleMouseMove=(e)=>{
    const newdots={
      x:e.clientX,
      y:e.clientY,
      id:Date.now()
    };
     setdot((prevDots) => [...prevDots.slice(-20), newdots]);

  }
  return (
    <div className="App"  onMouseMove={handleMouseMove}>
      {dot.map((e)=>(
         <div
          key={e.id}
          className="dot"
          style={{
            left: e.x,
            top: e.y,
            backgroundColor: `hsl(${e.x % 360}, 100%, 50%)`,
          }}
        ></div>
      ))}
      
    </div>
  )
}

export default App
