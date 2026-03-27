import React from 'react';
import InfoSection from '../../components/products/ToolSteel/Steel32s/InfoSection';
import Applications from '../../components/products/ToolSteel/Steel32s/Applications';
import RequestBrochure from '../../components/products/ToolSteel/Steel32s/RequestBrochure';
import GetInTouch from '../../components/products/ToolSteel/Steel32s/GetInTouch';
import Banner from '../../components/products/ToolSteel/Steel32s/Banner';
import PropertiesTable from '../../components/products/ToolSteel/Steel32s/PropertiesTable';

const Steel32s = () => {
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

export default Steel32s;
