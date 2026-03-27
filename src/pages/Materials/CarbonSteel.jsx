import React from 'react';
import Banner from '../../components/products/Materials/CarbonSteel/Banner';
import InfoSection from '../../components/products/Materials/CarbonSteel/InfoSection';
import Applications from '../../components/products/Materials/CarbonSteel/Applications';
import GetInTouch from '../../components/products/Materials/CarbonSteel/GetInTouch';
import PropertiesTable from '../../components/products/Materials/CarbonSteel/PropertiesTable';

const CarbonSteel = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			<PropertiesTable />
			<GetInTouch />
		</div>
	);
};

export default CarbonSteel;
