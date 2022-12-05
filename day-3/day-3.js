import * as fs from 'fs';

// Part 1: Get max calories
const inputPath = process.cwd() + "/input.txt";
const allLines = fs.readFileSync(inputPath, 'utf-8');
const lines = allLines.split(/\r?\n/);

let totalScore = 0;
lines.forEach(line => {
    let pack1 = line.substring(0, line.length / 2);
    let pack2 = line.substring(line.length / 2);
    const set = new Set();

    const map = new Map();
    for (let item of pack1) {
        map.set(item, (map.get(item) || 0) + 1);
    }
    for (let item of pack2) {
        if (map.has(item)) {
            set.add(item);
        }
    }
    set.forEach(item => {
        let a = 'a'.charCodeAt(0);
        let z = 'z'.charCodeAt(0);
        let A = 'A'.charCodeAt(0);
        let code = item.charCodeAt(0);

        if (code >= a && code <= z) {
            totalScore += code - a + 1;
        } else {
            totalScore += code - A + 27;
        }
    });
});

console.log(totalScore);