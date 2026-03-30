import React from 'react';
import Banner from '../../components/products/Materials/AlloySteelMaterial/Banner';
import InfoSection from '../../components/products/Materials/AlloySteelMaterial/InfoSection';
import Applications from '../../components/products/Materials/AlloySteelMaterial/Applications';
import GetInTouch from '../../components/products/Materials/AlloySteelMaterial/GetInTouch';
import PropertiesTable from '../../components/products/Materials/AlloySteelMaterial/PropertiesTable';
import SpecialAlloysLinksBox from '../../components/products/Materials/SpecialAlloysLinksBox';

const AlloySteelMaterial = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <PropertiesTable />
      <SpecialAlloysLinksBox />
      <GetInTouch />
    </div>
  );
};

export default AlloySteelMaterial;
