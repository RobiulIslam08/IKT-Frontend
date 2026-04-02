const fs = require('fs');
const path = require('path');

const srcDir = 'e:/project2/Jakir-Vai/ikt2/ikt2/src';
const alDir = path.join(srcDir, 'components/products/NonFerrousMetals/Aluminum');
const feDir = path.join(srcDir, 'components/products/NonFerrousMetals/Fe');
const pageDir = path.join(srcDir, 'pages/NonFerrousMetals');

if (!fs.existsSync(feDir)) {
    fs.mkdirSync(feDir, { recursive: true });
}

if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
}

function replaceContent(content, srcStr, destStr) {
    let re1 = new RegExp(srcStr, 'g');
    let re2 = new RegExp(srcStr.toUpperCase(), 'g');
    let re3 = new RegExp(srcStr.toLowerCase(), 'g');
    return content
        .replace(re1, destStr)
        .replace(re2, destStr.toUpperCase())
        .replace(re3, destStr.toLowerCase());
}

['Banner.jsx', 'InfoSection.jsx', 'Applications.jsx', 'GetInTouch.jsx'].forEach(file => {
    let content = fs.readFileSync(path.join(alDir, file), 'utf8');
    content = replaceContent(content, 'Aluminum', 'Fe');
    fs.writeFileSync(path.join(feDir, file), content);
});

const propTableSrc = path.join(srcDir, 'components/products/CarbonSteel/S235JR/PropertiesTable.jsx');
let propContent = fs.readFileSync(propTableSrc, 'utf8');
propContent = replaceContent(propContent, 'S235JR', 'Fe');
fs.writeFileSync(path.join(feDir, 'PropertiesTable.jsx'), propContent);

const fePageContent = `import React from 'react';
import Banner from '../../components/products/NonFerrousMetals/Fe/Banner';
import InfoSection from '../../components/products/NonFerrousMetals/Fe/InfoSection';
import Applications from '../../components/products/NonFerrousMetals/Fe/Applications';
import GetInTouch from '../../components/products/NonFerrousMetals/Fe/GetInTouch';
import PropertiesTable from '../../components/products/NonFerrousMetals/Fe/PropertiesTable';

const Fe = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <PropertiesTable />
      <GetInTouch />
    </div>
  );
};

export default Fe;
`;
fs.writeFileSync(path.join(pageDir, 'Fe.jsx'), fePageContent);

console.log('Files generated successfully.');
