import React from 'react';

import InfoSection from '../../components/products/BoilerPlateSteel/En100282P265gh/InfoSection';
import Applications from '../../components/products/BoilerPlateSteel/En100282P265gh/Applications';
import RequestBrochure from '../../components/products/BoilerPlateSteel/En100282P265gh/RequestBrochure';
import GetInTouch from '../../components/products/BoilerPlateSteel/En100282P265gh/GetInTouch';
import PropertiesTable from '../../components/products/BoilerPlateSteel/En100282P265gh/PropertiesTable';
import Banner from '../../components/products/BoilerPlateSteel/En100282P265gh/Banner';
import MaterialSpecificationsTableEn100282 from '../../components/products/BoilerPlateSteel/En100282P265gh/MaterialSpecificationsTableEn100282';

const En100282P265gh = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			{/* <PropertiesTable /> */}
			<MaterialSpecificationsTableEn100282/>
			<RequestBrochure />
			<GetInTouch />
		</div>
	);
};

export default En100282P265gh;
