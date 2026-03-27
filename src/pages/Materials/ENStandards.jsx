import React from 'react';
import Banner from '../../components/products/Materials/ENStandards/Banner';
import InfoSection from '../../components/products/Materials/ENStandards/InfoSection';
import Applications from '../../components/products/Materials/ENStandards/Applications';
import GetInTouch from '../../components/products/Materials/ENStandards/GetInTouch';
import PropertiesTable from '../../components/products/Materials/ENStandards/PropertiesTable';

const ENStandards = () => {
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

export default ENStandards;
