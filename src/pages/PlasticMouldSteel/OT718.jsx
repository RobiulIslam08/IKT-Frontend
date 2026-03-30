import React from 'react';
import Banner from '../../components/products/PlasticMouldSteel/OT718/Banner';
import InfoSection from '../../components/products/PlasticMouldSteel/OT718/InfoSection';
import Applications from '../../components/products/PlasticMouldSteel/OT718/Applications';
import GetInTouch from '../../components/products/PlasticMouldSteel/OT718/GetInTouch';
import PropertiesTable from '../../components/products/PlasticMouldSteel/OT718/PropertiesTable';
import PlasticMouldSteelLinksBox from '../../components/products/PlasticMouldSteel/PlasticMouldSteelLinksBox';

const OT718 = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <PropertiesTable />
      <PlasticMouldSteelLinksBox />
      <GetInTouch />
    </div>
  );
};

export default OT718;
