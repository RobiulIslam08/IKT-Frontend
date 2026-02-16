import React from 'react';

import InfoSection from '../../components/products/TubeTubularsProducts/RectangularHollowSections/InfoSection';
import Applications from '../../components/products/TubeTubularsProducts/RectangularHollowSections/Applications';
import RequestBrochure from '../../components/products/TubeTubularsProducts/RectangularHollowSections/RequestBrochure';
import GetInTouch from '../../components/products/TubeTubularsProducts/RectangularHollowSections/GetInTouch';
import Banner from '../../components/products/TubeTubularsProducts/RectangularHollowSections/Banner';

const RectangularHollowSections = () => {
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

export default RectangularHollowSections;
