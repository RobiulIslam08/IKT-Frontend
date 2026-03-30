import React from 'react';
import Banner from '../../components/products/Inconel/Inconel600/Banner';
import InfoSection from '../../components/products/Inconel/Inconel600/InfoSection';
import Applications from '../../components/products/Inconel/Inconel600/Applications';
import GetInTouch from '../../components/products/Inconel/Inconel600/GetInTouch';
import PropertiesTable from '../../components/products/Inconel/Inconel600/PropertiesTable';
import InconelLinksBox from '../../components/products/Inconel/InconelLinksBox';

const Inconel600 = () => {
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

export default Inconel600;
