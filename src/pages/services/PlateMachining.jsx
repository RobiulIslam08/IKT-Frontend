import Banner from "../../components/services/PlateProcessing/PlateMachining/Banner";
import { InfoSection } from "../../components/services/PlateProcessing/PlateMachining/InfoSection";
import GetInTouch from "../../components/services/PlateProcessing/PlateMachining/GetInTouch";
import ServicesLinksBox from "../../components/services/ServicesLinksBox";

export default function PlateMachining() {
	return (
		<div>
			<Banner />
			<InfoSection />
			<ServicesLinksBox />
			<GetInTouch />
		</div>
	);
}
