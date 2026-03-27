import React from 'react';
import InfoSection from '../../components/products/EngineeringSteel/En9070m55/InfoSection';
import Applications from '../../components/products/EngineeringSteel/En9070m55/Applications';
import RequestBrochure from '../../components/products/EngineeringSteel/En9070m55/RequestBrochure';
import GetInTouch from '../../components/products/EngineeringSteel/En9070m55/GetInTouch';
import Banner from '../../components/products/EngineeringSteel/En9070m55/Banner';
import PropertiesTable from '../../components/products/EngineeringSteel/En9070m55/PropertiesTable';
import EngineeringSteelLinksBox from '../../components/products/EngineeringSteel/EngineeringSteelLinksBox';

const En9070m55 = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <PropertiesTable />
      <EngineeringSteelLinksBox />
      <GetInTouch />
    </div>
  );
};

export default En9070m55;
