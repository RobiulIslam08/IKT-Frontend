import React from 'react';

import InfoSection from '../../components/products/TubeTubularsProducts/RectangularHollowSections/InfoSection';
import Applications from '../../components/products/TubeTubularsProducts/RectangularHollowSections/Applications';
import RequestBrochure from '../../components/products/TubeTubularsProducts/RectangularHollowSections/RequestBrochure';
import GetInTouch from '../../components/products/TubeTubularsProducts/RectangularHollowSections/GetInTouch';
import Banner from '../../components/products/TubeTubularsProducts/RectangularHollowSections/Banner';
import TubeAndTubularsProductsLinksBox from '../../components/products/TubeTubularsProducts/TubeAndTubularsProductsLinksBox';

const RectangularHollowSections = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			<RequestBrochure />
			<TubeAndTubularsProductsLinksBox />
			<GetInTouch />
		</div>
	);
};

export default RectangularHollowSections;
