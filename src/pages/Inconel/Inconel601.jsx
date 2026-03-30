import React from 'react';
import Banner from '../../components/products/Inconel/Inconel601/Banner';
import InfoSection from '../../components/products/Inconel/Inconel601/InfoSection';
import Applications from '../../components/products/Inconel/Inconel601/Applications';
import GetInTouch from '../../components/products/Inconel/Inconel601/GetInTouch';
import PropertiesTable from '../../components/products/Inconel/Inconel601/PropertiesTable';
import InconelLinksBox from '../../components/products/Inconel/InconelLinksBox';

const Inconel601 = () => {
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

export default Inconel601;
