import React from 'react';

import InfoSection from '../../components/products/460YieldSteelPlate/En100283P460nl2/InfoSection';
import Applications from '../../components/products/460YieldSteelPlate/En100283P460nl2/Applications';
import RequestBrochure from '../../components/products/460YieldSteelPlate/En100283P460nl2/RequestBrochure';
import GetInTouch from '../../components/products/460YieldSteelPlate/En100283P460nl2/GetInTouch';
import PropertiesTable from '../../components/products/460YieldSteelPlate/En100283P460nl2/PropertiesTable';
import Banner from '../../components/products/460YieldSteelPlate/En100283P460nl2/Banner';
import MaterialSpecificationsTablep460nl2 from '../../components/products/460YieldSteelPlate/En100283P460nl2/MaterialSpecificationsTablep460nl2';

const En100283P460nl2 = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			{/* <PropertiesTable /> */}
			<MaterialSpecificationsTablep460nl2/>
			<RequestBrochure />
			<GetInTouch />
		</div>
	);
};

export default En100283P460nl2;
