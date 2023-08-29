const body = document.querySelector("body");

function criarTabuleiro() {
  const div = document.createElement("div");

  const board = div.cloneNode(true);
  board.classList.add("board");
  body.appendChild(board);

  const cell = div.cloneNode(true);
  cell.classList.add("cell");

  const quadrados = Array(9).fill(0);
  quadrados.forEach((_, index) => {
    let identificador = index + 1;
    cell.setAttribute("id", identificador);
    cell.setAttribute("onclick", `marcarJogada(${identificador})`);
    board.appendChild(cell.cloneNode(true));
  });
}

criarTabuleiro();

let ultimaJogada = "O";

function marcarJogada(identificador) {
  const quadradoPequeno = document.getElementById(identificador);

  const jogada = quadradoPequeno.innerHTML;

  if (jogada != "") {
    return;
  }

  if (ultimaJogada == "O") {
    quadradoPequeno.innerHTML = "X";
    ultimaJogada = "X";
    return;
  }

  quadradoPequeno.innerHTML = "O";
  ultimaJogada = "O";
}

function vitoria(jogador) {
  const contarVitoria = [
    [1, 2, 3],[4, 5, 6],[7, 8, 9]
    [1, 4, 7],[2, 5, 8],[3, 6, 9]
    [1, 5, 9],[3, 5, 7]
  ];
}

