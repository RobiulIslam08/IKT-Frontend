import Banner from "../../components/services/PlateCutting/PlasmaCutting/Banner";
import { InfoSection } from "../../components/services/PlateCutting/PlasmaCutting/InfoSection";
import GetInTouch from "../../components/services/PlateCutting/PlasmaCutting/GetInTouch";
import IKTCapabilitiesTable from "../../components/services/PlateCutting/PlasmaCutting/IKTCapabilitiesTable";

export default function PlasmaCutting() {
	return (
		<div>
			<Banner />
			<InfoSection />
			<IKTCapabilitiesTable/>
			<GetInTouch />
		</div>
	);
}
