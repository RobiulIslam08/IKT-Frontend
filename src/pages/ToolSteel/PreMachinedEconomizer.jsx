import React from 'react';
import InfoSection from '../../components/products/ToolSteel/PreMachinedEconomizer/InfoSection';
import Applications from '../../components/products/ToolSteel/PreMachinedEconomizer/Applications';
import RequestBrochure from '../../components/products/ToolSteel/PreMachinedEconomizer/RequestBrochure';
import GetInTouch from '../../components/products/ToolSteel/PreMachinedEconomizer/GetInTouch';
import Banner from '../../components/products/ToolSteel/PreMachinedEconomizer/Banner';
import PropertiesTable from '../../components/products/ToolSteel/PreMachinedEconomizer/PropertiesTable';

const PreMachinedEconomizer = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <PropertiesTable />
      <RequestBrochure />
      <GetInTouch />
    </div>
  );
};

export default PreMachinedEconomizer;
