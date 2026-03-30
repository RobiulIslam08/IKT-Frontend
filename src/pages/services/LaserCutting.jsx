import Banner from "../../components/services/PlateCutting/LaserCutting/Banner";
import { InfoSection } from "../../components/services/PlateCutting/LaserCutting/InfoSection";
import GetInTouch from "../../components/services/PlateCutting/LaserCutting/GetInTouch";
import ServicesLinksBox from "../../components/services/ServicesLinksBox";

export default function LaserCutting() {
	return (
		<div>
			<Banner />
			<InfoSection />
			<ServicesLinksBox />
			<GetInTouch />
		</div>
	);
}
