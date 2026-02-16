import React from 'react';

import InfoSection from '../../components/products/QuenchedAndTemperedSteel/En10025S690ql/InfoSection';
import Applications from '../../components/products/QuenchedAndTemperedSteel/En10025S690ql/Applications';
import RequestBrochure from '../../components/products/QuenchedAndTemperedSteel/En10025S690ql/RequestBrochure';
import GetInTouch from '../../components/products/QuenchedAndTemperedSteel/En10025S690ql/GetInTouch';
import PropertiesTable from '../../components/products/QuenchedAndTemperedSteel/En10025S690ql/PropertiesTable';
import Banner from '../../components/products/QuenchedAndTemperedSteel/En10025S690ql/Banner';
import MaterialSpecificationsTableEn690ql from '../../components/products/QuenchedAndTemperedSteel/En10025S690ql/MaterialSpecificationsTableEn690ql';

const En10025S690ql = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			{/* <PropertiesTable /> */}
			<MaterialSpecificationsTableEn690ql/>
			<RequestBrochure />
			<GetInTouch />
		</div>
	);
};

export default En10025S690ql;
