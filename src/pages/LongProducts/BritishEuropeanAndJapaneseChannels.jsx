import React from 'react';

import InfoSection from '../../components/products/LongProducts/BritishEuropeanAndJapaneseChannels/InfoSection';
import Applications from '../../components/products/LongProducts/BritishEuropeanAndJapaneseChannels/Applications';
import RequestBrochure from '../../components/products/LongProducts/BritishEuropeanAndJapaneseChannels/RequestBrochure';
import GetInTouch from '../../components/products/LongProducts/BritishEuropeanAndJapaneseChannels/GetInTouch';
import Banner from '../../components/products/LongProducts/BritishEuropeanAndJapaneseChannels/Banner';
import LongProductsLinksBox from '../../components/products/LongProducts/LongProductsLinksBox';

const BritishEuropeanAndJapaneseChannels = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			<RequestBrochure />
			<LongProductsLinksBox />
			<GetInTouch />
		</div>
	);
};

export default BritishEuropeanAndJapaneseChannels;
