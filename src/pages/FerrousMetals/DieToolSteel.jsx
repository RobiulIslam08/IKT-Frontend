import React from 'react';

import InfoSection from '../../components/products/FerrousMetals/DieToolSteel/InfoSection';
import Applications from '../../components/products/FerrousMetals/DieToolSteel/Applications';
import RequestBrochure from '../../components/products/FerrousMetals/DieToolSteel/RequestBrochure';
import GetInTouch from '../../components/products/FerrousMetals/DieToolSteel/GetInTouch';
import Banner from '../../components/products/FerrousMetals/DieToolSteel/Banner';
import FerrousMetalsLinksBox from '../../components/products/FerrousMetals/FerrousMetalsLinksBox';

const DieToolSteel = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			<RequestBrochure />
			<FerrousMetalsLinksBox />
			<GetInTouch />
		</div>
	);
};

export default DieToolSteel;
