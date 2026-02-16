import React from 'react';

import InfoSection from '../../components/products/PressureVesselSteel/Product490bLt50/InfoSection';
import Applications from '../../components/products/PressureVesselSteel/Product490bLt50/Applications';
import RequestBrochure from '../../components/products/PressureVesselSteel/Product490bLt50/RequestBrochure';
import GetInTouch from '../../components/products/PressureVesselSteel/Product490bLt50/GetInTouch';
import PropertiesTable from '../../components/products/PressureVesselSteel/Product490bLt50/PropertiesTable';
import Banner from '../../components/products/PressureVesselSteel/Product490bLt50/Banner';
import MaterialPropertiesTable from '../../components/products/PressureVesselSteel/490bLt50/MaterialPropertiesTable';

const Product490bLt50 = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			{/* <PropertiesTable /> */}
			<MaterialPropertiesTable/>
			<RequestBrochure />
			<GetInTouch />
		</div>
	);
};

export default Product490bLt50;
