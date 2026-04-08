import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '../layout/MainLayout';
import NotFoundPage from '../pages/NotFoundPage';

// ───────────────────────────────────────────────────────────────────────────
// Eagerly loaded (critical path — always needed)
// ───────────────────────────────────────────────────────────────────────────
import HomePage from '../pages/HomePage';

// ───────────────────────────────────────────────────────────────────────────
// Lazy loaded — each page loads only when the user navigates to it
// ───────────────────────────────────────────────────────────────────────────
const ProductPage                       = lazy(() => import('../pages/ProductPage'));
const MenuDataSheet                     = lazy(() => import('../pages/MenuDataSheet'));
const MaterialsRange                    = lazy(() => import('../pages/MaterialsRange'));
const AboutUsPage                       = lazy(() => import('../pages/AboutUsPage'));
const CustomersPage                     = lazy(() => import('../pages/CustomersPage'));
const Quality                           = lazy(() => import('../pages/Quality'));

// Stainless Steel Plate
const StainlessSteel304_304L            = lazy(() => import('../pages/StainlessSteelPlate/StainlessSteel304_304L'));
const StainlessSteel304H                = lazy(() => import('../pages/StainlessSteelPlate/StainlessSteel304H'));
const Product316316lStainlessSteel      = lazy(() => import('../pages/StainlessSteelPlate/Product316316lStainlessSteel'));
const Product321321hStainlessSteel      = lazy(() => import('../pages/StainlessSteelPlate/Product321321hStainlessSteel'));

// Super Austenitic / Duplex / Super Duplex
const SuperAusteniticStainlessSteel     = lazy(() => import('../pages/SuperAusteniticStainlessSteel/SuperAusteniticStainlessSteel'));
const UnsS3275014410                    = lazy(() => import('../pages/SuperDuplexStainlessSteel/UnsS3275014410'));
const UnsS3276014501                    = lazy(() => import('../pages/SuperDuplexStainlessSteel/UnsS3276014501'));
const S31803S32205DuplexSteel          = lazy(() => import('../pages/DuplexStainlessSteel/S31803S32205DuplexSteel'));

// Pressure Vessel Steel
const AsmeSa516AstmA516Gr65            = lazy(() => import('../pages/PressureVesselSteel/AsmeSa516AstmA516Gr65'));
const AsmeSa516AstmA516Gr70            = lazy(() => import('../pages/PressureVesselSteel/AsmeSa516AstmA516Gr70'));
const Product490bLt50                  = lazy(() => import('../pages/PressureVesselSteel/Product490bLt50'));
const P355nl2                          = lazy(() => import('../pages/PressureVesselSteel/P355nl2'));

// Boiler Plate Steel
const AsmeSa516AstmA516Gr60            = lazy(() => import('../pages/BoilerPlateSteel/AsmeSa516AstmA516Gr60'));
const En100283P275nh                   = lazy(() => import('../pages/BoilerPlateSteel/En100283P275nh'));
const Bs1501161430AB                   = lazy(() => import('../pages/BoilerPlateSteel/Bs1501161430AB'));
const En100282P265gh                   = lazy(() => import('../pages/BoilerPlateSteel/En100282P265gh'));
const En10207P265s                     = lazy(() => import('../pages/BoilerPlateSteel/En10207P265s'));
const En100255890ql                    = lazy(() => import('../pages/BoilerPlateSteel/En100255890ql'));

// Quenched And Tempered Steel
const En10025S690ql                    = lazy(() => import('../pages/QuenchedAndTemperedSteel/En10025S690ql'));
const En10025S890ql                    = lazy(() => import('../pages/QuenchedAndTemperedSteel/En10025S890ql'));
const QuenchedAndTemperedSteel         = lazy(() => import('../pages/QuenchedAndTemperedSteel/QuenchedAndTemperedSteel'));

// Wear / Special Plates
const AbracladChromiumCarbideWearPlate  = lazy(() => import('../pages/AbracladChromiumCarbideWearPlate/AbracladChromiumCarbideWearPlate'));
const Creusabro4800Creusabro8000        = lazy(() => import('../pages/Creusabro4800Creusabro8000/Creusabro4800Creusabro8000'));
const AbrasionWearResistantSteel        = lazy(() => import('../pages/AbrasionWearResistantSteel/AbrasionWearResistantSteel'));
const HighYieldColdFormingSteelPlate    = lazy(() => import('../pages/HighYieldColdFormingSteelPlate/HighYieldColdFormingSteelPlate'));

// 460 Yield Steel Plate
const En100283P460nl1                  = lazy(() => import('../pages/460YieldSteelPlate/En100283P460nl1'));
const En100283P460nl2                  = lazy(() => import('../pages/460YieldSteelPlate/En100283P460nl2'));
const En100283P460nh                   = lazy(() => import('../pages/460YieldSteelPlate/En100283P460nh'));
const En100253S460n                    = lazy(() => import('../pages/460YieldSteelPlate/En100253S460n'));
const En100253S460nl                   = lazy(() => import('../pages/460YieldSteelPlate/En100253S460nl'));

// Armour / Ballistic
const ArmourPlate                      = lazy(() => import('../pages/ArmourPlate/ArmourPlate'));
const BallisticArmorPlates             = lazy(() => import('../pages/BallisticArmorPlates/BallisticArmorPlates'));

// Chrome Moly Plate
const AsmeSa387AndAstmA387             = lazy(() => import('../pages/ChromeMolyPlate/AsmeSa387AndAstmA387'));
const Sa387A387Gr11                    = lazy(() => import('../pages/ChromeMolyPlate/Sa387A387Gr11'));
const Sa387A387Gr12                    = lazy(() => import('../pages/ChromeMolyPlate/Sa387A387Gr12'));
const Sa387A387Gr22                    = lazy(() => import('../pages/ChromeMolyPlate/Sa387A387Gr22'));
const En100282                         = lazy(() => import('../pages/ChromeMolyPlate/En100282'));

