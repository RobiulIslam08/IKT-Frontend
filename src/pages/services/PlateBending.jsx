import Banner from "../../components/services/PlateProcessing/PlateBending/Banner";
import { InfoSection } from "../../components/services/PlateProcessing/PlateBending/InfoSection";
import GetInTouch from "../../components/services/PlateProcessing/PlateBending/GetInTouch";
import ServicesLinksBox from "../../components/services/ServicesLinksBox";

export default function PlateBending() {
	return (
		<div>
			<Banner />
			<InfoSection />
			<ServicesLinksBox />
			<GetInTouch />
		</div>
	);
}
