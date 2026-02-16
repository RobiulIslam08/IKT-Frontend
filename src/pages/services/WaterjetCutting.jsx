import Banner from "../../components/services/PlateCutting/WaterjetCutting/Banner";
import { InfoSection } from "../../components/services/PlateCutting/WaterjetCutting/InfoSection";
import GetInTouch from "../../components/services/PlateCutting/WaterjetCutting/GetInTouch";
import IKTWaterjetCapabilities from "../../components/services/PlateCutting/WaterjetCutting/IKTWaterjetCapabilities";

export default function WaterjetCutting() {
	return (
		<div>
			<Banner />
			<InfoSection />
			<IKTWaterjetCapabilities/>
			<GetInTouch />
		</div>
	);
}
