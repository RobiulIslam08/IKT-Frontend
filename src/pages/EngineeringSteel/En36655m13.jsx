import React from 'react';
import InfoSection from '../../components/products/EngineeringSteel/En36655m13/InfoSection';
import Applications from '../../components/products/EngineeringSteel/En36655m13/Applications';
import RequestBrochure from '../../components/products/EngineeringSteel/En36655m13/RequestBrochure';
import GetInTouch from '../../components/products/EngineeringSteel/En36655m13/GetInTouch';
import Banner from '../../components/products/EngineeringSteel/En36655m13/Banner';
import PropertiesTable from '../../components/products/EngineeringSteel/En36655m13/PropertiesTable';
import EngineeringSteelLinksBox from '../../components/products/EngineeringSteel/EngineeringSteelLinksBox';

const En36655m13 = () => {
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

export default En36655m13;
