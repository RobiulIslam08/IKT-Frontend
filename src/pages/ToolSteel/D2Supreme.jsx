import React from 'react';
import InfoSection from '../../components/products/ToolSteel/D2Supreme/InfoSection';
import Applications from '../../components/products/ToolSteel/D2Supreme/Applications';
import RequestBrochure from '../../components/products/ToolSteel/D2Supreme/RequestBrochure';
import GetInTouch from '../../components/products/ToolSteel/D2Supreme/GetInTouch';
import Banner from '../../components/products/ToolSteel/D2Supreme/Banner';
import PropertiesTable from '../../components/products/ToolSteel/D2Supreme/PropertiesTable';

const D2Supreme = () => {
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

export default D2Supreme;
