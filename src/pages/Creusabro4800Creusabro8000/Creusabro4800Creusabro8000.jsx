import React from 'react';

import InfoSection from '../../components/products/Creusabro4800Creusabro8000/Creusabro4800Creusabro8000/InfoSection';
import Applications from '../../components/products/Creusabro4800Creusabro8000/Creusabro4800Creusabro8000/Applications';
import RequestBrochure from '../../components/products/Creusabro4800Creusabro8000/Creusabro4800Creusabro8000/RequestBrochure';
import GetInTouch from '../../components/products/Creusabro4800Creusabro8000/Creusabro4800Creusabro8000/GetInTouch';
import PropertiesTable from '../../components/products/Creusabro4800Creusabro8000/Creusabro4800Creusabro8000/PropertiesTable';
import Banner from '../../components/products/Creusabro4800Creusabro8000/Creusabro4800Creusabro8000/Banner';

const Creusabro4800Creusabro8000 = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			{/* <PropertiesTable /> */}
			<RequestBrochure />
			<GetInTouch />
		</div>
	);
};

export default Creusabro4800Creusabro8000;
