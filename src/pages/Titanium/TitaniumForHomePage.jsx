import React from 'react';
import Banner from '../../components/products/Titanium/TitaniumPageForHome/Banner';
import InfoSection from '../../components/products/Titanium/TitaniumPageForHome/InfoSection';
import Applications from '../../components/products/Titanium/TitaniumPageForHome/Applications';
import GetInTouch from '../../components/products/Titanium/TitaniumPageForHome/GetInTouch';
import PropertiesTable from '../../components/products/Titanium/TitaniumPageForHome/PropertiesTable';
import TitaniumLinksBox from '../../components/products/Titanium/TitaniumLinksBox';

const TitaniumForHomePage = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <PropertiesTable />
      <TitaniumLinksBox />
      <GetInTouch />
    </div>
  );
};

export default TitaniumForHomePage;
