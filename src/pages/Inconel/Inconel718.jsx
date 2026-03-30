import React from 'react';
import Banner from '../../components/products/Inconel/Inconel718/Banner';
import InfoSection from '../../components/products/Inconel/Inconel718/InfoSection';
import Applications from '../../components/products/Inconel/Inconel718/Applications';
import GetInTouch from '../../components/products/Inconel/Inconel718/GetInTouch';
import PropertiesTable from '../../components/products/Inconel/Inconel718/PropertiesTable';
import InconelLinksBox from '../../components/products/Inconel/InconelLinksBox';

const Inconel718 = () => {
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

export default Inconel718;
