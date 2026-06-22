import React, { useState, useMemo } from 'react';
import { documentLibrary } from './data';
import { CheckCircle2, ArrowRightLeft } from 'lucide-react';

const ComparisonView = () => {
  const [targetDocId, setTargetDocId] = useState('TR24'); // TR24 or TR25
  const baseDocId = 'TR23';
  const version = 'V1';

  const baseSections = documentLibrary[baseDocId]?.versions[version] || [];
  const targetSections = documentLibrary[targetDocId]?.versions[version] || [];

  // Extract all long paragraphs from base document to match against
  const baseParagraphs = useMemo(() => {
    const texts = new Set();
    baseSections.forEach(sec => {
      sec.content.forEach(block => {
        if (block.type === 'paragraph') {
          if (block.en && block.en.length > 50) texts.add(block.en.trim());
          if (block.id && block.id.length > 50) texts.add(block.id.trim());
        }
      });
    });
    return texts;
  }, [baseSections]);

  const targetParagraphs = useMemo(() => {
    const texts = new Set();
    targetSections.forEach(sec => {
      sec.content.forEach(block => {
        if (block.type === 'paragraph') {
          if (block.en && block.en.length > 50) texts.add(block.en.trim());
          if (block.id && block.id.length > 50) texts.add(block.id.trim());
        }
      });
    });
    return texts;
  }, [targetSections]);

  const renderTextWithHighlight = (text, isBase) => {
    if (!text) return null;
    const lines = text.split('\n');
    return lines.map((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) return <br key={idx} />;
      
      const isBullet = trimmed.startsWith('•');
      const content = isBullet ? trimmed.substring(1).trim() : trimmed;
      
      // Determine if this line exists in the OTHER document
      const isMatch = content.length > 30 && (isBase ? targetParagraphs.has(trimmed) || targetParagraphs.has(line) : baseParagraphs.has(trimmed) || baseParagraphs.has(line));
      
      const highlightedContent = isMatch ? (
        <span className="bg-yellow-200 px-1 rounded shadow-sm border border-yellow-300">{content}</span>
      ) : (
        <span>{content}</span>
      );

      if (isBullet) {
        return (
          <div key={idx} className="flex mb-2">
            <span className="mr-3 font-bold text-blue-400">•</span>
            {highlightedContent}
          </div>
        );
      }

      return (
        <span key={idx} className="block mb-3 last:mb-0">
          {highlightedContent}
        </span>
      );
    });
  };

  const renderSection = (section, isBase) => {
    return (
      <section key={section.id} className="mb-12">
        <h3 className="text-xl font-sans font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
          {section.title}
        </h3>
        <div>
          {section.content.map((block, index) => {
            if (block.type === 'paragraph') {
              return (
                <div key={index} className="mb-6">
                  <div className="text-gray-900 font-serif text-sm leading-relaxed mb-2">
                    {renderTextWithHighlight(block.en, isBase)}
                  </div>
                  {block.id && (
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r-md">
                      <div className="text-gray-700 font-serif text-sm leading-relaxed">
                        {renderTextWithHighlight(block.id, isBase)}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            if (block.type === 'table') {
              return (
                <div key={index} className="mb-6 overflow-x-auto text-xs">
                  <table className="w-full text-left border-collapse border border-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        {block.headers.map((h, i) => (
                          <th key={i} className="p-2 border border-gray-200">{h.en}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, rIdx) => (
                        <tr key={rIdx}>
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="p-2 border border-gray-200">{cell.en}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {block.headers[0]?.id && (
                    <table className="w-full text-left border-collapse border border-blue-200 mt-2 bg-blue-50">
                      <thead className="bg-blue-100">
                        <tr>
                          {block.headers.map((h, i) => (
                            <th key={i} className="p-2 border border-blue-200 text-blue-900">{h.id}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {block.rows.map((row, rIdx) => (
                          <tr key={rIdx}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="p-2 border border-blue-200 text-blue-800">{cell.id}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              );
            }
            if (block.type === 'image') {
              return (
                <div key={index} className="mb-6 bg-gray-100 p-2 text-center text-xs text-gray-500 rounded">
                  [Image: {block.caption?.en}]
                </div>
              );
            }
            return null;
          })}
        </div>
      </section>
    );
  };

  return (
    <main className="w-full lg:w-[calc(100%-20rem)] lg:ml-80 p-6 lg:p-8 overflow-y-auto h-full bg-white relative">
      <div className="max-w-7xl mx-auto mt-16 lg:mt-0">
        <header className="mb-8">
          <h1 className="text-3xl font-sans font-bold text-gray-900 mb-2">
            Translation Methodology Comparison
          </h1>
          <p className="text-gray-500 font-sans">
            A side-by-side analysis demonstrating the validity and consistency of the translation.
          </p>
        </header>

        {/* Analysis Section */}
        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800 mb-4 font-sans flex items-center">
            <CheckCircle2 className="text-green-500 mr-2" />
            Translation Methodology & Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-700 font-sans text-sm leading-relaxed">
            <div>
              <p className="mb-3">
                <strong>1. Stylistic Consistency:</strong> The syntactic structure, formal tone, and bilingual formatting of the TR23 master file were strictly adopted for both TR24 and TR25. The blue-box translation format is identically reproduced.
              </p>
              <p className="mb-3">
                <strong>2. Exact Terminology:</strong> Critical tax and transfer pricing terms established in TR23 (e.g., <em>"arm's length principle"</em> → <em>"prinsip kewajaran dan kelaziman usaha"</em>) are used verbatim throughout all subsequent documents to ensure regulatory consistency.
              </p>
            </div>
            <div>
              <p className="mb-3">
                <strong>3. Proper Noun Preservation:</strong> Specific company entities (e.g., <em>Olam Group Limited</em>, <em>Olam Brands B.V.</em>), proprietary platforms (e.g., <em>AtSource</em>, <em>OFIS</em>), and financial institutions remain untranslated to maintain legal accuracy.
              </p>
              <p>
                <strong>4. Boilerplate Identification:</strong> Identical clauses and sections (such as the Scope of the Report and the Disclaimer) were directly mirrored. 
                <span className="bg-yellow-200 px-1 mx-1 rounded border border-yellow-300 text-yellow-900">Yellow highlights</span> 
                below indicate identical sentences or paragraphs found in both documents.
              </p>
            </div>
          </div>
        </section>

        {/* Selector */}
        <div className="flex items-center mb-6 bg-white p-4 border border-gray-200 rounded-lg shadow-sm sticky top-0 z-10">
          <div className="flex items-center flex-1">
            <span className="font-bold text-lg text-gray-800 w-32 text-center bg-gray-100 py-2 rounded-md">TR23 (Base)</span>
          </div>
          <div className="px-4 text-gray-400">
            <ArrowRightLeft />
          </div>
          <div className="flex items-center flex-1 justify-end">
            <select 
              value={targetDocId}
              onChange={(e) => setTargetDocId(e.target.value)}
              className="bg-blue-50 border border-blue-300 text-blue-900 text-lg font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2 text-center shadow-sm cursor-pointer hover:bg-blue-100 transition-colors"
            >
              <option value="TR24">TR24 (Target)</option>
              <option value="TR25">TR25 (Target)</option>
            </select>
          </div>
        </div>

        {/* Side-by-Side View */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Base Document (Left) */}
          <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm overflow-hidden flex flex-col h-[800px]">
            <h2 className="text-2xl font-bold font-sans text-gray-900 border-b-4 border-gray-800 pb-2 mb-4 shrink-0 inline-block w-fit">TR23 Master File</h2>
            <div className="overflow-y-auto pr-4 flex-1 custom-scrollbar">
              {baseSections.map(sec => renderSection(sec, true))}
            </div>
          </div>

          {/* Target Document (Right) */}
          <div className="border border-blue-200 rounded-lg p-6 bg-blue-50/30 shadow-sm overflow-hidden flex flex-col h-[800px]">
            <h2 className="text-2xl font-bold font-sans text-blue-900 border-b-4 border-blue-800 pb-2 mb-4 shrink-0 inline-block w-fit">{targetDocId} Translated</h2>
            <div className="overflow-y-auto pr-4 flex-1 custom-scrollbar">
              {targetSections.map(sec => renderSection(sec, false))}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default ComparisonView;
