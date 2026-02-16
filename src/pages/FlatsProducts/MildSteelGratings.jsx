import React from 'react';

import InfoSection from '../../components/products/FlatsProducts/MildSteelGratings/InfoSection';
import Applications from '../../components/products/FlatsProducts/MildSteelGratings/Applications';
import RequestBrochure from '../../components/products/FlatsProducts/MildSteelGratings/RequestBrochure';
import GetInTouch from '../../components/products/FlatsProducts/MildSteelGratings/GetInTouch';
import Banner from '../../components/products/FlatsProducts/MildSteelGratings/Banner';

const MildSteelGratings = () => {
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

export default MildSteelGratings;
