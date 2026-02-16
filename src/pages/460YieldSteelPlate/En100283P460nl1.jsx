import React from 'react';

import InfoSection from '../../components/products/460YieldSteelPlate/En100283P460nl1/InfoSection';
import Applications from '../../components/products/460YieldSteelPlate/En100283P460nl1/Applications';
import RequestBrochure from '../../components/products/460YieldSteelPlate/En100283P460nl1/RequestBrochure';
import GetInTouch from '../../components/products/460YieldSteelPlate/En100283P460nl1/GetInTouch';
import PropertiesTable from '../../components/products/460YieldSteelPlate/En100283P460nl1/PropertiesTable';
import Banner from '../../components/products/460YieldSteelPlate/En100283P460nl1/Banner';
import MaterialSpecificationsTablep460nl1 from '../../components/products/460YieldSteelPlate/En100283P460nl1/MaterialSpecificationsTablep460nl1';

const En100283P460nl1 = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			{/* <PropertiesTable /> */}
			<MaterialSpecificationsTablep460nl1/>
			<RequestBrochure />
			<GetInTouch />
		</div>
	);
};

export default En100283P460nl1;
