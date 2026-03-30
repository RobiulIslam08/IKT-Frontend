import React from 'react';

import InfoSection from '../../components/products/NonFerrousMetals/Copper/InfoSection';
import Applications from '../../components/products/NonFerrousMetals/Copper/Applications';
import RequestBrochure from '../../components/products/NonFerrousMetals/Copper/RequestBrochure';
import GetInTouch from '../../components/products/NonFerrousMetals/Copper/GetInTouch';
import Banner from '../../components/products/NonFerrousMetals/Copper/Banner'; import NonFerrousMetalsLinksBox from '../../components/products/NonFerrousMetals/NonFerrousMetalsLinksBox';
const Copper = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			<RequestBrochure />
			<NonFerrousMetalsLinksBox />
			<GetInTouch />
		</div>
	);
};

export default Copper;
