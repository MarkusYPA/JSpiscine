'use strict';

const emptyPuzzle = `2001
0..0
1000
0..0`
const words = ['casa', 'alan', 'ciao', 'anta']

function createArrayPuzzle(emptyPuzzle) {
    let stringLines = String(emptyPuzzle).split(/\r?\n/);
    let arrayLines = [];
    for (let strLine of stringLines) {
        let arrayLine = [];
        for (let char of strLine) {
            arrayLine.push(char);
        }
        arrayLines.push(arrayLine);
    }
    return arrayLines;
}

function getStartCoordinates(puzzle) {
    let starts = [];    // [row, column] pairs in that order

    for (let i = 0; i < puzzle.length; i++) {
        for (let j = 0; j < puzzle[i].length; j++) {

            let value = puzzle[i][j];
            if (value != 0 && value != '.') {

                // some are added multiple times
                while (value > 0) {
                    starts.push([i, j]);
                    value--;
                }
            }
        }
    }

    return starts;
}

function wordFits(puzzle, word, coordinates) {
    let directions = [];
    let beforeFirst = '';
    let afterLast = '';


    // try horizontal (right)
    let success = true;
    for (let i = 0; i < word.length; i++) {
        let row = coordinates[0];
        let col = coordinates[1] + i;
        if (row > puzzle.length - 1 || col > puzzle[0].length) {
            success = false;
            break;
        }

        let cell = puzzle[row][col];
        if (!(cell == 2 || cell == 1 || cell == 0 || cell == word[i])) {
            success = false;
        }

        // save value of place before word
        if (i == 0) {
            if (col - 1 < 0) {
                beforeFirst = undefined;
            } else {
                beforeFirst = puzzle[row][col - 1]
            }
        }

        // save value of place after word
        if (i == word.length - 1) {
            if (col + 1 > puzzle[0].length - 1) {
                afterLast = undefined;
            } else {
                afterLast = puzzle[row][col + 1]
            }
        }
    }
    // No fit if theres room before or after the word
    if (!(beforeFirst == '.' || beforeFirst == undefined) || !(afterLast == '.' || afterLast == undefined)) {
        success = false;
    }

    if (success) {
        directions.push('right')
    }

    // try vertical (down)
    beforeFirst = '';
    afterLast = '';
    success = true;
    for (let i = 0; i < word.length; i++) {
        let row = coordinates[0] + i;
        let col = coordinates[1];
        if (row > puzzle.length - 1 || col > puzzle[0].length) {
            success = false;
            break;
        }

        let cell = puzzle[row][col];
        if (!(cell == 2 || cell == 1 || cell == 0 || cell == word[i])) {
            success = false;
        }

        // save value of place before word
        if (i == 0) {
            if (row - 1 < 0) {
                beforeFirst = undefined;
            } else {
                beforeFirst = puzzle[row - 1][col]
            }
        }

        // save value of place after word
        if (i == word.length - 1) {
            if (row + 1 > puzzle.length - 1) {
                afterLast = undefined;
            } else {
                afterLast = puzzle[row + 1][col]
            }
        }
    }
    // No fit if theres room before or after the word
    if (!(beforeFirst == '.' || beforeFirst == undefined) || !(afterLast == '.' || afterLast == undefined)) {
        success = false;
    }

    if (success) {
        directions.push('down')
    }

    return directions;
}

function updatePuzzle(puzzle, word, coordinates, direction) {
    // Shallow copy line by line so original lines don't get modified
    let newPuzzle = [];
    for (let line of puzzle) {
        let newLine = [...line];
        newPuzzle.push(newLine);
    }

    let [rowAdd, colAdd] = [0, 0];
    if (direction == 'down') rowAdd = 1;
    if (direction == 'right') colAdd = 1;

    for (let i = 0; i < word.length; i++) {
        let row = coordinates[0] + i * rowAdd;  // +i happens when down
        let col = coordinates[1] + i * colAdd;  // +i happens when right
        newPuzzle[row][col] = word[i];
    }

    return newPuzzle;
}

function uniqueSolution(solutions, puzzle) {
    let jsonString = JSON.stringify(puzzle);
    for (let sol of solutions) {
        if (jsonString == JSON.stringify(sol)) {
            return false;
        }
    }
    return true;
}

function crosswordSolver(emptyPuzzle, words) {
    // TODO?: Check words
    // - is it an array (of stings)
    // - duplicate words

    // Puzzle to an array of character arrays for mutability
    let puzzle = createArrayPuzzle(emptyPuzzle);
    // TODO: Check input puzzle: 
    // - Do we check if it's a string?
    // - not empty
    // - allow: 0, 1, 2 and .
    // - lines must be same length
    // - don't allow: more cells than chars in words

    let starts = getStartCoordinates(puzzle);
    if (starts.length != words.length) {
        console.log("Error 0");
        return;
    }

    let solutions = [];


    // start solver function to find solutions
    solver(puzzle, words, 0)

    function solver(puzzle, words, startIndex) {
        //console.log("solver:", words);

        // Too many solutions, abort
        if (solutions.length > 1) {
            return;
        }

        // Solution complete, end here
        // What about checking with (words.length == 0)?
        if (startIndex > starts.length - 1) {
            // Start positions with '2' will spawn duplicate solutions so check uniqueness
            if (uniqueSolution(solutions, puzzle)) {
                solutions.push(puzzle);
            }            
            return;
        }

        // Words remain, so we go on
        let startCoords = starts[startIndex];
        startIndex++;
        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            const directions = wordFits(puzzle, word, startCoords);

            if (directions) {
                for (let direction of directions) {
                    let newPuzzle = updatePuzzle(puzzle, word, startCoords, direction);
                    let newWords = words.slice(0, i).concat(words.slice(i + 1)) // remove this word
                    solver(newPuzzle, newWords, startIndex);
                }
            }
        }
    }

    if (solutions.length != 1) {
        console.log("solutions:");
        console.log(solutions);
        console.log("Error 1");
        return;
    }

    // Maybe check some words are not on top of each other?
    // - sun and sunglasses/suncream must not have same start and direction
    // - if words must take all available space we're ok

    for (let line of solutions[0]) {
        for (let char of line) {
            process.stdout.write(char);
        }
        console.log();
    }
}

crosswordSolver(emptyPuzzle, words);
