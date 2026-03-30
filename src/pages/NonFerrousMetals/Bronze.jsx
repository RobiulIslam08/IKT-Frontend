import React from 'react';

import InfoSection from '../../components/products/NonFerrousMetals/Bronze/InfoSection';
import Applications from '../../components/products/NonFerrousMetals/Bronze/Applications';
import RequestBrochure from '../../components/products/NonFerrousMetals/Bronze/RequestBrochure';
import GetInTouch from '../../components/products/NonFerrousMetals/Bronze/GetInTouch';
import Banner from '../../components/products/NonFerrousMetals/Bronze/Banner';
import NonFerrousMetalsLinksBox from '../../components/products/NonFerrousMetals/NonFerrousMetalsLinksBox';

const Bronze = () => {
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

export default Bronze;
