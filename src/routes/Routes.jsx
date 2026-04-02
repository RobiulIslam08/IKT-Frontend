import { createBrowserRouter } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import NotFoundPage from '../pages/NotFoundPage';
import MenuDataSheet from '../pages/MenuDataSheet';
import MaterialsRange from '../pages/MaterialsRange';
import MainLayout from '../layout/MainLayout';
import StainlessSteel304_304L from '../pages/StainlessSteelPlate/StainlessSteel304_304L';
import StainlessSteel304H from '../pages/StainlessSteelPlate/StainlessSteel304H';
import Product316316lStainlessSteel from '../pages/StainlessSteelPlate/Product316316lStainlessSteel';
import Product321321hStainlessSteel from '../pages/StainlessSteelPlate/Product321321hStainlessSteel';
import SuperAusteniticStainlessSteel from '../pages/SuperAusteniticStainlessSteel/SuperAusteniticStainlessSteel';
import UnsS3275014410 from '../pages/SuperDuplexStainlessSteel/UnsS3275014410';
import UnsS3276014501 from '../pages/SuperDuplexStainlessSteel/UnsS3276014501';
import AsmeSa516AstmA516Gr65 from '../pages/PressureVesselSteel/AsmeSa516AstmA516Gr65';
import AsmeSa516AstmA516Gr70 from '../pages/PressureVesselSteel/AsmeSa516AstmA516Gr70';
import Product490bLt50 from '../pages/PressureVesselSteel/Product490bLt50';
import P355nl2 from '../pages/PressureVesselSteel/P355nl2';
import AsmeSa516AstmA516Gr60 from '../pages/BoilerPlateSteel/AsmeSa516AstmA516Gr60';
import En100283P275nh from '../pages/BoilerPlateSteel/En100283P275nh';
import Bs1501161430AB from '../pages/BoilerPlateSteel/Bs1501161430AB';
import En100282P265gh from '../pages/BoilerPlateSteel/En100282P265gh';
import En10207P265s from '../pages/BoilerPlateSteel/En10207P265s';
import En100255890ql from '../pages/BoilerPlateSteel/En100255890ql';
import En10025S690ql from '../pages/QuenchedAndTemperedSteel/En10025S690ql';
import En10025S890ql from '../pages/QuenchedAndTemperedSteel/En10025S890ql';
import QuenchedAndTemperedSteel from '../pages/QuenchedAndTemperedSteel/QuenchedAndTemperedSteel';
import AbracladChromiumCarbideWearPlate from '../pages/AbracladChromiumCarbideWearPlate/AbracladChromiumCarbideWearPlate';
import Creusabro4800Creusabro8000 from '../pages/Creusabro4800Creusabro8000/Creusabro4800Creusabro8000';
import AbrasionWearResistantSteel from '../pages/AbrasionWearResistantSteel/AbrasionWearResistantSteel';
import HighYieldColdFormingSteelPlate from '../pages/HighYieldColdFormingSteelPlate/HighYieldColdFormingSteelPlate';
import En100283P460nl1 from '../pages/460YieldSteelPlate/En100283P460nl1';
import En100283P460nl2 from '../pages/460YieldSteelPlate/En100283P460nl2';
import En100283P460nh from '../pages/460YieldSteelPlate/En100283P460nh';
import En100253S460n from '../pages/460YieldSteelPlate/En100253S460n';
import En100253S460nl from '../pages/460YieldSteelPlate/En100253S460nl';
import ArmourPlate from '../pages/ArmourPlate/ArmourPlate';
import BallisticArmorPlates from '../pages/BallisticArmorPlates/BallisticArmorPlates';
import AsmeSa387AndAstmA387 from '../pages/ChromeMolyPlate/AsmeSa387AndAstmA387';
import Sa387A387Gr11 from '../pages/ChromeMolyPlate/Sa387A387Gr11';
import Sa387A387Gr12 from '../pages/ChromeMolyPlate/Sa387A387Gr12';
import Sa387A387Gr22 from '../pages/ChromeMolyPlate/Sa387A387Gr22';
import En100282 from '../pages/ChromeMolyPlate/En100282';
import OffshoreStructuraSteelPlate from '../pages/OffshoreStructuraSteelPlate/OffshoreStructuraSteelPlate';
import CarelsoHicPremium from '../pages/HicSteelPlate/CarelsoHicPremium';
import AsmeSa516HicAndAstmA516Hic from '../pages/HicSteelPlate/AsmeSa516HicAndAstmA516Hic';
import AstmSa516A516Gr60 from '../pages/HicSteelPlate/AstmSa516A516Gr60';
import AstmSa516A516Gr65 from '../pages/HicSteelPlate/AstmSa516A516Gr65';
import WeatherResistantSteelPlate from '../pages/WeatherResistantSteelPlate/WeatherResistantSteelPlate';
import S31803S32205DuplexSteel from '../pages/DuplexStainlessSteel/S31803S32205DuplexSteel';

