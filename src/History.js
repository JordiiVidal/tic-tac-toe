import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'

export default function History({ history, currentMove, onHistoryClick }) {

    const getDetailContent = (move) => {
        if (move === currentMove) return (<span className='current'>You are at move #{currentMove}</span>);
        return (
            <button onClick={() => onHistoryClick(move)}>
                Go to {move === 0 ? 'game start' : `move #${move}`}
            </button>
        );
    }

    return (
        <>
            <div className="game-title">
                <h4>History</h4>
                <span><FontAwesomeIcon icon={faSort} /></span>
            </div>
            <ol>
                {history.map((_, move) => <li key={move}>{getDetailContent(move)}</li>)}
            </ol>
        </>
    )
}