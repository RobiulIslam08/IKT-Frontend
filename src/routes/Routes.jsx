import { createBrowserRouter } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import NotFoundPage from '../pages/NotFoundPage';
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
import AsmeSa387AndAstmA387 from '../pages/ChromeMolyPlate/AsmeSa387AndAstmA387';
import Sa387A387Gr11 from '../pages/ChromeMolyPlate/Sa387A387Gr11';
import Sa387A387Gr12 from '../pages/ChromeMolyPlate/Sa387A387Gr12';
import Sa387A387Gr22 from '../pages/ChromeMolyPlate/Sa387A387Gr22';
import En100282 from '../pages/ChromeMolyPlate/En100282';
import OffshoreStructuraSteelPlate from '../pages/OffshoreStructuraSteelPlate/OffshoreStructuraSteelPlate';
import CarelsoHicPremium from '../pages/HicSteelPlate/CarelsoHicPremium';
import AsmeSa516HicAndAstmA516Hic from '../pages/HicSteelPlate/AsmeSa516HicAndAstmA516Hic';
import WeatherResistantSteelPlate from '../pages/WeatherResistantSteelPlate/WeatherResistantSteelPlate';

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
        path: '/products/asme-sa516-hic-and-astm-a516-hic',
        element: <AsmeSa516HicAndAstmA516Hic />,
      },
      {
        path: '/products/weather-resistant-steel-plate',
        element: <WeatherResistantSteelPlate />,
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
    ],
  },
]);
