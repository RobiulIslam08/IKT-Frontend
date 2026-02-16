import React from 'react';

import InfoSection from '../../components/products/FerrousMetals/ChromeBar/InfoSection';
import Applications from '../../components/products/FerrousMetals/ChromeBar/Applications';
import RequestBrochure from '../../components/products/FerrousMetals/ChromeBar/RequestBrochure';
import GetInTouch from '../../components/products/FerrousMetals/ChromeBar/GetInTouch';
import Banner from '../../components/products/FerrousMetals/ChromeBar/Banner';

const ChromeBar = () => {
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

export default ChromeBar;
