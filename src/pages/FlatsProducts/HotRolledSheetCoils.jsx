import React from 'react';

import InfoSection from '../../components/products/FlatsProducts/HotRolledSheetCoils/InfoSection';
import Applications from '../../components/products/FlatsProducts/HotRolledSheetCoils/Applications';
import RequestBrochure from '../../components/products/FlatsProducts/HotRolledSheetCoils/RequestBrochure';
import GetInTouch from '../../components/products/FlatsProducts/HotRolledSheetCoils/GetInTouch';
import Banner from '../../components/products/FlatsProducts/HotRolledSheetCoils/Banner';
import FlatsProductsLinksBox from '../../components/products/FlatsProducts/FlatsProductsLinksBox';

const HotRolledSheetCoils = () => {
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

export default HotRolledSheetCoils;
