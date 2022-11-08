import React, { useState } from "react";
import { views } from "../utils";

export const Board = ({accept, guessResult, setText, text, view, isFinger, isGuess, setFingerPicked, setGuessVal, fingerPicked, guessVal, value, setValue,winningNum, isAlice, aliceFinger, bobFinger, roundWinner, rounds, scoreNum1, scoreNum2, winner, aliceGuess, bobGuess, reset, setWinner, setAliceScore, setOpponentScore, setRounds}) => {
   
    
    
    function setFinger(num) {
    accept(num);
    setFingerPicked(num)
   }
   function Result(num) {
    guessResult(num)
    setGuessVal(num)
   }


   let player1 = isAlice ? aliceFinger : bobFinger
   let player2 = isAlice ? bobFinger : aliceFinger;
  
   const select = Number(roundWinner)

   let outcome;
   if (isAlice) {
    outcome = ['You Win', 'Draw', 'Opponent Win']
   } else {
    outcome = ['Opponent Win', 'Draw', 'You Win']
   }

  

   let num1 = isAlice ? scoreNum1 : scoreNum2;
   let num2 = isAlice ? scoreNum2 : scoreNum1

  let guess1 = isAlice ? aliceGuess : bobGuess
  let guess2 = isAlice ? bobGuess : aliceGuess

  const resetGame = () => {
    reset(views.DEPLOY_OR_ATTACH)
    setAliceScore(0)
    setOpponentScore(0)
    setRounds(0)
  }
  

    return (
        <div className="Board">
           {!winner && <h1 className="text-4xl font-semibold mb-7 text-amber-500 italic">Round-{rounds}</h1>}

           {winner && <h1 className="text-4xl font-semibold mb-7 text-amber-500">{winner}</h1>}
             <h2>{text}</h2>
           <header className="Board_header">
            <div className="score_board score1">
            <h2>You</h2>
            <h1>{num1}</h1>
            </div>
           
            {view === views.PICK_FINGER && (<div className="fingers_board">
                <button className = {`fingers zero ${!isFinger ? "block" : ""}`} disabled={!isFinger} onClick={() => setFinger(0)}>
                   <p>0</p>
                </button>
                <button className={`fingers one ${!isFinger ? "block" : ""}`} disabled={!isFinger} onClick={() => setFinger(1)}>1</button>

                <button disabled={!isFinger} className={`fingers two ${!isFinger ? "block" : ""}`} onClick={()=> setFinger(2)}>2</button>

                <button disabled={!isFinger}    onClick={() => setFinger(3)} className={`fingers three ${!isFinger ? "block" : ""}`}>3</button>

                <button disabled={!isFinger} onClick={() => setFinger(4)} className={`fingers four ${!isFinger ? "block" : ""}`}>4</button>

                <button disabled={!isFinger} onClick={() => setFinger(5)} className={`fingers five ${!isFinger ? "block" : ""}`}>5</button>
            </div>)}

           {view === views.GUESS_RESULT &&  <div>
                <input type='text' value={value} onChange={(e) => setValue(Number(e.target.value)) } />
                <button disabled={!value}  onClick={() => Result(value)}className="button">Guess Result</button>
            </div>}

            {view == views.GAME_RESULT && <div className="w-[50%] flex justify-between items-center">


                <div className="roundOut">
                    <div>
                        <p className="">You</p>
                        <p>Picked</p>
                    </div>
                
               <button  className="finger mb-5 mt-5">{player1}</button>

               <div>
                        <p className="">You</p>
                        <p>Guess: <span className="text-[#2cbb21]">{guess1}</span></p>
                    </div>
                </div>

                <div className="m-5">
                    <h1 className="text-[#d839c3]">Total outcome:{winningNum} </h1>
                    <h1 className="text-[#85853c] lg:text-[25px] ">This Round {outcome[select]} </h1>
                </div>

                 <div className="roundOut">
                    <div>
                        <p>Opponent</p>
                        <p>Picked</p>
                    </div>
                   <button className="finger mb-5 mt-5">{player2}</button> 

                   <div>
                        <p className="">Opponent</p>
                        <p>Guess: <span className="text-[#2cbb21]">{guess2}</span></p>
                    </div>
                 </div>

            </div> }

            {view == views.RESTART && <button onClick={resetGame} className='button p-10'>
                Play Again
            </button> }
            <div className="score_board score2">
            <h2>Opponent</h2>
            <h1>{num2}</h1>
            </div>
           </header>
            {/* {fingerPicked && <h3>You Picked {fingerPicked}</h3>}
            {guessVal && <h3>You Guessed {guessVal}</h3>} */}

           

          
        </div>
    )
}