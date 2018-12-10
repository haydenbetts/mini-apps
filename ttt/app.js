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
    this.switchCurrentPlayer = this.switchCurrentPlayer.bind(this);
    this.positionEmpty = this.positionEmpty.bind(this);
    this.writeMessageToDOM = this.writeMessageToDOM.bind(this);
  }

  arrayHasAllSameElt(array) {
    return !!array.reduce((a, b) => (a === b) ? a : false)
  }

  columnsFromBoard(board) {
    return board.map((row, i) => {
      return row.map((cell, j) => {
        return board[j][i];
      })
    })
  }

  diagonalsFromBoard() {

  }

  isWinner(board) {

    let columnsFromBoard = this.columnsFromBoard(this.board);

    for (let i = 0; i < board.length; i++) {
      if (this.arrayHasAllSameElt(board[i])) return true;
      if (this.arrayHasAllSameElt(columnsFromBoard[i])) return true;
    }

    return false;
  }

  writeMessageToDOM(message) {
    let messageNode = document.getElementById('gameStatus');
    messageNode.innerText = message;
  }

  updateBoard(player, row, cell) {
    this.board[row][cell] = player;
    this.drawBoard(this.board);
  }

  switchCurrentPlayer() {
    if (this.currentPlayer === "X") this.currentPlayer = "O"
    else this.currentPlayer = "X";
  }

  positionEmpty(board, rowNum, cellNum) {
    return board[rowNum][cellNum] === " ";
  }

  handleClick(node) {
    let rowNum = node.target.id.split('-')[1];
    let cellNum = node.target.id.split('-')[3];
    if (this.positionEmpty(this.board, rowNum, cellNum)) {
      this.updateBoard(this.currentPlayer, rowNum, cellNum);
    } else {
      this.writeMessageToDOM('You can only play empty spaces!')
    }

    if (this.isWinner(this.board)) {
      this.writeMessageToDOM('Winner!')
    };
    // check if it is a cat's game
    this.switchCurrentPlayer();
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
