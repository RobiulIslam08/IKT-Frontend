import React from 'react';
import Banner from '../../components/products/Materials/Invar/Banner';
import InfoSection from '../../components/products/Materials/Invar/InfoSection';
import Applications from '../../components/products/Materials/Invar/Applications';
import GetInTouch from '../../components/products/Materials/Invar/GetInTouch';
import PropertiesTable from '../../components/products/Materials/Invar/PropertiesTable';

const Invar = () => {
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

export default Invar;
