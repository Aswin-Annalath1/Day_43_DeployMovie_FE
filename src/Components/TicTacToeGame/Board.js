//Here we make the 9 box
// For confetti we have installed npm confetti and for useWindow we installed (npm react use).

import React, { useState } from 'react'
import GameBox from './GameBox'
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'

const Board = ({boardVal,setBoardVal}) => {
// calling for confetti (taken from npm confetti)
  const { width, height} = useWindowSize()

  // For tracking two players(X and Y)
  const[isXturn,setisXturn]=useState(true)

  //This function will give X or O value 
  const handleClick=(index)=>{

    //(THIS CODE cannot display value on screen because its trying to change 1st value(null,null,null....of boardVal) directly.)
    // if(boardVal[index]==null){
    //   // if true it give X and if isXturn updated onClick(false) then give O.
    //   boardVal[index]=isXturn?"X":"O"
    // }

  // Here Copy variable([...boardVal]) made to store the assigned value. We are not assigning it to actual data declared at begining( null,null,null......)  
    const boardValCopy=[...boardVal]
    if(boardVal[index]==null){
      boardValCopy[index]=isXturn?"X":"O"
      // This will update boardVal value of that index and if (click same box) again check ==null,it will not be null.
      setBoardVal(boardValCopy)
      // To make false.(To print next Click O if 1st is X)
      setisXturn(!isXturn)
    }
  } 

// Deciding the winner.(boardVal is taken as argument)
  const decideWinner=(boardVal)=>{
      // Possibility of Winning list made as array
      const listItems=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],
                        [2,5,8],[0,4,8],[2,4,6]
      ]
      // To check each array item satisfy condition
      for(let i=0;i<listItems.length;i++){
        // Destructure(it help to get each element of array item(i))
        const[a,b,c]=listItems[i]
        if(boardVal[a]!==null && boardVal[a]==boardVal[b]&& boardVal[b]==boardVal[c]){
          // here returning that winn value X or O
          return boardVal[a]
        }
      }
      // here returning null if this noyhing happen(Tie)
      return null
  }
  // Storing function to Winner variable
  const winner=decideWinner(boardVal)

  

    
  return (
    <>
    {/* If there is a winner(true) than show */}
    {winner && <Confetti width={width} height={height} gravity={0.01}/> }
      <div className='board'>
          {/* here map help to create 9 box and gave index to track box. // element will give th inside value*/}
          {boardVal.map((element,index)=><GameBox element={element}
          // This is passing a function as prop for an operation to onclick.
            playerClick={()=>handleClick(index)}
          />)}
      </div>
      <div className='winner'>
      {/* It is (IF there is a winner then show this) */}
      {winner &&  <h2>Winner is Player: {winner}</h2>}
      </div>
    </>
  )
}

export default Board