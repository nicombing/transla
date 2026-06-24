const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'src', 'data.js');
let dataContent = fs.readFileSync(dataPath, 'utf8');

let tempDataContent = dataContent.replace('export const documentLibrary =', 'module.exports =');
fs.writeFileSync(path.join(__dirname, 'tempDataTR24.cjs'), tempDataContent);

const documentLibrary = require('./tempDataTR24.cjs');

const countryMap = {
  "Algeria": "Aljazair",
  "Australia": "Australia",
  "Brazil": "Brasil",
  "Burkina Faso": "Burkina Faso",
  "Burundi": "Burundi",
  "Cambodia": "Kamboja",
  "Cameroon": "Kamerun",
  "Canada": "Kanada",
  "China": "Tiongkok",
  "Colombia": "Kolombia",
  "The Democratic Republic Of the Congo": "Republik Demokratik Kongo",
  "Ecuador": "Ekuador",
  "Egypt": "Mesir",
  "Georgia": "Georgia",
  "Germany": "Jerman",
  "Ghana": "Ghana",
  "Guatemala": "Guatemala",
  "Honduras": "Honduras",
  "India": "India",
  "Indonesia": "Indonesia",
  "Isle of Man": "Isle of Man",
  "Italy": "Italia",
  "Ivory Coast": "Pantai Gading",
  "Lao People's Democratic Republic": "Republik Demokratik Rakyat Laos",
  "Malaysia": "Malaysia",
  "Mauritius": "Mauritius",
  "Mexico": "Meksiko",
  "Netherlands": "Belanda",
  "New Zealand": "Selandia Baru",
  "Nicaragua": "Nikaragua",
  "Nigeria": "Nigeria",
  "Papua New Guinea": "Papua Nugini",
  "Peru": "Peru",
  "Philippines": "Filipina",
  "Poland": "Polandia",
  "Singapore": "Singapura",
  "Spain": "Spanyol",
  "Switzerland": "Swiss",
  "Tanzania": "Tanzania",
  "Timor-Leste": "Timor Leste",
  "Turkey": "Turki",
  "Uganda": "Uganda",
  "Ukraine": "Ukraina",
  "United Arab Emirates": "Uni Emirat Arab",
  "United Kingdom": "Inggris Raya",
  "United States": "Amerika Serikat",
  "Vietnam": "Vietnam",
  "Zambia": "Zambia"
};

// 1. TOC Data
const newTocData = [
  { en: "1. Executive summary", id: "1. Ringkasan Eksekutif" },
  { en: " Introduction", id: " Perkenalan" },
  { en: " Purpose and scope", id: " Tujuan dan ruang lingkup" },
  { en: " Master File content requirements", id: " Persyaratan konten Master File" },
  { en: "2. Organisational structure", id: "2. Struktur Organisasi" },
  { en: " Background", id: " Latar belakang" },
  { en: " Legal and ownership structure", id: " Struktur hukum dan kepemilikan" },
  { en: " Geographic locations", id: " Lokasi geografis" },
  { en: "3. ofi Group's business", id: "3. Bisnis ofi Group" },
  { en: " Overview of ofi Group's business", id: " Sekilas tentang bisnis ofi Group" },
  { en: " Products / Business segments / Markets", id: " Produk / Segmen bisnis / Pasar" },
  { en: " Important drivers of business profit", id: " Penggerak penting laba bisnis" },
  { en: " Summary of functional analysis", id: " Ringkasan analisis fungsional" },
  { en: " Acquisitions and divestitures", id: " Akuisisi dan divestasi" },
  { en: "4. Intangibles", id: "4. Aktiva Tidak Berwujud" },
  { en: " Overview & Group Strategy", id: " Tinjauan Umum & Strategi Grup" },
  { en: " R&D organisation", id: " Organisasi Litbang" },
  { en: " Details of major intangibles", id: " Rincian aktiva tidak berwujud utama" },
  { en: " Important agreements and transfer pricing policy", id: " Perjanjian penting dan kebijakan penentuan harga transfer" },
  { en: " Important transfers of intangibles", id: " Transfer penting dari aktiva tidak berwujud" },
  { en: "5. Intercompany Financial Activities", id: "5. Aktivitas Keuangan Antar Perusahaan" },
  { en: " Group financing overview", id: " Tinjauan pembiayaan grup" },
  { en: " External financing arrangements", id: " Pengaturan pembiayaan eksternal" },
  { en: " Central financing functions", id: " Fungsi pembiayaan terpusat" },
  { en: " Intercompany financing – transfer pricing policy", id: " Pembiayaan antar perusahaan – kebijakan penentuan harga transfer" },
  { en: "6. Important Service Agreements", id: "6. Perjanjian Layanan Penting" },
  { en: "7. Financial and tax position", id: "7. Posisi keuangan dan perpajakan" },
  { en: " Financial results", id: " Hasil keuangan" },
  { en: " Advance Pricing Arrangements (\"APAs\") and other tax rulings", id: " Perjanjian Harga di Muka (\"APA\") dan peraturan perpajakan lainnya" },
  { en: "8. Scope", id: "8. Ruang Lingkup" },
  { en: " Scope of the report", id: " Ruang lingkup laporan" },
  { en: " Work performed", id: " Pekerjaan dilakukan" },
  { en: " Limitations of the report", id: " Keterbatasan laporan" }
];

