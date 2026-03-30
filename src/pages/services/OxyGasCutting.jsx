import Banner from "../../components/services/PlateCutting/OxyGasCutting/Banner";
import { InfoSection } from "../../components/services/PlateCutting/OxyGasCutting/InfoSection";
import GetInTouch from "../../components/services/PlateCutting/OxyGasCutting/GetInTouch";
import IKTOxyFuelCapabilities from "../../components/services/PlateCutting/OxyGasCutting/IKTOxyFuelCapabilities";
import ServicesLinksBox from "../../components/services/ServicesLinksBox";

export default function OxyGasCutting() {
	return (
		<div>
			<Banner />
			<InfoSection />
			<IKTOxyFuelCapabilities />
			<ServicesLinksBox />
			<GetInTouch />
		</div>
	);
}
