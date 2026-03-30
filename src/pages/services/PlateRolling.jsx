import Banner from "../../components/services/PlateProcessing/PlateRolling/Banner";
import { InfoSection } from "../../components/services/PlateProcessing/PlateRolling/InfoSection";
import GetInTouch from "../../components/services/PlateProcessing/PlateRolling/GetInTouch";
import ServicesLinksBox from "../../components/services/ServicesLinksBox";

export default function PlateRolling() {
	return (
		<div>
			<Banner />
			<InfoSection />
			<ServicesLinksBox />
			<GetInTouch />
		</div>
	);
}
