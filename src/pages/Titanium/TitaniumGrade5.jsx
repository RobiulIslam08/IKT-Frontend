import React from 'react';
import Banner from '../../components/products/Titanium/TitaniumGrade5/Banner';
import InfoSection from '../../components/products/Titanium/TitaniumGrade5/InfoSection';
import Applications from '../../components/products/Titanium/TitaniumGrade5/Applications';
import GetInTouch from '../../components/products/Titanium/TitaniumGrade5/GetInTouch';
import PropertiesTable from '../../components/products/Titanium/TitaniumGrade5/PropertiesTable';
import TitaniumLinksBox from '../../components/products/Titanium/TitaniumLinksBox';

const TitaniumGrade5 = () => {
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

export default TitaniumGrade5;
