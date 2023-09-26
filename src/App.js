import React from "react"
import Square from "./Square"
import { useState } from "react"


export default function Board() { 
  
  const [gameOver, setGameOver] = useState(false);
  const [xIsNext, setXIsNext] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null))
  

  function handleClick(i) {

    if(gameOver) {
      setTimeout(() => {
        setGameOver(false)
      }, 700)
      return
    }

    // In JavaScript, null is considered falsy. In contrast, a non-empty string in JavaScript is considered truthy. Therefore, if it is not null, it will return true by default. 
    if(squares[i]) {
      return 
    }

    let arraySquare = squares.slice()
    
    if(xIsNext) { 
      arraySquare[i] = 'X'
    } else {
      arraySquare[i]= 'O';
    }
    setSquares(arraySquare);
    setXIsNext(!xIsNext); 
    const possibleResults = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    let isWin = false; // Used when the game results in a Draw. 

    for(let j=0; j < possibleResults.length; j++) { 

        console.log(`History (${arraySquare[i]})  ${arraySquare}`)

      const [a,b,c] = possibleResults[j];

      const xWin = 'X' === arraySquare[a] && 'X' === arraySquare[b] && 'X' === arraySquare[c]
      const oWin = 'O' === arraySquare[a] && 'O' === arraySquare[b] && 'O' === arraySquare[c]

      if(xWin) {    
        setGameOver(true)
        isWin = true;
        setTimeout(() => {
          setSquares(Array(9).fill(null))
          return alert('The player "X" is the winner')
        }, 1000)
      } else if(oWin){
          setGameOver(true)
          isWin = true;
          setTimeout(() => {
            setSquares(Array(9).fill(null))
            return alert('The player "O" is the winner')
          }, 1000)
        }
      }  
      if (!isWin && arraySquare.every(square => square) ) {
        setTimeout(() => {
          setSquares(Array(9).fill(null))
          return alert('there is not a winner, it is a Draw')
        }, 1000)
      } 
      
  }

  return (
    <React.Fragment>
      <section className="section-board-row" style={{display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center'}}>
        <div className="board-row">
          <Square value={squares[0]} squareClick={() => handleClick(0)} />
          <Square value={squares[1]} squareClick={() => handleClick(1)} />
          <Square value={squares[2]} squareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} squareClick={() => handleClick(3)} />
          <Square value={squares[4]} squareClick={() => handleClick(4)} />
          <Square value={squares[5]} squareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} squareClick={() => handleClick(6)} />
          <Square value={squares[7]} squareClick={() => handleClick(7)} />
          <Square value={squares[8]} squareClick={() => handleClick(8)} />
        </div>
      </section>
    </React.Fragment>
  ) 
}


