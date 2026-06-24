const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'src', 'data.js');
let dataContent = fs.readFileSync(dataPath, 'utf8');

// I will parse the data in memory. Since data.js exports a JS object, 
// I can execute it, modify it, and then write it back as a string, but 
// `documentLibrary` is exported. Let's just require it, modify it, and stringify.
// Actually, data.js has `export const documentLibrary = { ... }`.
// I can temporarily change it to module.exports, require it, modify, and rewrite.

let tempDataContent = dataContent.replace('export const documentLibrary =', 'module.exports =');
fs.writeFileSync(path.join(__dirname, 'tempData.cjs'), tempDataContent);

const documentLibrary = require('./tempData.cjs');

// Text data for Appendix A
const appAText = `
EURL Agri Commodities	Algeria	100
Olam Almonds Australia Pty Ltd	Australia	100
Olam Food Ingredients Australia Proprietary Limited	Australia	100
Olam Orchards Australia Pty Ltd	Australia	100
Olam Agricola Ltda	Brazil	100
Olam Armazens Gerais Ltda	Brazil	100
Olam Burkina Sarl	Burkina Faso	100
Ikawa Nziza Sprl	Burundi	100
Olam Outspan (Cambodia) Co., Ltd.	Cambodia	100
Olam Food Ingredients Cameroon S.A.	Cameroon	100
Club Coffee Company Inc.	Canada	100
Club Coffee L.P.	Canada	100
Northern Lights Research Inc.	Canada	100
Olam Canada Inc.	Canada	100
OFI Squirrel (Wuhu) Co Ltd	China	80
Olam Food Ingredients Shanghai Limited	China	100
Shandong Key Foods Co. Ltd	China	100
Ofi (Wuhu) Co.,Ltd	China	100
Olam Agro Colombia SAS	Colombia	100
Virunga Coffee SARL	The Democratic Republic Of the Congo	100
Olam Ecuador SA	Ecuador	100
Agri Commodities L.L.C.	Egypt	99.995
Dehydro Foods S.A.E.	Egypt	100
Olam Georgia LLC	Georgia	100
Marsch Importhandels GmbH	Germany	100
Marsch International GmbH	Germany	100
Olam Cocoa Deutschland GmbH	Germany	100
Olam Deutschland GmbH	Germany	100
Olam Cocoa Processing Ghana Limited	Ghana	100
Olam Food Ingredients Ghana Ltd	Ghana	100
Olam Agro Guatemala SA	Guatemala	100
Olam Honduras S.A. de C.V	Honduras	100
Olam Enterprises India Private Limited	India	100
Olam Food Ingredients India Private Limited (f.k.a Olam Agro India Private Limited)	India	100
Olam Innovation Centre India Private Limited	India	100
PT Bumitangerang Mesindotama	Indonesia	100
PT Dipankara Dhanya Indonesia	Indonesia	100
PT Olam Cocoa Indonesia	Indonesia	100
PT Olam Indonesia	Indonesia	100
Olam Insurance Limited	Isle of Man	100
Olam Italia S.R.L	Italy	100
Blenda SRL	Italy	70
Olam Cocoa Processing Cote d Ivoire	Ivory Coast	100
Olam Ivoire Sarl	Ivory Coast	100
Outspan Ivoire	Ivory Coast	100
Outspan Bolovens Limited	Lao People's Democratic Republic	100
Olam Cocoa (Sabah) Sdn. Bhd.	Malaysia	100
Outspan Malaysia Sdn. Bhd.	Malaysia	100
OFI MALAYSIA SDN. BHD	Malaysia	100
Olam Investments Limited	Mauritius	100
Olam Agro Mexico S.A. de C.V.	Mexico	100
Olam Brands B.V.	Netherlands	100
Olam Cocoa B.V.	Netherlands	100
Olam Cocoa International B.V.	Netherlands	100
Olam Europe B.V	Netherlands	100
Olam Holding BV	Netherlands	100
Olam Services B.V	Netherlands	100
ofi Holdings BV	Netherlands	100
ofi Brands BV	Netherlands	100
ofi AtSource BV	Netherlands	100
Olam Treasury B.V.	Netherlands	100
Olam Food Ingredients New Zealand Limited	New Zealand	100
Olam Nicaragua S.A.	Nicaragua	100
Outspan Nigeria Ltd	Nigeria	100
Outspan PNG Limited	Papua New Guinea	100
Olam Agro Peru SAC	Peru	100
Olam Food Ingredients Philippines Inc	Philippines	100
Olam Polska Sp. Z.o.o.	Poland	100
Agrohub Commodities Pte Ltd	Singapore	100
Olam Cocoa Pte Ltd	Singapore	100
Olam Food Ingredients Vietnam Pte. Ltd.	Singapore	100
Olam International Limited	Singapore	100
Olam Treasury Pte Ltd	Singapore	100
YTS Holdings Pte Ltd	Singapore	100
Olam Food Ingredients Spain S.L.	Spain	100
Seda Outspan Iberia S.L (Sociedad Unipersonal)	Spain	100
Olam Suisse Sarl	Switzerland	100
Schluter SA	Switzerland	100
Aviv Tanzania Limited	Tanzania	100
Outspan Agro Timor Unipessoal LDA	Timor-Leste	100
ofi Tarim Sanayi ve Ticaret A.Ş (f.k.a. Progıda Tarım Űrűnleri Sanayi ve Ticaret A.Ş.)	Turkey	100
Olam Tarim Urunleri Yem Maddeleri Sanayi ve Ticaret Limited Sirketi	Turkey	100
Olam (Uganda) Limited	Uganda	100
Olam Food Ingredients Ukraine LLC	Ukraine	100
Olam Food Ingredients DMCC	United Arab Emirates	100
Olam Middle East (L.L.C.)	United Arab Emirates	100
Covoya Ltd (f.k.a.Olam Specialty Coffee Europe)	United Kingdom	100
Marsch Import Ltd	United Kingdom	100
OFI Group Limited	United Kingdom	100
Olam Europe Limited	United Kingdom	100
Olam Food Ingredients UK Limited	United Kingdom	100
Olam International UK Limited	United Kingdom	100
Olam Storage & Distribution Limited	United Kingdom	100
OFI Group Nominees Limited	United Kingdom	100
Gel Spice Co, Inc	United States	100
Gel Spice Co, LLC	United States	100
Hughson Nut, Inc	United States	100
Olam Americas, LLC.	United States	100
Olam Chile Peppers, LLC	United States	100
Olam Farming, Inc.	United States	100
Olam Holdings Inc.	United States	100
Olam OT Holdings, LLC	United States	100
Olam Peanut Shelling Company Inc	United States	100
Olam US Holdings, Inc.	United States	100
Olam West Coast Inc.	United States	100
Olde Thompson, LLC	United States	100
OT Acquisition Co. LLC	United States	100
OT Borrower LLC	United States	100
OT Guarantor LLC	United States	100
OT Holdings Corp.	United States	100
OT Intermediate LLC	United States	100
Seabrook Enterprises Inc.	United States	100
Universal Blanchers, L.L.C.	United States	100
Cafe Outspan Vietnam Limited	Vietnam	100
Olam Vietnam Food Processing Company Limited	Vietnam	100
Olam Vietnam Limited	Vietnam	100
Truong Thinh Investment and Construction Joint Stock Company	Vietnam	100
Northern Coffee Corporation Limited	Zambia	100
Olam Zambia Limited	Zambia	100
`;

