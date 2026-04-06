import React from 'react';
import Banner from '../../components/sectors/SafetyAndAccess/Banner';
import InfoSection from '../../components/sectors/SafetyAndAccess/InfoSection';
import Applications from '../../components/sectors/SafetyAndAccess/Applications';
import PropertiesTable from '../../components/sectors/SafetyAndAccess/PropertiesTable';
import GetInTouch from '../../components/sectors/SafetyAndAccess/GetInTouch';

const SafetyAndAccess = () => {
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

export default SafetyAndAccess;