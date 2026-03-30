import React from 'react';

import InfoSection from '../../components/products/Rebar/CuttingAndBending/InfoSection';
import Applications from '../../components/products/Rebar/CuttingAndBending/Applications';
import RequestBrochure from '../../components/products/Rebar/CuttingAndBending/RequestBrochure';
import GetInTouch from '../../components/products/Rebar/CuttingAndBending/GetInTouch';
import Banner from '../../components/products/Rebar/CuttingAndBending/Banner';
import RebarLinksBox from '../../components/products/Rebar/RebarLinksBox';

const CuttingAndBending = () => {
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

export default CuttingAndBending;
