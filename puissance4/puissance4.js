class puissance4{
    grid;
    currentPlayer = 'A';
    coup = 0;
    lastCoup;
    lastJoueur;
    constructor(){
        this.grid = new Array();

        for(let x = 0; x < 6; x++){
            this.grid.push(new Array(7));
            
        }
    }
    

    play(column){

        for(let i = 5; i >= 0; i--){
            if(this.grid[i][column] === undefined){

                if(this.getCurrentPlayer() === 'A'){ // joueur A joue
                    this.grid[i][column] = 'A';
                    this.lastCoup = [i, column];
                    this.lastJoueur = 'A';
                    this.coup++;

                    if(this.isWin('A')){
                        console.log("A gagne");
                    }

                    this.currentPlayer = 'B';
                    return true;
                } 
                
                
                else { // joueur B gagne
                    this.grid[i][column] = 'B';
                    this.lastCoup = [i, column];
                    this.lastJoueur = 'B';
                    this.coup++;

                    if(this.isWin('B')){
                        console.log("B gagne");
                    }
                    
                    this.currentPlayer = 'A';
                    return true;
                }
            }
        }
        console.log("colonne indisponible, rejouer");
        return false;
        
    }

    getCurrentPlayer(){
        return this.currentPlayer;
    }


    isWin(joueur){
        // diag bas droite [0 => 3] [0 => 2]
        for(let x = 0; x < 3; x++){
            for (let y = 0; y < 2; y++) {
                if(
                    this.grid[x][y] === joueur &&
                    this.grid[x+1][y+1] === joueur &&
                    this.grid[x+2][y+2] === joueur &&
                    this.grid[x+3][y+3] === joueur)
                    {
                        return true;
                    }
                
            }
        }
        // diag bas gauche [3 => 6] [0 => 2]
        for (let x = 3; x < 6; x++) {
            for (let y = 0; y < 2; y++) {
                if(
                    this.grid[x][y] === joueur &&
                    this.grid[x-1][y+1] === joueur &&
                    this.grid[x-2][y+2] === joueur &&
                    this.grid[x-3][y+3] === joueur)
                {
                    return true;
                }          
            }
            
        }
        // diag haut droite [0 => 3] [3 => 5]
        for (let x = 0; x < 3; x++) {
            for (let y = 3; y < 5; y++) {
                if(
                    this.grid[x][y] === joueur &&
                    this.grid[x+1][y-1] === joueur && 
                    this.grid[x+2][y-2] === joueur && 
                    this.grid[x+3][y-3] === joueur
                ){
                    return true;
                }
            }
        }
        // diag haut gauche [3 => 6] [3 => 5]
        for (let x = 3; x < 6; x++) {
            for (let y = 3; y < 5; y++) {
                if(
                    this.grid[x][y] === joueur &&
                    this.grid[x-1][y-1] === joueur && 
                    this.grid[x-2][y-2] === joueur && 
                    this.grid[x-3][y-3] === joueur
                ){
                    return true;
                }
            }
        }
        // dir haut [0 => 6] [3 => 5]
        for (let x = 0; x < 6; x++) {
            for (let y = 3; y < 5; y++) {
                if(
                    this.grid[x][y] === joueur &&
                    this.grid[x][y-1] === joueur && 
                    this.grid[x][y-2] === joueur && 
                    this.grid[x][y-3] === joueur
                ){
                    return true;
                }
            }
        }
        // dir bas [0 => 6] [3 => 5]
        for (let x = 0; x < 6; x++) {
            for (let y = 3; y < 5; y++) {
                if(
                    this.grid[x][y] === joueur &&
                    this.grid[x][y+1] === joueur && 
                    this.grid[x][y+2] === joueur && 
                    this.grid[x][y+3] === joueur
                ){
                    return true;
                }
            }
        }
        // dir droite [0 => 3] [0 => 5]
        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 5; y++) {
                if(
                    this.grid[x][y] === joueur &&
                    this.grid[x+1][y] === joueur && 
                    this.grid[x+2][y] === joueur && 
                    this.grid[x+3][y] === joueur
                ){
                    return true;
                }
            }
        }
        // dir gauche [3 => 6] [0 => 5]
        for (let x = 3; x < 6; x++) {
            for (let y = 0; y < 5; y++) {
                if(
                    this.grid[x][y] === joueur &&
                    this.grid[x-1][y] === joueur && 
                    this.grid[x-2][y] === joueur && 
                    this.grid[x-3][y] === joueur
                ){
                    return true;
                }
            }
        }

    }

    isDraw(){
        return this.coup === 42;
    }

    getBoard(){
        return this.grid;
    }
}

let pui = new puissance4();

for(let i = 0; i <= 5; i++){
    for(let j = 0; j <= 5; j++){
        pui.play(j);
    }
}


function renderBoard() {
    const boardElement = document.querySelector('.board');

    // Création du plateau de jeu
    for (let i = 0; i < 6; i++) { // 6 lignes
        const columnElement = document.createElement('div');
        columnElement.classList.add('column');
        
        for (let j = 0; j < 7; j++) { // 7 colonnes
            const caseElement = document.createElement('div');
            caseElement.classList.add('case');
            columnElement.appendChild(caseElement);
        }

        boardElement.appendChild(columnElement);
    }
}

// Appel de la fonction pour afficher le plateau de jeu
// renderBoard();

console.table(pui.grid);