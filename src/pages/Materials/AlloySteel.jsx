import React from 'react';
import Banner from '../../components/products/Materials/AlloySteel/Banner';
import InfoSection from '../../components/products/Materials/AlloySteel/InfoSection';
import Applications from '../../components/products/Materials/AlloySteel/Applications';
import GetInTouch from '../../components/products/Materials/AlloySteel/GetInTouch';
import PropertiesTable from '../../components/products/Materials/AlloySteel/PropertiesTable';
import SpecialAlloysLinksBox from '../../components/products/Materials/SpecialAlloysLinksBox';

const AlloySteel = () => {
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

export default AlloySteel;
