import React from 'react';

import InfoSection from '../../components/products/FerrousMetals/CarbonAlloySteel/InfoSection';
import Applications from '../../components/products/FerrousMetals/CarbonAlloySteel/Applications';
import RequestBrochure from '../../components/products/FerrousMetals/CarbonAlloySteel/RequestBrochure';
import GetInTouch from '../../components/products/FerrousMetals/CarbonAlloySteel/GetInTouch';
import Banner from '../../components/products/FerrousMetals/CarbonAlloySteel/Banner';

const CarbonAlloySteel = () => {
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

export default CarbonAlloySteel;