// Offshore / HIC / Weather
const OffshoreStructuraSteelPlate      = lazy(() => import('../pages/OffshoreStructuraSteelPlate/OffshoreStructuraSteelPlate'));
const CarelsoHicPremium                = lazy(() => import('../pages/HicSteelPlate/CarelsoHicPremium'));
const AsmeSa516HicAndAstmA516Hic       = lazy(() => import('../pages/HicSteelPlate/AsmeSa516HicAndAstmA516Hic'));
const AstmSa516A516Gr60                = lazy(() => import('../pages/HicSteelPlate/AstmSa516A516Gr60'));
const AstmSa516A516Gr65                = lazy(() => import('../pages/HicSteelPlate/AstmSa516A516Gr65'));
const WeatherResistantSteelPlate       = lazy(() => import('../pages/WeatherResistantSteelPlate/WeatherResistantSteelPlate'));

// Flats Products
const BulbBars                         = lazy(() => import('../pages/FlatsProducts/BulbBars'));
const ShipbuildingGrades               = lazy(() => import('../pages/FlatsProducts/ShipbuildingGrades'));
const GalvanizedPlainSheetsCoil        = lazy(() => import('../pages/FlatsProducts/GalvanizedPlainSheetsCoil'));
const ColdRolledSheetCoil              = lazy(() => import('../pages/FlatsProducts/ColdRolledSheetCoil'));
const HotRolledSheetCoils              = lazy(() => import('../pages/FlatsProducts/HotRolledSheetCoils'));
const MildSteelChequerredSteel         = lazy(() => import('../pages/FlatsProducts/MildSteelChequerredSteel'));
const MildSteelGratings                = lazy(() => import('../pages/FlatsProducts/MildSteelGratings'));
const HotRolledPlates                  = lazy(() => import('../pages/FlatsProducts/HotRolledPlates'));

// Long Products
const AmericanWideFlangeBeam           = lazy(() => import('../pages/LongProducts/AmericanWideFlangeBeam'));
const UniversalBeams                   = lazy(() => import('../pages/LongProducts/UniversalBeams'));
const BritishEuropeanAndJapaneseChannels = lazy(() => import('../pages/LongProducts/BritishEuropeanAndJapaneseChannels'));
const EqualUnequalAndTAngle            = lazy(() => import('../pages/LongProducts/EqualUnequalAndTAngle'));
const FlatSquareAndRoundBars           = lazy(() => import('../pages/LongProducts/FlatSquareAndRoundBars'));
const HEAAndHEBIPEIPEAAIPNEuropeanIBeamHBeamJapaneseSection = lazy(() => import('../pages/LongProducts/HEAAndHEBIPEIPEAAIPNEuropeanIBeamHBeamJapaneseSection'));

// Tube & Tubulars
const SquareHollowSections             = lazy(() => import('../pages/TubeTubularsProducts/SquareHollowSections'));
const RectangularHollowSections        = lazy(() => import('../pages/TubeTubularsProducts/RectangularHollowSections'));
const CircularHollowSections           = lazy(() => import('../pages/TubeTubularsProducts/CircularHollowSections'));

// Rebar
const CuttingAndBending                = lazy(() => import('../pages/Rebar/CuttingAndBending'));
const EpoxyCotedRebar                  = lazy(() => import('../pages/Rebar/EpoxyCotedRebar'));
const DeformedWeldedWireMesh           = lazy(() => import('../pages/Rebar/DeformedWeldedWireMesh'));
const Blockmesh                        = lazy(() => import('../pages/Rebar/Blockmesh'));

// Non-Ferrous Metals
const Aluminum                         = lazy(() => import('../pages/NonFerrousMetals/Aluminum'));
const Brass                            = lazy(() => import('../pages/NonFerrousMetals/Brass'));
const Bronze                           = lazy(() => import('../pages/NonFerrousMetals/Bronze'));
const Copper                           = lazy(() => import('../pages/NonFerrousMetals/Copper'));
const Fe                               = lazy(() => import('../pages/NonFerrousMetals/Fe'));

// Ferrous Metals
const StainlessSteelPage               = lazy(() => import('../pages/FerrousMetals/StainlessSteel'));
const CarbonAlloySteel                 = lazy(() => import('../pages/FerrousMetals/CarbonAlloySteel'));
const DieToolSteel                     = lazy(() => import('../pages/FerrousMetals/DieToolSteel'));
const ChromeBar                        = lazy(() => import('../pages/FerrousMetals/ChromeBar'));

// Services
const LaserCutting                     = lazy(() => import('../pages/services/LaserCutting'));
const PlasmaCutting                    = lazy(() => import('../pages/services/PlasmaCutting'));
const OxyGasCutting                    = lazy(() => import('../pages/services/OxyGasCutting'));
const InfinityPlasmaBevelling          = lazy(() => import('../pages/services/InfinityPlasmaBevelling'));
const WaterjetCutting                  = lazy(() => import('../pages/services/WaterjetCutting'));
const PlateBending                     = lazy(() => import('../pages/services/PlateBending'));
const PlateDrilling                    = lazy(() => import('../pages/services/PlateDrilling'));
const PlateMachining                   = lazy(() => import('../pages/services/PlateMachining'));
const PlatePickling                    = lazy(() => import('../pages/services/PlatePickling'));
const PlateBevelling                   = lazy(() => import('../pages/services/PlateBevelling'));
const PlateForming                     = lazy(() => import('../pages/services/PlateForming'));
const PlateRolling                     = lazy(() => import('../pages/services/PlateRolling'));
const ProjectManagement                = lazy(() => import('../pages/services/ProjectManagement'));
const SteelProfilingWeldPreparation    = lazy(() => import('../pages/services/SteelProfilingWeldPreparation'));
const GeneralServices                  = lazy(() => import('../pages/services/GeneralServices'));

