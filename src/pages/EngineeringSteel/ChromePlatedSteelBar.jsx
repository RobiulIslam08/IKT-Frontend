import React from 'react';
import InfoSection from '../../components/products/EngineeringSteel/ChromePlatedSteelBar/InfoSection';
import Applications from '../../components/products/EngineeringSteel/ChromePlatedSteelBar/Applications';
import RequestBrochure from '../../components/products/EngineeringSteel/ChromePlatedSteelBar/RequestBrochure';
import GetInTouch from '../../components/products/EngineeringSteel/ChromePlatedSteelBar/GetInTouch';
import Banner from '../../components/products/EngineeringSteel/ChromePlatedSteelBar/Banner';
import PropertiesTable from '../../components/products/EngineeringSteel/ChromePlatedSteelBar/PropertiesTable';
import EngineeringSteelLinksBox from '../../components/products/EngineeringSteel/EngineeringSteelLinksBox';

const ChromePlatedSteelBar = () => {
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

export default ChromePlatedSteelBar;
