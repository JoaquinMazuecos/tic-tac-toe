let board;
let playerO = "O";
let playerX = "X";
let currentPlayer= playerO;
let gameOber= false;


window.onload = function() {
    setGame();
}

function setGame(){

    board = [
        ["","",""],
        ["","",""],
        ["","",""]
        
    ]

    //Asignamos un div a cada casilla del tablero y le asignamos un id para la logica y clases para los estilos

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let tile = document.createElement("div");
            tile.id = i.toString() + "-" + j.toString();
            tile.classList.add("tile");
            if(i==0 || i==1){
            tile.classList.add("horizontal-line");
            }
            if(j==0 || j==1){
            tile.classList.add("vertical-line");
            }
            tile.addEventListener("click",setTile);
            document.getElementById("board").append(tile);

        }
        
    }

}

function setTile(){
    if(gameOber){
        return;
    }

    let coords = this.id.split("-");
    let i = parseInt(coords[0]);
    let j = parseInt(coords[1]);

    if(board[i][j] !=""){
        return;
    }

    board [i][j] = currentPlayer;
    this.innerText= currentPlayer;

    if(currentPlayer=="O"){
        currentPlayer= playerX;
    }else{
        currentPlayer=playerO;
    }

    winGame();
}

function winGame(){

    //comprobación horizontal
    for (let i = 0; i < 3; i++) {
        if(board[i][0]==board[i][1] && board[i][0]==board[i][2] && board[i][0] !="" ){
            for (let k = 0; k < 3; k++) {
                let tile = document.getElementById(i.toString()+ "-"+ k.toString())
                tile.classList.add("winner");
            }
            gameOber= true;
            
        }
        
    }

    //comprobacion vertical
    for (let j = 0; j < 3; j++) {
        if(board[0][j] == board[1][j] && board[0][j]==board[2][j] && board[0][j]!="" ){
            for (let k = 0; k < 3; k++) {
                let tile= document.getElementById(k.toLocaleString()+ "-" +j.toLocaleString());
                tile.classList.add("winner");

            }
            gameOber=true;
            
        }
        
    }

    //comprobaciñon diagonal
    if(board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] !=""){
        for (let k = 0; k < 3; k++) {
            let tile= document.getElementById(k.toString()+ "-" +k.toString());
            tile.classList.add("winner");
            
        }
        gameOber= true;
        
    }

    if(board[0][2] == board[1][1] && board[1][1] == board[2][0]  && board[0][2] !=""){
        let tile = document.getElementById("0-2");
        tile.classList.add("winner");

        tile = document.getElementById("1-1");
        tile.classList.add("winner");

        tile = document.getElementById("2-0");
        tile.classList.add("winner");

        gameOber= true;
        
    }
    return;
}