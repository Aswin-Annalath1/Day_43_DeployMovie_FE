import React, { useState } from 'react'
import GameBox from './GameBox'
import Board from './Board'

const TicTacToe = () => {

  const [boardVal,setBoardVal]=useState([
    // "X","X","X","X","X","X","X","X","X",
    // "O","O","O","O","O","O","O","O","O"
    null,null,null,null,null,null,null,null,null
  ])

  return (
    <div>
        <Board boardVal={boardVal} setBoardVal={setBoardVal}/>
    </div>
  )
}

export default TicTacToe