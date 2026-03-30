import React from 'react';

import InfoSection from '../../components/products/ChromeMolyPlate/Sa387A387Gr22/InfoSection';
import Applications from '../../components/products/ChromeMolyPlate/Sa387A387Gr22/Applications';
import RequestBrochure from '../../components/products/ChromeMolyPlate/Sa387A387Gr22/RequestBrochure';
import GetInTouch from '../../components/products/ChromeMolyPlate/Sa387A387Gr22/GetInTouch';
import PropertiesTable from '../../components/products/ChromeMolyPlate/Sa387A387Gr22/PropertiesTable';
import Banner from '../../components/products/ChromeMolyPlate/Sa387A387Gr22/Banner';
import MaterialSpecificationsTableGr22 from '../../components/products/ChromeMolyPlate/Sa387A387Gr22/MaterialSpecificationsTableGr22';
import ChromeMolyPlateLinksBox from '../../components/products/ChromeMolyPlate/ChromeMolyPlateLinksBox';

const Sa387A387Gr22 = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			{/* <PropertiesTable /> */}
			<MaterialSpecificationsTableGr22 />
			<RequestBrochure />
			<ChromeMolyPlateLinksBox />
			<GetInTouch />
		</div>
	);
};

export default Sa387A387Gr22;
