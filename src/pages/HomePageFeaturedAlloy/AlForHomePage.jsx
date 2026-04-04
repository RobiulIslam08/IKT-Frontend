import React from 'react';
import Banner from '../../components/products/HomePageFeaturedAlloy/AlForHomePage/Banner';
import InfoSection from '../../components/products/HomePageFeaturedAlloy/AlForHomePage/InfoSection';
import Applications from '../../components/products/HomePageFeaturedAlloy/AlForHomePage/Applications';
import GetInTouch from '../../components/products/HomePageFeaturedAlloy/AlForHomePage/GetInTouch';
import PropertiesTable from '../../components/products/HomePageFeaturedAlloy/AlForHomePage/PropertiesTable';
import NonFerrousMetalsLinksBox from '../../components/products/NonFerrousMetals/NonFerrousMetalsLinksBox';

const AlForHomePage = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <PropertiesTable />
<NonFerrousMetalsLinksBox />
      <GetInTouch />
    </div>
  );
};

export default AlForHomePage;
