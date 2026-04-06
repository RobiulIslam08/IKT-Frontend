import React from 'react';
import Banner from '../../components/sectors/OilAndGas/Banner';
import InfoSection from '../../components/sectors/OilAndGas/InfoSection';
import Applications from '../../components/sectors/OilAndGas/Applications';
import PropertiesTable from '../../components/sectors/OilAndGas/PropertiesTable';
import GetInTouch from '../../components/sectors/OilAndGas/GetInTouch';

const OilAndGas = () => {
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

export default OilAndGas;