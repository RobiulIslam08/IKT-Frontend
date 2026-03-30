import React from 'react';
import Banner from '../../components/products/Titanium/TitaniumGrade9/Banner';
import InfoSection from '../../components/products/Titanium/TitaniumGrade9/InfoSection';
import Applications from '../../components/products/Titanium/TitaniumGrade9/Applications';
import GetInTouch from '../../components/products/Titanium/TitaniumGrade9/GetInTouch';
import PropertiesTable from '../../components/products/Titanium/TitaniumGrade9/PropertiesTable';
import TitaniumLinksBox from '../../components/products/Titanium/TitaniumLinksBox';

const TitaniumGrade9 = () => {
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

export default TitaniumGrade9;
