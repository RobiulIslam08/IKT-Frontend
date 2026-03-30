import React from 'react';
import Banner from '../../components/products/BearingSteelAndGearSteel/GCr15/Banner';
import InfoSection from '../../components/products/BearingSteelAndGearSteel/GCr15/InfoSection';
import Applications from '../../components/products/BearingSteelAndGearSteel/GCr15/Applications';
import GetInTouch from '../../components/products/BearingSteelAndGearSteel/GCr15/GetInTouch';
import PropertiesTable from '../../components/products/BearingSteelAndGearSteel/GCr15/PropertiesTable';
import BearingSteelLinksBox from '../../components/products/BearingSteelAndGearSteel/BearingSteelLinksBox';

const GCr15 = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <PropertiesTable />
      <BearingSteelLinksBox />
      <GetInTouch />
    </div>
  );
};

export default GCr15;