const appBText = `Olam International Limited	Singapore	(a), (b)	100
Olam Treasury Pte. Ltd	Singapore	(d)	100
Olam Cocoa Pte. Ltd	Singapore	(a), (b)	100
Olam Cocoa Processing Ghana Limited	Ghana	(a)	100
Olam Food Ingredients Ghana Ltd	Ghana	(a)	100
Olam Ivoire SA	Ivory Coast	(a)	100
Outspan Ivoire SA	Ivory Coast	(a)	100
Olam Cocoa Processing Cote d’ Ivoire	Ivory Coast	(a)	100
Outspan Nigeria Limited	Nigeria	(a)	100
Olam Vietnam Limited	Vietnam	(a)	100
Café Outspan Vietnam Limited	Vietnam	(a)	100
PT Olam Indonesia	Indonesia	(a)	100
Olam Food Ingredients India Private Limited (f.k.a Olam Agro  India Private Limited)	India	(a)	100
Olam Agricola Ltda.	Brazil	(a)	100
Olam Holdings Inc	United States	(b), (d)	100
Olam Orchards Australia Pty Ltd	Australia	(a), (c)	100
Olam Food Ingredients New Zealand Limited	New Zealand	(a)	100
Seda Outspan Iberia S.L.	Spain	(a)	100`;

