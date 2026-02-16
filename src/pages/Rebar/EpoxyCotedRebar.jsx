import React from 'react';

import InfoSection from '../../components/products/Rebar/EpoxyCotedRebar/InfoSection';
import Applications from '../../components/products/Rebar/EpoxyCotedRebar/Applications';
import RequestBrochure from '../../components/products/Rebar/EpoxyCotedRebar/RequestBrochure';
import GetInTouch from '../../components/products/Rebar/EpoxyCotedRebar/GetInTouch';
import Banner from '../../components/products/Rebar/EpoxyCotedRebar/Banner';

const EpoxyCotedRebar = () => {
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

export default EpoxyCotedRebar;
