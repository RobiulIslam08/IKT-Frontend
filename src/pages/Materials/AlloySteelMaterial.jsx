import React from 'react';
import Banner from '../../components/products/Materials/AlloySteelMaterial/Banner';
import InfoSection from '../../components/products/Materials/AlloySteelMaterial/InfoSection';
import Applications from '../../components/products/Materials/AlloySteelMaterial/Applications';
import GetInTouch from '../../components/products/Materials/AlloySteelMaterial/GetInTouch';
import PropertiesTable from '../../components/products/Materials/AlloySteelMaterial/PropertiesTable';

const AlloySteelMaterial = () => {
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

export default AlloySteelMaterial;
