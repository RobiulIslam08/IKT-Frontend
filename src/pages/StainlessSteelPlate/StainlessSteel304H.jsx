import React from 'react';

import InfoSection from '../../components/products/Stainless-Steel-Plate/StainlessSteel304H/InfoSection';
import Applications from '../../components/products/Stainless-Steel-Plate/StainlessSteel304H/Applications';
import RequestBrochure from '../../components/products/Stainless-Steel-Plate/StainlessSteel304H/RequestBrochure';
import GetInTouch from '../../components/products/Stainless-Steel-Plate/StainlessSteel304H/GetInTouch';
import PropertiesTable from '../../components/products/Stainless-Steel-Plate/StainlessSteel304H/PropertiesTable';
import Banner from '../../components/products/Stainless-Steel-Plate/StainlessSteel304H/Banner';
import StainlessSteelLinksBox from '../../components/products/StainlessSteelPlate/StainlessSteelLinksBox';

const StainlessSteel304H = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			<PropertiesTable />
			<RequestBrochure />
			<StainlessSteelLinksBox />
			<GetInTouch />
		</div>
	);
};

export default StainlessSteel304H;
