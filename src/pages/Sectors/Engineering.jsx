import React from 'react';
import Banner from '../../components/sectors/Engineering/Banner';
import InfoSection from '../../components/sectors/Engineering/InfoSection';
import Applications from '../../components/sectors/Engineering/Applications';
import PropertiesTable from '../../components/sectors/Engineering/PropertiesTable';
import GetInTouch from '../../components/sectors/Engineering/GetInTouch';

const Engineering = () => {
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

export default Engineering;