// Here we created 2 listitem call to make 2 button with diff values

import React from 'react'
import ListItem from './ListItem'

const List = ({mode,setMode}) => {

  return (
    <div style={{display:"flex",gap:"20px"}}>
      <ListItem value="Light" mode={mode} setMode={setMode}/>
      <ListItem value="Dark" mode={mode} setMode={setMode}/>

    </div>
  )
}

export default List