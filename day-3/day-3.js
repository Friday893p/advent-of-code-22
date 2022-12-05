import * as fs from 'fs';

// Part 1: Get max calories
const inputPath = process.cwd() + "/test.txt";
const allLines = fs.readFileSync(inputPath, 'utf-8');

console.log(allLines);