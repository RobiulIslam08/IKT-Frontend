import React from 'react';

import InfoSection from '../../components/products/NonFerrousMetals/Copper/InfoSection';
import Applications from '../../components/products/NonFerrousMetals/Copper/Applications';
import RequestBrochure from '../../components/products/NonFerrousMetals/Copper/RequestBrochure';
import GetInTouch from '../../components/products/NonFerrousMetals/Copper/GetInTouch';
import Banner from '../../components/products/NonFerrousMetals/Copper/Banner';

const Copper = () => {
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

export default Copper;
