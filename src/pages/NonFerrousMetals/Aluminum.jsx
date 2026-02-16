import React from 'react';

import InfoSection from '../../components/products/NonFerrousMetals/Aluminum/InfoSection';
import Applications from '../../components/products/NonFerrousMetals/Aluminum/Applications';
import RequestBrochure from '../../components/products/NonFerrousMetals/Aluminum/RequestBrochure';
import GetInTouch from '../../components/products/NonFerrousMetals/Aluminum/GetInTouch';
import Banner from '../../components/products/NonFerrousMetals/Aluminum/Banner';

const Aluminum = () => {
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

export default Aluminum;