// Flats-Products
import BulbBars from '../pages/FlatsProducts/BulbBars';
import ShipbuildingGrades from '../pages/FlatsProducts/ShipbuildingGrades';
import GalvanizedPlainSheetsCoil from '../pages/FlatsProducts/GalvanizedPlainSheetsCoil';
import ColdRolledSheetCoil from '../pages/FlatsProducts/ColdRolledSheetCoil';
import HotRolledSheetCoils from '../pages/FlatsProducts/HotRolledSheetCoils';
import MildSteelChequerredSteel from '../pages/FlatsProducts/MildSteelChequerredSteel';
import MildSteelGratings from '../pages/FlatsProducts/MildSteelGratings';
import HotRolledPlates from '../pages/FlatsProducts/HotRolledPlates';

// Long-Products
import AmericanWideFlangeBeam from '../pages/LongProducts/AmericanWideFlangeBeam';
import UniversalBeams from '../pages/LongProducts/UniversalBeams';
import BritishEuropeanAndJapaneseChannels from '../pages/LongProducts/BritishEuropeanAndJapaneseChannels';
import EqualUnequalAndTAngle from '../pages/LongProducts/EqualUnequalAndTAngle';
import FlatSquareAndRoundBars from '../pages/LongProducts/FlatSquareAndRoundBars';
import HEAAndHEBIPEIPEAAIPNEuropeanIBeamHBeamJapaneseSection from '../pages/LongProducts/HEAAndHEBIPEIPEAAIPNEuropeanIBeamHBeamJapaneseSection';

// Tube-&-Tubulars-Products
import SquareHollowSections from '../pages/TubeTubularsProducts/SquareHollowSections';
import RectangularHollowSections from '../pages/TubeTubularsProducts/RectangularHollowSections';
import CircularHollowSections from '../pages/TubeTubularsProducts/CircularHollowSections';

// Rebar
import CuttingAndBending from '../pages/Rebar/CuttingAndBending';
import EpoxyCotedRebar from '../pages/Rebar/EpoxyCotedRebar';
import DeformedWeldedWireMesh from '../pages/Rebar/DeformedWeldedWireMesh';
import Blockmesh from '../pages/Rebar/Blockmesh';

// Non-Ferrous-Metals
import Aluminum from '../pages/NonFerrousMetals/Aluminum';
import Brass from '../pages/NonFerrousMetals/Brass';
import Bronze from '../pages/NonFerrousMetals/Bronze';
import Copper from '../pages/NonFerrousMetals/Copper';
import Fe from '../pages/NonFerrousMetals/Fe';

// Ferrous-Metals
import StainlessSteelPage from '../pages/FerrousMetals/StainlessSteel';
import CarbonAlloySteel from '../pages/FerrousMetals/CarbonAlloySteel';
import DieToolSteel from '../pages/FerrousMetals/DieToolSteel';
import ChromeBar from '../pages/FerrousMetals/ChromeBar';

// Services
import LaserCutting from '../pages/services/LaserCutting';
import PlasmaCutting from '../pages/services/PlasmaCutting';
import OxyGasCutting from '../pages/services/OxyGasCutting';
import InfinityPlasmaBevelling from '../pages/services/InfinityPlasmaBevelling';
import WaterjetCutting from '../pages/services/WaterjetCutting';
import PlateBending from '../pages/services/PlateBending';
import PlateDrilling from '../pages/services/PlateDrilling';
import PlateMachining from '../pages/services/PlateMachining';
import PlatePickling from '../pages/services/PlatePickling';
import PlateBevelling from '../pages/services/PlateBevelling';
import PlateForming from '../pages/services/PlateForming';
import PlateRolling from '../pages/services/PlateRolling';
import ProjectManagement from '../pages/services/ProjectManagement';
import SteelProfilingWeldPreparation from '../pages/services/SteelProfilingWeldPreparation';
import GeneralServices from '../pages/services/GeneralServices';

// Engineering Steel
import En3b080a15070m20MildSteel from '../pages/EngineeringSteel/En3b080a15070m20MildSteel';
import En1a220m07230m07 from '../pages/EngineeringSteel/En1a220m07230m07';
import En1aLd220m07Pb230m07Pb from '../pages/EngineeringSteel/En1aLd220m07Pb230m07Pb';
import En8080a42080m40 from '../pages/EngineeringSteel/En8080a42080m40';
import En9070m55 from '../pages/EngineeringSteel/En9070m55';
import En14150m19 from '../pages/EngineeringSteel/En14150m19';
import En16605m36606m36 from '../pages/EngineeringSteel/En16605m36606m36';
import En19708m40709m40 from '../pages/EngineeringSteel/En19708m40709m40';
import En24En24t817m40 from '../pages/EngineeringSteel/En24En24t817m40';
import En36655m13 from '../pages/EngineeringSteel/En36655m13';
import S690ql from '../pages/EngineeringSteel/S690ql';
import Alloy24 from '../pages/EngineeringSteel/Alloy24';
import Steel4130708a25 from '../pages/EngineeringSteel/Steel4130708a25';
import Steel4140708m40 from '../pages/EngineeringSteel/Steel4140708m40';
import ChromePlatedSteelBar from '../pages/EngineeringSteel/ChromePlatedSteelBar';
import SteelHardnessConversions from '../pages/EngineeringSteel/SteelHardnessConversions';
import SteelWeightCalculator from '../pages/EngineeringSteel/SteelWeightCalculator';

