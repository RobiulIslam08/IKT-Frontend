import React from 'react';

import InfoSection from '../../components/products/QuenchedAndTemperedSteel/QuenchedAndTemperedSteel/InfoSection';
import Applications from '../../components/products/QuenchedAndTemperedSteel/QuenchedAndTemperedSteel/Applications';
import RequestBrochure from '../../components/products/QuenchedAndTemperedSteel/QuenchedAndTemperedSteel/RequestBrochure';
import GetInTouch from '../../components/products/QuenchedAndTemperedSteel/QuenchedAndTemperedSteel/GetInTouch';
import Banner from '../../components/products/QuenchedAndTemperedSteel/QuenchedAndTemperedSteel/Banner';
import QuenchedProperties from '../../components/products/QuenchedAndTemperedSteel/QuenchedAndTemperedSteel/QuenchedProperties';
import QuenchedAndTemperedSteelLinksBox from '../../components/products/QuenchedAndTemperedSteel/QuenchedAndTemperedSteelLinksBox';
import SpecialSteelMenuLinksBox from '../../components/products/SpecialSteelMenuLinksBox';

const QuenchedAndTemperedSteel = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			<QuenchedProperties />
			<RequestBrochure />
			{/* <QuenchedAndTemperedSteelLinksBox /> */}
			<SpecialSteelMenuLinksBox />
			<GetInTouch />
		</div>
	);
};

export default QuenchedAndTemperedSteel;
