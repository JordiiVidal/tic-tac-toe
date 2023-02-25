export default function History({ history ,  onHistoryClick}) {
    return (
        <ol>
            {history.map((value, move) => 
                <li key={move}>
                    <button onClick={() => onHistoryClick(move)}>
                       Go to {move == 0 ? 'game start' : `move #${move}`}
                    </button>
                </li>
            )}
        </ol>
    )
}