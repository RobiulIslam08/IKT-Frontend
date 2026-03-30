import React from 'react';
import InfoSection from '../../components/products/ToolSteel/P20ToolSteel/InfoSection';
import Applications from '../../components/products/ToolSteel/P20ToolSteel/Applications';
import RequestBrochure from '../../components/products/ToolSteel/P20ToolSteel/RequestBrochure';
import GetInTouch from '../../components/products/ToolSteel/P20ToolSteel/GetInTouch';
import Banner from '../../components/products/ToolSteel/P20ToolSteel/Banner';
import PropertiesTable from '../../components/products/ToolSteel/P20ToolSteel/PropertiesTable';
import ToolSteelLinksBox from '../../components/products/ToolSteel/ToolSteelLinksBox';

const P20ToolSteel = () => {
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

export default P20ToolSteel;
