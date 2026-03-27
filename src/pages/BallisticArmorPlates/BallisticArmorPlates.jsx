import React from 'react';

import InfoSection from '../../components/products/BallisticArmorPlates/BallisticArmorPlates/InfoSection';
//  
import RequestBrochure from '../../components/products/BallisticArmorPlates/BallisticArmorPlates/RequestBrochure';
import GetInTouch from '../../components/products/BallisticArmorPlates/BallisticArmorPlates/GetInTouch';

import Banner from '../../components/products/BallisticArmorPlates/BallisticArmorPlates/Banner';

const BallisticArmorPlates = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			{/* <Applications /> */}
			
			<RequestBrochure />
			<GetInTouch />
		</div>
	);
};

export default BallisticArmorPlates;
