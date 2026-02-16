import React from 'react';
// import { useParams } from 'react-router-dom';
import Banner from '../components/products/Stainless-Steel-Plate/StainlessSteel304_304L/Banner';
import { InfoSection } from '../components/products/Stainless-Steel-Plate/StainlessSteel304_304L/InfoSection';
import Applications from '../components/products/Stainless-Steel-Plate/StainlessSteel304_304L/Applications';
import RequestBrochure from '../components/products/Stainless-Steel-Plate/StainlessSteel304_304L/RequestBrochure';
import GetInTouch from '../components/products/Stainless-Steel-Plate/StainlessSteel304_304L/GetInTouch';
import PropertiesTable from '../components/products/Stainless-Steel-Plate/StainlessSteel304_304L/PropertiesTable';

const ProductPage = () => {
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

export default ProductPage;