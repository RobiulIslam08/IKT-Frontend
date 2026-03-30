
import React from 'react';

import { InfoSection } from '../../components/products/Stainless-Steel-Plate/StainlessSteel304_304L/InfoSection';
import Applications from '../../components/products/Stainless-Steel-Plate/StainlessSteel304_304L/Applications';
import RequestBrochure from '../../components/products/Stainless-Steel-Plate/StainlessSteel304_304L/RequestBrochure';
import GetInTouch from '../../components/products/Stainless-Steel-Plate/StainlessSteel304_304L/GetInTouch';
import PropertiesTable from '../../components/products/Stainless-Steel-Plate/StainlessSteel304_304L/PropertiesTable';
import Banner from '../../components/products/Stainless-Steel-Plate/StainlessSteel304_304L/Banner';
import StainlessSteelLinksBox from '../../components/products/StainlessSteelPlate/StainlessSteelLinksBox';
const StainlessSteel304_304L = () => {
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

export default StainlessSteel304_304L;