const appendicesData = [
  { en: "Appendix A. ofi Group – Legal and ownership structure", id: "Lampiran A. Grup ofi – Struktur hukum dan kepemilikan" },
  { en: "Appendix B. List of key ofi Group entities", id: "Lampiran B. Daftar entitas utama Grup ofi" }
];

const glossaryData = [
  { en: "APA", id: "APA", descEn: "Advance Pricing Arrangement", descId: "Kesepakatan Harga Transfer (Advance Pricing Arrangement)" },
  { en: "B2B", id: "B2B", descEn: "Business-to-Business", descId: "Bisnis-ke-Bisnis" },
  { en: "B2C", id: "B2C", descEn: "Business-to-Consumer", descId: "Bisnis-ke-Konsumen" },
  { en: "BEPS", id: "BEPS", descEn: "Base Erosion Profit Shifting", descId: "Penggerusan Basis Pengenaan Pajak dan Penggeseran Laba (Base Erosion Profit Shifting)" },
  { en: "CSC", id: "CSC", descEn: "Customer Solutions Centre", descId: "Pusat Solusi Pelanggan" },
  { en: "Deloitte Singapore, we or our", id: "Deloitte Singapore, kami atau milik kami", descEn: "Deloitte Singapore Tax Services Pte. Ltd.", descId: "Deloitte Singapore Tax Services Pte. Ltd." },
  { en: "GKAM", id: "GKAM", descEn: "Global Key Account Managers", descId: "Manajer Akun Utama Global" },
  { en: "IEC", id: "IEC", descEn: "Ingredient Excellence Centre", descId: "Pusat Keunggulan Bahan (Ingredient Excellence Centre)" },
  { en: "IP", id: "IP", descEn: "Intellectual Property", descId: "Kekayaan Intelektual" },
  { en: "MTN", id: "MTN", descEn: "Medium-term notes", descId: "Wesel bayar jangka menengah" },
  { en: "Incoterms", id: "Incoterms", descEn: "International Commercial Terms", descId: "Syarat Perdagangan Internasional" },
  { en: "M&A", id: "M&A", descEn: "Merger & Acquisition", descId: "Penggabungan & Akuisisi" },
  { en: "OECD", id: "OECD", descEn: "Organisation for Economic Co-operation and Development", descId: "Organisasi Kerja Sama dan Pembangunan Ekonomi" },
  { en: "OECD TP Guidelines", id: "OECD TP Guidelines", descEn: "OECD Transfer Pricing Guidelines for Multinational Enterprises and Tax Administrations", descId: "Pedoman Penentuan Harga Transfer OECD untuk Perusahaan Multinasional dan Administrasi Pajak" },
  { en: "OFIS", id: "OFIS", descEn: "Olam Farmer Information System", descId: "Sistem Informasi Petani Olam" },
  { en: "OGL", id: "OGL", descEn: "Olam Group Limited", descId: "Olam Group Limited" },
  { en: "Olam Agri", id: "Olam Agri", descEn: "Olam Agri Group", descId: "Grup Olam Agri" },
  { en: "ofi Group or the Group", id: "ofi Group atau Grup", descEn: "Olam Food Ingredients", descId: "Olam Food Ingredients" },
  { en: "OIL", id: "OIL", descEn: "Olam International Limited", descId: "Olam International Limited" },
  { en: "OTPL", id: "OTPL", descEn: "Olam Treasury Pte Ltd", descId: "Olam Treasury Pte Ltd" },
  { en: "p.a.", id: "p.a.", descEn: "per annum", descId: "per tahun" },
  { en: "OHBV", id: "OHBV", descEn: "Olam Holdings B.V.", descId: "Olam Holdings B.V." },
  { en: "R&D", id: "R&D", descEn: "Research and Development", descId: "Penelitian dan Pengembangan" },
  { en: "SALIC", id: "SALIC", descEn: "Saudi Agricultural and Livestock Investment Company", descId: "Saudi Agricultural and Livestock Investment Company" },
  { en: "TP", id: "TP", descEn: "Transfer Pricing", descId: "Penentuan Harga Transfer" }
];

