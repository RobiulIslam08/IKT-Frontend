import React from 'react';
import Banner from '../../components/products/Materials/ENStandardsMaterials/Banner';
import InfoSection from '../../components/products/Materials/ENStandardsMaterials/InfoSection';
import Applications from '../../components/products/Materials/ENStandardsMaterials/Applications';
import GetInTouch from '../../components/products/Materials/ENStandardsMaterials/GetInTouch';
import PropertiesTable from '../../components/products/Materials/ENStandardsMaterials/PropertiesTable';

const ENStandardsMaterials = () => {
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

export default ENStandardsMaterials;
