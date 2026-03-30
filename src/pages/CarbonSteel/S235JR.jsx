import React from 'react';
import Banner from '../../components/products/CarbonSteel/S235JR/Banner';
import InfoSection from '../../components/products/CarbonSteel/S235JR/InfoSection';
import Applications from '../../components/products/CarbonSteel/S235JR/Applications';
import GetInTouch from '../../components/products/CarbonSteel/S235JR/GetInTouch';
import PropertiesTable from '../../components/products/CarbonSteel/S235JR/PropertiesTable';
import CarbonSteelLinksBox from '../../components/products/CarbonSteel/CarbonSteelLinksBox';

const S235JR = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <PropertiesTable />
      <CarbonSteelLinksBox />
      <GetInTouch />
    </div>
  );
};

export default S235JR;
