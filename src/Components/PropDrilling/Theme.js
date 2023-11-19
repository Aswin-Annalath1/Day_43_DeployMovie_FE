import React, { useState } from 'react'
import List from './List'

const Theme = () => {
  
const [mode,setMode]=useState("dark")
const styles={
  background:mode=="light"?"pink":"black",
  color:mode=="light"?"white":"white"
}

  return (
    <div className='themebox' style={styles}> 
        <List mode={mode} setMode={setMode}/>
    </div>
  )
}

export default Theme;