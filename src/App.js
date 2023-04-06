import './App.css';
import React ,{useState}from 'react';
import Titlebar from './Components/Titlebar.js';
import ButtonBar from './Components/ButtonBar.js';
function App() {
  const [mode,setMode]=useState('dark');
  const toggleMode=()=>
  {
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#002833';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='black';
      document.getElementById('exampleFormControlTextarea1').style.backgroundColor='#012537';
      document.getElementById('exampleFormControlTextarea1').style.color='#50B50D';
    }
  }
  return (
    <>
    <Titlebar fileName="Document1" softwareName="Kandu Word" Mode={`${mode}`} ></Titlebar>
    <ButtonBar toggleMode={toggleMode} Mode={mode}></ButtonBar>
    </>
  );
}

export default App;
