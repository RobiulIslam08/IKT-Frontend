import React from 'react';
import InfoSection from '../../components/products/ToolSteel/ToolSteelApplicationChart/InfoSection';
import Applications from '../../components/products/ToolSteel/ToolSteelApplicationChart/Applications';
import RequestBrochure from '../../components/products/ToolSteel/ToolSteelApplicationChart/RequestBrochure';
import GetInTouch from '../../components/products/ToolSteel/ToolSteelApplicationChart/GetInTouch';
import Banner from '../../components/products/ToolSteel/ToolSteelApplicationChart/Banner';
import PropertiesTable from '../../components/products/ToolSteel/ToolSteelApplicationChart/PropertiesTable';
import ToolSteelLinksBox from '../../components/products/ToolSteel/ToolSteelLinksBox';

const ToolSteelApplicationChart = () => {
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

export default ToolSteelApplicationChart;
