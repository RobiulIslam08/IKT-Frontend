import React from 'react';
import InfoSection from '../../components/products/ToolSteel/D2ToolSteel/InfoSection';
import Applications from '../../components/products/ToolSteel/D2ToolSteel/Applications';
import RequestBrochure from '../../components/products/ToolSteel/D2ToolSteel/RequestBrochure';
import GetInTouch from '../../components/products/ToolSteel/D2ToolSteel/GetInTouch';
import Banner from '../../components/products/ToolSteel/D2ToolSteel/Banner';
import PropertiesTable from '../../components/products/ToolSteel/D2ToolSteel/PropertiesTable';

const D2ToolSteel = () => {
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

export default D2ToolSteel;
