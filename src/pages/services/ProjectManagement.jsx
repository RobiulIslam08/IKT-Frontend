import Banner from "../../components/services/OtherServices/ProjectManagement/Banner";
import { InfoSection } from "../../components/services/OtherServices/ProjectManagement/InfoSection";
import GetInTouch from "../../components/services/OtherServices/ProjectManagement/GetInTouch";
import ServicesLinksBox from "../../components/services/ServicesLinksBox";

export default function ProjectManagement() {
	return (
		<div>
			<Banner />
			<InfoSection />
			<ServicesLinksBox />
			<GetInTouch />
		</div>
	);
}