const rowsA = appAText.trim().split('\n').map(line => {
  const [entity, country, pct] = line.split('\t');
  return [
    { en: entity.trim(), id: entity.trim() },
    { en: country.trim(), id: country.trim() },
    { en: pct.trim(), id: pct.trim() }
  ];
});

const rowsB = appBText.trim().split('\n').map(line => {
  const [entity, location, activities, pct] = line.split('\t');
  return [
    { en: entity.trim(), id: entity.trim() },
    { en: location.trim(), id: location.trim() },
    { en: activities.trim(), id: activities.trim() },
    { en: pct.trim(), id: pct.trim() }
  ];
});

const appendixA = {
  id: "appendix-a",
  title: "Appendix A. ofi Group – Legal and ownership structure",
  content: [
    {
      type: "table",
      headers: [
        { en: "Entity Name", id: "Nama Entitas" },
        { en: "Country", id: "Negara" },
        { en: "% held by the Group", id: "% yang dimiliki oleh Grup" }
      ],
      rows: rowsA
    },
    {
      type: "paragraph",
      en: "List of subsidiaries as at 31.12.2025",
      id: "Daftar anak perusahaan per 31.12.2025"
    }
  ]
};

const appendixB = {
  id: "appendix-b",
  title: "Appendix B. List of key ofi Group entities",
  content: [
    {
      type: "table",
      headers: [
        { en: "Operating entity", id: "Entitas operasi" },
        { en: "Geographical location", id: "Lokasi geografis" },
        { en: "Principal activities", id: "Aktivitas utama" },
        { en: "Effective percentage of equity held by the Group in FY 2025 (%)", id: "Persentase efektif ekuitas yang dimiliki oleh Grup pada TA 2025 (%)" }
      ],
      rows: rowsB
    },
    {
      type: "paragraph",
      en: "Source: Olam Group Limited Annual Report 2025 (pages 217)\n(a) Sourcing, processing, packaging and merchandising of agricultural products and inputs\n(b) Investment holding\n(c) Agricultural operations\n(d) Treasury activities",
      id: "Sumber: Laporan Tahunan Olam Group Limited 2025 (halaman 217)\n(a) Pengadaan, pemrosesan, pengemasan, dan perdagangan produk serta input pertanian\n(b) Perusahaan induk investasi\n(c) Operasi pertanian\n(d) Aktivitas perbendaharaan"
    }
  ]
};

// Create V2
const tr25v1 = JSON.parse(JSON.stringify(documentLibrary['TR25'].versions['V1']));
const tr25v2 = [...tr25v1, appendixA, appendixB];

// Create V2T (Translated only)
const tr25v2t = JSON.parse(JSON.stringify(tr25v2)).map(section => {
  const newSection = { ...section };
  if (newSection.title === 'Appendix A. ofi Group – Legal and ownership structure') {
    newSection.title = 'Lampiran A. Grup ofi – Struktur hukum dan kepemilikan';
  }
  if (newSection.title === 'Appendix B. List of key ofi Group entities') {
    newSection.title = 'Lampiran B. Daftar entitas utama Grup ofi';
  }
  
  newSection.content = newSection.content.map(block => {
    if (block.type === 'paragraph') {
      return {
        ...block,
        en: block.id, // Put ID text in EN field to render it simply
        id: undefined
      };
    }
    if (block.type === 'table') {
      return {
        ...block,
        headers: block.headers.map(h => ({ en: h.id })),
        rows: block.rows.map(row => row.map(cell => ({ en: cell.id })))
      };
    }
    return block;
  });
  return newSection;
});

documentLibrary['TR25'].versions['V2'] = tr25v2;
documentLibrary['TR25'].versions['V2T'] = tr25v2t;

// Write back to data.js
const newContent = "export const documentLibrary = " + JSON.stringify(documentLibrary, null, 2) + ";";
fs.writeFileSync(dataPath, newContent);
fs.unlinkSync(path.join(__dirname, 'tempData.cjs'));

console.log('Successfully created TR25 V2 and V2T with Appendices');
