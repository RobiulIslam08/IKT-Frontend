import React from 'react';
import Banner from '../../components/products/Hastelloy/HastelloyC2000/Banner';
import InfoSection from '../../components/products/Hastelloy/HastelloyC2000/InfoSection';
import Applications from '../../components/products/Hastelloy/HastelloyC2000/Applications';
import GetInTouch from '../../components/products/Hastelloy/HastelloyC2000/GetInTouch';
import PropertiesTable from '../../components/products/Hastelloy/HastelloyC2000/PropertiesTable';
import HasteloyLinksBox from '../../components/products/Hastelloy/HasteloyLinksBox';

const HastelloyC2000 = () => {
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

export default HastelloyC2000;
