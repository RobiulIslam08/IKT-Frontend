import React from 'react';
import Banner from '../../components/products/CarbonSteel/Q235B/Banner';
import InfoSection from '../../components/products/CarbonSteel/Q235B/InfoSection';
import Applications from '../../components/products/CarbonSteel/Q235B/Applications';
import GetInTouch from '../../components/products/CarbonSteel/Q235B/GetInTouch';
import PropertiesTable from '../../components/products/CarbonSteel/Q235B/PropertiesTable';
import CarbonSteelLinksBox from '../../components/products/CarbonSteel/CarbonSteelLinksBox';

const Q235B = () => {
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

export default Q235B;
