import React from 'react';

import InfoSection from '../../components/products/TubeTubularsProducts/CircularHollowSections/InfoSection';
import Applications from '../../components/products/TubeTubularsProducts/CircularHollowSections/Applications';
import RequestBrochure from '../../components/products/TubeTubularsProducts/CircularHollowSections/RequestBrochure';
import GetInTouch from '../../components/products/TubeTubularsProducts/CircularHollowSections/GetInTouch';
import Banner from '../../components/products/TubeTubularsProducts/CircularHollowSections/Banner';

const CircularHollowSections = () => {
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

export default CircularHollowSections;
