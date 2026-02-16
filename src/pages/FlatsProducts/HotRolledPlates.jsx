import React from 'react';

import InfoSection from '../../components/products/FlatsProducts/HotRolledPlates/InfoSection';
import Applications from '../../components/products/FlatsProducts/HotRolledPlates/Applications';
import RequestBrochure from '../../components/products/FlatsProducts/HotRolledPlates/RequestBrochure';
import GetInTouch from '../../components/products/FlatsProducts/HotRolledPlates/GetInTouch';
import Banner from '../../components/products/FlatsProducts/HotRolledPlates/Banner';

const HotRolledPlates = () => {
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

export default HotRolledPlates;
