let turn = "x";
let symbols = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const board = document.querySelector(".board");
const tiles = Array.from(document.querySelectorAll(".tile"));

board.addEventListener("click", ({ target }) => {
  const classes = Array.from(target.classList);
  if (classes.includes("tile") && classes.length !== 1) return;

  const idx = tiles.indexOf(target);

  target.classList.add(`tile-${turn}`);
  symbols[idx % 3][Math.floor(idx / 3)] = turn;
  turn = turn === "x" ? "o" : "x";

  displayTurn(turn);

  checkWin();
});

function displayTurn(turn) {
  // 1. zmień text elementu h1 z klasą "turn" zależnie od tego, czyja jest aktualnie tura
  const whoseTurn = document.querySelector(".turn");
  whoseTurn.innerText = turn.toUpperCase() + " turn ";
}

function checkWin() {
  // 2. sprawdź czy któryś z graczy wygrał pojedynek - jeśli tak wyświetla komunikat (możesz użyć np. funkcji "alert(...)")
  if (symbols[0][0] !== "" && symbols[1][1] !== "" && symbols[2][2] !== "") {
    if (symbols[0][0] === symbols[1][1] && symbols[1][1] === symbols[2][2]) {
      if (turn === "x") {
        alert("O player won ");
      } else {
        alert("X player won");
      }
    }
  }
  if (symbols[2][0] !== "" && symbols[1][1] !== "" && symbols[0][2] !== "") {
    if (symbols[2][0] === symbols[1][1] && symbols[1][1] === symbols[0][2]) {
      if (turn === "x") {
        alert("O player won ");
      } else {
        alert("X player won");
      }
    }
  }
  if (symbols[0][0] !== "" && symbols[0][1] !== "" && symbols[0][2] !== "") {
    if (symbols[0][0] === symbols[0][1] && symbols[0][1] === symbols[0][2]) {
      if (turn === "x") {
        alert("O player won ");
      } else {
        alert("X player won");
      }
    }
  }
  if (symbols[1][0] !== "" && symbols[1][1] !== "" && symbols[1][2] !== "") {
    if (symbols[1][0] === symbols[1][1] && symbols[1][1] === symbols[1][2]) {
      if (turn === "x") {
        alert("O player won ");
      } else {
        alert("X player won");
      }
    }
  }
  if (symbols[2][0] !== "" && symbols[2][1] !== "" && symbols[2][2] !== "") {
    if (symbols[2][0] === symbols[2][1] && symbols[2][1] === symbols[2][2]) {
      if (turn === "x") {
        alert("O player won ");
      } else {
        alert("X player won");
      }
    }
  }

  if (symbols[0][0] !== "" && symbols[1][0] !== "" && symbols[2][0] !== "") {
    if (symbols[0][0] === symbols[1][0] && symbols[1][0] === symbols[2][0]) {
      if (turn === "x") {
        alert("O player won ");
      } else {
        alert("X player won");
      }
    }
  }

  if (symbols[0][1] !== "" && symbols[1][1] !== "" && symbols[2][1] !== "") {
    if (symbols[0][1] === symbols[1][1] && symbols[1][1] === symbols[2][1]) {
      if (turn === "x") {
        alert("O player won ");
      } else {
        alert("X player won");
      }
    }
  }

  if (symbols[0][2] !== "" && symbols[1][2] !== "" && symbols[2][2] !== "") {
    if (symbols[0][2] === symbols[1][2] && symbols[1][2] === symbols[2][2]) {
      if (turn === "x") {
        alert("O player won ");
      } else {
        alert("X player won");
      }
    }
  }
}

// 3. dodaj listener pod przycisk z napisaem "reset" tak, aby po jego kliknięciu wywołać funkcję reset
document.querySelector(".reset").addEventListener("click", reset);

function reset() {
  let symbols = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  document.querySelectorAll(".tile").forEach((tile) => {
    tile.classList.remove("tile-x");
    tile.classList.remove("tile-o");
  });
  displayTurn("x");
}
