import Banner from "../../components/services/PlateProcessing/PlatePickling/Banner";
import { InfoSection } from "../../components/services/PlateProcessing/PlatePickling/InfoSection";
import GetInTouch from "../../components/services/PlateProcessing/PlatePickling/GetInTouch";
import ServicesLinksBox from "../../components/services/ServicesLinksBox";

export default function PlatePickling() {
	return (
		<div>
			<Banner />
			<InfoSection />
			<ServicesLinksBox />
			<GetInTouch />
		</div>
	);
}
