import * as fs from 'fs';

// Part 1: Get max calories
const inputPath = process.cwd() + "/day-1/input.txt";
const allLines = fs.readFileSync(inputPath, 'utf-8');

console.log(allLines);