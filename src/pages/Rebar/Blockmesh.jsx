import React from 'react';

import InfoSection from '../../components/products/Rebar/Blockmesh/InfoSection';
import Applications from '../../components/products/Rebar/Blockmesh/Applications';
import RequestBrochure from '../../components/products/Rebar/Blockmesh/RequestBrochure';
import GetInTouch from '../../components/products/Rebar/Blockmesh/GetInTouch';
import Banner from '../../components/products/Rebar/Blockmesh/Banner';
import RebarLinksBox from '../../components/products/Rebar/RebarLinksBox';

const Blockmesh = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			<RequestBrochure />
			<RebarLinksBox />
			<GetInTouch />
		</div>
	);
};

export default Blockmesh;