// Engineering Steel
const En3b080a15070m20MildSteel        = lazy(() => import('../pages/EngineeringSteel/En3b080a15070m20MildSteel'));
const En1a220m07230m07                 = lazy(() => import('../pages/EngineeringSteel/En1a220m07230m07'));
const En1aLd220m07Pb230m07Pb          = lazy(() => import('../pages/EngineeringSteel/En1aLd220m07Pb230m07Pb'));
const En8080a42080m40                  = lazy(() => import('../pages/EngineeringSteel/En8080a42080m40'));
const En9070m55                        = lazy(() => import('../pages/EngineeringSteel/En9070m55'));
const En14150m19                       = lazy(() => import('../pages/EngineeringSteel/En14150m19'));
const En16605m36606m36                 = lazy(() => import('../pages/EngineeringSteel/En16605m36606m36'));
const En19708m40709m40                 = lazy(() => import('../pages/EngineeringSteel/En19708m40709m40'));
const En24En24t817m40                  = lazy(() => import('../pages/EngineeringSteel/En24En24t817m40'));
const En36655m13                       = lazy(() => import('../pages/EngineeringSteel/En36655m13'));
const S690ql                           = lazy(() => import('../pages/EngineeringSteel/S690ql'));
const Alloy24                          = lazy(() => import('../pages/EngineeringSteel/Alloy24'));
const Steel4130708a25                  = lazy(() => import('../pages/EngineeringSteel/Steel4130708a25'));
const Steel4140708m40                  = lazy(() => import('../pages/EngineeringSteel/Steel4140708m40'));
const ChromePlatedSteelBar             = lazy(() => import('../pages/EngineeringSteel/ChromePlatedSteelBar'));
const SteelHardnessConversions         = lazy(() => import('../pages/EngineeringSteel/SteelHardnessConversions'));
const SteelWeightCalculator            = lazy(() => import('../pages/EngineeringSteel/SteelWeightCalculator'));

// Hot Work Tool Steel
const Steel12344                       = lazy(() => import('../pages/HotWorkToolSteel/Steel12344'));
const SKD61                            = lazy(() => import('../pages/HotWorkToolSteel/SKD61'));
const X40CrMoV51                       = lazy(() => import('../pages/HotWorkToolSteel/X40CrMoV51'));

// Cold Work Tool Steel
const A3                               = lazy(() => import('../pages/ColdWorkToolSteel/A3'));
const A4                               = lazy(() => import('../pages/ColdWorkToolSteel/A4'));
const A6                               = lazy(() => import('../pages/ColdWorkToolSteel/A6'));
const A8                               = lazy(() => import('../pages/ColdWorkToolSteel/A8'));
const O2                               = lazy(() => import('../pages/ColdWorkToolSteel/O2'));
const DC53                             = lazy(() => import('../pages/ColdWorkToolSteel/DC53'));
const SKD11                            = lazy(() => import('../pages/ColdWorkToolSteel/SKD11'));

// Plastic Mould Steel
const OT718                            = lazy(() => import('../pages/PlasticMouldSteel/OT718'));
const Steel12312                       = lazy(() => import('../pages/PlasticMouldSteel/Steel12312'));
const Steel12311                       = lazy(() => import('../pages/PlasticMouldSteel/Steel12311'));
const Steel12083                       = lazy(() => import('../pages/PlasticMouldSteel/Steel12083'));

// Quenched And Tempered Alloy Steels
const Steel4340                        = lazy(() => import('../pages/QuenchedAndTemperedAlloySteels/Steel4340'));
const Steel4140Plate                   = lazy(() => import('../pages/QuenchedAndTemperedAlloySteels/Steel4140Plate'));
const Steel17225                       = lazy(() => import('../pages/QuenchedAndTemperedAlloySteels/Steel17225'));
const Steel16511                       = lazy(() => import('../pages/QuenchedAndTemperedAlloySteels/Steel16511'));

// Carbon Steel
const Steel1045                        = lazy(() => import('../pages/CarbonSteel/Steel1045'));
const Steel1020                        = lazy(() => import('../pages/CarbonSteel/Steel1020'));
const S235JR                           = lazy(() => import('../pages/CarbonSteel/S235JR'));
const Q235B                            = lazy(() => import('../pages/CarbonSteel/Q235B'));

// Bearing Steel And Gear Steel
const GCr15                            = lazy(() => import('../pages/BearingSteelAndGearSteel/GCr15'));
const Steel100Cr6                      = lazy(() => import('../pages/BearingSteelAndGearSteel/Steel100Cr6'));
const Steel52100                       = lazy(() => import('../pages/BearingSteelAndGearSteel/Steel52100'));
const Steel8620                        = lazy(() => import('../pages/BearingSteelAndGearSteel/Steel8620'));
const Steel16MnCr5                     = lazy(() => import('../pages/BearingSteelAndGearSteel/Steel16MnCr5'));
const Steel20MnCr5                     = lazy(() => import('../pages/BearingSteelAndGearSteel/Steel20MnCr5'));
const Steel20CrMnTi                    = lazy(() => import('../pages/BearingSteelAndGearSteel/Steel20CrMnTi'));

// High Speed Steel
const T5                               = lazy(() => import('../pages/HighSpeedSteel/T5'));
const T1                               = lazy(() => import('../pages/HighSpeedSteel/T1'));
const T15                              = lazy(() => import('../pages/HighSpeedSteel/T15'));
const M35                              = lazy(() => import('../pages/HighSpeedSteel/M35'));

// Inconel
const Inconel600                       = lazy(() => import('../pages/Inconel/Inconel600'));
const Inconel601                       = lazy(() => import('../pages/Inconel/Inconel601'));
const Inconel625                       = lazy(() => import('../pages/Inconel/Inconel625'));
const Inconel718                       = lazy(() => import('../pages/Inconel/Inconel718'));
const InconelX750                      = lazy(() => import('../pages/Inconel/InconelX750'));

