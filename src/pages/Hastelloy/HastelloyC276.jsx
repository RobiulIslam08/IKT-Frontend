import React from 'react';
import Banner from '../../components/products/Hastelloy/HastelloyC276/Banner';
import InfoSection from '../../components/products/Hastelloy/HastelloyC276/InfoSection';
import Applications from '../../components/products/Hastelloy/HastelloyC276/Applications';
import GetInTouch from '../../components/products/Hastelloy/HastelloyC276/GetInTouch';
import PropertiesTable from '../../components/products/Hastelloy/HastelloyC276/PropertiesTable';
import HasteloyLinksBox from '../../components/products/Hastelloy/HasteloyLinksBox';

const HastelloyC276 = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <PropertiesTable />
      <HasteloyLinksBox />
      <GetInTouch />
    </div>
  );
};

export default HastelloyC276;
