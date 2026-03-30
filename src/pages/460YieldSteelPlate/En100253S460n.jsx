import React from 'react';

import InfoSection from '../../components/products/460YieldSteelPlate/En100253S460n/InfoSection';
import Applications from '../../components/products/460YieldSteelPlate/En100253S460n/Applications';
import RequestBrochure from '../../components/products/460YieldSteelPlate/En100253S460n/RequestBrochure';
import GetInTouch from '../../components/products/460YieldSteelPlate/En100253S460n/GetInTouch';
import PropertiesTable from '../../components/products/460YieldSteelPlate/En100253S460n/PropertiesTable';
import Banner from '../../components/products/460YieldSteelPlate/En100253S460n/Banner';
import MaterialSpecificationsTable460n from '../../components/products/460YieldSteelPlate/En100253S460n/MaterialSpecificationsTable460n';
import YieldSteelPlateLinksBox from '../../components/products/460YieldSteelPlate/YieldSteelPlateLinksBox';

const En100253S460n = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			{/* <PropertiesTable /> */}

			<RequestBrochure />
			<YieldSteelPlateLinksBox />
			<GetInTouch />
		</div>
	);
};

export default En100253S460n;
