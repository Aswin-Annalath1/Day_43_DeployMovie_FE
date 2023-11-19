import React, { useContext } from 'react'
import ModeContext from './utils/ModeContext'

const Button = ({value}) => {
  
  const [mode,setMode]=useContext(ModeContext)

  const styles={
    background:mode=="light"?"green":"navy",
    color:mode=="light"?"white":"white"
  }

  return (
    <div>
      <button
       style={styles}
       onClick={()=>{setMode(value=="Light"?"light":"dark")}}
      >{value}Mode

      </button>

    </div>
  )
}

export default Button