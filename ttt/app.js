class TTT {
  constructor() {
    this.board = [
      ["X", " ", " "],
      [" ", "X", " "],
      [" ", " ", "X"]
    ]

    this.currentPlayer = "X";
    this.handleClick = this.handleClick.bind(this);
    this.updateBoard = this.updateBoard.bind(this);
  }

  updateBoard(player, row, cell) {
    this.board[row][cell] = player;
    this.drawBoard(this.board);
  }

  handleClick(node) {
    let rowNum = node.target.id.split('-')[1];
    let cellNum = node.target.id.split('-')[3];
    console.log(rowNum, cellNum);
    this.updateBoard(this.currentPlayer, rowNum, cellNum);
  }

  drawBoard(board) {
    board.forEach((row, i) => {
      row.forEach((cell, j) => {
        let buttonNode = document.getElementById(`row-${i}-cell-${j}`);
        buttonNode.innerText = cell;
        buttonNode.addEventListener("click", this.handleClick)
      });
    });
  }


}

let Game = new TTT;
Game.drawBoard(Game.board);
