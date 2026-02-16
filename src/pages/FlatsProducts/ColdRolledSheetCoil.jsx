import React from 'react';

import InfoSection from '../../components/products/FlatsProducts/ColdRolledSheetCoil/InfoSection';
import Applications from '../../components/products/FlatsProducts/ColdRolledSheetCoil/Applications';
import RequestBrochure from '../../components/products/FlatsProducts/ColdRolledSheetCoil/RequestBrochure';
import GetInTouch from '../../components/products/FlatsProducts/ColdRolledSheetCoil/GetInTouch';
import Banner from '../../components/products/FlatsProducts/ColdRolledSheetCoil/Banner';

const ColdRolledSheetCoil = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			<RequestBrochure />
			<GetInTouch />
		</div>
	);
};

export default ColdRolledSheetCoil;
