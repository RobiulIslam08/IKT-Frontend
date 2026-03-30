import React from 'react';
import InfoSection from '../../components/products/ToolSteel/Steel53s/InfoSection';
import Applications from '../../components/products/ToolSteel/Steel53s/Applications';
import RequestBrochure from '../../components/products/ToolSteel/Steel53s/RequestBrochure';
import GetInTouch from '../../components/products/ToolSteel/Steel53s/GetInTouch';
import Banner from '../../components/products/ToolSteel/Steel53s/Banner';
import PropertiesTable from '../../components/products/ToolSteel/Steel53s/PropertiesTable';
import ToolSteelLinksBox from '../../components/products/ToolSteel/ToolSteelLinksBox';

const Steel53s = () => {
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

export default Steel53s;
