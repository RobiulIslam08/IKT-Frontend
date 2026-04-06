import React from 'react';
import Banner from '../../components/sectors/Offshore/Banner';
import InfoSection from '../../components/sectors/Offshore/InfoSection';
import Applications from '../../components/sectors/Offshore/Applications';
import PropertiesTable from '../../components/sectors/Offshore/PropertiesTable';
import GetInTouch from '../../components/sectors/Offshore/GetInTouch';

const Offshore = () => {
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

export default Offshore;