import React from 'react';
import Banner from '../../components/products/Materials/CarbonSteelMaterial/Banner';
import InfoSection from '../../components/products/Materials/CarbonSteelMaterial/InfoSection';
import Applications from '../../components/products/Materials/CarbonSteelMaterial/Applications';
import GetInTouch from '../../components/products/Materials/CarbonSteelMaterial/GetInTouch';
import PropertiesTable from '../../components/products/Materials/CarbonSteelMaterial/PropertiesTable';
import SpecialAlloysLinksBox from '../../components/products/Materials/SpecialAlloysLinksBox';

const CarbonSteelMaterial = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <PropertiesTable />
      <SpecialAlloysLinksBox />
      <GetInTouch />
    </div>
  );
};

export default CarbonSteelMaterial;
