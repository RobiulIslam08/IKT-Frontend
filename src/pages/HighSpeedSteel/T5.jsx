import React from 'react';
import Banner from '../../components/products/HighSpeedSteel/T5/Banner';
import InfoSection from '../../components/products/HighSpeedSteel/T5/InfoSection';
import Applications from '../../components/products/HighSpeedSteel/T5/Applications';
import GetInTouch from '../../components/products/HighSpeedSteel/T5/GetInTouch';
import PropertiesTable from '../../components/products/HighSpeedSteel/T5/PropertiesTable';
import HighSpeedSteelLinksBox from '../../components/products/HighSpeedSteel/HighSpeedSteelLinksBox';

const T5 = () => {
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

export default T5;