const tocSection = {
  id: "table-of-contents",
  title: "2 Table of contents",
  content: newTocData.map(item => ({
    type: "paragraph",
    en: item.en,
    id: item.id
  }))
};

const appendicesSection = {
  id: "list-of-appendices",
  title: "3 List of appendices",
  content: appendicesData.map(item => ({
    type: "paragraph",
    en: item.en,
    id: item.id
  }))
};

const glossarySection = {
  id: "glossary",
  title: "4 Glossary",
  content: [
    {
      type: "table",
      headers: [
        { en: "Abbreviations", id: "Singkatan" },
        { en: "Full name / description", id: "Nama lengkap / deskripsi" }
      ],
      rows: glossaryData.map(item => [
        { en: item.en, id: item.id },
        { en: item.descEn, id: item.descId }
      ])
    }
  ]
};

// 2. Appendices Data for 2024
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
    { en: country.trim(), id: countryMap[country.trim()] || country.trim() },
    { en: pct.trim(), id: pct.trim() }
  ];
});

const rowsB = appBText.trim().split('\n').map(line => {
  const [entity, location, activities, pct] = line.split('\t');
  return [
    { en: entity.trim(), id: entity.trim() },
    { en: location.trim(), id: countryMap[location.trim()] || location.trim() },
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
      en: "List of subsidiaries as at 31.12.2024",
      id: "Daftar anak perusahaan per 31.12.2024"
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
        { en: "Effective percentage of equity held by the Group in FY 2024 (%)", id: "Persentase efektif ekuitas yang dimiliki oleh Grup pada TA 2024 (%)" }
      ],
      rows: rowsB
    },
    {
      type: "paragraph",
      en: "Source: Olam Group Limited Annual Report 2024 (pages 217)\n(a) Sourcing, processing, packaging and merchandising of agricultural products and inputs\n(b) Investment holding\n(c) Agricultural operations\n(d) Treasury activities",
      id: "Sumber: Laporan Tahunan Olam Group Limited 2024 (halaman 217)\n(a) Pengadaan, pemrosesan, pengemasan, dan perdagangan produk serta input pertanian\n(b) Perusahaan induk investasi\n(c) Operasi pertanian\n(d) Aktivitas perbendaharaan"
    }
  ]
};

// 3. Assemble V3 and V3T for TR24
const tr24v1 = documentLibrary['TR24'].versions['V1'];
const tr24v3 = [
  tocSection,
  appendicesSection,
  glossarySection,
  ...JSON.parse(JSON.stringify(tr24v1)),
  appendixA,
  appendixB
];

const tr24v3t = JSON.parse(JSON.stringify(tr24v3)).map(section => {
  const newSection = { ...section };
  if (newSection.title === '2 Table of contents') newSection.title = '2 Daftar isi';
  if (newSection.title === '3 List of appendices') newSection.title = '3 Daftar lampiran';
  if (newSection.title === '4 Glossary') newSection.title = '4 Glosarium';
  if (newSection.title === 'Appendix A. ofi Group – Legal and ownership structure') newSection.title = 'Lampiran A. Grup ofi – Struktur hukum dan kepemilikan';
  if (newSection.title === 'Appendix B. List of key ofi Group entities') newSection.title = 'Lampiran B. Daftar entitas utama Grup ofi';
  
  newSection.content = newSection.content.map(block => {
    if (block.type === 'paragraph') {
      return { ...block, en: block.id, id: undefined };
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

documentLibrary['TR24'].versions['V3'] = tr24v3;
documentLibrary['TR24'].versions['V3T'] = tr24v3t;

// Write back to data.js
const newContent = "export const documentLibrary = " + JSON.stringify(documentLibrary, null, 2) + ";";
fs.writeFileSync(dataPath, newContent);
fs.unlinkSync(path.join(__dirname, 'tempDataTR24.cjs'));

console.log('Successfully created TR24 V3 and V3T with translated TOC, Appendices, and Glossary.');
