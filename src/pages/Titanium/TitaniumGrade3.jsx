import React from 'react';
import Banner from '../../components/products/Titanium/TitaniumGrade3/Banner';
import InfoSection from '../../components/products/Titanium/TitaniumGrade3/InfoSection';
import Applications from '../../components/products/Titanium/TitaniumGrade3/Applications';
import GetInTouch from '../../components/products/Titanium/TitaniumGrade3/GetInTouch';
import PropertiesTable from '../../components/products/Titanium/TitaniumGrade3/PropertiesTable';
import TitaniumLinksBox from '../../components/products/Titanium/TitaniumLinksBox';

const TitaniumGrade3 = () => {
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

export default TitaniumGrade3;
