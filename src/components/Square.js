import classNames from 'classnames/bind';

export default function Square({ value, isWinner, onSquareClick }) {
    return (
        <button className={classNames(
            'square',
            isWinner && 'winner'
        )} onClick={onSquareClick}>
            {value}
        </button>
    )
}