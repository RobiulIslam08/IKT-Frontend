import React from 'react';
import Banner from '../../components/products/Titanium/TitaniumGrade11/Banner';
import InfoSection from '../../components/products/Titanium/TitaniumGrade11/InfoSection';
import Applications from '../../components/products/Titanium/TitaniumGrade11/Applications';
import GetInTouch from '../../components/products/Titanium/TitaniumGrade11/GetInTouch';
import PropertiesTable from '../../components/products/Titanium/TitaniumGrade11/PropertiesTable';
import TitaniumLinksBox from '../../components/products/Titanium/TitaniumLinksBox';

const TitaniumGrade11 = () => {
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

export default TitaniumGrade11;
