import React from 'react'
import './App.css'
function App() {
  const [value,setValue]=React.useState("")
  const previtem=React.useRef()
  React.useEffect(()=>{
    previtem.current=value
  },[value])
  return (
    <div className="App">
      <input onChange={item=> setValue(item.target.value)}/>
      <h1>your current input is <span>{value}</span></h1>
      <h1> And your previous input is <span>{previtem.current}</span></h1>
    </div>
  );
}

export default App;
