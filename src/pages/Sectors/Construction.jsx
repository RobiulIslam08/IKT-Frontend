import React from 'react';
import Banner from '../../components/sectors/Construction/Banner';
import InfoSection from '../../components/sectors/Construction/InfoSection';
import Applications from '../../components/sectors/Construction/Applications';
import PropertiesTable from '../../components/sectors/Construction/PropertiesTable';
import GetInTouch from '../../components/sectors/Construction/GetInTouch';

const Construction = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <PropertiesTable />
      <GetInTouch />
    </div>
  );
};

export default Construction;
