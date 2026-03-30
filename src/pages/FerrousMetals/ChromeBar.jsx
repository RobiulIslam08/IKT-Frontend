import React from 'react';

import InfoSection from '../../components/products/FerrousMetals/ChromeBar/InfoSection';
import Applications from '../../components/products/FerrousMetals/ChromeBar/Applications';
import RequestBrochure from '../../components/products/FerrousMetals/ChromeBar/RequestBrochure';
import GetInTouch from '../../components/products/FerrousMetals/ChromeBar/GetInTouch';
import Banner from '../../components/products/FerrousMetals/ChromeBar/Banner'; import FerrousMetalsLinksBox from '../../components/products/FerrousMetals/FerrousMetalsLinksBox';
const ChromeBar = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			<RequestBrochure />
			<FerrousMetalsLinksBox />
			<GetInTouch />
		</div>
	);
};

export default ChromeBar;
