import React from 'react';

import InfoSection from '../../components/products/NonFerrousMetals/Brass/InfoSection';
import Applications from '../../components/products/NonFerrousMetals/Brass/Applications';
import RequestBrochure from '../../components/products/NonFerrousMetals/Brass/RequestBrochure';
import GetInTouch from '../../components/products/NonFerrousMetals/Brass/GetInTouch';
import Banner from '../../components/products/NonFerrousMetals/Brass/Banner';
import NonFerrousMetalsLinksBox from '../../components/products/NonFerrousMetals/NonFerrousMetalsLinksBox';

const Brass = () => {
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

export default Brass;
