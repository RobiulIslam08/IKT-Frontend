import React from 'react';
import InfoSection from '../../components/products/ToolSteel/GroundFlatStock/InfoSection';
import Applications from '../../components/products/ToolSteel/GroundFlatStock/Applications';
import RequestBrochure from '../../components/products/ToolSteel/GroundFlatStock/RequestBrochure';
import GetInTouch from '../../components/products/ToolSteel/GroundFlatStock/GetInTouch';
import Banner from '../../components/products/ToolSteel/GroundFlatStock/Banner';
import PropertiesTable from '../../components/products/ToolSteel/GroundFlatStock/PropertiesTable';

const GroundFlatStock = () => {
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

export default GroundFlatStock;
