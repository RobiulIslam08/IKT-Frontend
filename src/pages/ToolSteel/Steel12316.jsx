import React from 'react';
import InfoSection from '../../components/products/ToolSteel/Steel12316/InfoSection';
import Applications from '../../components/products/ToolSteel/Steel12316/Applications';
import RequestBrochure from '../../components/products/ToolSteel/Steel12316/RequestBrochure';
import GetInTouch from '../../components/products/ToolSteel/Steel12316/GetInTouch';
import Banner from '../../components/products/ToolSteel/Steel12316/Banner';
import PropertiesTable from '../../components/products/ToolSteel/Steel12316/PropertiesTable';
import ToolSteelLinksBox from '../../components/products/ToolSteel/ToolSteelLinksBox';

const Steel12316 = () => {
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

export default Steel12316;
