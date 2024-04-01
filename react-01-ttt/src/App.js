import { useState } from 'react';
import './App.css';
import Board from './components/Board';

function App() {
  const [history, setHistory] = useState([{
    squares: Array(9).fill(null),
  }]);
  const [xIsNext, setXIsNext] = useState(true);
  
  const calculateWinner = (squares) => {
    const lines = [
      [0,1,2],
			[3,4,5],
			[6,7,8],
			[0,3,6],
			[1,4,7],
			[2,5,8],
			[0,4,8],
			[2,4,6]
		];
    
		for (let idx=0; idx<lines.length; idx++) {
      const [a,b,c] = lines[idx];
			if (squares[a] 
				&& squares[a] === squares[b] 
				&& squares[a] === squares[c]) {
          return squares[a];
      }
    }// end for 

    return null;
  }
    
  const current = history[history.length -1];
  const winner = calculateWinner(current.squares);
  let nextPlayerStatus = `Next player: ${ xIsNext ? 'X' : 'O' }`;
	if (winner) {
		nextPlayerStatus = 'Winner: '+ winner;
	}

  const handleClick = (i) => {
		const newSquares = current.squares.slice();

		// 리턴값이 있거나 이미 클릭한 자리이면
		if (calculateWinner(newSquares) || newSquares[i]) {
			return;
		}

		newSquares[i] = xIsNext ? 'X' : 'O';
		setHistory([...history, { squares: newSquares }]);
		setXIsNext(current => !current);
	}
    
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        game-info
      </div>
    </div>
  );
}

export default App;
