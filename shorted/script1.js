// for oponent turn not to show
document.getElementById('oponent').style.display = 'none';

// index      1    2    3    4    5    6    7    8    9
let mat =  [[false ,false ,false ],
            [false ,false ,false ],
            [false ,false ,false ]];


var x = 'x';

// how many times each player won
var amountOfWins = {
    you: 0,
    oponent: 0
}

// placing X or O in selected location 
const put = (location) => { // location of td == id

    let counter = 1; // to compair to location
    let td;

    
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {

            // for later check gets value
            if (counter == location) { 
                td = mat[i][j]; // save td as the clicked value
            };

            // if location found and x or o isnt there
            if (counter == location && mat[i][j] != 'x' && mat[i][j] != 'o') {
                document.getElementById(location).innerHTML = x; // adds x to selected location
                document.getElementById(location).style.backgroundColor = 'white'; // turns background color where x is located
                mat[i][j] = x // insert x to mat
                if (x == 'o') { // if it is oponent turn
                    document.getElementById('oponent').style.display = 'none'; //oponent turn display turn of
                    document.getElementById('you').style.display = 'block'; //your turn display turn on
                }
                if (x == 'x') { // if it is your turn
                    document.getElementById('you').style.display = 'none'; //your turn display turn of
                    document.getElementById('oponent').style.display = 'block'; //oponent turn display turn on
                }
            }
            // adds 1 to counter on every 'tr' until it maches the location
            counter ++;
        } 
    }

    // if player clicked on not fild tr 
    if (td != 'x' && td != 'o') {
        if (x == 'o') {
            x = 'x'
        }
        else {
            x = 'o'
        };
    };
    
};

// checks the board at all tims
const checkBoard = () => {
    
    // return x to wht it was before to check the board
    if (x == 'o') {
        x = 'x';
    }
    else {
        x = 'o';
    };

    // all posible wins
    const wins = [
        [[x ,!x ,!x ],[!x ,x ,!x ],[!x ,!x ,x ]],
    
        [[!x ,!x ,x ],[!x ,x ,!x ],[x ,!x ,!x ]],
    
        [[x ,x ,x ],[!x ,!x ,!x ],[!x ,!x ,!x ]],
    
        [[!x ,!x ,!x ],[x ,x ,x ],[!x ,!x ,!x ]],
    
        [[!x ,!x ,!x ],[!x ,!x ,!x ],[x ,x ,x ]],
    
        [[!x ,!x ,x ],[!x ,!x ,x ],[!x ,!x ,x ]],
         
        [[!x ,x ,!x ],[!x ,x ,!x ],[!x ,x ,!x ]],
    
        [[x ,!x ,!x ],[x ,!x ,!x ],[x ,!x ,!x ]],
    ];

    let counter = 0; // counter for hits on win[i]
    let xCounter = 0; // if 40 its a draw

    for (let i = 0; i < wins.length; i++) {
        for (let j = 0; j < wins[i].length; j++) {
            for (let k = 0; k < wins[i][j].length; k++) {
                // checkes if mat[j][k] == O or X to run only on the current x
                if (mat[j][k] == x) {
                    xCounter ++ // counts amount of x or c on mat

                    // checkes on mat for current x in the wins[i]
                    if (mat[j][k] == wins[i][j][k]) {
                    counter ++ ; // if found its a hit
                    };
                };
            };
        };

        // if 3 hits you won and add wins
        if (counter == 3 && x == 'x') {
            alert('You won'); 
            amountOfWins.you = (amountOfWins.you + 1) // adds win to you
            document.getElementById('you won').innerHTML = `you won : ${amountOfWins.you}` // showes your wins
            again() // resets the board after win
        }
        if (counter == 3 && x == 'o') {
            alert('Oponent won');
            amountOfWins.oponent +=1 // adds win to oponent
            document.getElementById('oponent won').innerHTML = `you oponent : ${amountOfWins.oponent}` // oponent your wins
            again() // resets the board after win
        };
        
        counter = 0; // reset at the end of win[i]
    }

    // if 40 its a draw
    if (xCounter == 40) {
        alert('its a draw')
        again()
    }

    // return x to what it was before the func to continue the game
    if (x == 'o') {
        x = 'x';
    }
    else {
        x = 'o';
    };

};

// resets board and mat
const again = () => {
    for (let i = 1; i <= 9; i++) {
        document.getElementById(i).innerHTML = ''; // removes anything in tr
        document.getElementById(i).style.backgroundColor = 'lightgrey'; // turns trs background to lightgrey
    };
    // resets mat
    mat = [[false ,false ,false ],
           [false ,false ,false ],
           [false ,false ,false ]];
};



