import React from 'react';
import Banner from '../../components/products/HomePageFeaturedAlloy/CrForHomePage/Banner';
import InfoSection from '../../components/products/HomePageFeaturedAlloy/CrForHomePage/InfoSection';
import Applications from '../../components/products/HomePageFeaturedAlloy/CrForHomePage/Applications';
import GetInTouch from '../../components/products/HomePageFeaturedAlloy/CrForHomePage/GetInTouch';
import PropertiesTable from '../../components/products/HomePageFeaturedAlloy/CrForHomePage/PropertiesTable';
import StainlessSteelLinksBox from '../../components/products/StainlessSteelPlate/StainlessSteelLinksBox';

const CrForHomePage = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <PropertiesTable />
     <StainlessSteelLinksBox />
      <GetInTouch />
    </div>
  );
};

export default CrForHomePage;
