import Banner from "../../components/services/PlateProcessing/PlateBevelling/Banner";
import { InfoSection } from "../../components/services/PlateProcessing/PlateBevelling/InfoSection";
import GetInTouch from "../../components/services/PlateProcessing/PlateBevelling/GetInTouch";
import ServicesLinksBox from "../../components/services/ServicesLinksBox";

export default function PlateBevelling() {
	return (
		<div>
			<Banner />
			<InfoSection />
			<ServicesLinksBox />
			<GetInTouch />
		</div>
	);
}
