import React from 'react';
import Banner from '../../components/sectors/Nuclear/Banner';
import InfoSection from '../../components/sectors/Nuclear/InfoSection';
import Applications from '../../components/sectors/Nuclear/Applications';
import PropertiesTable from '../../components/sectors/Nuclear/PropertiesTable';
import GetInTouch from '../../components/sectors/Nuclear/GetInTouch';

const Nuclear = () => {
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

export default Nuclear;