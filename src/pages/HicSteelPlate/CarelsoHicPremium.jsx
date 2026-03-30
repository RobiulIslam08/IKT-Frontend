import React from 'react';

import InfoSection from '../../components/products/HicSteelPlate/CarelsoHicPremium/InfoSection';
import Applications from '../../components/products/HicSteelPlate/CarelsoHicPremium/Applications';
import RequestBrochure from '../../components/products/HicSteelPlate/CarelsoHicPremium/RequestBrochure';
import GetInTouch from '../../components/products/HicSteelPlate/CarelsoHicPremium/GetInTouch';
import PropertiesTable from '../../components/products/HicSteelPlate/CarelsoHicPremium/PropertiesTable';
import Banner from '../../components/products/HicSteelPlate/CarelsoHicPremium/Banner';
import HicSteelPlateLinksBox from '../../components/products/HicSteelPlate/HicSteelPlateLinksBox';

const CarelsoHicPremium = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			<PropertiesTable />
			<RequestBrochure />
			<HicSteelPlateLinksBox />
			<GetInTouch />
		</div>
	);
};

export default CarelsoHicPremium;
