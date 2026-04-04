import React from 'react';
import Banner from '../../components/products/HomePageFeaturedAlloy/NickelAlloyForHomePage/Banner';
import InfoSection from '../../components/products/HomePageFeaturedAlloy/NickelAlloyForHomePage/InfoSection';
import Applications from '../../components/products/HomePageFeaturedAlloy/NickelAlloyForHomePage/Applications';
import GetInTouch from '../../components/products/HomePageFeaturedAlloy/NickelAlloyForHomePage/GetInTouch';
import PropertiesTable from '../../components/products/HomePageFeaturedAlloy/NickelAlloyForHomePage/PropertiesTable';
import NickelAlloyLinksBox from '../../components/products/NickelAlloy/NickelAlloyLinksBox';

const NickelAlloyForHomePage = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <PropertiesTable />
    <NickelAlloyLinksBox />
      <GetInTouch />
    </div>
  );
};

export default NickelAlloyForHomePage;
