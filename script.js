
        // Tic-Tac-Toe Game Logic

        let currentPlayer = 'X'; // Player X starts first
        let gameBoard = ['', '', '', '', '', '', '', '', '']; // Empty game board (9 cells)
        let gameOver = false; // Flag to check if game is over
        
        // Get DOM elements
        const squares = document.querySelectorAll('.square');
        const statusDisplay = document.getElementById('status');
        const resetButton = document.getElementById('resetButton');
        
        // Function to handle a move
        function handleClick(index) {
            if (gameBoard[index] !== '' || gameOver) return; // If cell is already occupied or game is over
        
            gameBoard[index] = currentPlayer;
            squares[index].textContent = currentPlayer;
        
            // Check for winner
            if (checkWinner(currentPlayer)) {
                statusDisplay.textContent = `Player ${currentPlayer} wins!`;
                gameOver = true;
                return;
            }
        
            // Check for draw
            if (gameBoard.every(cell => cell !== '')) {
                statusDisplay.textContent = "It's a draw!";
                gameOver = true;
                return;
            }
        
            // Switch player
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
        }
        
        // Function to check if a player has won
        function checkWinner(player) {
            const winningCombination = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
                [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
                [0, 4, 8], [2, 4, 6]              // Diagonals
            ];
        
            return winningCombination.some(combination => {
                return combination.every(index => gameBoard[index] === player);
            });
        }
        
        // Function to reset the game
        function resetGame() {
            gameBoard = ['', '', '', '', '', '', '', '', '']; // Reset board
            gameOver = false; // Reset game over flag
            currentPlayer = 'X'; // Player X starts first
            statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
        
            squares.forEach(square => {
                square.textContent = ''; // Clear all squares
            });
        }
        
        // Add event listeners to squares
        squares.forEach((square, index) => {
            square.addEventListener('click', () => handleClick(index));
        });
        
        // Reset game when button is clicked
        resetButton.addEventListener('click', resetGame);
       