import React from 'react';

import InfoSection from '../../components/products/OffshoreStructuraSteelPlate/OffshoreStructuraSteelPlate/InfoSection';
import Applications from '../../components/products/OffshoreStructuraSteelPlate/OffshoreStructuraSteelPlate/Applications';
import RequestBrochure from '../../components/products/OffshoreStructuraSteelPlate/OffshoreStructuraSteelPlate/RequestBrochure';
import GetInTouch from '../../components/products/OffshoreStructuraSteelPlate/OffshoreStructuraSteelPlate/GetInTouch';
import PropertiesTable from '../../components/products/OffshoreStructuraSteelPlate/OffshoreStructuraSteelPlate/PropertiesTable';
import Banner from '../../components/products/OffshoreStructuraSteelPlate/OffshoreStructuraSteelPlate/Banner';

const OffshoreStructuraSteelPlate = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			<PropertiesTable />
			<RequestBrochure />
			<GetInTouch />
		</div>
	);
};

export default OffshoreStructuraSteelPlate;
