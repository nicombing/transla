import React from 'react';

const ParagraphPair = ({ en, id }) => {
  const renderText = (text) => {
    if (!text) return null;
    return text.split('\n').map((line, index) => {
      const trimmedLine = line.trim();
      if (trimmedLine.startsWith('•')) {
        return (
          <div key={index} className="flex mb-2">
            <span className="mr-3 font-bold text-blue-400">•</span>
            <span>{trimmedLine.substring(1).trim()}</span>
          </div>
        );
      }
      return (
        <span key={index} className="block mb-3 last:mb-0">
          {trimmedLine}
        </span>
      );
    });
  };

  return (
    <div className="mb-8">
      {/* English Paragraph */}
      <div className="text-gray-900 font-serif text-base leading-relaxed mb-3">
        {renderText(en)}
      </div>
      
      {/* Indonesian Translation Paragraph (Optional) */}
      {id && (
        <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-md mt-3">
          <div className="text-gray-700 font-serif text-base leading-relaxed">
            {renderText(id)}
          </div>
        </div>
      )}
    </div>
  );
};

export default ParagraphPair;
