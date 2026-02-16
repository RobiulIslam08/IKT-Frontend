import React from 'react';

import InfoSection from '../../components/products/PressureVesselSteel/P355nl2/InfoSection';
import Applications from '../../components/products/PressureVesselSteel/P355nl2/Applications';
import RequestBrochure from '../../components/products/PressureVesselSteel/P355nl2/RequestBrochure';
import GetInTouch from '../../components/products/PressureVesselSteel/P355nl2/GetInTouch';
import PropertiesTable from '../../components/products/PressureVesselSteel/P355nl2/PropertiesTable';
import Banner from '../../components/products/PressureVesselSteel/P355nl2/Banner';
import P355Specifications from '../../components/products/PressureVesselSteel/P355nl2/P355Specifications';

const P355nl2 = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			{/* <PropertiesTable /> */}
			<P355Specifications/>
			<RequestBrochure />
			<GetInTouch />
		</div>
	);
};

export default P355nl2;
