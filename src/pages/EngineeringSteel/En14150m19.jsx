import React from 'react';
import InfoSection from '../../components/products/EngineeringSteel/En14150m19/InfoSection';
import Applications from '../../components/products/EngineeringSteel/En14150m19/Applications';
import RequestBrochure from '../../components/products/EngineeringSteel/En14150m19/RequestBrochure';
import GetInTouch from '../../components/products/EngineeringSteel/En14150m19/GetInTouch';
import Banner from '../../components/products/EngineeringSteel/En14150m19/Banner';
import PropertiesTable from '../../components/products/EngineeringSteel/En14150m19/PropertiesTable';
import EngineeringSteelLinksBox from '../../components/products/EngineeringSteel/EngineeringSteelLinksBox';

const En14150m19 = () => {
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

export default En14150m19;
