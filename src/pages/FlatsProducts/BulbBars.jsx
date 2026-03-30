import React from 'react';

import InfoSection from '../../components/products/FlatsProducts/BulbBars/InfoSection';
import Applications from '../../components/products/FlatsProducts/BulbBars/Applications';
import RequestBrochure from '../../components/products/FlatsProducts/BulbBars/RequestBrochure';
import GetInTouch from '../../components/products/FlatsProducts/BulbBars/GetInTouch';
import Banner from '../../components/products/FlatsProducts/BulbBars/Banner';
import FlatsProductsLinksBox from '../../components/products/FlatsProducts/FlatsProductsLinksBox';

const BulbBars = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			<RequestBrochure />
			<FlatsProductsLinksBox />
			<GetInTouch />
		</div>
	);
};

export default BulbBars;
