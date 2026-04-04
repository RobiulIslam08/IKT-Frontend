import React from 'react';
import Banner from '../../components/products/HomePageFeaturedAlloy/CuForHomePage/Banner';
import InfoSection from '../../components/products/HomePageFeaturedAlloy/CuForHomePage/InfoSection';
import Applications from '../../components/products/HomePageFeaturedAlloy/CuForHomePage/Applications';
import GetInTouch from '../../components/products/HomePageFeaturedAlloy/CuForHomePage/GetInTouch';
import PropertiesTable from '../../components/products/HomePageFeaturedAlloy/CuForHomePage/PropertiesTable';
import NonFerrousMetalsLinksBox from '../../components/products/NonFerrousMetals/NonFerrousMetalsLinksBox';

const CuForHomePage = () => {
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

export default CuForHomePage;