// Incoloy
const Incoloy800HHT                    = lazy(() => import('../pages/Incoloy/Incoloy800HHT'));
const Incoloy825                       = lazy(() => import('../pages/Incoloy/Incoloy825'));
const Incoloy925                       = lazy(() => import('../pages/Incoloy/Incoloy925'));
const Alloy330                         = lazy(() => import('../pages/Incoloy/Alloy330'));
const AlloyA286Incoloy                 = lazy(() => import('../pages/Incoloy/AlloyA286Incoloy'));
const ENStandardsIncoloy               = lazy(() => import('../pages/Incoloy/ENStandardsIncoloy'));

// Monel
const Monel400                         = lazy(() => import('../pages/Monel/Monel400'));
const MonelK500                        = lazy(() => import('../pages/Monel/MonelK500'));

// Hastelloy
const HastelloyBB2B3                   = lazy(() => import('../pages/Hastelloy/HastelloyBB2B3'));
const HastelloyC22                     = lazy(() => import('../pages/Hastelloy/HastelloyC22'));
const HastelloyC276                    = lazy(() => import('../pages/Hastelloy/HastelloyC276'));
const HastelloyC2000                   = lazy(() => import('../pages/Hastelloy/HastelloyC2000'));
const HastelloyX                       = lazy(() => import('../pages/Hastelloy/HastelloyX'));

// Nickel Alloy
const Nickel200                        = lazy(() => import('../pages/NickelAlloy/Nickel200'));
const Nickel201                        = lazy(() => import('../pages/NickelAlloy/Nickel201'));

// Materials (standalone)
const Steel254SMO                      = lazy(() => import('../pages/Materials/Steel254SMO'));
const Alloy20                          = lazy(() => import('../pages/Materials/Alloy20'));
const Steel904LStainlessSteel          = lazy(() => import('../pages/Materials/Steel904LStainlessSteel'));
const Invar                            = lazy(() => import('../pages/Materials/Invar'));
const AL6XN                            = lazy(() => import('../pages/Materials/AL6XN'));
const CarbonSteelMaterial              = lazy(() => import('../pages/Materials/CarbonSteelMaterial'));
const AlloySteelMaterial               = lazy(() => import('../pages/Materials/AlloySteelMaterial'));
const AlloyA286                        = lazy(() => import('../pages/Materials/AlloyA286'));
const ENStandardsMaterials             = lazy(() => import('../pages/Materials/ENStandardsMaterials'));
const CarbonSteel                      = lazy(() => import('../pages/Materials/CarbonSteel'));
const AlloySteel                       = lazy(() => import('../pages/Materials/AlloySteel'));
const ENStandards                      = lazy(() => import('../pages/Materials/ENStandards'));

// Titanium
const TitaniumGrade1                   = lazy(() => import('../pages/Titanium/TitaniumGrade1'));
const TitaniumGrade2                   = lazy(() => import('../pages/Titanium/TitaniumGrade2'));
const TitaniumGrade3                   = lazy(() => import('../pages/Titanium/TitaniumGrade3'));
const TitaniumGrade4                   = lazy(() => import('../pages/Titanium/TitaniumGrade4'));
const TitaniumGrade5                   = lazy(() => import('../pages/Titanium/TitaniumGrade5'));
const TitaniumGrade6                   = lazy(() => import('../pages/Titanium/TitaniumGrade6'));
const TitaniumGrade7                   = lazy(() => import('../pages/Titanium/TitaniumGrade7'));
const TitaniumGrade9                   = lazy(() => import('../pages/Titanium/TitaniumGrade9'));
const TitaniumGrade11                  = lazy(() => import('../pages/Titanium/TitaniumGrade11'));
const TitaniumGrade12                  = lazy(() => import('../pages/Titanium/TitaniumGrade12'));

// Copper Nickel
const CopperNickel9010                 = lazy(() => import('../pages/CopperNickel/CopperNickel9010'));
const CopperNickel7030                 = lazy(() => import('../pages/CopperNickel/CopperNickel7030'));

// Nimonic
const Nimonic75                        = lazy(() => import('../pages/Nimonic/Nimonic75'));
const Nimonic81                        = lazy(() => import('../pages/Nimonic/Nimonic81'));
const Nimonic86                        = lazy(() => import('../pages/Nimonic/Nimonic86'));
const Nimonic8080A                     = lazy(() => import('../pages/Nimonic/Nimonic8080A'));
const Nimonic90                        = lazy(() => import('../pages/Nimonic/Nimonic90'));
const Nimonic105                       = lazy(() => import('../pages/Nimonic/Nimonic105'));
const Nimonic115                       = lazy(() => import('../pages/Nimonic/Nimonic115'));
const Nimonic263                       = lazy(() => import('../pages/Nimonic/Nimonic263'));
const Nimonic901                       = lazy(() => import('../pages/Nimonic/Nimonic901'));

