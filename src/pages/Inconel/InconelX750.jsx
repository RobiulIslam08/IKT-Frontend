import React from 'react';
import Banner from '../../components/products/Inconel/InconelX750/Banner';
import InfoSection from '../../components/products/Inconel/InconelX750/InfoSection';
import Applications from '../../components/products/Inconel/InconelX750/Applications';
import GetInTouch from '../../components/products/Inconel/InconelX750/GetInTouch';
import PropertiesTable from '../../components/products/Inconel/InconelX750/PropertiesTable';
import InconelLinksBox from '../../components/products/Inconel/InconelLinksBox';

const InconelX750 = () => {
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

export default InconelX750;
