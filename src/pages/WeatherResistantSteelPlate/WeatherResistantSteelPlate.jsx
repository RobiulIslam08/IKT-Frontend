import React from 'react';

import InfoSection from '../../components/products/WeatherResistantSteelPlate/WeatherResistantSteelPlate/InfoSection';
import Applications from '../../components/products/WeatherResistantSteelPlate/WeatherResistantSteelPlate/Applications';
import RequestBrochure from '../../components/products/WeatherResistantSteelPlate/WeatherResistantSteelPlate/RequestBrochure';
import GetInTouch from '../../components/products/WeatherResistantSteelPlate/WeatherResistantSteelPlate/GetInTouch';
import PropertiesTable from '../../components/products/WeatherResistantSteelPlate/WeatherResistantSteelPlate/PropertiesTable';
import Banner from '../../components/products/WeatherResistantSteelPlate/WeatherResistantSteelPlate/Banner';

const WeatherResistantSteelPlate = () => {
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

export default WeatherResistantSteelPlate;
