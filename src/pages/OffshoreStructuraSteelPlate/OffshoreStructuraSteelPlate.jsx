import React from 'react';

import InfoSection from '../../components/products/OffshoreStructuraSteelPlate/OffshoreStructuraSteelPlate/InfoSection';
import Applications from '../../components/products/OffshoreStructuraSteelPlate/OffshoreStructuraSteelPlate/Applications';
import RequestBrochure from '../../components/products/OffshoreStructuraSteelPlate/OffshoreStructuraSteelPlate/RequestBrochure';
import GetInTouch from '../../components/products/OffshoreStructuraSteelPlate/OffshoreStructuraSteelPlate/GetInTouch';
import PropertiesTable from '../../components/products/OffshoreStructuraSteelPlate/OffshoreStructuraSteelPlate/PropertiesTable'; import OffshoreStructuralSteelPlateLinksBox from '../../components/products/OffshoreStructuraSteelPlate/OffshoreStructuralSteelPlateLinksBox'; import Banner from '../../components/products/OffshoreStructuraSteelPlate/OffshoreStructuraSteelPlate/Banner';

const OffshoreStructuraSteelPlate = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			<PropertiesTable />
			<RequestBrochure />
			<OffshoreStructuralSteelPlateLinksBox />
			<GetInTouch />
		</div>
	);
};

export default OffshoreStructuraSteelPlate;
