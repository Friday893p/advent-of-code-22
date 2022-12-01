import * as fs from 'fs';

// Part 1: Get max calories
const inputPath = process.cwd() + "/day-1/input.txt";
const allLines = fs.readFileSync(inputPath, 'utf-8');

let max = 0;
let currentMax = 0;

allLines.split(/\r?\n/).forEach((line, index) => {
    if (line === "") {
        max = Math.max(max, currentMax);
        currentMax = 0;
    } else {
        currentMax += Number(line);
    }
});

console.log('====PART ONE====')
console.log('Max calories are: ' + max);

// Part 1: Get the combined total calories of the top three elves
let max1 = 0;
let max2 = 0;
let max3 = 0;
currentMax = 0;

allLines.split(/\r?\n/).forEach((line, index) => {
    if (line === "") {
        if (currentMax > max1) {
            [max2, max3] = [max1, max2];
            max1 = currentMax;
        } else if (currentMax > max2) {
            [max2, max3] = [currentMax, max2];
        } else {
            max3 = Math.max(max3, currentMax);
        }
        currentMax = 0;
    } else {
        currentMax += Number(line);
    }
});

console.log('\n====PART TWO====');
console.log(
    'Top calories are: '
    + [max1, max2, max3]
    + ' totalling '
    + (max1 + max2 + max3)
    + ' calories');

