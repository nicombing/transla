import React from 'react';
import { BookOpen, SplitSquareHorizontal, Navigation, Languages } from 'lucide-react';

const HomeView = ({ isSidebarOpen, setViewMode }) => {
  return (
    <main className={`w-full p-6 lg:p-12 overflow-y-auto h-full bg-slate-50 relative transition-all duration-300 ${isSidebarOpen ? 'lg:w-[calc(100%-20rem)] lg:ml-80' : 'lg:w-full lg:ml-0'}`}>
      <div className="max-w-4xl mx-auto mt-16 lg:mt-4">
        
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 lg:p-12 text-white shadow-xl mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
            <Languages size={300} />
          </div>
          <div className="relative z-10">
            <h1 className="text-4xl lg:text-5xl font-sans font-bold mb-4 tracking-tight">
              Welcome to Transla
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl font-sans leading-relaxed">
              Your intelligent bilingual document viewer. Seamlessly read, compare, and analyze translated documents side-by-side.
            </p>
          </div>
        </div>

        {/* How to use section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 font-sans">How to use Transla</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <BookOpen size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 font-sans">1. Select a Document</h3>
              <p className="text-gray-600 font-sans leading-relaxed">
                Open the sidebar and explore the <strong>Document Library</strong>. Click on any document (like <em>Journey2Quit</em>) to view its available translation versions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <Languages size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 font-sans">2. Choose a View Mode</h3>
              <p className="text-gray-600 font-sans leading-relaxed">
                Select <strong>V1 Side by side</strong> to compare the original English text with the Indonesian translation block-by-block, or choose <strong>V1 fully translated</strong> for a seamless reading experience in Indonesian.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-lg flex items-center justify-center mb-4">
                <Navigation size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 font-sans">3. Navigate Easily</h3>
              <p className="text-gray-600 font-sans leading-relaxed">
                Once a version is expanded in the sidebar, a <strong>Table of Contents</strong> will appear. Click on any section heading to instantly scroll to that part of the document.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                <SplitSquareHorizontal size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 font-sans">4. Compare Versions</h3>
              <p className="text-gray-600 font-sans leading-relaxed">
                Click on <button onClick={() => setViewMode('comparison')} className="text-purple-600 font-semibold hover:underline">Comparison Analysis</button> in the sidebar to compare two different translation versions side-by-side to review changes.
              </p>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
};

export default HomeView;
