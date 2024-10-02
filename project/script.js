let buttons = document.querySelectorAll(".box"); // Use plural to reflect the collection
let resetBtn = document.querySelector("#reset-btn"); // Use querySelector for a single element

let turnO = true; // true for O's turn, false for X's turn
let gameBoard = ["", "", "", "", "", "", "", "", ""]; // Track game state

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

// Function to handle box clicks
buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (button.innerText === "") { // Check if the box is empty
            button.innerText = turnO ? "O" : "X"; // Toggle between O and X
            gameBoard[index] = turnO ? "O" : "X"; // Update game state
            checkWin(); // Check for a win condition
            turnO = !turnO; // Switch turns
        }
    });
});

// Function to check win conditions
const checkWin = () => {
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            alert(`Player ${gameBoard[a]} wins!`);
            return; // Exit the function if there's a winner
        }
    }
    // Optionally, check for a draw here
};

// Reset game
resetBtn.addEventListener("click", () => {
    gameBoard.fill(""); // Clear game state
    buttons.forEach(button => {
        button.innerText = ""; // Clear the UI
    });
    turnO = true; // Reset turn to O
    console.log("Game reset!");
});