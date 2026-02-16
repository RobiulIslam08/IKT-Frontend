import React from 'react';

import InfoSection from '../../components/products/SuperDuplexStainlessSteel/UnsS3275014410/InfoSection';
import Applications from '../../components/products/SuperDuplexStainlessSteel/UnsS3275014410/Applications';
import RequestBrochure from '../../components/products/SuperDuplexStainlessSteel/UnsS3275014410/RequestBrochure';
import GetInTouch from '../../components/products/SuperDuplexStainlessSteel/UnsS3275014410/GetInTouch';

import Banner from '../../components/products/SuperDuplexStainlessSteel/UnsS3275014410/Banner';

import UNSS32750FullSpecifications from '../../components/products/SuperDuplexStainlessSteel/UnsS3275014410/UNSS32750FullSpecifications';

const UnsS3275014410 = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			<UNSS32750FullSpecifications/>
			<RequestBrochure />
			<GetInTouch />
		</div>
	);
};

export default UnsS3275014410;
