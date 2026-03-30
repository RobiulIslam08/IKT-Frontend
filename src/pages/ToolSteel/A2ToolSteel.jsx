import React from 'react';
import InfoSection from '../../components/products/ToolSteel/A2ToolSteel/InfoSection';
import Applications from '../../components/products/ToolSteel/A2ToolSteel/Applications';
import RequestBrochure from '../../components/products/ToolSteel/A2ToolSteel/RequestBrochure';
import GetInTouch from '../../components/products/ToolSteel/A2ToolSteel/GetInTouch';
import Banner from '../../components/products/ToolSteel/A2ToolSteel/Banner';
import PropertiesTable from '../../components/products/ToolSteel/A2ToolSteel/PropertiesTable';
import ToolSteelLinksBox from '../../components/products/ToolSteel/ToolSteelLinksBox';

const A2ToolSteel = () => {
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

export default A2ToolSteel;
