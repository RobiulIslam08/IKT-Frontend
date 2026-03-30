import React from 'react';

import InfoSection from '../../components/products/HicSteelPlate/AsmeSa516HicAndAstmA516Hic/InfoSection';
import Applications from '../../components/products/HicSteelPlate/AsmeSa516HicAndAstmA516Hic/Applications';
import RequestBrochure from '../../components/products/HicSteelPlate/AsmeSa516HicAndAstmA516Hic/RequestBrochure';
import GetInTouch from '../../components/products/HicSteelPlate/AsmeSa516HicAndAstmA516Hic/GetInTouch';
import PropertiesTable from '../../components/products/HicSteelPlate/AsmeSa516HicAndAstmA516Hic/PropertiesTable';
import Banner from '../../components/products/HicSteelPlate/AsmeSa516HicAndAstmA516Hic/Banner';
import HicSteelPlateLinksBox from '../../components/products/HicSteelPlate/HicSteelPlateLinksBox';

const AsmeSa516HicAndAstmA516Hic = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			<PropertiesTable />
			<RequestBrochure />
			<HicSteelPlateLinksBox />
			<GetInTouch />
		</div>
	);
};

export default AsmeSa516HicAndAstmA516Hic;
