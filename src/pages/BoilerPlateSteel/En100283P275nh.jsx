import React from 'react';

import InfoSection from '../../components/products/BoilerPlateSteel/En100283P275nh/InfoSection';
import Applications from '../../components/products/BoilerPlateSteel/En100283P275nh/Applications';
import RequestBrochure from '../../components/products/BoilerPlateSteel/En100283P275nh/RequestBrochure';
import GetInTouch from '../../components/products/BoilerPlateSteel/En100283P275nh/GetInTouch';
import PropertiesTable from '../../components/products/BoilerPlateSteel/En100283P275nh/PropertiesTable';
import Banner from '../../components/products/BoilerPlateSteel/En100283P275nh/Banner';
import MaterialSpecificationsTable from '../../components/products/BoilerPlateSteel/En100283P275nh/MaterialSpecificationsTable';

const En100283P275nh = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			{/* <PropertiesTable /> */}
			<MaterialSpecificationsTable/>
			<RequestBrochure />
			<GetInTouch />
		</div>
	);
};

export default En100283P275nh;