// Hot-Work-Tool-Steel
import Steel12344 from '../pages/HotWorkToolSteel/Steel12344';
import SKD61 from '../pages/HotWorkToolSteel/SKD61';
import X40CrMoV51 from '../pages/HotWorkToolSteel/X40CrMoV51';

// Cold-Work-Tool-Steel
import A3 from '../pages/ColdWorkToolSteel/A3';
import A4 from '../pages/ColdWorkToolSteel/A4';
import A6 from '../pages/ColdWorkToolSteel/A6';
import A8 from '../pages/ColdWorkToolSteel/A8';
import O2 from '../pages/ColdWorkToolSteel/O2';
import DC53 from '../pages/ColdWorkToolSteel/DC53';
import SKD11 from '../pages/ColdWorkToolSteel/SKD11';

// Plastic-Mould-Steel
import OT718 from '../pages/PlasticMouldSteel/OT718';
import Steel12312 from '../pages/PlasticMouldSteel/Steel12312';
import Steel12311 from '../pages/PlasticMouldSteel/Steel12311';
import Steel12083 from '../pages/PlasticMouldSteel/Steel12083';

// Quenched-and-Tempered-Alloy-Steels
import Steel4340 from '../pages/QuenchedAndTemperedAlloySteels/Steel4340';
import Steel4140Plate from '../pages/QuenchedAndTemperedAlloySteels/Steel4140Plate';
import Steel17225 from '../pages/QuenchedAndTemperedAlloySteels/Steel17225';
import Steel16511 from '../pages/QuenchedAndTemperedAlloySteels/Steel16511';

// Carbon-Steel
import Steel1045 from '../pages/CarbonSteel/Steel1045';
import Steel1020 from '../pages/CarbonSteel/Steel1020';
import S235JR from '../pages/CarbonSteel/S235JR';
import Q235B from '../pages/CarbonSteel/Q235B';

// Bearing-Steel-and-Gear-Steel
import GCr15 from '../pages/BearingSteelAndGearSteel/GCr15';
import Steel100Cr6 from '../pages/BearingSteelAndGearSteel/Steel100Cr6';
import Steel52100 from '../pages/BearingSteelAndGearSteel/Steel52100';
import Steel8620 from '../pages/BearingSteelAndGearSteel/Steel8620';
import Steel16MnCr5 from '../pages/BearingSteelAndGearSteel/Steel16MnCr5';
import Steel20MnCr5 from '../pages/BearingSteelAndGearSteel/Steel20MnCr5';
import Steel20CrMnTi from '../pages/BearingSteelAndGearSteel/Steel20CrMnTi';

// High-Speed-Steel
import T5 from '../pages/HighSpeedSteel/T5';
import T1 from '../pages/HighSpeedSteel/T1';
import T15 from '../pages/HighSpeedSteel/T15';
import M35 from '../pages/HighSpeedSteel/M35';

// Inconel
import Inconel600 from '../pages/Inconel/Inconel600';
import Inconel601 from '../pages/Inconel/Inconel601';
import Inconel625 from '../pages/Inconel/Inconel625';
import Inconel718 from '../pages/Inconel/Inconel718';
import InconelX750 from '../pages/Inconel/InconelX750';

// Incoloy
import Incoloy800HHT from '../pages/Incoloy/Incoloy800HHT';
import Incoloy825 from '../pages/Incoloy/Incoloy825';
import Incoloy925 from '../pages/Incoloy/Incoloy925';
import Alloy330 from '../pages/Incoloy/Alloy330';
import AlloyA286Incoloy from '../pages/Incoloy/AlloyA286Incoloy';
import ENStandardsIncoloy from '../pages/Incoloy/ENStandardsIncoloy';

// Monel
import Monel400 from '../pages/Monel/Monel400';
import MonelK500 from '../pages/Monel/MonelK500';

// Hastelloy
import HastelloyBB2B3 from '../pages/Hastelloy/HastelloyBB2B3';
import HastelloyC22 from '../pages/Hastelloy/HastelloyC22';
import HastelloyC276 from '../pages/Hastelloy/HastelloyC276';
import HastelloyC2000 from '../pages/Hastelloy/HastelloyC2000';
import HastelloyX from '../pages/Hastelloy/HastelloyX';

// Nickel Alloy
import Nickel200 from '../pages/NickelAlloy/Nickel200';
import Nickel201 from '../pages/NickelAlloy/Nickel201';

