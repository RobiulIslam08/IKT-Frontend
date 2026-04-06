import React from 'react';
import Banner from '../../components/sectors/Transport/Banner';
import InfoSection from '../../components/sectors/Transport/InfoSection';
import Applications from '../../components/sectors/Transport/Applications';
import PropertiesTable from '../../components/sectors/Transport/PropertiesTable';
import GetInTouch from '../../components/sectors/Transport/GetInTouch';

const Transport = () => {
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

export default Transport;