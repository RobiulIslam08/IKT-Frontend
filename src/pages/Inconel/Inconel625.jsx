import React from 'react';
import Banner from '../../components/products/Inconel/Inconel625/Banner';
import InfoSection from '../../components/products/Inconel/Inconel625/InfoSection';
import Applications from '../../components/products/Inconel/Inconel625/Applications';
import GetInTouch from '../../components/products/Inconel/Inconel625/GetInTouch';
import PropertiesTable from '../../components/products/Inconel/Inconel625/PropertiesTable';
import InconelLinksBox from '../../components/products/Inconel/InconelLinksBox';

const Inconel625 = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <PropertiesTable />
      <InconelLinksBox />
      <GetInTouch />
    </div>
  );
};

export default Inconel625;
