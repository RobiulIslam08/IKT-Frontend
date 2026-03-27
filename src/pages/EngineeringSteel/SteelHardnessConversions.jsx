import React from 'react';
import InfoSection from '../../components/products/EngineeringSteel/SteelHardnessConversions/InfoSection';
import Applications from '../../components/products/EngineeringSteel/SteelHardnessConversions/Applications';
import RequestBrochure from '../../components/products/EngineeringSteel/SteelHardnessConversions/RequestBrochure';
import GetInTouch from '../../components/products/EngineeringSteel/SteelHardnessConversions/GetInTouch';
import Banner from '../../components/products/EngineeringSteel/SteelHardnessConversions/Banner';
import PropertiesTable from '../../components/products/EngineeringSteel/SteelHardnessConversions/PropertiesTable';
import EngineeringSteelLinksBox from '../../components/products/EngineeringSteel/EngineeringSteelLinksBox';

const SteelHardnessConversions = () => {
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

export default SteelHardnessConversions;
