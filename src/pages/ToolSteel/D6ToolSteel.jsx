import React from 'react';
import InfoSection from '../../components/products/ToolSteel/D6ToolSteel/InfoSection';
import Applications from '../../components/products/ToolSteel/D6ToolSteel/Applications';
import RequestBrochure from '../../components/products/ToolSteel/D6ToolSteel/RequestBrochure';
import GetInTouch from '../../components/products/ToolSteel/D6ToolSteel/GetInTouch';
import Banner from '../../components/products/ToolSteel/D6ToolSteel/Banner';
import PropertiesTable from '../../components/products/ToolSteel/D6ToolSteel/PropertiesTable';

const D6ToolSteel = () => {
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

export default D6ToolSteel;
