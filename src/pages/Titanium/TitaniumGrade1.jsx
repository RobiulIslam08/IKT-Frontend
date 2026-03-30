import React from 'react';
import Banner from '../../components/products/Titanium/TitaniumGrade1/Banner';
import InfoSection from '../../components/products/Titanium/TitaniumGrade1/InfoSection';
import Applications from '../../components/products/Titanium/TitaniumGrade1/Applications';
import GetInTouch from '../../components/products/Titanium/TitaniumGrade1/GetInTouch';
import PropertiesTable from '../../components/products/Titanium/TitaniumGrade1/PropertiesTable';
import TitaniumLinksBox from '../../components/products/Titanium/TitaniumLinksBox';

const TitaniumGrade1 = () => {
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

export default TitaniumGrade1;
