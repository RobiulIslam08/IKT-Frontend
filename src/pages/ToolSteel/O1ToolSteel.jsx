import React from 'react';
import InfoSection from '../../components/products/ToolSteel/O1ToolSteel/InfoSection';
import Applications from '../../components/products/ToolSteel/O1ToolSteel/Applications';
import RequestBrochure from '../../components/products/ToolSteel/O1ToolSteel/RequestBrochure';
import GetInTouch from '../../components/products/ToolSteel/O1ToolSteel/GetInTouch';
import Banner from '../../components/products/ToolSteel/O1ToolSteel/Banner';
import PropertiesTable from '../../components/products/ToolSteel/O1ToolSteel/PropertiesTable';
import ToolSteelLinksBox from '../../components/products/ToolSteel/ToolSteelLinksBox';

const O1ToolSteel = () => {
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

export default O1ToolSteel;
