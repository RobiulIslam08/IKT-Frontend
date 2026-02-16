import React from 'react';

import InfoSection from '../../components/products/460YieldSteelPlate/En100253S460nl/InfoSection';
import Applications from '../../components/products/460YieldSteelPlate/En100253S460nl/Applications';
import RequestBrochure from '../../components/products/460YieldSteelPlate/En100253S460nl/RequestBrochure';
import GetInTouch from '../../components/products/460YieldSteelPlate/En100253S460nl/GetInTouch';
import PropertiesTable from '../../components/products/460YieldSteelPlate/En100253S460nl/PropertiesTable';
import Banner from '../../components/products/460YieldSteelPlate/En100253S460nl/Banner';
import MaterialSpecificationsTable460nl from '../../components/products/460YieldSteelPlate/En100253S460nl/MaterialSpecificationsTable460nl';

const En100253S460nl = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			{/* <PropertiesTable /> */}
			<MaterialSpecificationsTable460nl/>
			<RequestBrochure />
			<GetInTouch />
		</div>
	);
};

export default En100253S460nl;
