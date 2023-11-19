import React from 'react'
import Button from './Button'

const ListItem = ({value,mode,setMode}) => {
  return (
    <div>
        <Button value={value} mode={mode} setMode={setMode}/>
    </div>
  )
}

export default ListItem