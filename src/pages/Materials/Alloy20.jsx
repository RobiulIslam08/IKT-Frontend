import React from 'react';
import Banner from '../../components/products/Materials/Alloy20/Banner';
import InfoSection from '../../components/products/Materials/Alloy20/InfoSection';
import Applications from '../../components/products/Materials/Alloy20/Applications';
import GetInTouch from '../../components/products/Materials/Alloy20/GetInTouch';
import PropertiesTable from '../../components/products/Materials/Alloy20/PropertiesTable';
import SpecialAlloysLinksBox from '../../components/products/Materials/SpecialAlloysLinksBox';

const Alloy20 = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <PropertiesTable />
      <SpecialAlloysLinksBox />
      <GetInTouch />
    </div>
  );
};

export default Alloy20;
