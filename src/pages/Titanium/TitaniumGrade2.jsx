import React from 'react';
import Banner from '../../components/products/Titanium/TitaniumGrade2/Banner';
import InfoSection from '../../components/products/Titanium/TitaniumGrade2/InfoSection';
import Applications from '../../components/products/Titanium/TitaniumGrade2/Applications';
import GetInTouch from '../../components/products/Titanium/TitaniumGrade2/GetInTouch';
import PropertiesTable from '../../components/products/Titanium/TitaniumGrade2/PropertiesTable';
import TitaniumLinksBox from '../../components/products/Titanium/TitaniumLinksBox';

const TitaniumGrade2 = () => {
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

export default TitaniumGrade2;
