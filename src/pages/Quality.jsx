import React, { useState } from 'react';

const Quality = () => {
  const [activeTab, setActiveTab] = useState('quality');


  const certificates = [
    { title: 'ISO 9001 2015', link: '/path-to-your-pdf1.pdf' },
    { title: 'ISO 14001 2015', link: '/path-to-your-pdf2.pdf' },
    { title: 'ISO 45001 2018', link: '/path-to-your-pdf3.pdf' },
  ];

  const documents = [
    { title: 'IKT Metal Steel Standards', link: '/standards.pdf' },
    { title: 'IKT Metal Hardness Table', link: '/hardness.pdf' },
    { title: 'Catalogue', link: '/catalogue.pdf' },
  ];

  const handleDownload = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="font-sans text-gray-800">
      
      {/* Banner Section */}
      <div className="relative h-[300px] md:h-[450px] bg-gray-900 flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
          alt="Banner" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <h1 className="relative text-white text-2xl md:text-5xl font-bold text-center px-4">
          Reliability, Technology, <span className="text-primary">IKT,</span> Knowledge...
        </h1>
      </div>

      {/* Tabs Section */}
      <div className="bg-gray-50 border-b">
        <div className="flex justify-center space-x-8 py-4">
          <button
            onClick={() => setActiveTab('quality')}
            className={`pb-2 px-4 font-semibold transition-all border-b-2 ${
              activeTab === 'quality' 
                ? 'border-primary text-primary' 
                : 'border-transparent text-gray-500 hover:text-primary'
            }`}
          >
            Quality
          </button>
          <button
            onClick={() => setActiveTab('documents')}
            className={`pb-2 px-4 font-semibold transition-all border-b-2 ${
              activeTab === 'documents' 
                ? 'border-primary text-primary' 
                : 'border-transparent text-gray-500 hover:text-primary'
            }`}
          >
            Documents
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {activeTab === 'quality' ? (
          <div className="space-y-12">
            {/* Quality Description Area */}
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 mb-6">Quality</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  As <strong>IKT Metal</strong>, we control and certify all our materials. All tests of Destructive Testing (DT) 
                  and Non-Destructive Testing (NDT) of steel materials, which form the most important part of IKT quality, 
                  are carried out with modern and calibrated test equipment and according to procedures based on accepted standards.
                </p>
                
                <h3 className="font-bold mb-3">Tests performed in the IKT Laboratories:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-primary mb-2 underline">Destructive Testing (DT)</h4>
                    <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                      <li>Tensile Test</li>
                      <li>Charpy-V Impact Test</li>
                      <li>Hardness Test (Brinell, Vickers, Rockwell C)</li>
                      <li>Corrosion Test</li>
                      <li>Metallographic Examination</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-2 underline">Non-Destructive Testing (NDT)</h4>
                    <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                      <li>Ultrasonic Testing (UT)</li>
                      <li>Magnetic Particle Test (MT)</li>
                      <li>Penetrant Test (PT)</li>
                      <li>Eddy Current Test (ET)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://birlesikmetal.eu/uploads/images/large/1714472705_kalite2.jpg?1714472705" 
                  alt="Quality Control" 
                  className="w-full  object-cover h-[400px]"
                />
              </div>
            </div>

            {/* Quality Certificates */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Quality Certificates</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((cert, idx) => (
                  <div key={idx} className="border p-6 rounded-md hover:shadow-lg transition flex flex-col justify-between h-40">
                    <h3 className="text-lg font-semibold text-gray-700">{cert.title}</h3>
                    <button 
                      onClick={() => handleDownload(cert.link)}
                      className="mt-4 flex items-center justify-center gap-2 border-2 border-gray-800 py-2 rounded hover:bg-gray-800 hover:text-white transition"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                      </svg>
                      PDF download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Documents Section */
          <div className="min-h-[400px]">
            <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 mb-10">Documents</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {documents.map((doc, idx) => (
                <div key={idx} className="bg-gray-50 border p-8 rounded-lg flex flex-col justify-between h-52">
                  <h3 className="text-xl font-bold text-gray-800">{doc.title}</h3>
                  <button 
                    onClick={() => handleDownload(doc.link)}
                    className="flex items-center justify-center gap-2 border-2 border-black py-2 rounded-full font-bold hover:bg-black hover:text-white transition"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                    </svg>
                    PDF download
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Quality;