import React from 'react'
import Button from './Button'

const ListItem = ({value}) => {
  return (
    <div>
        <Button value={value} />
    </div>
  )
}

export default ListItem