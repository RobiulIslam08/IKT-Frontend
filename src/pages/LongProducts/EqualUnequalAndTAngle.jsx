import React from 'react';

import InfoSection from '../../components/products/LongProducts/EqualUnequalAndTAngle/InfoSection';
import Applications from '../../components/products/LongProducts/EqualUnequalAndTAngle/Applications';
import RequestBrochure from '../../components/products/LongProducts/EqualUnequalAndTAngle/RequestBrochure';
import GetInTouch from '../../components/products/LongProducts/EqualUnequalAndTAngle/GetInTouch';
import Banner from '../../components/products/LongProducts/EqualUnequalAndTAngle/Banner';

const EqualUnequalAndTAngle = () => {
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

export default EqualUnequalAndTAngle;
