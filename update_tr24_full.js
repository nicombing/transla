import fs from 'fs';
import { tr24_part1 } from './src/tr24_part1.js';
import { tr24_part2 } from './src/tr24_part2.js';
import { tr24_part3 } from './src/tr24_part3.js';
import { tr24_part4 } from './src/tr24_part4.js';
import { documentLibrary } from './src/data.js';

const tr24_disclaimer = [
  {
    "id": "9",
    "title": "Disclaimer - Penafian",
    "content": [
      {
        "type": "paragraph",
        "en": "Deloitte refers to one or more of Deloitte Touche Tohmatsu Limited (“DTTL”), its global network of member firms, and their related entities (collectively, the “Deloitte organisation”). DTTL (also referred to as “Deloitte Global”) and each of its member firms and related entities are legally separate and independent entities, which cannot obligate or bind each other in respect of third parties. DTTL and each DTTL member firm and related entity is liable only for its own acts and omissions, and not those of each other. DTTL does not provide services to clients. Please see www.deloitte.com/about to learn more.",
        "id": "Deloitte merujuk pada satu atau lebih dari Deloitte Touche Tohmatsu Limited (“DTTL”), jaringan firma anggota globalnya, dan entitas terkaitnya (secara kolektif, “organisasi Deloitte”). DTTL (juga disebut sebagai “Deloitte Global”) dan masing-masing firma anggota dan entitas terkaitnya adalah entitas yang terpisah dan independen secara hukum, yang tidak dapat mewajibkan atau mengikat satu sama lain sehubungan dengan pihak ketiga. DTTL dan masing-masing firma anggota DTTL dan entitas terkait hanya bertanggung jawab atas tindakan dan kelalaiannya sendiri, dan bukan atas tindakan dan kelalaian masing-masing pihak lainnya. DTTL tidak memberikan layanan kepada klien. Silakan lihat www.deloitte.com/about untuk mempelajari lebih lanjut."
      },
      {
        "type": "paragraph",
        "en": "Deloitte Asia Pacific Limited is a company limited by guarantee and a member firm of DTTL. Members of Deloitte Asia Pacific Limited and their related entities, each of which are separate and independent legal entities, provide services from more than 100 cities across the region, including Auckland, Bangkok, Beijing, Hanoi, Hong Kong, Jakarta, Kuala Lumpur, Manila, Melbourne, Osaka, Seoul, Shanghai, Singapore, Sydney, Taipei and Tokyo.",
        "id": "Deloitte Asia Pacific Limited adalah perseroan terbatas dengan jaminan dan firma anggota DTTL. Anggota Deloitte Asia Pacific Limited dan entitas terkait, yang masing-masing merupakan badan hukum terpisah dan independen, memberikan layanan dari lebih dari 100 kota di seluruh wilayah, termasuk Auckland, Bangkok, Beijing, Hanoi, Hong Kong, Jakarta, Kuala Lumpur, Manila, Melbourne, Osaka, Seoul, Shanghai, Singapura, Sydney, Taipei, dan Tokyo."
      },
      {
        "type": "paragraph",
        "en": "About Deloitte Singapore\nIn Singapore, tax services are provided by Deloitte Tax Solutions Pte. Ltd. and other services (where applicable) may be carried out by its subsidiaries and/or affiliates.",
        "id": "Tentang Deloitte Singapura\nDi Singapura, layanan perpajakan disediakan oleh Deloitte Tax Solutions Pte. Ltd. dan layanan lainnya (jika berlaku) dapat dilakukan oleh anak perusahaan dan/atau afiliasinya."
      },
      {
        "type": "paragraph",
        "en": "Deloitte Tax Solutions Pte. Ltd. (Unique entity number: 202008330C) is a company incorporated in Singapore under the Companies Act.",
        "id": "Deloitte Tax Solutions Pte. Ltd. (Nomor entitas unik: 202008330C) adalah perusahaan yang didirikan di Singapura berdasarkan Undang-Undang Perusahaan."
      },
      {
        "type": "paragraph",
        "en": "Disclaimer\nThis communication contains general information only, and none of Deloitte Touche Tohmatsu Limited (“DTTL”), its global network of member firms or their related entities (collectively, the “Deloitte organisation”) is, by means of this communication, rendering professional advice or services. Before making any decision or taking any action that may affect your finances or your business, you should consult a qualified professional adviser. No representations, warranties or undertakings (express or implied) are given as to the accuracy or completeness of the information in this communication, and none of DTTL, its member firms, related entities, employees or agents shall be liable or responsible for any loss or damage whatsoever arising directly or indirectly in connection with any person relying on this communication. DTTL and each of its member firms, and their related entities, are legally separate and independent entities.",
        "id": "Penafian\nKomunikasi ini hanya memuat informasi umum, dan tidak satupun dari Deloitte Touche Tohmatsu Limited (“DTTL”), jaringan firma anggota globalnya atau entitas terkaitnya (secara kolektif, “organisasi Deloitte”) melalui komunikasi ini, yang memberikan nasihat atau layanan profesional. Sebelum membuat keputusan atau mengambil tindakan apa pun yang dapat memengaruhi keuangan atau bisnis Anda, Anda harus berkonsultasi dengan penasihat profesional yang berkualifikasi. Tidak ada representasi, jaminan, atau usaha (tersurat maupun tersirat) yang diberikan mengenai keakuratan atau kelengkapan informasi dalam komunikasi ini, dan baik DTTL, firma anggota, entitas terkait, karyawan, atau agennya tidak akan dimintai pertanggungjawaban atau bertanggung jawab atas kerugian apa pun atau kerusakan apa pun yang timbul secara langsung atau tidak langsung sehubungan dengan siapa pun yang mengandalkan komunikasi ini. DTTL dan masing-masing firma anggotanya, serta entitas terkaitnya, adalah entitas yang terpisah dan independen secara hukum."
      },
      {
        "type": "paragraph",
        "en": "© 2025 Deloitte Tax Solutions Pte. Ltd.",
        "id": "© 2025 Deloitte Tax Solutions Pte. Ltd."
      }
    ]
  }
];

const fullTR24 = [...tr24_part1, ...tr24_part2, ...tr24_part3, ...tr24_part4, ...tr24_disclaimer];

documentLibrary.TR24.versions.V1 = fullTR24;

const finalString = `export const documentLibrary = ${JSON.stringify(documentLibrary, null, 2)};`;
fs.writeFileSync('src/data.js', finalString, 'utf8');
console.log('Successfully updated data.js with FULL TR24 data');
