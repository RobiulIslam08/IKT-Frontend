import React from 'react';

import InfoSection from '../../components/products/QuenchedAndTemperedSteel/En10025S890ql/InfoSection';
import Applications from '../../components/products/QuenchedAndTemperedSteel/En10025S890ql/Applications';
import RequestBrochure from '../../components/products/QuenchedAndTemperedSteel/En10025S890ql/RequestBrochure';
import GetInTouch from '../../components/products/QuenchedAndTemperedSteel/En10025S890ql/GetInTouch';
import PropertiesTable from '../../components/products/QuenchedAndTemperedSteel/En10025S890ql/PropertiesTable';
import Banner from '../../components/products/QuenchedAndTemperedSteel/En10025S890ql/Banner';
import MaterialSpecificationsTableEn890ql from '../../components/products/QuenchedAndTemperedSteel/En10025S890ql/MaterialSpecificationsTableEn890ql';
import QuenchedAndTemperedSteelLinksBox from '../../components/products/QuenchedAndTemperedSteel/QuenchedAndTemperedSteelLinksBox';
import SpecialSteelMenuLinksBox from '../../components/products/SpecialSteelMenuLinksBox';

const En10025S890ql = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			{/* <PropertiesTable /> */}
			<MaterialSpecificationsTableEn890ql />
				<SpecialSteelMenuLinksBox />
			<RequestBrochure />		
			
			
			{/* <QuenchedAndTemperedSteelLinksBox />			
			
			 */}
					
			<GetInTouch />
		</div>
	);
};

export default En10025S890ql;
