import React from 'react';
import Banner from '../../components/products/Materials/AlloyA286/Banner';
import InfoSection from '../../components/products/Materials/AlloyA286/InfoSection';
import Applications from '../../components/products/Materials/AlloyA286/Applications';
import GetInTouch from '../../components/products/Materials/AlloyA286/GetInTouch';
import PropertiesTable from '../../components/products/Materials/AlloyA286/PropertiesTable';
import SpecialAlloysLinksBox from '../../components/products/Materials/SpecialAlloysLinksBox';

const AlloyA286 = () => {
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

export default AlloyA286;
