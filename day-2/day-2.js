import * as fs from 'fs';

// Part 1: Get max calories
const inputPath = process.cwd() + "/input.txt";
const allLines = fs.readFileSync(inputPath, 'utf-8');

const winHand = {
    'A': 'Z', // rock beats scissors
    'B': 'X', // paper beats rock
    'C': 'Y', // scissors beats paper
    'X': 'C',
    'Y': 'A',
    'Z': 'B',
};

const pointHand = {
    'A': 1,
    'B': 2,
    'C': 3,
    'X': 1,
    'Y': 2,
    'Z': 3,
};

const WIN_SCORE = 6;
const DRAW_SCORE = 3;
const LOSE_SCORE = 0;

// ==== PART ONE ====

const drawHand = {
    'A': 'X',
    'B': 'Y',
    'C': 'Z',
    'X': 'A',
    'Y': 'B',
    'Z': 'C',
}

const loseHand = {
    'A': 'Y',
    'B': 'Z',
    'C': 'X',
    'X': 'B',
    'Y': 'C',
    'Z': 'A',
}

function question1() {
    let oScore = 0;
    let yScore = 0;

    for (let line of allLines.split(/\r?\n/)) {
        let [opponent, nothing, you] = line;

        let roundOScore = 0;
        let roundYScore = 0;

        if (pointHand[you] === pointHand[opponent]) {
            roundOScore += DRAW_SCORE + pointHand[opponent];
            roundYScore += DRAW_SCORE + pointHand[you];
        } else if (winHand[you] === opponent) {
            roundOScore += LOSE_SCORE + pointHand[opponent];
            roundYScore += WIN_SCORE + pointHand[you];
        } else {
            roundOScore += WIN_SCORE + pointHand[opponent];
            roundYScore += LOSE_SCORE + pointHand[you];
        }

        oScore += roundOScore;
        yScore += roundYScore;
    }

    return [yScore, oScore];
}

const [yourScore, opponentScore] = question1();

console.log({ yourScore, opponentScore });

// ==== PART TWO ====

function question2() {
    let oScore = 0;
    let yScore = 0;

    for (let line of allLines.split(/\r?\n/)) {
        let [opponent, nothing, result] = line;

        let roundOScore = 0;
        let roundYScore = 0;

        // lose
        if (result === 'X') {
            roundOScore += WIN_SCORE + pointHand[opponent];
            roundYScore += LOSE_SCORE + pointHand[winHand[opponent]];
 
        // draw
        } else if (result === 'Y') {
            roundOScore += DRAW_SCORE + pointHand[opponent];
            roundYScore += DRAW_SCORE + pointHand[drawHand[opponent]];

        // win
        } else {
            roundOScore += LOSE_SCORE + pointHand[opponent];
            roundYScore += WIN_SCORE + pointHand[loseHand[opponent]];
        }

        oScore += roundOScore;
        yScore += roundYScore;
    }

    return [yScore, oScore];
}

const [newYourScore, newOpponentScore] = question2();

console.log({newYourScore, newOpponentScore});