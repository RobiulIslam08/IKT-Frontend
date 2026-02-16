import React from 'react';

import InfoSection from '../../components/products/BoilerPlateSteel/Bs1501161430AB/InfoSection';
import Applications from '../../components/products/BoilerPlateSteel/Bs1501161430AB/Applications';
import RequestBrochure from '../../components/products/BoilerPlateSteel/Bs1501161430AB/RequestBrochure';
import GetInTouch from '../../components/products/BoilerPlateSteel/Bs1501161430AB/GetInTouch';
import PropertiesTable from '../../components/products/BoilerPlateSteel/Bs1501161430AB/PropertiesTable';
import Banner from '../../components/products/BoilerPlateSteel/Bs1501161430AB/Banner';
import MaterialSpecificationsTableBS from '../../components/products/BoilerPlateSteel/Bs1501161430AB/MaterialSpecificationsTableBS.jsx';

const Bs1501161430AB = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			{/* <PropertiesTable /> */}
			<MaterialSpecificationsTableBS/>
			<RequestBrochure />
			<GetInTouch />
		</div>
	);
};

export default Bs1501161430AB;
