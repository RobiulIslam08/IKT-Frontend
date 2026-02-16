import React from 'react';

import MaterialsSection from '../components/Home/MaterialsSection';
import FeaturedAlloys from '../components/Home/FeaturedAlloys';
import HeroSection from '../components/Home/HeroSection';
// import Banner from '../components/Home/Banner';

const HomePage = () => {
	return (
		<div>
		<HeroSection/>
		{/* <Banner/> */}
		<MaterialsSection/>
		<FeaturedAlloys/>
		</div> 
	);
};

export default HomePage;