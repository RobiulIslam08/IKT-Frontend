import React from 'react';
import InfoSection from '../../components/products/ToolSteel/O9bToolSteel/InfoSection';
import Applications from '../../components/products/ToolSteel/O9bToolSteel/Applications';
import RequestBrochure from '../../components/products/ToolSteel/O9bToolSteel/RequestBrochure';
import GetInTouch from '../../components/products/ToolSteel/O9bToolSteel/GetInTouch';
import Banner from '../../components/products/ToolSteel/O9bToolSteel/Banner';
import PropertiesTable from '../../components/products/ToolSteel/O9bToolSteel/PropertiesTable';
import ToolSteelLinksBox from '../../components/products/ToolSteel/ToolSteelLinksBox';

const O9bToolSteel = () => {
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

export default O9bToolSteel;
