/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  
  const carbonSteelData = [
    { enNum: '1.1141 / 1.0401', enName: 'C15D / C18D', sae: '1010 / 1018', din: 'CK15 / C15', bs: '080M15 / EN3B' },
    { enNum: '1.0503 / 1.1191', enName: 'C45', sae: '1045', din: 'CK45 / CF45', bs: '060A47 / 080M46' },
    { enNum: '1.0715 / 1.0736', enName: '11SMn37', sae: '1215', din: '9SMn28 / 9SMn36', bs: '230M07 / En1A' }
  ];

  const alloySteelData = [
    { enNum: '1.7218', enName: '25CrMo4', sae: '4130', din: '25CrMo4', bs: '708A30 / CDS110', jis: 'SCM 420' },
    { enNum: '1.7225 / 1.3563', enName: '42CrMo4', sae: '4140/4142', din: '42CrMo4', bs: '708M40 / En19', jis: 'SCM 440' },
    { enNum: '1.6582 / 1.6562', enName: '34CrNiMo6', sae: '4340', din: '34CrNiMo6', bs: '817M40 / En24', jis: 'SNCM 447' }
  ];

  const stainlessSteelData = [
    { enNum: '1.4301', enName: 'X5CrNi18-10', sae: '304', uns: 'S30400', din: 'X5CrNi18-10', jis: 'SUS 304' },
    { enNum: '1.4401 / 1.4436', enName: 'X5CrNiMo17-12-2', sae: '316', uns: 'S31600', din: 'X5CrNiMo17-12-2', jis: 'SUS 316' },
    { enNum: '1.4539', enName: 'X1NiCrMoCu25-20-5', sae: '904L', uns: 'N08904', din: '1.4539', jis: '-' }
  ];

  const toolSteelData = [
    { enNum: '1.2363', enName: 'X100CrMoV5', sae: 'A-2', uns: 'T30102', din: 'X100CrMoV51', jis: 'SKD 12' },
    { enNum: '1.2379', enName: 'X153CrMoV12', sae: 'D-2', uns: '-', din: 'X153CrMoV12-1', jis: 'SKD 11' },
    { enNum: '1.2510', enName: '100MnCrW4', sae: 'O-1', uns: '-', din: '100MnCrW4', jis: '-' }
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 text-center">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">EN Standard Equivalence Matrix</h2>
          </div>
          <p className="text-base font-medium text-gray-600">Cross-referencing European Steel (EN) with SAE, DIN, BS, and JIS industrial standards.</p>
        </div>

        <div className="flex flex-col gap-10">

          {/* 1. Carbon Steel Equivalence */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Carbon Steel Comparison Matrix</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-4 py-4 font-bold border-r border-gray-100">EN Number</th>
                    <th className="px-4 py-4 font-bold border-r border-gray-100">EN Name</th>
                    <th className="px-4 py-4 font-bold border-r border-gray-100">SAE/AISI</th>
                    <th className="px-4 py-4 font-bold border-r border-gray-100">DIN Equivalent</th>
                    <th className="px-4 py-4 font-bold">BS 970</th>
                  </tr>
                </thead>
                <tbody>
                  {carbonSteelData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.enNum}</td>
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.enName}</td>
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.sae}</td>
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.din}</td>
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base">{row.bs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. Alloy Steel Equivalence */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Alloy Steel Comparison Matrix</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-4 py-4 font-bold border-r border-gray-100">EN Number</th>
                    <th className="px-4 py-4 font-bold border-r border-gray-100">SAE Grade</th>
                    <th className="px-4 py-4 font-bold border-r border-gray-100">DIN</th>
                    <th className="px-4 py-4 font-bold border-r border-gray-100">BS (EN)</th>
                    <th className="px-4 py-4 font-bold">JIS</th>
                  </tr>
                </thead>
                <tbody>
                  {alloySteelData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.enNum}</td>
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.sae}</td>
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.din}</td>
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.bs}</td>
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base">{row.jis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 3. Stainless Steel Equivalence */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Stainless Steel Equivalence Table</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-4 py-4 font-bold border-r border-gray-100">EN Number</th>
                    <th className="px-4 py-4 font-bold border-r border-gray-100">UNS Number</th>
                    <th className="px-4 py-4 font-bold border-r border-gray-100">SAE/AISI</th>
                    <th className="px-4 py-4 font-bold border-r border-gray-100">DIN</th>
                    <th className="px-4 py-4 font-bold">JIS</th>
                  </tr>
                </thead>
                <tbody>
                  {stainlessSteelData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.enNum}</td>
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.uns}</td>
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.sae}</td>
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.din}</td>
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base">{row.jis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 4. Tool Steel Equivalence */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Tool Steel Equivalence Table</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-4 py-4 font-bold border-r border-gray-100">EN Number</th>
                    <th className="px-4 py-4 font-bold border-r border-gray-100">SAE Grade</th>
                    <th className="px-4 py-4 font-bold border-r border-gray-100">DIN</th>
                    <th className="px-4 py-4 font-bold">JIS</th>
                  </tr>
                </thead>
                <tbody>
                  {toolSteelData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.enNum}</td>
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.sae}</td>
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.din}</td>
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base">{row.jis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        <div className="mt-12 p-8 bg-gray-100 border border-gray-200 rounded-lg text-center md:text-left">
          <p className="text-base font-medium text-gray-700 mb-2">
            <span className="font-bold text-gray-900">IKT Global Steel Logistics in KSA:</span>
            EN Standard structural components, including aerospace-certified EN19/EN24 bars, high-grade stainless pipes (304/316), and precision tool steels (A-2/D-2), are heavily stocked across Saudi Arabia. We ensure full metallurgical traceability and equivalence mapping for rapid industrial deployment.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical procurement operations, project-specific equivalence mapping, or exact material test reports (MTR), contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
          </p>
        </div>

      </div>
    </section>
  );
}