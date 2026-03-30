import React from 'react';
import Banner from '../../components/products/Hastelloy/HastelloyC22/Banner';
import InfoSection from '../../components/products/Hastelloy/HastelloyC22/InfoSection';
import Applications from '../../components/products/Hastelloy/HastelloyC22/Applications';
import GetInTouch from '../../components/products/Hastelloy/HastelloyC22/GetInTouch';
import PropertiesTable from '../../components/products/Hastelloy/HastelloyC22/PropertiesTable';
import HasteloyLinksBox from '../../components/products/Hastelloy/HasteloyLinksBox';

const HastelloyC22 = () => {
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

export default HastelloyC22;
