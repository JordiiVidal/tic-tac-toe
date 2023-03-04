import { useState } from "react";
import Board from "./Board";
import History from "./History";
import Modal from 'react-modal';

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(35, 39, 47, 0.75)'
      },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        padding: 0,
        borderRadius: '20px',
        border:'2px solid #149eca',
        transform: 'translate(-50%, -50%)',
    },
};

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];
    const [modalIsOpen, setIsOpen] = useState(true);
    const [startPlayer, setStartPlayer] = useState(null);
    const xIsNext = nextPlayer();

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
        openModal();
    }

    function openModal() {
        setIsOpen(true);
    }

    function closeModal(player) {
        setStartPlayer(player);
        setIsOpen(false);
    }

    function nextPlayer(){
        if(startPlayer == 'X') return currentMove % 2 === 0;
        return !(currentMove % 2 === 0);
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
            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                contentLabel="Player Modal"
            >
                <div className="game-modal">
                    <span>Choose your player:</span>
                    <div className="cards">
                        <div onClick={() => closeModal('X')}>X</div>
                        <div onClick={() => closeModal('O')}>O</div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}