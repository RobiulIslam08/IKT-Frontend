import React from 'react';

import InfoSection from '../../components/products/FlatsProducts/ShipbuildingGrades/InfoSection';
import Applications from '../../components/products/FlatsProducts/ShipbuildingGrades/Applications';
import RequestBrochure from '../../components/products/FlatsProducts/ShipbuildingGrades/RequestBrochure';
import GetInTouch from '../../components/products/FlatsProducts/ShipbuildingGrades/GetInTouch';
import Banner from '../../components/products/FlatsProducts/ShipbuildingGrades/Banner';
import FlatsProductsLinksBox from '../../components/products/FlatsProducts/FlatsProductsLinksBox';

const ShipbuildingGrades = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			<RequestBrochure />
			<FlatsProductsLinksBox />
			<GetInTouch />
		</div>
	);
};

export default ShipbuildingGrades;
