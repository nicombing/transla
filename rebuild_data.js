import fs from 'fs';
import { tr23_part1 } from './src/tr23_part1.js';
import { tr23_part2 } from './src/tr23_part2.js';
import { tr23_part3 } from './src/tr23_part3.js';
import { tr23_part4 } from './src/tr23_part4.js';
import { documentLibrary } from './src/data.js';

const tr23_disclaimer = [
  {
    "id": "9",
    "title": "Disclaimer - Penafian",
    "content": [
      {
        "type": "paragraph",
        "en": "Deloitte refers to one or more of Deloitte Touche Tohmatsu Limited (“DTTL”), its global network of member firms, and their related entities (collectively, the “Deloitte organization”). DTTL (also referred to as “Deloitte Global”) and each of its member firms and related entities are legally separate and independent entities, which cannot obligate or bind each other in respect of third parties. DTTL and each DTTL member firm and related entity is liable only for its own acts and omissions, and not those of each other. DTTL does not provide services to clients. Please see www.deloitte.com/about to learn more.",
        "id": ""
      },
      {
        "type": "paragraph",
        "en": "Deloitte Asia Pacific Limited is a company limited by guarantee and a member firm of DTTL. Members of Deloitte Asia Pacific Limited and their related entities, each of which are separate and independent legal entities, provide services from more than 100 cities across the region, including Auckland, Bangkok, Beijing, Hanoi, Hong Kong, Jakarta, Kuala Lumpur, Manila, Melbourne, Osaka, Seoul, Shanghai, Singapore, Sydney, Taipei and Tokyo.",
        "id": ""
      },
      {
        "type": "paragraph",
        "en": "This communication contains general information only, and none of Deloitte Touche Tohmatsu Limited (“DTTL”), its global network of member firms or their related entities (collectively, the “Deloitte organization”) is, by means of this communication, rendering professional advice or services. Before making any decision or taking any action that may affect your finances or your business, you should consult a qualified professional adviser.",
        "id": ""
      },
      {
        "type": "paragraph",
        "en": "No representations, warranties or undertakings (express or implied) are given as to the accuracy or completeness of the information in this communication, and none of DTTL, its member firms, related entities, employees or agents shall be liable or responsible for any loss or damage whatsoever arising directly or indirectly in connection with any person relying on this communication. DTTL and each of its member firms, and their related entities, are legally separate and independent entities.",
        "id": ""
      },
      {
        "type": "paragraph",
        "en": "© 2024 Deloitte Tax Solutions Pte. Ltd.",
        "id": ""
      }
    ]
  }
];

const fullTR23 = [...tr23_part1, ...tr23_part2, ...tr23_part3, ...tr23_part4, ...tr23_disclaimer];

documentLibrary.TR23.versions.V1 = fullTR23;

const finalString = `export const documentLibrary = ${JSON.stringify(documentLibrary, null, 2)};`;
fs.writeFileSync('src/data.js', finalString, 'utf8');
console.log('Successfully updated data.js with TR23 exact data');
