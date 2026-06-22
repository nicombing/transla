import fs from 'fs';
import { documentLibrary } from './src/data.js';
import { tr25_part1 } from './src/tr25_part1.js';
import { tr25_part2 } from './src/tr25_part2.js';
import { tr25_part3 } from './src/tr25_part3.js';
import { tr25_part4 } from './src/tr25_part4.js';

const fullTR25 = [...tr25_part1, ...tr25_part2, ...tr25_part3, ...tr25_part4];

// Completely reset TR25 to only contain V1
documentLibrary.TR25 = {
  id: "TR25",
  name: "TR25 - 2025 Master File",
  versions: {
    V1: fullTR25
  }
};

const finalString = `export const documentLibrary = ${JSON.stringify(documentLibrary, null, 2)};`;
fs.writeFileSync('src/data.js', finalString, 'utf8');
console.log('Successfully completely reset TR25 and populated V1 in data.js');
