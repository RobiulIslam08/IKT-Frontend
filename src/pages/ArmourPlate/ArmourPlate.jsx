import React from 'react';

import InfoSection from '../../components/products/ArmourPlate/ArmourPlate/InfoSection';
import Applications from '../../components/products/ArmourPlate/ArmourPlate/Applications';
import RequestBrochure from '../../components/products/ArmourPlate/ArmourPlate/RequestBrochure';
import GetInTouch from '../../components/products/ArmourPlate/ArmourPlate/GetInTouch';
import PropertiesTable from '../../components/products/ArmourPlate/ArmourPlate/PropertiesTable'; import ArmourPlateLinksBox from '../../components/products/ArmourPlate/ArmourPlateLinksBox';
import SpecialSteelMenuLinksBox from '../../components/products/SpecialSteelMenuLinksBox';
import Banner from '../../components/products/ArmourPlate/ArmourPlate/Banner';

const ArmourPlate = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			<PropertiesTable />
			<RequestBrochure />
			{/* <ArmourPlateLinksBox /> */}
			<SpecialSteelMenuLinksBox />
			<GetInTouch />
		</div>
	);
};

export default ArmourPlate;
