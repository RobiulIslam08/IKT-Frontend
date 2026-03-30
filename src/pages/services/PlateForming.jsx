import Banner from "../../components/services/PlateProcessing/PlateForming/Banner";
import { InfoSection } from "../../components/services/PlateProcessing/PlateForming/InfoSection";
import GetInTouch from "../../components/services/PlateProcessing/PlateForming/GetInTouch";
import ServicesLinksBox from "../../components/services/ServicesLinksBox";

export default function PlateForming() {
	return (
		<div>
			<Banner />
			<InfoSection />
			<ServicesLinksBox />
			<GetInTouch />
		</div>
	);
}
