import React from 'react';
import InfoSection from '../../components/products/ToolSteel/M42ToolSteel/InfoSection';
import Applications from '../../components/products/ToolSteel/M42ToolSteel/Applications';
import RequestBrochure from '../../components/products/ToolSteel/M42ToolSteel/RequestBrochure';
import GetInTouch from '../../components/products/ToolSteel/M42ToolSteel/GetInTouch';
import Banner from '../../components/products/ToolSteel/M42ToolSteel/Banner';
import PropertiesTable from '../../components/products/ToolSteel/M42ToolSteel/PropertiesTable';

const M42ToolSteel = () => {
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

export default M42ToolSteel;
