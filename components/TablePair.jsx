import React from 'react';

const TablePair = ({ headers, rows, versionId }) => {
  const isFullyTranslated = versionId === 'V1 fully translated';

  return (
    <div className="mb-12">
      {/* English Table */}
      {!isFullyTranslated && (
        <div className="mb-2 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
              {headers.map((header, index) => (
                <th key={`en-th-${index}`} className="border-b-2 border-gray-300 py-3 px-4 text-gray-900 font-sans font-semibold bg-gray-50">
                  {header.en}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={`en-row-${rowIndex}`} className="border-b border-gray-200 hover:bg-gray-50">
                {row.map((cell, cellIndex) => (
                  <td key={`en-cell-${rowIndex}-${cellIndex}`} className="py-3 px-4 text-gray-900 font-serif text-sm leading-relaxed">
                    {cell.en}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      )}

      {/* Indonesian Translation Table (Optional) */}
      {headers[0]?.id && (
        <div className={`overflow-x-auto ${isFullyTranslated ? 'mb-2' : 'bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-md mt-4'}`}>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th key={`id-th-${index}`} className={`py-3 px-4 font-sans font-semibold ${isFullyTranslated ? 'border-b-2 border-gray-300 text-gray-900 bg-gray-50' : 'border-b-2 border-blue-200 text-gray-800 bg-blue-100/50'}`}>
                    {header.id}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={`id-row-${rowIndex}`} className={`border-b ${isFullyTranslated ? 'border-gray-200 hover:bg-gray-50' : 'border-blue-100 hover:bg-blue-100/30'}`}>
                  {row.map((cell, cellIndex) => (
                    <td key={`id-cell-${rowIndex}-${cellIndex}`} className={`py-3 px-4 font-serif text-sm leading-relaxed ${isFullyTranslated ? 'text-gray-900' : 'text-gray-700'}`}>
                      {cell.id}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TablePair;
