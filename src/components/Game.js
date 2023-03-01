import { useState } from "react";
import Board from "./Board";
import History from "./History";

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];
    const xIsNext = currentMove % 2 === 0;

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    function handleRestart() {
        setHistory([Array(9).fill(null)]);
        setCurrentMove(0);
    }

    return (
        <div className="game">
            <div className="game-title">
                <h1>Tic Tac Toe</h1>
            </div>
            <div className="game-board">
                <Board squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <History history={history} currentMove={currentMove} onHistoryClick={jumpTo} onRestartClick={handleRestart} />
            </div>
        </div>
    );
}