// Materials (standalone)
import Steel254SMO from '../pages/Materials/Steel254SMO';
import Alloy20 from '../pages/Materials/Alloy20';
import Steel904LStainlessSteel from '../pages/Materials/Steel904LStainlessSteel';
import Invar from '../pages/Materials/Invar';
import AL6XN from '../pages/Materials/AL6XN';
import CarbonSteelMaterial from '../pages/Materials/CarbonSteelMaterial';
import AlloySteelMaterial from '../pages/Materials/AlloySteelMaterial';
import AlloyA286 from '../pages/Materials/AlloyA286';
import ENStandardsMaterials from '../pages/Materials/ENStandardsMaterials';
import CarbonSteel from '../pages/Materials/CarbonSteel';
import AlloySteel from '../pages/Materials/AlloySteel';
import ENStandards from '../pages/Materials/ENStandards';

// Titanium
import TitaniumGrade1 from '../pages/Titanium/TitaniumGrade1';
import TitaniumGrade2 from '../pages/Titanium/TitaniumGrade2';
import TitaniumGrade3 from '../pages/Titanium/TitaniumGrade3';
import TitaniumGrade4 from '../pages/Titanium/TitaniumGrade4';
import TitaniumGrade5 from '../pages/Titanium/TitaniumGrade5';
import TitaniumGrade6 from '../pages/Titanium/TitaniumGrade6';
import TitaniumGrade7 from '../pages/Titanium/TitaniumGrade7';
import TitaniumGrade9 from '../pages/Titanium/TitaniumGrade9';
import TitaniumGrade11 from '../pages/Titanium/TitaniumGrade11';
import TitaniumGrade12 from '../pages/Titanium/TitaniumGrade12';

// Copper Nickel
import CopperNickel9010 from '../pages/CopperNickel/CopperNickel9010';
import CopperNickel7030 from '../pages/CopperNickel/CopperNickel7030';

// Nimonic
import Nimonic75 from '../pages/Nimonic/Nimonic75';
import Nimonic81 from '../pages/Nimonic/Nimonic81';
import Nimonic86 from '../pages/Nimonic/Nimonic86';
import Nimonic8080A from '../pages/Nimonic/Nimonic8080A';
import Nimonic90 from '../pages/Nimonic/Nimonic90';
import Nimonic105 from '../pages/Nimonic/Nimonic105';
import Nimonic115 from '../pages/Nimonic/Nimonic115';
import Nimonic263 from '../pages/Nimonic/Nimonic263';
import Nimonic901 from '../pages/Nimonic/Nimonic901';

