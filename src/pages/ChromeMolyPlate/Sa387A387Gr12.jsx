import React from 'react';

import InfoSection from '../../components/products/ChromeMolyPlate/Sa387A387Gr12/InfoSection';
import Applications from '../../components/products/ChromeMolyPlate/Sa387A387Gr12/Applications';
import RequestBrochure from '../../components/products/ChromeMolyPlate/Sa387A387Gr12/RequestBrochure';
import GetInTouch from '../../components/products/ChromeMolyPlate/Sa387A387Gr12/GetInTouch';
import PropertiesTable from '../../components/products/ChromeMolyPlate/Sa387A387Gr12/PropertiesTable';
import Banner from '../../components/products/ChromeMolyPlate/Sa387A387Gr12/Banner';
import MaterialSpecificationsTableGr12 from '../../components/products/ChromeMolyPlate/Sa387A387Gr12/MaterialSpecificationsTableGr12';
import ChromeMolyPlateLinksBox from '../../components/products/ChromeMolyPlate/ChromeMolyPlateLinksBox';

const Sa387A387Gr12 = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			{/* <PropertiesTable /> */}
			<MaterialSpecificationsTableGr12 />
			<RequestBrochure />
			<ChromeMolyPlateLinksBox />
			<GetInTouch />
		</div>
	);
};

export default Sa387A387Gr12;