// Tool Steel
const ToolSteelApplicationChart        = lazy(() => import('../pages/ToolSteel/ToolSteelApplicationChart'));
const O1ToolSteel                      = lazy(() => import('../pages/ToolSteel/O1ToolSteel'));
const O9bToolSteel                     = lazy(() => import('../pages/ToolSteel/O9bToolSteel'));
const A2ToolSteel                      = lazy(() => import('../pages/ToolSteel/A2ToolSteel'));
const C45uToolSteel                    = lazy(() => import('../pages/ToolSteel/C45uToolSteel'));
const D2ToolSteel                      = lazy(() => import('../pages/ToolSteel/D2ToolSteel'));
const D2Supreme                        = lazy(() => import('../pages/ToolSteel/D2Supreme'));
const D3ToolSteel                      = lazy(() => import('../pages/ToolSteel/D3ToolSteel'));
const D6ToolSteel                      = lazy(() => import('../pages/ToolSteel/D6ToolSteel'));
const H13ToolSteel                     = lazy(() => import('../pages/ToolSteel/H13ToolSteel'));
const M42ToolSteel                     = lazy(() => import('../pages/ToolSteel/M42ToolSteel'));
const M2ToolSteel                      = lazy(() => import('../pages/ToolSteel/M2ToolSteel'));
const P20ToolSteel                     = lazy(() => import('../pages/ToolSteel/P20ToolSteel'));
const P509ToolSteel                    = lazy(() => import('../pages/ToolSteel/P509ToolSteel'));
const Steel32s                         = lazy(() => import('../pages/ToolSteel/Steel32s'));
const Steel53s                         = lazy(() => import('../pages/ToolSteel/Steel53s'));
const Steel69s                         = lazy(() => import('../pages/ToolSteel/Steel69s'));
const Steel12316                       = lazy(() => import('../pages/ToolSteel/Steel12316'));
const GroundFlatStock                  = lazy(() => import('../pages/ToolSteel/GroundFlatStock'));
const PreMachinedEconomizer            = lazy(() => import('../pages/ToolSteel/PreMachinedEconomizer'));
const SteelHardnessConversionsToolSteel = lazy(() => import('../pages/ToolSteel/SteelHardnessConversionsToolSteel'));

// Home Page Featured Alloys
const TitaniumForHomePage              = lazy(() => import('../pages/Titanium/TitaniumForHomePage'));
const CrForHomePage                    = lazy(() => import('../pages/HomePageFeaturedAlloy/Cr'));
const NickelAlloyForHomePage           = lazy(() => import('../pages/HomePageFeaturedAlloy/NickelAlloyForHomePage'));
const FeForHomePage                    = lazy(() => import('../pages/HomePageFeaturedAlloy/FeForHomePage'));
const CuForHomePage                    = lazy(() => import('../pages/HomePageFeaturedAlloy/CuForHomePage'));
const AlForHomePage                    = lazy(() => import('../pages/HomePageFeaturedAlloy/AlForHomePage'));

// Sectors
const Construction                     = lazy(() => import('../pages/Sectors/Construction'));
const Defence                          = lazy(() => import('../pages/Sectors/Defence'));
const Nuclear                          = lazy(() => import('../pages/Sectors/Nuclear'));
const OilAndGas                        = lazy(() => import('../pages/Sectors/OilAndGas'));
const Offshore                         = lazy(() => import('../pages/Sectors/Offshore'));
const Agricultural                     = lazy(() => import('../pages/Sectors/Agricultural'));
const MaterialsAndHandling             = lazy(() => import('../pages/Sectors/MaterialsAndHandling'));
const SafetyAndAccess                  = lazy(() => import('../pages/Sectors/SafetyAndAccess'));
const Transport                        = lazy(() => import('../pages/Sectors/Transport'));
const Engineering                      = lazy(() => import('../pages/Sectors/Engineering'));

