import React from 'react';
import InfoSection from '../../components/products/ToolSteel/H13ToolSteel/InfoSection';
import Applications from '../../components/products/ToolSteel/H13ToolSteel/Applications';
import RequestBrochure from '../../components/products/ToolSteel/H13ToolSteel/RequestBrochure';
import GetInTouch from '../../components/products/ToolSteel/H13ToolSteel/GetInTouch';
import Banner from '../../components/products/ToolSteel/H13ToolSteel/Banner';
import PropertiesTable from '../../components/products/ToolSteel/H13ToolSteel/PropertiesTable';
import ToolSteelLinksBox from '../../components/products/ToolSteel/ToolSteelLinksBox';

const H13ToolSteel = () => {
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

export default H13ToolSteel;
