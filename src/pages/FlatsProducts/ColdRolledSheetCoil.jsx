import React from 'react';

import InfoSection from '../../components/products/FlatsProducts/ColdRolledSheetCoil/InfoSection';
import Applications from '../../components/products/FlatsProducts/ColdRolledSheetCoil/Applications';
import RequestBrochure from '../../components/products/FlatsProducts/ColdRolledSheetCoil/RequestBrochure';
import GetInTouch from '../../components/products/FlatsProducts/ColdRolledSheetCoil/GetInTouch';
import Banner from '../../components/products/FlatsProducts/ColdRolledSheetCoil/Banner';
import FlatsProductsLinksBox from '../../components/products/FlatsProducts/FlatsProductsLinksBox';

const ColdRolledSheetCoil = () => {
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

export default ColdRolledSheetCoil;
