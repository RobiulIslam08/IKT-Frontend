import React from 'react';

import InfoSection from '../../components/products/HicSteelPlate/CarelsoHicPremium/InfoSection';
import Applications from '../../components/products/HicSteelPlate/CarelsoHicPremium/Applications';
import RequestBrochure from '../../components/products/HicSteelPlate/CarelsoHicPremium/RequestBrochure';
import GetInTouch from '../../components/products/HicSteelPlate/CarelsoHicPremium/GetInTouch';
import PropertiesTable from '../../components/products/HicSteelPlate/CarelsoHicPremium/PropertiesTable';
import Banner from '../../components/products/HicSteelPlate/CarelsoHicPremium/Banner';

const CarelsoHicPremium = () => {
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

export default CarelsoHicPremium;
