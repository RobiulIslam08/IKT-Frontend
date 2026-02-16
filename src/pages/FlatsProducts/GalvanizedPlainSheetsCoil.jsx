import React from 'react';

import InfoSection from '../../components/products/FlatsProducts/GalvanizedPlainSheetsCoil/InfoSection';
import Applications from '../../components/products/FlatsProducts/GalvanizedPlainSheetsCoil/Applications';
import RequestBrochure from '../../components/products/FlatsProducts/GalvanizedPlainSheetsCoil/RequestBrochure';
import GetInTouch from '../../components/products/FlatsProducts/GalvanizedPlainSheetsCoil/GetInTouch';
import Banner from '../../components/products/FlatsProducts/GalvanizedPlainSheetsCoil/Banner';

const GalvanizedPlainSheetsCoil = () => {
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

export default GalvanizedPlainSheetsCoil;
