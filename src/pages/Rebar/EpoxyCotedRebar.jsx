import React from 'react';

import InfoSection from '../../components/products/Rebar/EpoxyCotedRebar/InfoSection';
import Applications from '../../components/products/Rebar/EpoxyCotedRebar/Applications';
import RequestBrochure from '../../components/products/Rebar/EpoxyCotedRebar/RequestBrochure';
import GetInTouch from '../../components/products/Rebar/EpoxyCotedRebar/GetInTouch';
import Banner from '../../components/products/Rebar/EpoxyCotedRebar/Banner';
import RebarLinksBox from '../../components/products/Rebar/RebarLinksBox';

const EpoxyCotedRebar = () => {
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

export default EpoxyCotedRebar;
