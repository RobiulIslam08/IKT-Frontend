import React from 'react';

import InfoSection from '../../components/products/Rebar/DeformedWeldedWireMesh/InfoSection';
import Applications from '../../components/products/Rebar/DeformedWeldedWireMesh/Applications';
import RequestBrochure from '../../components/products/Rebar/DeformedWeldedWireMesh/RequestBrochure';
import GetInTouch from '../../components/products/Rebar/DeformedWeldedWireMesh/GetInTouch';
import Banner from '../../components/products/Rebar/DeformedWeldedWireMesh/Banner';
import RebarLinksBox from '../../components/products/Rebar/RebarLinksBox';

const DeformedWeldedWireMesh = () => {
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

export default DeformedWeldedWireMesh;
