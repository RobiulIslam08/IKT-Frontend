import Banner from "../../components/services/PlateProcessing/PlateDrilling/Banner";
import { InfoSection } from "../../components/services/PlateProcessing/PlateDrilling/InfoSection";
import GetInTouch from "../../components/services/PlateProcessing/PlateDrilling/GetInTouch";
import ServicesLinksBox from "../../components/services/ServicesLinksBox";

export default function PlateDrilling() {
	return (
		<div>
			<Banner />
			<InfoSection />
			<ServicesLinksBox />
			<GetInTouch />
		</div>
	);
}
