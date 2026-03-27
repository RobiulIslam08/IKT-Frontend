import React from 'react';
import InfoSection from '../../components/products/ToolSteel/P509ToolSteel/InfoSection';
import Applications from '../../components/products/ToolSteel/P509ToolSteel/Applications';
import RequestBrochure from '../../components/products/ToolSteel/P509ToolSteel/RequestBrochure';
import GetInTouch from '../../components/products/ToolSteel/P509ToolSteel/GetInTouch';
import Banner from '../../components/products/ToolSteel/P509ToolSteel/Banner';
import PropertiesTable from '../../components/products/ToolSteel/P509ToolSteel/PropertiesTable';

const P509ToolSteel = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <PropertiesTable />
      <RequestBrochure />
      <GetInTouch />
    </div>
  );
};

export default P509ToolSteel;
