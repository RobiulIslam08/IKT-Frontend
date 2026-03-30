import React from 'react';

import InfoSection from '../../components/products/ChromeMolyPlate/Sa387A387Gr11/InfoSection';
import Applications from '../../components/products/ChromeMolyPlate/Sa387A387Gr11/Applications';
import RequestBrochure from '../../components/products/ChromeMolyPlate/Sa387A387Gr11/RequestBrochure';
import GetInTouch from '../../components/products/ChromeMolyPlate/Sa387A387Gr11/GetInTouch';
import PropertiesTable from '../../components/products/ChromeMolyPlate/Sa387A387Gr11/PropertiesTable';
import Banner from '../../components/products/ChromeMolyPlate/Sa387A387Gr11/Banner';
import MaterialSpecificationsTableGr11 from '../../components/products/ChromeMolyPlate/Sa387A387Gr11/MaterialSpecificationsTableGr11';
import ChromeMolyPlateLinksBox from '../../components/products/ChromeMolyPlate/ChromeMolyPlateLinksBox';

const Sa387A387Gr11 = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			{/* <PropertiesTable /> */}
			<MaterialSpecificationsTableGr11 />
			<RequestBrochure />
			<ChromeMolyPlateLinksBox />
			<GetInTouch />
		</div>
	);
};

export default Sa387A387Gr11;
