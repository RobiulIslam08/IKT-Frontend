import React from 'react';

import InfoSection from '../../components/products/460YieldSteelPlate/En100283P460nh/InfoSection';
import Applications from '../../components/products/460YieldSteelPlate/En100283P460nh/Applications';
import RequestBrochure from '../../components/products/460YieldSteelPlate/En100283P460nh/RequestBrochure';
import GetInTouch from '../../components/products/460YieldSteelPlate/En100283P460nh/GetInTouch';
import PropertiesTable from '../../components/products/460YieldSteelPlate/En100283P460nh/PropertiesTable';
import Banner from '../../components/products/460YieldSteelPlate/En100283P460nh/Banner';
import MaterialSpecificationsTable460nh from '../../components/products/460YieldSteelPlate/En100283P460nh/MaterialSpecificationsTable460nh';

const En100283P460nh = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			{/* <PropertiesTable /> */}
			<MaterialSpecificationsTable460nh/>
			<RequestBrochure />
			<GetInTouch />
		</div>
	);
};

export default En100283P460nh;
