import React from 'react';

import InfoSection from '../../components/products/LongProducts/FlatSquareAndRoundBars/InfoSection';
import Applications from '../../components/products/LongProducts/FlatSquareAndRoundBars/Applications';
import RequestBrochure from '../../components/products/LongProducts/FlatSquareAndRoundBars/RequestBrochure';
import GetInTouch from '../../components/products/LongProducts/FlatSquareAndRoundBars/GetInTouch';
import Banner from '../../components/products/LongProducts/FlatSquareAndRoundBars/Banner';

const FlatSquareAndRoundBars = () => {
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

export default FlatSquareAndRoundBars;
