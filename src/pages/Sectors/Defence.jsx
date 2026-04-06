import React from 'react';
import Banner from '../../components/sectors/Defence/Banner';
import InfoSection from '../../components/sectors/Defence/InfoSection';
import Applications from '../../components/sectors/Defence/Applications';
import PropertiesTable from '../../components/sectors/Defence/PropertiesTable';
import GetInTouch from '../../components/sectors/Defence/GetInTouch';

const Defence = () => {
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

export default Defence;
