// Get a reference to the chess board element
const chessBoard = document.getElementById("chess-board");

// Add an event listener to the chess board to detect when a piece is clicked
chessBoard.addEventListener("click", handlePieceClick);

// Function to handle when a piece is clicked
function handlePieceClick(event) {
  // Check if the clicked element is a chess piece
  if (!event.target.classList.contains("chess-piece")) {
    return;
  }

  // Get the current position of the piece
  const currentPosition = event.target.dataset.position;

  // Get the new position the user wants to move the piece to
  const newPosition = getNewPosition();

  // Check if the move is valid
  if (!isValidMove(currentPosition, newPosition)) {
    return;
  }

  // Move the piece to the new position
  event.target.dataset.position = newPosition;
  event.target.style.left = newPosition.x + "px";
  event.target.style.top = newPosition.y + "px";
}
const playVsAiButton = document.getElementById("play-vs-ai");
const showBoardButton = document.getElementById("show-board");
const chessBoard = document.getElementById("chess-board");

playVsAiButton.addEventListener("click", handlePlayVsAi);
showBoardButton.addEventListener("click", handleShowBoard);

function handlePlayVsAi() {
  // Code to start a game against an AI goes here
}

function handleShowBoard() {
  chessBoard.classList.remove("hidden");
}
