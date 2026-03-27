import React from 'react';
import InfoSection from '../../components/products/EngineeringSteel/S690ql/InfoSection';
import Applications from '../../components/products/EngineeringSteel/S690ql/Applications';
import RequestBrochure from '../../components/products/EngineeringSteel/S690ql/RequestBrochure';
import GetInTouch from '../../components/products/EngineeringSteel/S690ql/GetInTouch';
import Banner from '../../components/products/EngineeringSteel/S690ql/Banner';
import PropertiesTable from '../../components/products/EngineeringSteel/S690ql/PropertiesTable';
import EngineeringSteelLinksBox from '../../components/products/EngineeringSteel/EngineeringSteelLinksBox';

const S690ql = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <PropertiesTable />
      <EngineeringSteelLinksBox />
      <GetInTouch />
    </div>
  );
};

export default S690ql;
