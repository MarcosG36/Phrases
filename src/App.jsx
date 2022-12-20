import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import array from './array.json'




function App() {
  
  const [newIndex, setNewIndex] = useState(0)
  const [newColor, setNewColor] = useState("#111fff")

  const newColorGenerator = () =>{
   
    const simbolos = "0123456789ABCDEF";
    let color = "#";
  
    for(var i = 0; i < 6; i++){
      color = color + simbolos[Math.floor(Math.random() * 16)];
    } 

    setNewColor(color)
  }
  
  const findNewIndex = (array)=>{
    setNewIndex(Math.round(Math.random()*Object.keys(array).length)) 
    newColorGenerator()
  }
  

  return (
    <div className="App">
      <div style={{border:`15px solid ${newColor} `, padding:'20px'}}>
      <h2 style={{color:newColor}}> {array[newIndex].quote}</h2>
       <p style={{color:newColor}}> {array[newIndex].author} </p>
       <button style={{color:newColor}} onClick={findNewIndex}>Change Phrase</button>
    </div>
      </div>
       
  )
} 
 
export default App
