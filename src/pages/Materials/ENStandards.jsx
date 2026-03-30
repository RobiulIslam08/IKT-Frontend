import React from 'react';
import Banner from '../../components/products/Materials/ENStandards/Banner';
import InfoSection from '../../components/products/Materials/ENStandards/InfoSection';
import Applications from '../../components/products/Materials/ENStandards/Applications';
import GetInTouch from '../../components/products/Materials/ENStandards/GetInTouch';
import PropertiesTable from '../../components/products/Materials/ENStandards/PropertiesTable';
import SpecialAlloysLinksBox from '../../components/products/Materials/SpecialAlloysLinksBox';

const ENStandards = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			<PropertiesTable />
			<SpecialAlloysLinksBox />
			<GetInTouch />
		</div>
	);
};

export default ENStandards;
