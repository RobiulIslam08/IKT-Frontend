import React from 'react';
import InfoSection from '../../components/products/ToolSteel/Steel69s/InfoSection';
import Applications from '../../components/products/ToolSteel/Steel69s/Applications';
import RequestBrochure from '../../components/products/ToolSteel/Steel69s/RequestBrochure';
import GetInTouch from '../../components/products/ToolSteel/Steel69s/GetInTouch';
import Banner from '../../components/products/ToolSteel/Steel69s/Banner';
import PropertiesTable from '../../components/products/ToolSteel/Steel69s/PropertiesTable';
import ToolSteelLinksBox from '../../components/products/ToolSteel/ToolSteelLinksBox';

const Steel69s = () => {
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

export default Steel69s;
