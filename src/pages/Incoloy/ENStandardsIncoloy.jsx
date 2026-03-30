import React from 'react';
import Banner from '../../components/products/Incoloy/ENStandardsIncoloy/Banner';
import InfoSection from '../../components/products/Incoloy/ENStandardsIncoloy/InfoSection';
import Applications from '../../components/products/Incoloy/ENStandardsIncoloy/Applications';
import GetInTouch from '../../components/products/Incoloy/ENStandardsIncoloy/GetInTouch';
import PropertiesTable from '../../components/products/Incoloy/ENStandardsIncoloy/PropertiesTable';
import IncoloyLinksBox from '../../components/products/Incoloy/IncoloyLinksBox';

const ENStandardsIncoloy = () => {
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

export default ENStandardsIncoloy;
