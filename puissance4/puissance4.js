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
                if(this.getCurrentPlayer() === 'A'){
                    this.grid[i][column] = 'A';
                    this.lastCoup = [i, column];
                    this.lastJoueur = 'A';
                    this.currentPlayer = 'B';
                    this.coup++;
                    return true;
                } else {
                    this.grid[i][column] = 'B';
                    this.lastCoup = [i, column];
                    this.lastJoueur = 'B';
                    this.currentPlayer = 'A';
                    this.coup++;
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


    isWin(){
        if(this.lastCoup === [0, 0]){
            if(this.lastJoueur === this.grid[1][0] === this.lastGrid[2][0] === this.grid[3][0])

        }
    }

    isDraw(){
        return this.coup === 42;
    }

    getBoard(){

    }
}

let pui = new puissance4();

for(let i = 0; i <= 6; i++){
    for(let j = 0; j <= 6; j++){
        pui.play(j);
    }
}

console.table(pui.grid);
console.log(pui.coup);