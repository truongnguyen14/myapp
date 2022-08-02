import {useState} from 'react'

function Child({f}){

const [name, setName] = useState("")

const clickfunction = ()=>{
  f(name)
}
  return (
    <div style={{backgroundColor: "seagreen"}}>
      Child component
      <input type="text" onChange={(e) => setName(e.target.value)}/>
      <button onClick={()=>clickfunction()}>Click</button>
    </div> 
  )
}

function App() {

const [name, setName] = useState("")

  return (
    <div style={{backgroundColor:"violet"}}>
      Parent component {name}
      <Child f={(name)=>setName(name)} />
    </div>
  );
}

export default App;