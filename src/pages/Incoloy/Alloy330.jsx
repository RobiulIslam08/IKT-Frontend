import React from 'react';
import Banner from '../../components/products/Incoloy/Alloy330/Banner';
import InfoSection from '../../components/products/Incoloy/Alloy330/InfoSection';
import Applications from '../../components/products/Incoloy/Alloy330/Applications';
import GetInTouch from '../../components/products/Incoloy/Alloy330/GetInTouch';
import PropertiesTable from '../../components/products/Incoloy/Alloy330/PropertiesTable';
import IncoloyLinksBox from '../../components/products/Incoloy/IncoloyLinksBox';

const Alloy330 = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <PropertiesTable />
      <IncoloyLinksBox />
      <GetInTouch />
    </div>
  );
};

export default Alloy330;
