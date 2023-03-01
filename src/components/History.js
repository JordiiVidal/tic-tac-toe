import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort, faRecycle } from '@fortawesome/free-solid-svg-icons'

export default function History({ history, currentMove, onHistoryClick, onRestartClick }) {

    const getDetailContent = (move) => {
        if (move === currentMove) return (<span className='current'>You are at move #{currentMove}</span>);
        return (
            <span onClick={() => onHistoryClick(move)}>
                Go to {move === 0 ? 'game start' : `move #${move}`}
            </span>
        );
    }

    return (
        <>
            <div className="game-title">
                <h4>History</h4>
                <span><FontAwesomeIcon icon={faSort} /></span>
            </div>
            <ul>
                {history.map((_, move) => <li key={move}>{getDetailContent(move)}</li>)}
            </ul>
            <div className="game-restart">
                {
                    history.length > 1 && <span onClick={onRestartClick}><FontAwesomeIcon icon={faRecycle} /> Restart</span>
                }
            </div>
        </>
    )
}