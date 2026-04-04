import React from 'react';
import Banner from '../../components/products/HomePageFeaturedAlloy/FeForHomePage/Banner';
import InfoSection from '../../components/products/HomePageFeaturedAlloy/FeForHomePage/InfoSection';
import Applications from '../../components/products/HomePageFeaturedAlloy/FeForHomePage/Applications';
import GetInTouch from '../../components/products/HomePageFeaturedAlloy/FeForHomePage/GetInTouch';
import PropertiesTable from '../../components/products/HomePageFeaturedAlloy/FeForHomePage/PropertiesTable';

const FeForHomePage = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <PropertiesTable />

      <GetInTouch />
    </div>
  );
};

export default FeForHomePage;
