import React from 'react';
import InfoSection from '../../components/products/ToolSteel/D3ToolSteel/InfoSection';
import Applications from '../../components/products/ToolSteel/D3ToolSteel/Applications';
import RequestBrochure from '../../components/products/ToolSteel/D3ToolSteel/RequestBrochure';
import GetInTouch from '../../components/products/ToolSteel/D3ToolSteel/GetInTouch';
import Banner from '../../components/products/ToolSteel/D3ToolSteel/Banner';
import PropertiesTable from '../../components/products/ToolSteel/D3ToolSteel/PropertiesTable';
import ToolSteelLinksBox from '../../components/products/ToolSteel/ToolSteelLinksBox';

const D3ToolSteel = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <PropertiesTable />
      <RequestBrochure />
      <ToolSteelLinksBox />
      <GetInTouch />
    </div>
  );
};

export default D3ToolSteel;
