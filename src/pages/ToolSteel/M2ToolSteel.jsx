import React from 'react';
import InfoSection from '../../components/products/ToolSteel/M2ToolSteel/InfoSection';
import Applications from '../../components/products/ToolSteel/M2ToolSteel/Applications';
import RequestBrochure from '../../components/products/ToolSteel/M2ToolSteel/RequestBrochure';
import GetInTouch from '../../components/products/ToolSteel/M2ToolSteel/GetInTouch';
import Banner from '../../components/products/ToolSteel/M2ToolSteel/Banner';
import PropertiesTable from '../../components/products/ToolSteel/M2ToolSteel/PropertiesTable';

const M2ToolSteel = () => {
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

export default M2ToolSteel;
