import React from 'react';

import InfoSection from '../../components/products/AbracladChromiumCarbideWearPlate/AbracladChromiumCarbideWearPlate/InfoSection';
import Applications from '../../components/products/AbracladChromiumCarbideWearPlate/AbracladChromiumCarbideWearPlate/Applications';
import RequestBrochure from '../../components/products/AbracladChromiumCarbideWearPlate/AbracladChromiumCarbideWearPlate/RequestBrochure';
import GetInTouch from '../../components/products/AbracladChromiumCarbideWearPlate/AbracladChromiumCarbideWearPlate/GetInTouch';
import PropertiesTable from '../../components/products/AbracladChromiumCarbideWearPlate/AbracladChromiumCarbideWearPlate/PropertiesTable';
import Banner from '../../components/products/AbracladChromiumCarbideWearPlate/AbracladChromiumCarbideWearPlate/Banner';
import AbracladChromiumCarbideWearPlateLinksBox from '../../components/products/AbracladChromiumCarbideWearPlate/AbracladChromiumCarbideWearPlateLinksBox';
import SpecialSteelMenuLinksBox from '../../components/products/SpecialSteelMenuLinksBox';

const AbracladChromiumCarbideWearPlate = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			{/* <PropertiesTable /> */}
			<RequestBrochure />
			{/* <AbracladChromiumCarbideWearPlateLinksBox /> */}
			<SpecialSteelMenuLinksBox />
			<GetInTouch />
		</div>
	);
};

export default AbracladChromiumCarbideWearPlate;
