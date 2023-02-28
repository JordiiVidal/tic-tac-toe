import Square from "./Square"
// [export] -> makes this function accessible outside of this file
// [default] -> that it's the main function in file
// [JSX] -> return a JSX element
export default function Board({ squares, xIsNext, onPlay }) {
  const winner = calculateWinner(squares);
  let status = setStatus();

  function handleClick(i) {
    if (squares[i] || winner) return;
    let nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  }

  function setStatus() {
    if (winner) return `Winner : ${winner}`;
    return `Next player is ${xIsNext ? 'X' : 'O'}`;
  }

  const getRowContent = (index) => {
    let row = [];
    for (let i = index; i < index + 3; i++) {
      row.push(<Square key={i} value={squares[i]} onSquareClick={() => handleClick(i)} />)
    }
    return row;
  }

  return (
    <>
      <div className="status">{status}</div>
      {[0, 3, 6].map(row => (<div key={`row${row}`} className="board-row">{getRowContent(row)}</div>))}
    </>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[b] === squares[a] && squares[c] === squares[a]) {
      return squares[a]
    }
  }
  return null;
}
