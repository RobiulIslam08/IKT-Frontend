import React from 'react';

import InfoSection from '../../components/products/SuperAusteniticStainlessSteel/SuperAusteniticStainlessSteel/InfoSection';
import Applications from '../../components/products/SuperAusteniticStainlessSteel/SuperAusteniticStainlessSteel/Applications';
import RequestBrochure from '../../components/products/SuperAusteniticStainlessSteel/SuperAusteniticStainlessSteel/RequestBrochure';
import GetInTouch from '../../components/products/SuperAusteniticStainlessSteel/SuperAusteniticStainlessSteel/GetInTouch';
import Banner from '../../components/products/SuperAusteniticStainlessSteel/SuperAusteniticStainlessSteel/Banner';
import SuperAusteniticStainlessSteelLinksBox from '../../components/products/SuperAusteniticStainlessSteel/SuperAusteniticStainlessSteelLinksBox';
import MaterialSpecifications from '../../components/products/SuperAusteniticStainlessSteel/SuperAusteniticStainlessSteel/MaterialSpecifications';

const SuperAusteniticStainlessSteel = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			<MaterialSpecifications />

			<RequestBrochure />
			<SuperAusteniticStainlessSteelLinksBox />
			<GetInTouch />
		</div>
	);
};

export default SuperAusteniticStainlessSteel;
