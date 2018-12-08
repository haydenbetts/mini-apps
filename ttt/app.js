let board = [
  ["X", " ", " "],
  [" ", "X", " "],
  [" ", " ", "X"]
]

board.forEach((row, i) => {
  let rowNode = document.getElementById(`row-${i}`);

  row.forEach((cell) => {
    let buttonNode = document.createElement("button");
    buttonNode.innerText = cell;
    rowNode.append(buttonNode);
  });
});