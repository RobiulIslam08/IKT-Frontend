import React from 'react';

import InfoSection from '../../components/products/ArmourPlate/ArmourPlate/InfoSection';
import Applications from '../../components/products/ArmourPlate/ArmourPlate/Applications';
import RequestBrochure from '../../components/products/ArmourPlate/ArmourPlate/RequestBrochure';
import GetInTouch from '../../components/products/ArmourPlate/ArmourPlate/GetInTouch';
import PropertiesTable from '../../components/products/ArmourPlate/ArmourPlate/PropertiesTable';
import Banner from '../../components/products/ArmourPlate/ArmourPlate/Banner';

const ArmourPlate = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			<PropertiesTable />
			<RequestBrochure />
			<GetInTouch />
		</div>
	);
};

export default ArmourPlate;
