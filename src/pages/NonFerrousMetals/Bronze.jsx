import React from 'react';

import InfoSection from '../../components/products/NonFerrousMetals/Bronze/InfoSection';
import Applications from '../../components/products/NonFerrousMetals/Bronze/Applications';
import RequestBrochure from '../../components/products/NonFerrousMetals/Bronze/RequestBrochure';
import GetInTouch from '../../components/products/NonFerrousMetals/Bronze/GetInTouch';
import Banner from '../../components/products/NonFerrousMetals/Bronze/Banner';

const Bronze = () => {
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

export default Bronze;
