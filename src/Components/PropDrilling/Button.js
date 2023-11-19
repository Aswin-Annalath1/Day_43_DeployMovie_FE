import React from 'react'

const Button = ({value,mode,setMode}) => {
  // it is given to highlight button
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