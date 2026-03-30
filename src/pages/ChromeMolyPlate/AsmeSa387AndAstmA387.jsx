import React from 'react';

import InfoSection from '../../components/products/ChromeMolyPlate/AsmeSa387AndAstmA387/InfoSection';
import Applications from '../../components/products/ChromeMolyPlate/AsmeSa387AndAstmA387/Applications';
import RequestBrochure from '../../components/products/ChromeMolyPlate/AsmeSa387AndAstmA387/RequestBrochure';
import GetInTouch from '../../components/products/ChromeMolyPlate/AsmeSa387AndAstmA387/GetInTouch';
import PropertiesTable from '../../components/products/ChromeMolyPlate/AsmeSa387AndAstmA387/PropertiesTable';
import Banner from '../../components/products/ChromeMolyPlate/AsmeSa387AndAstmA387/Banner';
import ChromeMolyPlateLinksBox from '../../components/products/ChromeMolyPlate/ChromeMolyPlateLinksBox';

const AsmeSa387AndAstmA387 = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			<PropertiesTable />
			<RequestBrochure />
			<ChromeMolyPlateLinksBox />
			<GetInTouch />
		</div>
	);
};

export default AsmeSa387AndAstmA387;
