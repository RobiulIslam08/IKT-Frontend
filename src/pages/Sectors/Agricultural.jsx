import React from 'react';
import Banner from '../../components/sectors/Agricultural/Banner';
import InfoSection from '../../components/sectors/Agricultural/InfoSection';
import Applications from '../../components/sectors/Agricultural/Applications';
import PropertiesTable from '../../components/sectors/Agricultural/PropertiesTable';
import GetInTouch from '../../components/sectors/Agricultural/GetInTouch';

const Agricultural = () => {
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

export default Agricultural;