// ───────────────────────────────────────────────────────────────────────────
// Router
// ───────────────────────────────────────────────────────────────────────────
export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { path: '/',                element: <HomePage /> },
      { path: '/about',           element: <AboutUsPage /> },
      { path: '/contact',         element: <div>Contact Us Page</div> },
      { path: '/customers',       element: <CustomersPage /> },
      { path: '/quality',         element: <Quality /> },
      { path: '/menu-data-sheet', element: <MenuDataSheet /> },
      { path: '/materials-range', element: <MaterialsRange /> },

      // Stainless Steel Plate
      { path: '/products/304-304l-stainless-steel',       element: <StainlessSteel304_304L /> },
      { path: '/products/304h-stainless-steel',           element: <StainlessSteel304H /> },
      { path: '/products/316-316l-stainless-steel',       element: <Product316316lStainlessSteel /> },
      { path: '/products/321-321h-stainless-steel',       element: <Product321321hStainlessSteel /> },
      { path: '/products/super-austenitic-stainless-steel', element: <SuperAusteniticStainlessSteel /> },
      { path: '/products/uns-s32750-1-4410',              element: <UnsS3275014410 /> },
      { path: '/products/uns-s32760-1-4501',              element: <UnsS3276014501 /> },

      // Pressure Vessel Steel
      { path: '/products/asme-sa516-astm-a516-gr-65',    element: <AsmeSa516AstmA516Gr65 /> },
      { path: '/products/asme-sa516-astm-a516-gr-70',    element: <AsmeSa516AstmA516Gr70 /> },
      { path: '/products/490b-lt50',                      element: <Product490bLt50 /> },
      { path: '/products/p355nl2',                        element: <P355nl2 /> },

      // Boiler Plate Steel
      { path: '/products/asme-sa516-astm-a516-gr-60',    element: <AsmeSa516AstmA516Gr60 /> },
      { path: '/products/en-10028-3-p275nh',             element: <En100283P275nh /> },
      { path: '/products/bs-1501-161-430-a-b',           element: <Bs1501161430AB /> },
      { path: '/products/en-10028-2-p265gh',             element: <En100282P265gh /> },
      { path: '/products/en-10207-p265s',                element: <En10207P265s /> },
      { path: '/products/en-10025-5890ql',               element: <En100255890ql /> },

      // Quenched And Tempered Steel
      { path: '/products/en-10025-s690ql',               element: <En10025S690ql /> },
      { path: '/products/en-10025-s890ql',               element: <En10025S890ql /> },
      { path: '/products/quenched-and-tempered-steel',   element: <QuenchedAndTemperedSteel /> },

      // Wear Plates
      { path: '/products/abraclad-chromium-carbide-wear-plate', element: <AbracladChromiumCarbideWearPlate /> },
      { path: '/products/creusabro-4800-creusabro-8000', element: <Creusabro4800Creusabro8000 /> },
      { path: '/products/creusabro-4800-8000',           element: <Creusabro4800Creusabro8000 /> },
      { path: '/products/abrasion-wear-resistant-steel', element: <AbrasionWearResistantSteel /> },
      { path: '/products/high-yield-cold-forming-steel-plate', element: <HighYieldColdFormingSteelPlate /> },

      // 460 Yield Steel Plate
      { path: '/products/en-10028-3-p460nl1',            element: <En100283P460nl1 /> },
      { path: '/products/en-10028-3-p460nl2',            element: <En100283P460nl2 /> },
      { path: '/products/en-10028-3-p460nh',             element: <En100283P460nh /> },
      { path: '/products/en-10025-3-s460n',              element: <En100253S460n /> },
      { path: '/products/en-10025-3-s460nl',             element: <En100253S460nl /> },

      // Armour / Ballistic
      { path: '/products/armour-plate',                  element: <ArmourPlate /> },
      { path: '/products/ballistic-armor-plates',        element: <BallisticArmorPlates /> },

      // Chrome Moly Plate
      { path: '/products/asme-sa387-and-astm-a387',      element: <AsmeSa387AndAstmA387 /> },
      { path: '/products/sa387-a387-gr-11',              element: <Sa387A387Gr11 /> },
      { path: '/products/sa387-a387-gr-12',              element: <Sa387A387Gr12 /> },
      { path: '/products/sa387-a387-gr-22',              element: <Sa387A387Gr22 /> },
      { path: '/products/en-10028-2',                    element: <En100282 /> },

      // Offshore / HIC / Weather
      { path: '/products/offshore-structura-steel-plate', element: <OffshoreStructuraSteelPlate /> },
      { path: '/products/carelso-hic-premium',           element: <CarelsoHicPremium /> },
      { path: '/products/asme-sa516-hic-and-astm-a516-hic-70', element: <AsmeSa516HicAndAstmA516Hic /> },
      { path: '/products/astm-sa516-a516-gr-60',         element: <AstmSa516A516Gr60 /> },
      { path: '/products/astm-sa516-a516-gr-65',         element: <AstmSa516A516Gr65 /> },
      { path: '/products/weather-resistant-steel-plate', element: <WeatherResistantSteelPlate /> },

      // Duplex Stainless Steel
      { path: '/products/s31803-1-4462-and-s32205-duplex-steel', element: <S31803S32205DuplexSteel /> },

      // Flats Products
      { path: '/products/bulb-bars',                     element: <BulbBars /> },
      { path: '/products/shipbuilding-grades',           element: <ShipbuildingGrades /> },
      { path: '/products/galvanized-plain-sheets-coil',  element: <GalvanizedPlainSheetsCoil /> },
      { path: '/products/cold-rolled-sheet-coil',        element: <ColdRolledSheetCoil /> },
      { path: '/products/hot-rolled-sheet-coils',        element: <HotRolledSheetCoils /> },
      { path: '/products/mild-steel-chequerred-steel',   element: <MildSteelChequerredSteel /> },
      { path: '/products/mild-steel-gratings',           element: <MildSteelGratings /> },
      { path: '/products/hot-rolled-plates',             element: <HotRolledPlates /> },

      // Long Products
      { path: '/products/american-wide-flange-beam',     element: <AmericanWideFlangeBeam /> },
      { path: '/products/universal-beams',               element: <UniversalBeams /> },
      { path: '/products/british-european-and-japanese-channels', element: <BritishEuropeanAndJapaneseChannels /> },
      { path: '/products/equal-unequal-and-t-angle',     element: <EqualUnequalAndTAngle /> },
      { path: '/products/flat-square-and-round-bars',    element: <FlatSquareAndRoundBars /> },
      { path: '/products/hea-and-heb-ipe-ipeaa-ipn-european-i-beam-h-beam-japanese-section', element: <HEAAndHEBIPEIPEAAIPNEuropeanIBeamHBeamJapaneseSection /> },

      // Tube & Tubulars
      { path: '/products/square-hollow-sections',        element: <SquareHollowSections /> },
      { path: '/products/rectangular-hollow-sections',   element: <RectangularHollowSections /> },
      { path: '/products/circular-hollow-sections',      element: <CircularHollowSections /> },

      // Rebar
      { path: '/products/cutting-and-bending',           element: <CuttingAndBending /> },
      { path: '/products/epoxy-coted-rebar',             element: <EpoxyCotedRebar /> },
      { path: '/products/deformed-welded-wire-mesh',     element: <DeformedWeldedWireMesh /> },
      { path: '/products/blockmesh',                     element: <Blockmesh /> },

      // Non-Ferrous Metals
      { path: '/products/aluminum',                      element: <Aluminum /> },
      { path: '/products/brass',                         element: <Brass /> },
      { path: '/products/bronze',                        element: <Bronze /> },
      { path: '/products/copper',                        element: <Copper /> },
      { path: '/products/fe',                            element: <Fe /> },

      // Ferrous Metals
      { path: '/products/stainless-steel',               element: <StainlessSteelPage /> },
      { path: '/products/carbon-alloy-steel',            element: <CarbonAlloySteel /> },
      { path: '/products/die-tool-steel',                element: <DieToolSteel /> },
      { path: '/products/chrome-bar',                    element: <ChromeBar /> },

      // Services
      { path: '/services/laser-cutting',                 element: <LaserCutting /> },
      { path: '/services/plasma-cutting',                element: <PlasmaCutting /> },
      { path: '/services/oxy-gas-cutting',               element: <OxyGasCutting /> },
      { path: '/services/infinity-plasma-contour-bevelling-mechanical-bevelling', element: <InfinityPlasmaBevelling /> },
      { path: '/services/waterjet-cutting',              element: <WaterjetCutting /> },
      { path: '/services/plate-bending',                 element: <PlateBending /> },
      { path: '/services/plate-drilling',                element: <PlateDrilling /> },
      { path: '/services/plate-machining',               element: <PlateMachining /> },
      { path: '/services/plate-pickling',                element: <PlatePickling /> },
      { path: '/services/plate-bevelling',               element: <PlateBevelling /> },
      { path: '/services/plate-forming',                 element: <PlateForming /> },
      { path: '/services/plate-rolling',                 element: <PlateRolling /> },
      { path: '/services/project-management',            element: <ProjectManagement /> },
      { path: '/services/steel-profiling-weld-preparation', element: <SteelProfilingWeldPreparation /> },
      { path: '/services/general-services',              element: <GeneralServices /> },

      // Engineering Steel
      { path: '/products/en3b-080a15-070m20-mild-steel', element: <En3b080a15070m20MildSteel /> },
      { path: '/products/en1a-220m07-230m07',            element: <En1a220m07230m07 /> },
      { path: '/products/en1a-ld-220m07-pb-230m07-pb',   element: <En1aLd220m07Pb230m07Pb /> },
      { path: '/products/en8-080a42-080m40',             element: <En8080a42080m40 /> },
      { path: '/products/en9-070m55',                    element: <En9070m55 /> },
      { path: '/products/en14-150m19',                   element: <En14150m19 /> },
      { path: '/products/en16-605m36-606m36',            element: <En16605m36606m36 /> },
      { path: '/products/en19-708m40-709m40',            element: <En19708m40709m40 /> },
      { path: '/products/en24-en24t-817m40',             element: <En24En24t817m40 /> },
      { path: '/products/en36-655m13',                   element: <En36655m13 /> },
      { path: '/products/s690ql',                        element: <S690ql /> },
      { path: '/products/alloy24',                       element: <Alloy24 /> },
      { path: '/products/4130-708a25',                   element: <Steel4130708a25 /> },
      { path: '/products/4140-708m40',                   element: <Steel4140708m40 /> },
      { path: '/products/chrome-plated-steel-bar',       element: <ChromePlatedSteelBar /> },
      { path: '/products/steel-hardness-conversions',    element: <SteelHardnessConversions /> },
      { path: '/products/steel-weight-calculator',       element: <SteelWeightCalculator /> },

      // Tool Steel
      { path: '/products/tool-steel-application-chart',  element: <ToolSteelApplicationChart /> },
      { path: '/products/o1',                            element: <O1ToolSteel /> },
      { path: '/products/o9b',                           element: <O9bToolSteel /> },
      { path: '/products/a2',                            element: <A2ToolSteel /> },
      { path: '/products/c45u',                          element: <C45uToolSteel /> },
      { path: '/products/d2',                            element: <D2ToolSteel /> },
      { path: '/products/d2-supreme',                    element: <D2Supreme /> },
      { path: '/products/d3',                            element: <D3ToolSteel /> },
      { path: '/products/d6',                            element: <D6ToolSteel /> },
      { path: '/products/h13',                           element: <H13ToolSteel /> },
      { path: '/products/m42',                           element: <M42ToolSteel /> },
      { path: '/products/m2',                            element: <M2ToolSteel /> },
      { path: '/products/p20',                           element: <P20ToolSteel /> },
      { path: '/products/pS09',                          element: <P509ToolSteel /> },
      { path: '/products/32s',                           element: <Steel32s /> },
      { path: '/products/53s',                           element: <Steel53s /> },
      { path: '/products/69s',                           element: <Steel69s /> },
      { path: '/products/1-2316',                        element: <Steel12316 /> },
      { path: '/products/ground-flat-stock',             element: <GroundFlatStock /> },
      { path: '/products/pre-machined-economizer',       element: <PreMachinedEconomizer /> },
      { path: '/products/steel-hardness-conversions-tool-steel', element: <SteelHardnessConversionsToolSteel /> },

      // Hot Work Tool Steel
      { path: '/products/1-2344',                        element: <Steel12344 /> },
      { path: '/products/skd61',                         element: <SKD61 /> },
      { path: '/products/x40crmov5-1',                   element: <X40CrMoV51 /> },

      // Cold Work Tool Steel
      { path: '/products/a3',                            element: <A3 /> },
      { path: '/products/a4',                            element: <A4 /> },
      { path: '/products/a6',                            element: <A6 /> },
      { path: '/products/a8',                            element: <A8 /> },
      { path: '/products/o2',                            element: <O2 /> },
      { path: '/products/dc53',                          element: <DC53 /> },
      { path: '/products/skd11',                         element: <SKD11 /> },

      // Plastic Mould Steel
      { path: '/products/ot718',                         element: <OT718 /> },
      { path: '/products/1-2312',                        element: <Steel12312 /> },
      { path: '/products/1-2311',                        element: <Steel12311 /> },
      { path: '/products/1-2083',                        element: <Steel12083 /> },

      // Quenched And Tempered Alloy Steels
      { path: '/products/4340',                          element: <Steel4340 /> },
      { path: '/products/4140-plate',                    element: <Steel4140Plate /> },
      { path: '/products/1-7225',                        element: <Steel17225 /> },
      { path: '/products/1-6511',                        element: <Steel16511 /> },

      // Carbon Steel
      { path: '/products/1045',                          element: <Steel1045 /> },
      { path: '/products/1020',                          element: <Steel1020 /> },
      { path: '/products/s235jr',                        element: <S235JR /> },
      { path: '/products/q235b',                         element: <Q235B /> },

      // Bearing Steel And Gear Steel
      { path: '/products/gcr15',                         element: <GCr15 /> },
      { path: '/products/100cr6',                        element: <Steel100Cr6 /> },
      { path: '/products/52100',                         element: <Steel52100 /> },
      { path: '/products/8620',                          element: <Steel8620 /> },
      { path: '/products/16mncr5',                       element: <Steel16MnCr5 /> },
      { path: '/products/20mncr5',                       element: <Steel20MnCr5 /> },
      { path: '/products/20crmnti',                      element: <Steel20CrMnTi /> },

      // High Speed Steel
      { path: '/products/t1',                            element: <T1 /> },
      { path: '/products/t5',                            element: <T5 /> },
      { path: '/products/t15',                           element: <T15 /> },
      { path: '/products/m35',                           element: <M35 /> },

      // Inconel
      { path: '/products/inconel-600',                   element: <Inconel600 /> },
      { path: '/products/inconel-601',                   element: <Inconel601 /> },
      { path: '/products/inconel-625',                   element: <Inconel625 /> },
      { path: '/products/inconel-718',                   element: <Inconel718 /> },
      { path: '/products/inconel-x-750',                 element: <InconelX750 /> },

      // Incoloy
      { path: '/products/incoloy-800-h-ht',              element: <Incoloy800HHT /> },
      { path: '/products/incoloy-825',                   element: <Incoloy825 /> },
      { path: '/products/incoloy-925',                   element: <Incoloy925 /> },
      { path: '/products/alloy-330',                     element: <Alloy330 /> },
      { path: '/products/alloy-a286-incoloy',            element: <AlloyA286Incoloy /> },
      { path: '/products/en-standards-incoloy',          element: <ENStandardsIncoloy /> },

      // Monel
      { path: '/products/monel-400',                     element: <Monel400 /> },
      { path: '/products/monel-k500',                    element: <MonelK500 /> },

      // Hastelloy
      { path: '/products/hastelloy-b-b2-b3',             element: <HastelloyBB2B3 /> },
      { path: '/products/hastelloy-c22',                 element: <HastelloyC22 /> },
      { path: '/products/hastelloy-c276',                element: <HastelloyC276 /> },
      { path: '/products/hastelloy-c2000',               element: <HastelloyC2000 /> },
      { path: '/products/hastelloy-x',                   element: <HastelloyX /> },

      // Nickel Alloy
      { path: '/products/nickel-200',                    element: <Nickel200 /> },
      { path: '/products/nickel-201',                    element: <Nickel201 /> },

      // Materials (standalone)
      { path: '/products/254-smo',                       element: <Steel254SMO /> },
      { path: '/products/alloy-20',                      element: <Alloy20 /> },
      { path: '/products/904l-stainless-steel',          element: <Steel904LStainlessSteel /> },
      { path: '/products/invar',                         element: <Invar /> },
      { path: '/products/al6xn',                         element: <AL6XN /> },
      { path: '/products/carbon-steel-material',         element: <CarbonSteelMaterial /> },
      { path: '/products/alloy-steel-material',          element: <AlloySteelMaterial /> },
      { path: '/products/alloy-a286',                    element: <AlloyA286 /> },
      { path: '/products/en-standards-materials',        element: <ENStandardsMaterials /> },
      { path: '/products/carbon-steel',                  element: <CarbonSteel /> },
      { path: '/products/alloy-steel',                   element: <AlloySteel /> },
      { path: '/products/en-standards',                  element: <ENStandards /> },

      // Titanium (product pages)
      { path: '/products/titanium-grade-1',              element: <TitaniumGrade1 /> },
      { path: '/products/titanium-grade-2',              element: <TitaniumGrade2 /> },
      { path: '/products/titanium-grade-3',              element: <TitaniumGrade3 /> },
      { path: '/products/titanium-grade-4',              element: <TitaniumGrade4 /> },
      { path: '/products/titanium-grade-5',              element: <TitaniumGrade5 /> },
      { path: '/products/titanium-grade-6',              element: <TitaniumGrade6 /> },
      { path: '/products/titanium-grade-7',              element: <TitaniumGrade7 /> },
      { path: '/products/titanium-grade-9',              element: <TitaniumGrade9 /> },
      { path: '/products/titanium-grade-11',             element: <TitaniumGrade11 /> },
      { path: '/products/titanium-grade-12',             element: <TitaniumGrade12 /> },

      // Copper Nickel
      { path: '/products/copper-nickel-90-10',           element: <CopperNickel9010 /> },
      { path: '/products/copper-nickel-70-30',           element: <CopperNickel7030 /> },

      // Nimonic
      { path: '/products/nimonic-75',                    element: <Nimonic75 /> },
      { path: '/products/nimonic-81',                    element: <Nimonic81 /> },
      { path: '/products/nimonic-86',                    element: <Nimonic86 /> },
      { path: '/products/nimonic-80-80a',                element: <Nimonic8080A /> },
      { path: '/products/nimonic-90',                    element: <Nimonic90 /> },
      { path: '/products/nimonic-105',                   element: <Nimonic105 /> },
      { path: '/products/nimonic-115',                   element: <Nimonic115 /> },
      { path: '/products/nimonic-263',                   element: <Nimonic263 /> },
      { path: '/products/nimonic-901',                   element: <Nimonic901 /> },

      // Home Featured Alloy pages (short URLs)
      { path: '/titanium',     element: <TitaniumForHomePage /> },
      { path: '/cr',           element: <CrForHomePage /> },
      { path: '/NickelAlloys', element: <NickelAlloyForHomePage /> },
      { path: '/Fe',           element: <FeForHomePage /> },
      { path: '/Cu',           element: <CuForHomePage /> },
      { path: '/Al',           element: <AlForHomePage /> },

      // Sectors
      { path: '/sectors/construction',          element: <Construction /> },
      { path: '/sectors/defence',               element: <Defence /> },
      { path: '/sectors/nuclear',               element: <Nuclear /> },
      { path: '/sectors/oil-gas',               element: <OilAndGas /> },
      { path: '/sectors/offshore',              element: <Offshore /> },
      { path: '/sectors/agricultural',          element: <Agricultural /> },
      { path: '/sectors/materials-and-handling', element: <MaterialsAndHandling /> },
      { path: '/sectors/safety-and-access',     element: <SafetyAndAccess /> },
      { path: '/sectors/transport',             element: <Transport /> },
      { path: '/sectors/engineering',           element: <Engineering /> },
    ],
  },
]);
