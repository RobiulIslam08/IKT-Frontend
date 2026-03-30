import React from 'react';

import InfoSection from '../../components/products/AbrasionWearResistantSteel/AbrasionWearResistantSteel/InfoSection';
import Applications from '../../components/products/AbrasionWearResistantSteel/AbrasionWearResistantSteel/Applications';
import RequestBrochure from '../../components/products/AbrasionWearResistantSteel/AbrasionWearResistantSteel/RequestBrochure';
import GetInTouch from '../../components/products/AbrasionWearResistantSteel/AbrasionWearResistantSteel/GetInTouch';
import PropertiesTable from '../../components/products/AbrasionWearResistantSteel/AbrasionWearResistantSteel/PropertiesTable'; import AbrasionWearResistantSteelLinksBox from '../../components/products/AbrasionWearResistantSteel/AbrasionWearResistantSteelLinksBox';
import SpecialSteelMenuLinksBox from '../../components/products/SpecialSteelMenuLinksBox';
import Banner from '../../components/products/AbrasionWearResistantSteel/AbrasionWearResistantSteel/Banner';

const AbrasionWearResistantSteel = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			<PropertiesTable />
			<RequestBrochure />
			{/* <AbrasionWearResistantSteelLinksBox /> */}
			<SpecialSteelMenuLinksBox />
			<GetInTouch />
		</div>
	);
};

export default AbrasionWearResistantSteel;
