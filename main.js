const cells = document.querySelectorAll('.cell');
const restartButton = document.getElementById('restartButton');
let turn = 'X';

const handleClick = (e) => {
    const cell = e.target;
    if(cell.textContent === '') {
        cell.textContent = turn;
        turn = turn === 'X' ? 'O' : 'X';
    }
    checkWinner();
};

const checkWinner = () => {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6] 
    ];

    winPatterns.forEach(pattern => {
        const [a, b, c] = pattern;
        if(cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            alert(`${cells[a].textContent} wins!`);
            resetGame();
        }
    });
};

const resetGame = () => {
    cells.forEach(cell => cell.textContent = '');
    turn = 'X';
};

cells.forEach(cell => cell.addEventListener('click', handleClick));
restartButton.addEventListener('click', resetGame);