// Tool Steel
import ToolSteelApplicationChart from '../pages/ToolSteel/ToolSteelApplicationChart';
import O1ToolSteel from '../pages/ToolSteel/O1ToolSteel';
import O9bToolSteel from '../pages/ToolSteel/O9bToolSteel';
import A2ToolSteel from '../pages/ToolSteel/A2ToolSteel';
import C45uToolSteel from '../pages/ToolSteel/C45uToolSteel';
import D2ToolSteel from '../pages/ToolSteel/D2ToolSteel';
import D2Supreme from '../pages/ToolSteel/D2Supreme';
import D3ToolSteel from '../pages/ToolSteel/D3ToolSteel';
import D6ToolSteel from '../pages/ToolSteel/D6ToolSteel';
import H13ToolSteel from '../pages/ToolSteel/H13ToolSteel';
import M42ToolSteel from '../pages/ToolSteel/M42ToolSteel';
import M2ToolSteel from '../pages/ToolSteel/M2ToolSteel';
import P20ToolSteel from '../pages/ToolSteel/P20ToolSteel';
import P509ToolSteel from '../pages/ToolSteel/P509ToolSteel';
import Steel32s from '../pages/ToolSteel/Steel32s';
import Steel53s from '../pages/ToolSteel/Steel53s';
import Steel69s from '../pages/ToolSteel/Steel69s';
import Steel12316 from '../pages/ToolSteel/Steel12316';
import GroundFlatStock from '../pages/ToolSteel/GroundFlatStock';
import PreMachinedEconomizer from '../pages/ToolSteel/PreMachinedEconomizer';
import SteelHardnessConversionsToolSteel from '../pages/ToolSteel/SteelHardnessConversionsToolSteel';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <div>About Us Page</div>,
      },
      {
        path: '/contact',
        element: <div>Contact Us Page</div>,
      },
      {
        path: '/menu-data-sheet',
        element: <MenuDataSheet />,
      },
      {
        path: '/materials-range',
        element: <MaterialsRange />,
      },
      {
        path: '/products/304-304l-stainless-steel',
        element: <StainlessSteel304_304L />,
      },
      {
        path: '/products/304h-stainless-steel',
        element: <StainlessSteel304H />,
      },
      {
        path: '/products/316-316l-stainless-steel',
        element: <Product316316lStainlessSteel />,
      },
      {
        path: '/products/321-321h-stainless-steel',
        element: <Product321321hStainlessSteel />,
      },
      {
        path: '/products/super-austenitic-stainless-steel',
        element: <SuperAusteniticStainlessSteel />,
      },
      {
        path: '/products/uns-s32750-1-4410',
        element: <UnsS3275014410 />,
      },
      {
        path: '/products/uns-s32760-1-4501',
        element: <UnsS3276014501 />,
      },
      {
        path: '/products/asme-sa516-astm-a516-gr-65',
        element: <AsmeSa516AstmA516Gr65 />,
      },
      {
        path: '/products/asme-sa516-astm-a516-gr-70',
        element: <AsmeSa516AstmA516Gr70 />,
      },
      {
        path: '/products/490b-lt50',
        element: <Product490bLt50 />,
      },
      {
        path: '/products/p355nl2',
        element: <P355nl2 />,
      },
      {
        path: '/products/asme-sa516-astm-a516-gr-60',
        element: <AsmeSa516AstmA516Gr60 />,
      },
      {
        path: '/products/en-10028-3-p275nh',
        element: <En100283P275nh />,
      },
      {
        path: '/products/bs-1501-161-430-a-b',
        element: <Bs1501161430AB />,
      },
      {
        path: '/products/en-10028-2-p265gh',
        element: <En100282P265gh />,
      },
      {
        path: '/products/en-10207-p265s',
        element: <En10207P265s />,
      },
      {
        path: '/products/en-10025-5890ql',
        element: <En100255890ql />,
      },
      {
        path: '/products/en-10025-s690ql',
        element: <En10025S690ql />,
      },
      {
        path: '/products/en-10025-s890ql',
        element: <En10025S890ql />,
      },
      {
        path: '/products/quenched-and-tempered-steel',
        element: <QuenchedAndTemperedSteel />,
      },
      {
        path: '/products/abraclad-chromium-carbide-wear-plate',
        element: <AbracladChromiumCarbideWearPlate />,
      },
      {
        path: '/products/creusabro-4800-creusabro-8000',
        element: <Creusabro4800Creusabro8000 />,
      },
      {
        path: '/products/creusabro-4800-8000',
        element: <Creusabro4800Creusabro8000 />,
      },
      {
        path: '/products/abrasion-wear-resistant-steel',
        element: <AbrasionWearResistantSteel />,
      },
      {
        path: '/products/high-yield-cold-forming-steel-plate',
        element: <HighYieldColdFormingSteelPlate />,
      },
      {
        path: '/products/en-10028-3-p460nl1',
        element: <En100283P460nl1 />,
      },
      {
        path: '/products/en-10028-3-p460nl2',
        element: <En100283P460nl2 />,
      },
      {
        path: '/products/en-10028-3-p460nh',
        element: <En100283P460nh />,
      },
      {
        path: '/products/en-10025-3-s460n',
        element: <En100253S460n />,
      },
      {
        path: '/products/en-10025-3-s460nl',
        element: <En100253S460nl />,
      },
      {
        path: '/products/armour-plate',
        element: <ArmourPlate />,
      },
      {
        path: '/products/ballistic-armor-plates',
        element: <BallisticArmorPlates />,
      },
      {
        path: '/products/asme-sa387-and-astm-a387',
        element: <AsmeSa387AndAstmA387 />,
      },
      {
        path: '/products/sa387-a387-gr-11',
        element: <Sa387A387Gr11 />,
      },
      {
        path: '/products/sa387-a387-gr-12',
        element: <Sa387A387Gr12 />,
      },
      {
        path: '/products/sa387-a387-gr-22',
        element: <Sa387A387Gr22 />,
      },
      {
        path: '/products/en-10028-2',
        element: <En100282 />,
      },
      {
        path: '/products/offshore-structura-steel-plate',
        element: <OffshoreStructuraSteelPlate />,
      },
      {
        path: '/products/carelso-hic-premium',
        element: <CarelsoHicPremium />,
      },
      {
        path: '/products/asme-sa516-hic-and-astm-a516-hic-70',
        element: <AsmeSa516HicAndAstmA516Hic />,
      },
      {
        path: '/products/astm-sa516-a516-gr-60',
        element: <AstmSa516A516Gr60 />,
      },
      {
        path: '/products/astm-sa516-a516-gr-65',
        element: <AstmSa516A516Gr65 />,
      },
      {
        path: '/products/weather-resistant-steel-plate',
        element: <WeatherResistantSteelPlate />,
      },
      // Duplex Stainless Steel
      {
        path: '/products/s31803-1-4462-and-s32205-duplex-steel',
        element: <S31803S32205DuplexSteel />,
      },
      // Flats-Products
      {
        path: '/products/bulb-bars',
        element: <BulbBars />,
      },
      {
        path: '/products/shipbuilding-grades',
        element: <ShipbuildingGrades />,
      },
      {
        path: '/products/galvanized-plain-sheets-coil',
        element: <GalvanizedPlainSheetsCoil />,
      },
      {
        path: '/products/cold-rolled-sheet-coil',
        element: <ColdRolledSheetCoil />,
      },
      {
        path: '/products/hot-rolled-sheet-coils',
        element: <HotRolledSheetCoils />,
      },
      {
        path: '/products/mild-steel-chequerred-steel',
        element: <MildSteelChequerredSteel />,
      },
      {
        path: '/products/mild-steel-gratings',
        element: <MildSteelGratings />,
      },
      {
        path: '/products/hot-rolled-plates',
        element: <HotRolledPlates />,
      },
      // Long-Products
      {
        path: '/products/american-wide-flange-beam',
        element: <AmericanWideFlangeBeam />,
      },
      {
        path: '/products/universal-beams',
        element: <UniversalBeams />,
      },
      {
        path: '/products/british-european-and-japanese-channels',
        element: <BritishEuropeanAndJapaneseChannels />,
      },
      {
        path: '/products/equal-unequal-and-t-angle',
        element: <EqualUnequalAndTAngle />,
      },
      {
        path: '/products/flat-square-and-round-bars',
        element: <FlatSquareAndRoundBars />,
      },
      {
        path: '/products/hea-and-heb-ipe-ipeaa-ipn-european-i-beam-h-beam-japanese-section',
        element: <HEAAndHEBIPEIPEAAIPNEuropeanIBeamHBeamJapaneseSection />,
      },
      // Tube-&-Tubulars-Products
      {
        path: '/products/square-hollow-sections',
        element: <SquareHollowSections />,
      },
      {
        path: '/products/rectangular-hollow-sections',
        element: <RectangularHollowSections />,
      },
      {
        path: '/products/circular-hollow-sections',
        element: <CircularHollowSections />,
      },
      // Rebar
      {
        path: '/products/cutting-and-bending',
        element: <CuttingAndBending />,
      },
      {
        path: '/products/epoxy-coted-rebar',
        element: <EpoxyCotedRebar />,
      },
      {
        path: '/products/deformed-welded-wire-mesh',
        element: <DeformedWeldedWireMesh />,
      },
      {
        path: '/products/blockmesh',
        element: <Blockmesh />,
      },
      // Non-Ferrous-Metals
      {
        path: '/products/aluminum',
        element: <Aluminum />,
      },
      {
        path: '/products/brass',
        element: <Brass />,
      },
      {
        path: '/products/bronze',
        element: <Bronze />,
      },
      {
        path: '/products/copper',
        element: <Copper />,
      },
      {
        path: '/products/fe',
        element: <Fe />,
      },
      // Ferrous-Metals
      {
        path: '/products/stainless-steel',
        element: <StainlessSteelPage />,
      },
      {
        path: '/products/carbon-alloy-steel',
        element: <CarbonAlloySteel />,
      },
      {
        path: '/products/die-tool-steel',
        element: <DieToolSteel />,
      },
      {
        path: '/products/chrome-bar',
        element: <ChromeBar />,
      },
      // Services
      {
        path: '/services/laser-cutting',
        element: <LaserCutting />,
      },
      {
        path: '/services/plasma-cutting',
        element: <PlasmaCutting />,
      },
      {
        path: '/services/oxy-gas-cutting',
        element: <OxyGasCutting />,
      },
      {
        path: '/services/infinity-plasma-contour-bevelling-mechanical-bevelling',
        element: <InfinityPlasmaBevelling />,
      },
      {
        path: '/services/waterjet-cutting',
        element: <WaterjetCutting />,
      },
      {
        path: '/services/plate-bending',
        element: <PlateBending />,
      },
      {
        path: '/services/plate-drilling',
        element: <PlateDrilling />,
      },
      {
        path: '/services/plate-machining',
        element: <PlateMachining />,
      },
      {
        path: '/services/plate-pickling',
        element: <PlatePickling />,
      },
      {
        path: '/services/plate-bevelling',
        element: <PlateBevelling />,
      },
      {
        path: '/services/plate-forming',
        element: <PlateForming />,
      },
      {
        path: '/services/plate-rolling',
        element: <PlateRolling />,
      },
      {
        path: '/services/project-management',
        element: <ProjectManagement />,
      },
      {
        path: '/services/steel-profiling-weld-preparation',
        element: <SteelProfilingWeldPreparation />,
      },
      {
        path: '/services/general-services',
        element: <GeneralServices />,
      },
      // Engineering Steel
      {
        path: '/products/en3b-080a15-070m20-mild-steel',
        element: <En3b080a15070m20MildSteel />,
      },
      {
        path: '/products/en1a-220m07-230m07',
        element: <En1a220m07230m07 />,
      },
      {
        path: '/products/en1a-ld-220m07-pb-230m07-pb',
        element: <En1aLd220m07Pb230m07Pb />,
      },
      {
        path: '/products/en8-080a42-080m40',
        element: <En8080a42080m40 />,
      },
      {
        path: '/products/en9-070m55',
        element: <En9070m55 />,
      },
      {
        path: '/products/en14-150m19',
        element: <En14150m19 />,
      },
      {
        path: '/products/en16-605m36-606m36',
        element: <En16605m36606m36 />,
      },
      {
        path: '/products/en19-708m40-709m40',
        element: <En19708m40709m40 />,
      },
      {
        path: '/products/en24-en24t-817m40',
        element: <En24En24t817m40 />,
      },
      {
        path: '/products/en36-655m13',
        element: <En36655m13 />,
      },
      {
        path: '/products/s690ql',
        element: <S690ql />,
      },
      {
        path: '/products/alloy24',
        element: <Alloy24 />,
      },
      {
        path: '/products/4130-708a25',
        element: <Steel4130708a25 />,
      },
      {
        path: '/products/4140-708m40',
        element: <Steel4140708m40 />,
      },
      {
        path: '/products/chrome-plated-steel-bar',
        element: <ChromePlatedSteelBar />,
      },
      {
        path: '/products/steel-hardness-conversions',
        element: <SteelHardnessConversions />,
      },
      {
        path: '/products/steel-weight-calculator',
        element: <SteelWeightCalculator />,
      },
      // // Tool Steel
      {
        path: '/products/tool-steel-application-chart',
        element: <ToolSteelApplicationChart />,
      },
      {
        path: '/products/o1',
        element: <O1ToolSteel />,
      },
      {
        path: '/products/o9b',
        element: <O9bToolSteel />,
      },
      {
        path: '/products/a2',
        element: <A2ToolSteel />,
      },
      {
        path: '/products/c45u',
        element: <C45uToolSteel />,
      },
      {
        path: '/products/d2',
        element: <D2ToolSteel />,
      },
      {
        path: '/products/d2-supreme',
        element: <D2Supreme />,
      },
      {
        path: '/products/d3',
        element: <D3ToolSteel />,
      },
      {
        path: '/products/d6',
        element: <D6ToolSteel />,
      },
      {
        path: '/products/h13',
        element: <H13ToolSteel />,
      },
      {
        path: '/products/m42',
        element: <M42ToolSteel />,
      },
      {
        path: '/products/m2',
        element: <M2ToolSteel />,
      },
      {
        path: '/products/p20',
        element: <P20ToolSteel />,
      },
      {
        path: '/products/pS09',
        element: <P509ToolSteel />,
      },
      {
        path: '/products/32s',
        element: <Steel32s />,
      },
      {
        path: '/products/53s',
        element: <Steel53s />,
      },
      {
        path: '/products/69s',
        element: <Steel69s />,
      },
      {
        path: '/products/1-2316',
        element: <Steel12316 />,
      },
      {
        path: '/products/ground-flat-stock',
        element: <GroundFlatStock />,
      },
      {
        path: '/products/pre-machined-economizer',
        element: <PreMachinedEconomizer />,
      },
      {
        path: '/products/steel-hardness-conversions-tool-steel',
        element: <SteelHardnessConversionsToolSteel />,
      },

      // ── Hot-Work-Tool-Steel ───────────────────────────────────────────────
      { path: '/products/1-2344', element: <Steel12344 /> },
      { path: '/products/skd61', element: <SKD61 /> },
      { path: '/products/x40crmov5-1', element: <X40CrMoV51 /> },

      // ── Cold-Work-Tool-Steel ──────────────────────────────────────────────
      { path: '/products/a3', element: <A3 /> },
      { path: '/products/a4', element: <A4 /> },
      { path: '/products/a6', element: <A6 /> },
      { path: '/products/a8', element: <A8 /> },
      { path: '/products/o2', element: <O2 /> },
      { path: '/products/dc53', element: <DC53 /> },
      { path: '/products/skd11', element: <SKD11 /> },

      // ── Plastic-Mould-Steel ───────────────────────────────────────────────
      { path: '/products/ot718', element: <OT718 /> },
      { path: '/products/1-2312', element: <Steel12312 /> },
      { path: '/products/1-2311', element: <Steel12311 /> },
      { path: '/products/1-2083', element: <Steel12083 /> },

      // ── Quenched-and-Tempered-Alloy-Steels ────────────────────────────────
      { path: '/products/4340', element: <Steel4340 /> },
      { path: '/products/4140-plate', element: <Steel4140Plate /> },
      { path: '/products/1-7225', element: <Steel17225 /> },
      { path: '/products/1-6511', element: <Steel16511 /> },

      // ── Carbon-Steel ──────────────────────────────────────────────────────
      { path: '/products/1045', element: <Steel1045 /> },
      { path: '/products/1020', element: <Steel1020 /> },
      { path: '/products/s235jr', element: <S235JR /> },
      { path: '/products/q235b', element: <Q235B /> },

      // ── Bearing-Steel-and-Gear-Steel ──────────────────────────────────────
      { path: '/products/gcr15', element: <GCr15 /> },
      { path: '/products/100cr6', element: <Steel100Cr6 /> },
      { path: '/products/52100', element: <Steel52100 /> },
      { path: '/products/8620', element: <Steel8620 /> },
      { path: '/products/16mncr5', element: <Steel16MnCr5 /> },
      { path: '/products/20mncr5', element: <Steel20MnCr5 /> },
      { path: '/products/20crmnti', element: <Steel20CrMnTi /> },

      // ── High-Speed-Steel ──────────────────────────────────────────────────
      { path: '/products/t1', element: <T1 /> },
      { path: '/products/t5', element: <T5 /> },
      { path: '/products/t15', element: <T15 /> },
      { path: '/products/m35', element: <M35 /> },

      // ── Inconel ───────────────────────────────────────────────────────────
      { path: '/products/inconel-600', element: <Inconel600 /> },
      { path: '/products/inconel-601', element: <Inconel601 /> },
      { path: '/products/inconel-625', element: <Inconel625 /> },
      { path: '/products/inconel-718', element: <Inconel718 /> },
      { path: '/products/inconel-x-750', element: <InconelX750 /> },

      // ── Incoloy ───────────────────────────────────────────────────────────
      { path: '/products/incoloy-800-h-ht', element: <Incoloy800HHT /> },
      { path: '/products/incoloy-825', element: <Incoloy825 /> },
      { path: '/products/incoloy-925', element: <Incoloy925 /> },
      { path: '/products/alloy-330', element: <Alloy330 /> },
      { path: '/products/alloy-a286-incoloy', element: <AlloyA286Incoloy /> },
      { path: '/products/en-standards-incoloy', element: <ENStandardsIncoloy /> },

      // ── Monel ─────────────────────────────────────────────────────────────
      { path: '/products/monel-400', element: <Monel400 /> },
      { path: '/products/monel-k500', element: <MonelK500 /> },

      // ── Hastelloy ─────────────────────────────────────────────────────────
      { path: '/products/hastelloy-b-b2-b3', element: <HastelloyBB2B3 /> },
      { path: '/products/hastelloy-c22', element: <HastelloyC22 /> },
      { path: '/products/hastelloy-c276', element: <HastelloyC276 /> },
      { path: '/products/hastelloy-c2000', element: <HastelloyC2000 /> },
      { path: '/products/hastelloy-x', element: <HastelloyX /> },

      // ── Nickel Alloy ──────────────────────────────────────────────────────
      { path: '/products/nickel-200', element: <Nickel200 /> },
      { path: '/products/nickel-201', element: <Nickel201 /> },

      // ── Materials (standalone) ────────────────────────────────────────────
      { path: '/products/254-smo', element: <Steel254SMO /> },
      { path: '/products/alloy-20', element: <Alloy20 /> },
      { path: '/products/904l-stainless-steel', element: <Steel904LStainlessSteel /> },
      { path: '/products/invar', element: <Invar /> },
      { path: '/products/al6xn', element: <AL6XN /> },
      { path: '/products/carbon-steel-material', element: <CarbonSteelMaterial /> },
      { path: '/products/alloy-steel-material', element: <AlloySteelMaterial /> },
      { path: '/products/alloy-a286', element: <AlloyA286 /> },
      { path: '/products/en-standards-materials', element: <ENStandardsMaterials /> },
      { path: '/products/carbon-steel', element: <CarbonSteel /> },
      { path: '/products/alloy-steel', element: <AlloySteel /> },
      { path: '/products/en-standards', element: <ENStandards /> },

      // ── Titanium ──────────────────────────────────────────────────────────
      { path: '/products/titanium-grade-1', element: <TitaniumGrade1 /> },
      { path: '/products/titanium-grade-2', element: <TitaniumGrade2 /> },
      { path: '/products/titanium-grade-3', element: <TitaniumGrade3 /> },
      { path: '/products/titanium-grade-4', element: <TitaniumGrade4 /> },
      { path: '/products/titanium-grade-5', element: <TitaniumGrade5 /> },
      { path: '/products/titanium-grade-6', element: <TitaniumGrade6 /> },
      { path: '/products/titanium-grade-7', element: <TitaniumGrade7 /> },
      { path: '/products/titanium-grade-9', element: <TitaniumGrade9 /> },
      { path: '/products/titanium-grade-11', element: <TitaniumGrade11 /> },
      { path: '/products/titanium-grade-12', element: <TitaniumGrade12 /> },

      // ── Copper Nickel ─────────────────────────────────────────────────────
      { path: '/products/copper-nickel-90-10', element: <CopperNickel9010 /> },
      { path: '/products/copper-nickel-70-30', element: <CopperNickel7030 /> },

      // ── Nimonic ───────────────────────────────────────────────────────────
      { path: '/products/nimonic-75', element: <Nimonic75 /> },
      { path: '/products/nimonic-81', element: <Nimonic81 /> },
      { path: '/products/nimonic-86', element: <Nimonic86 /> },
      { path: '/products/nimonic-80-80a', element: <Nimonic8080A /> },
      { path: '/products/nimonic-90', element: <Nimonic90 /> },
      { path: '/products/nimonic-105', element: <Nimonic105 /> },
      { path: '/products/nimonic-115', element: <Nimonic115 /> },
      { path: '/products/nimonic-263', element: <Nimonic263 /> },
      { path: '/products/nimonic-901', element: <Nimonic901 /> },
    ],
  },
]);
