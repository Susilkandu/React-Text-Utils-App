import React, { useState } from "react";
import Alert from "./Alert";
export default function ButtonBar(props) {
  const [text, setText] = useState("Write Your Matter");
  const [txtclr, setTxtClr] = useState("blue");
  const [bgclr, setBgclr] = useState("white");
  const [ftSize, setFtSize] = useState("20");
  const [OutlineColor, setOutlineColor] = useState("green");
  const [OutlineSize, SetOutlineSize] = useState("2");
  const [alert,Setalert]=useState(null);
  const ShowAlert=(message,type)=>
  {
    Setalert({msg:message,type:type})
    setTimeout(() => {
      Setalert(null);
    }, 1200);
  }
  const setInnerText=(event)=>
  {
    setText(event.target.value);
  }
  const setfontclr = (event) => {
    setTxtClr(event.target.value);
    let element = document.getElementById("exampleFormControlTextarea1");
    element.style.color = txtclr;
  };
  const setBgColor = (event) => {
    setBgclr(event.target.value);
    let element = document.getElementById("exampleFormControlTextarea1");
    element.style.backgroundColor = bgclr;
  };
  const clearAll = (event) => {
    setText("");
    ShowAlert('Text Has Been Cleaned','danger');
  };
  const Capitalize = () => {
    let ntxt = text.toUpperCase();
    setText(ntxt);
  };
  const Lowerize = () => {
    let ntxt = text.toLowerCase();
    setText(ntxt);
  };
  const RmvExtSpace = () => {
    let ntxt = text.split(/[ ]+/);
    setText(ntxt.join(" "));
    ShowAlert('Extra Spaces has Been deleted','success');
  };
  const CpAll = () => {
    navigator.clipboard.writeText(text);
   ShowAlert('All Text Copied','success');
  };
  const fontSizeHandler = (event) => {
    let element = document.getElementById("exampleFormControlTextarea1");
    setFtSize(event.target.value);
    let size = ftSize.concat("px");
    element.style.fontSize = size;
  };
  const OutlineHandler = (event) => {
    let element = document.getElementById("exampleFormControlTextarea1");
    setOutlineColor(event.target.value);
    element.style.webkitTextStrokeColor = OutlineColor;
  };
  const OutlineSizeHandler = (event) => {
    let element = document.getElementById("exampleFormControlTextarea1");
    SetOutlineSize(event.target.value);
    let nsize = OutlineSize.concat("px");
    element.style.webkitTextStrokeColor = OutlineColor;
    element.style.webkitTextStrokeWidth = nsize;
  };
  const printtxt = () => {
    let element = document.getElementById("txtarea").innerHTML;
    let printDocument = window.open("", "", "height=2480, width=3508");
    printDocument.document.write("<html>");
    printDocument.document.write("<body>");
    printDocument.document.write(element);
    printDocument.document.write("</body></html>");
    printDocument.document.close();
    printDocument.print();
  };
  const Save=()=>
  {
    let fileName=prompt('Enter New File Name');
    localStorage.setItem(fileName,text);
  }
  const SearchFile=(event)=>
  {
    let fileName=document.getElementById('flName').value;
    let check=localStorage.getItem(fileName);
    if (check!==null) {
      setText(check);
    }
    
  }
  return (
    <div>
      <div className={`HomeDtlTag bg-${props.Mode==='light'?'light':''}`} >
        <div className={`HomeDtlTag bg-${props.Mode==='light'?'primary':''}`}>
          <div>
            <input type="color" id="setFtclr" onChange={setfontclr} />
            <b className="ftclr">A</b>
          </div>
          <div className="setBgclr">
            <input type="color" id="setBgclr" onChange={setBgColor} />
            <b>Page color</b>
          </div>
          <div>
            <input
              type="number"
              className="ftSizeHandler"
              onChange={fontSizeHandler}
              placeholder="Font-weight"
              value={ftSize}
            />
          </div>
          <div className="setOutLine">
            <input type="color" id="setOutline" onChange={OutlineHandler} />
            <b>O</b>
          </div>
          <div className="setOutLineSize">
            <input
              type="number"
              id="setOutlineSize"
              placeholder="Stroke Size"
              onChange={OutlineSizeHandler}
            />
          </div>
        </div>
        <div className="second">
          <button disabled={text.length===0} className={` bg-${props.Mode==='light'?'info':''}`} onClick={clearAll}><strong>Clean</strong></button>
          <button disabled={text.length===0} className={` bg-${props.Mode==='light'?'info':''}`} onClick={Capitalize}><strong>CAPITALIZE</strong></button>
          <button disabled={text.length===0} className={` bg-${props.Mode==='light'?'info':''}`} onClick={Lowerize}><strong>lowerize</strong></button>
          <button disabled={text.length===0} className={` bg-${props.Mode==='light'?'info':''}`} onClick={RmvExtSpace}><strong>Remove Extra Spaces</strong></button>
          <button disabled={text.length===0} className={` bg-${props.Mode==='light'?'info':''}`} onClick={CpAll}><strong>Copy All</strong></button>
          <button disabled={text.length===0} className={` bg-${props.Mode==='light'?'info':''}`} onClick={printtxt}><strong>Print</strong></button>
          <button disabled={text.length===0} className={` bg-${props.Mode==='light'?'info':''}`} onClick={Save}><strong>Save</strong></button>
          <form className={`d-flex bg-${props.Mode==='light'?'info':''}`} role="search">
          <input className="" id="flName" onChange={SearchFile} placeholder="Search Your File" />
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
            <label className="form-check-label text-light  bg-gradient rounded-circle" htmlFor="flexSwitchCheckDefault">{props.Mode}</label>
          </div>
      </form>
       </div>
      </div>
      <Alert alert={alert}></Alert>
      <center>
        <div className="informer ">
          <strong>
            {text.split(" ").filter((element)=>{return element.length!==0}).length}words {(text.length)}characters
          </strong>
        </div>
      </center>
      <div id="txtarea">
        <textarea name="" id="exampleFormControlTextarea1" cols="30" rows="10" value={text} onChange={setInnerText}></textarea>
      </div>
    </div>
  );
}
