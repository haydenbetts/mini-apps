class TTT {
  constructor() {
    this.board = [
      ["X", " ", " "],
      [" ", "X", " "],
      [" ", " ", "X"]
    ]
  }

  drawBoard(board) {
    board.forEach((row, i) => {
      let rowNode = document.getElementById(`row-${i}`);

      row.forEach((cell) => {
        let buttonNode = document.createElement("button");
        buttonNode.innerText = cell;
        rowNode.append(buttonNode);
      });
    });
  }
}

let Game = new TTT;
Game.drawBoard(Game.board);
