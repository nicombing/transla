import fs from 'fs';
import { tr24_part1 } from './src/tr24_part1.js';
import { documentLibrary } from './src/data.js';

documentLibrary.TR24.versions.V1 = [...tr24_part1];

const finalString = `export const documentLibrary = ${JSON.stringify(documentLibrary, null, 2)};`;
fs.writeFileSync('src/data.js', finalString, 'utf8');
console.log('Successfully updated data.js with TR24 part 1');
