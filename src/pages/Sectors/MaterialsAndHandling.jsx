import React from 'react';
import Banner from '../../components/sectors/MaterialsAndHandling/Banner';
import InfoSection from '../../components/sectors/MaterialsAndHandling/InfoSection';
import Applications from '../../components/sectors/MaterialsAndHandling/Applications';
import PropertiesTable from '../../components/sectors/MaterialsAndHandling/PropertiesTable';
import GetInTouch from '../../components/sectors/MaterialsAndHandling/GetInTouch';

const MaterialsAndHandling = () => {
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

export default MaterialsAndHandling;