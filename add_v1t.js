import fs from 'fs';
import { documentLibrary } from './src/data.js';

function createV1T(v1Data) {
  // Deep clone to avoid mutating V1
  const v1tData = JSON.parse(JSON.stringify(v1Data));

  v1tData.forEach(section => {
    // Transform title
    // Example: "1. Executive summary - Ringkasan Eksekutif" -> "1. Ringkasan Eksekutif"
    const titleMatch = section.title.match(/^([0-9.]+\s+).*? - (.*)/);
    if (titleMatch) {
      section.title = titleMatch[1] + titleMatch[2];
    } else if (section.title.includes(' - ')) {
      section.title = section.title.split(' - ')[1];
    }

    // Transform content
    section.content.forEach(block => {
      if (block.type === 'paragraph') {
        block.en = block.id !== undefined ? block.id : '';
        delete block.id;
      } else if (block.type === 'table') {
        if (block.headers) {
          block.headers.forEach(h => {
            h.en = h.id !== undefined ? h.id : '';
            delete h.id;
          });
        }
        if (block.rows) {
          block.rows.forEach(row => {
            row.forEach(cell => {
              cell.en = cell.id !== undefined ? cell.id : '';
              delete cell.id;
            });
          });
        }
      } else if (block.type === 'image') {
        if (block.caption) {
          block.caption.en = block.caption.id !== undefined ? block.caption.id : '';
          delete block.caption.id;
        }
      }
    });
  });

  return v1tData;
}

if (documentLibrary.TR24 && documentLibrary.TR24.versions.V1) {
  documentLibrary.TR24.versions.V1T = createV1T(documentLibrary.TR24.versions.V1);
}

if (documentLibrary.TR25 && documentLibrary.TR25.versions.V1) {
  documentLibrary.TR25.versions.V1T = createV1T(documentLibrary.TR25.versions.V1);
}

const finalString = `export const documentLibrary = ${JSON.stringify(documentLibrary, null, 2)};`;
fs.writeFileSync('src/data.js', finalString, 'utf8');
console.log('Successfully created V1T versions for TR24 and TR25');
