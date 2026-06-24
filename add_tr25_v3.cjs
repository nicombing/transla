const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'src', 'data.js');
let dataContent = fs.readFileSync(dataPath, 'utf8');

let tempDataContent = dataContent.replace('export const documentLibrary =', 'module.exports =');
fs.writeFileSync(path.join(__dirname, 'tempDataV3.cjs'), tempDataContent);

const documentLibrary = require('./tempDataV3.cjs');

const tocData = [
  { en: "1. Executive summary", id: "1. Ringkasan eksekutif" },
  { en: " Introduction", id: " Pendahuluan" },
  { en: " Purpose and scope", id: " Tujuan dan ruang lingkup" },
  { en: " Master File content requirements", id: " Persyaratan konten Master File" },
  { en: "2. Organisational structure", id: "2. Struktur organisasi" },
  { en: " Background", id: " Latar belakang" },
  { en: " Legal and ownership structure", id: " Struktur hukum dan kepemilikan" },
  { en: " Geographic locations", id: " Lokasi geografis" },
  { en: "3. ofi Group's business", id: "3. Bisnis Grup ofi" },
  { en: " Overview of ofi Group's business", id: " Gambaran umum bisnis Grup ofi" },
  { en: " Products / Business segments / Markets", id: " Produk / Segmen bisnis / Pasar" },
  { en: " Important drivers of business profit", id: " Penggerak penting laba bisnis" },
  { en: " Summary of functional analysis", id: " Ringkasan analisis fungsional" },
  { en: " Acquisitions and divestitures", id: " Akuisisi dan divestasi" },
  { en: "4. Intangibles", id: "4. Barang Tidak Berwujud" },
  { en: " Overview & Group Strategy", id: " Gambaran Umum & Strategi Grup" },
  { en: " R&D organisation", id: " Organisasi Litbang" },
  { en: " Details of major intangibles", id: " Rincian barang tidak berwujud utama" },
  { en: " Important agreements and transfer pricing policy", id: " Perjanjian penting dan kebijakan penentuan harga transfer" },
  { en: " Important transfers of intangibles", id: " Transfer penting dari barang tidak berwujud" },
  { en: "5. Intercompany Financial Activities", id: "5. Aktivitas Keuangan Antarperusahaan" },
  { en: " Group financing overview", id: " Gambaran umum pembiayaan grup" },
  { en: " External financing arrangements", id: " Pengaturan pembiayaan eksternal" },
  { en: " Central financing functions", id: " Fungsi pembiayaan terpusat" },
  { en: " Intercompany financing – transfer pricing policy", id: " Pembiayaan antarperusahaan – kebijakan penentuan harga transfer" },
  { en: "6. Important Service Agreements", id: "6. Perjanjian Layanan Penting" },
  { en: "7. Financial and tax position", id: "7. Posisi keuangan dan pajak" },
  { en: " Financial results", id: " Hasil keuangan" },
  { en: " Advance Pricing Arrangements (\"APAs\") and other tax rulings", id: " Kesepakatan Harga Transfer (\"APA\") dan keputusan pajak lainnya" },
  { en: "8. Scope", id: "8. Ruang lingkup" },
  { en: " Scope of the report", id: " Ruang lingkup laporan" },
  { en: " Work performed", id: " Pekerjaan yang dilakukan" },
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
  content: tocData.map(item => ({
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

// We will build V3 based on V2, but adding the 3 new sections at the beginning.
const tr25v2 = documentLibrary['TR25'].versions['V2'];

const tr25v3 = [
  tocSection,
  appendicesSection,
  glossarySection,
  ...JSON.parse(JSON.stringify(tr25v2))
];

// Create V3T
const tr25v3t = JSON.parse(JSON.stringify(tr25v3)).map(section => {
  const newSection = { ...section };
  if (newSection.title === '2 Table of contents') newSection.title = '2 Daftar isi';
  if (newSection.title === '3 List of appendices') newSection.title = '3 Daftar lampiran';
  if (newSection.title === '4 Glossary') newSection.title = '4 Glosarium';
  
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

documentLibrary['TR25'].versions['V3'] = tr25v3;
documentLibrary['TR25'].versions['V3T'] = tr25v3t;

// Write back to data.js
const newContent = "export const documentLibrary = " + JSON.stringify(documentLibrary, null, 2) + ";";
fs.writeFileSync(dataPath, newContent);
fs.unlinkSync(path.join(__dirname, 'tempDataV3.cjs'));

console.log('Successfully created TR25 V3 and V3T with TOC and Glossary');
