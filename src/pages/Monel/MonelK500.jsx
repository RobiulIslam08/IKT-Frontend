import React from 'react';
import Banner from '../../components/products/Monel/MonelK500/Banner';
import InfoSection from '../../components/products/Monel/MonelK500/InfoSection';
import Applications from '../../components/products/Monel/MonelK500/Applications';
import GetInTouch from '../../components/products/Monel/MonelK500/GetInTouch';
import PropertiesTable from '../../components/products/Monel/MonelK500/PropertiesTable';
import MonelLinksBox from '../../components/products/Monel/MonelLinksBox';

const MonelK500 = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <PropertiesTable />
      <MonelLinksBox />
      <GetInTouch />
    </div>
  );
};

export default MonelK500;
