import React from 'react';
import InfoSection from '../../components/products/ToolSteel/C45uToolSteel/InfoSection';
import Applications from '../../components/products/ToolSteel/C45uToolSteel/Applications';
import RequestBrochure from '../../components/products/ToolSteel/C45uToolSteel/RequestBrochure';
import GetInTouch from '../../components/products/ToolSteel/C45uToolSteel/GetInTouch';
import Banner from '../../components/products/ToolSteel/C45uToolSteel/Banner';
import PropertiesTable from '../../components/products/ToolSteel/C45uToolSteel/PropertiesTable';

const C45uToolSteel = () => {
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

export default C45uToolSteel;
