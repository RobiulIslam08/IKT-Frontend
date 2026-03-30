import React from 'react';
import Banner from '../../components/products/HighSpeedSteel/M35/Banner';
import InfoSection from '../../components/products/HighSpeedSteel/M35/InfoSection';
import Applications from '../../components/products/HighSpeedSteel/M35/Applications';
import GetInTouch from '../../components/products/HighSpeedSteel/M35/GetInTouch';
import PropertiesTable from '../../components/products/HighSpeedSteel/M35/PropertiesTable';
import HighSpeedSteelLinksBox from '../../components/products/HighSpeedSteel/HighSpeedSteelLinksBox';

const M35 = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <PropertiesTable />
      <HighSpeedSteelLinksBox />
      <GetInTouch />
    </div>
  );
};

export default M35;
