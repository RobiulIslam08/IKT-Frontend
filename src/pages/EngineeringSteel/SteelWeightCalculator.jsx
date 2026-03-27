import React from 'react';
import InfoSection from '../../components/products/EngineeringSteel/SteelWeightCalculator/InfoSection';
import Applications from '../../components/products/EngineeringSteel/SteelWeightCalculator/Applications';
import RequestBrochure from '../../components/products/EngineeringSteel/SteelWeightCalculator/RequestBrochure';
import GetInTouch from '../../components/products/EngineeringSteel/SteelWeightCalculator/GetInTouch';
import Banner from '../../components/products/EngineeringSteel/SteelWeightCalculator/Banner';
import PropertiesTable from '../../components/products/EngineeringSteel/SteelWeightCalculator/PropertiesTable';
import EngineeringSteelLinksBox from '../../components/products/EngineeringSteel/EngineeringSteelLinksBox';

const SteelWeightCalculator = () => {
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

export default SteelWeightCalculator;
