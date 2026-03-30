import Banner from "../../components/services/OtherServices/GeneralServices/Banner";
import { InfoSection } from "../../components/services/OtherServices/GeneralServices/InfoSection";
import GetInTouch from "../../components/services/OtherServices/GeneralServices/GetInTouch";
import ServicesLinksBox from "../../components/services/ServicesLinksBox";

export default function GeneralServices() {
	return (
		<div>
			<Banner />
			{/* <InfoSection /> */}
			<ServicesLinksBox />
			<GetInTouch />
		</div>
	);
}
