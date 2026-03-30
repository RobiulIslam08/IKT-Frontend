import React from 'react';

import InfoSection from '../../components/products/BoilerPlateSteel/En10207P265s/InfoSection';
import Applications from '../../components/products/BoilerPlateSteel/En10207P265s/Applications';
import RequestBrochure from '../../components/products/BoilerPlateSteel/En10207P265s/RequestBrochure';
import GetInTouch from '../../components/products/BoilerPlateSteel/En10207P265s/GetInTouch';
import PropertiesTable from '../../components/products/BoilerPlateSteel/En10207P265s/PropertiesTable';
import Banner from '../../components/products/BoilerPlateSteel/En10207P265s/Banner';
import MaterialSpecificationsTableEn10207P2 from '../../components/products/BoilerPlateSteel/En10207P265s/MaterialSpecificationsTableEn10207P2';
import BoilerPlateSteelLinksBox from '../../components/products/BoilerPlateSteel/BoilerPlateSteelLinksBox';

const En10207P265s = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			{/* <PropertiesTable /> */}
			<MaterialSpecificationsTableEn10207P2 />
			<RequestBrochure />
			<BoilerPlateSteelLinksBox />
			<GetInTouch />
		</div>
	);
};

export default En10207P265s;
