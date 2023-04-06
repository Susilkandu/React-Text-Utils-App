import React  from 'react'
import PropTypes from 'prop-types'
export default function Titlebar(props) {
  return (
    <>
    <center className={`titleBar  text-${props.Mode==='light'?'dark':'light'} bg-${props.Mode==='light'?'success':''}`} >
    <strong> {props.softwareName} </strong>
    </center>
    </>
  )
}
Titlebar.defaultProps={
softwareName:"Kandu-Word"
}
Titlebar.prototype={
    softwareName:PropTypes.string.isRequired
}
