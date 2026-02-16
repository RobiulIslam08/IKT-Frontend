import React from 'react';

import InfoSection from '../../components/products/LongProducts/UniversalBeams/InfoSection';
import Applications from '../../components/products/LongProducts/UniversalBeams/Applications';
import RequestBrochure from '../../components/products/LongProducts/UniversalBeams/RequestBrochure';
import GetInTouch from '../../components/products/LongProducts/UniversalBeams/GetInTouch';
import Banner from '../../components/products/LongProducts/UniversalBeams/Banner';

const UniversalBeams = () => {
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

export default UniversalBeams;
