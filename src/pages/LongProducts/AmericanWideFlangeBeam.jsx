import React from 'react';

import InfoSection from '../../components/products/LongProducts/AmericanWideFlangeBeam/InfoSection';
import Applications from '../../components/products/LongProducts/AmericanWideFlangeBeam/Applications';
import RequestBrochure from '../../components/products/LongProducts/AmericanWideFlangeBeam/RequestBrochure';
import GetInTouch from '../../components/products/LongProducts/AmericanWideFlangeBeam/GetInTouch';
import Banner from '../../components/products/LongProducts/AmericanWideFlangeBeam/Banner';
import LongProductsLinksBox from '../../components/products/LongProducts/LongProductsLinksBox';

const AmericanWideFlangeBeam = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			<RequestBrochure />
			<LongProductsLinksBox />
			<GetInTouch />
		</div>
	);
};

export default AmericanWideFlangeBeam;
