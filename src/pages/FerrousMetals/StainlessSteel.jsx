import React from 'react';

import InfoSection from '../../components/products/FerrousMetals/StainlessSteel/InfoSection';
import Applications from '../../components/products/FerrousMetals/StainlessSteel/Applications';
import RequestBrochure from '../../components/products/FerrousMetals/StainlessSteel/RequestBrochure';
import GetInTouch from '../../components/products/FerrousMetals/StainlessSteel/GetInTouch';
import Banner from '../../components/products/FerrousMetals/StainlessSteel/Banner';

const StainlessSteel = () => {
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

export default StainlessSteel;
