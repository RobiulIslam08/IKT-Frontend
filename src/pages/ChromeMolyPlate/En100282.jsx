import React from 'react';

import InfoSection from '../../components/products/ChromeMolyPlate/En100282/InfoSection';
import Applications from '../../components/products/ChromeMolyPlate/En100282/Applications';
import RequestBrochure from '../../components/products/ChromeMolyPlate/En100282/RequestBrochure';
import GetInTouch from '../../components/products/ChromeMolyPlate/En100282/GetInTouch';
import PropertiesTable from '../../components/products/ChromeMolyPlate/En100282/PropertiesTable';
import Banner from '../../components/products/ChromeMolyPlate/En100282/Banner';
import MaterialSpecificationsEn100282 from '../../components/products/ChromeMolyPlate/En100282/MaterialSpecificationsEn100282';

const En100282 = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			{/* <PropertiesTable /> */}
			<MaterialSpecificationsEn100282/>
			<RequestBrochure />
			<GetInTouch />
		</div>
	);
};

export default En100282;
