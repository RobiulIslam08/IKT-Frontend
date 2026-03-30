import React from 'react';

import InfoSection from '../../components/products/FlatsProducts/MildSteelChequerredSteel/InfoSection';
import Applications from '../../components/products/FlatsProducts/MildSteelChequerredSteel/Applications';
import RequestBrochure from '../../components/products/FlatsProducts/MildSteelChequerredSteel/RequestBrochure';
import GetInTouch from '../../components/products/FlatsProducts/MildSteelChequerredSteel/GetInTouch';
import Banner from '../../components/products/FlatsProducts/MildSteelChequerredSteel/Banner';
import FlatsProductsLinksBox from '../../components/products/FlatsProducts/FlatsProductsLinksBox';

const MildSteelChequerredSteel = () => {
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

export default MildSteelChequerredSteel;
