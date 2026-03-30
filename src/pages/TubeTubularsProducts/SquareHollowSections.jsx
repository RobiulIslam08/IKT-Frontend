import React from 'react';

import InfoSection from '../../components/products/TubeTubularsProducts/SquareHollowSections/InfoSection';
import Applications from '../../components/products/TubeTubularsProducts/SquareHollowSections/Applications';
import RequestBrochure from '../../components/products/TubeTubularsProducts/SquareHollowSections/RequestBrochure';
import GetInTouch from '../../components/products/TubeTubularsProducts/SquareHollowSections/GetInTouch';
import Banner from '../../components/products/TubeTubularsProducts/SquareHollowSections/Banner';
import TubeAndTubularsProductsLinksBox from '../../components/products/TubeTubularsProducts/TubeAndTubularsProductsLinksBox';

const SquareHollowSections = () => {
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

export default SquareHollowSections;
