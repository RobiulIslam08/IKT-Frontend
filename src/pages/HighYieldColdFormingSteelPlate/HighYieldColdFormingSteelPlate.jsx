import React from 'react';

import InfoSection from '../../components/products/HighYieldColdFormingSteelPlate/HighYieldColdFormingSteelPlate/InfoSection';
import Applications from '../../components/products/HighYieldColdFormingSteelPlate/HighYieldColdFormingSteelPlate/Applications';
import RequestBrochure from '../../components/products/HighYieldColdFormingSteelPlate/HighYieldColdFormingSteelPlate/RequestBrochure';
import GetInTouch from '../../components/products/HighYieldColdFormingSteelPlate/HighYieldColdFormingSteelPlate/GetInTouch';
import PropertiesTable from '../../components/products/HighYieldColdFormingSteelPlate/HighYieldColdFormingSteelPlate/PropertiesTable'; import HighYieldColdFormingSteelPlateLinksBox from '../../components/products/HighYieldColdFormingSteelPlate/HighYieldColdFormingSteelPlateLinksBox';
import SpecialSteelMenuLinksBox from '../../components/products/SpecialSteelMenuLinksBox';
import Banner from '../../components/products/HighYieldColdFormingSteelPlate/HighYieldColdFormingSteelPlate/Banner';
import MaterialSpecificationsTableHighYield from '../../components/products/HighYieldColdFormingSteelPlate/HighYieldColdFormingSteelPlate/MaterialSpecificationsTableHighYield';

const HighYieldColdFormingSteelPlate = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			{/* <PropertiesTable /> */}
			<MaterialSpecificationsTableHighYield />
			<RequestBrochure />
			{/* <HighYieldColdFormingSteelPlateLinksBox /> */}
			<SpecialSteelMenuLinksBox />
			<GetInTouch />
		</div>
	);
};

export default HighYieldColdFormingSteelPlate;
