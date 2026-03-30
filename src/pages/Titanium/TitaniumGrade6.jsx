import React from 'react';
import Banner from '../../components/products/Titanium/TitaniumGrade6/Banner';
import InfoSection from '../../components/products/Titanium/TitaniumGrade6/InfoSection';
import Applications from '../../components/products/Titanium/TitaniumGrade6/Applications';
import GetInTouch from '../../components/products/Titanium/TitaniumGrade6/GetInTouch';
import PropertiesTable from '../../components/products/Titanium/TitaniumGrade6/PropertiesTable';
import TitaniumLinksBox from '../../components/products/Titanium/TitaniumLinksBox';

const TitaniumGrade6 = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <PropertiesTable />
      <TitaniumLinksBox />
      <GetInTouch />
    </div>
  );
};

export default TitaniumGrade6;
