import React from 'react';

import InfoSection from '../../components/products/AbracladChromiumCarbideWearPlate/AbracladChromiumCarbideWearPlate/InfoSection';
import Applications from '../../components/products/AbracladChromiumCarbideWearPlate/AbracladChromiumCarbideWearPlate/Applications';
import RequestBrochure from '../../components/products/AbracladChromiumCarbideWearPlate/AbracladChromiumCarbideWearPlate/RequestBrochure';
import GetInTouch from '../../components/products/AbracladChromiumCarbideWearPlate/AbracladChromiumCarbideWearPlate/GetInTouch';
import PropertiesTable from '../../components/products/AbracladChromiumCarbideWearPlate/AbracladChromiumCarbideWearPlate/PropertiesTable';
import Banner from '../../components/products/AbracladChromiumCarbideWearPlate/AbracladChromiumCarbideWearPlate/Banner';

const AbracladChromiumCarbideWearPlate = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			{/* <PropertiesTable /> */}
			<RequestBrochure />
			<GetInTouch />
		</div>
	);
};

export default AbracladChromiumCarbideWearPlate;
