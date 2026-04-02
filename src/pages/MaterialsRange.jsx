import { Link } from "react-router-dom";

const materials = [
	{
		metalType: "COMMERCIAL STEEL",
		grades: [
			"ASTM A36, S275JR, JIS G3101 SS400",
			"S235J2 (1.10117), Q235D, ST37-2, S235JR",
			"ST40, ST52-3, S355JR, ASTM A572 Gr.50, ASTM A572 Gr.55",
			"A992, ST60, ASTM A615 Gr.60, C22, CK45, C55",
			"S355JR/J2/JO, CS350W, EN10025 S275JR/JO/J2",
			"EN10025, GOST 1050-88/08KP",
			"ASTM A653 / A653M-07 CS Type A/B/C, FS Type A/B, DDS Type A/B",
			"SS Grade 33/37/40/50/55/80, S340/GR-50-Class 1",
			"DIN EN 10327-2004 / DIN EN 10346-2009 DX51D, DX52D, DX53D",
			"DIN EN 10326-2004 / DIN EN 10346-2009 S220GD, S250GD, S280GD, S320GD, S350GD, S550GD",
			"JIS G310 / G3131 / G3141 SPCC, SS330, SS400, SS490, SS540",
			"DIN 17100 - St32 / St37-2 / St44-2 / St50-2 / St52-3",
			"ASTM A36 / A572 Gr.42 / A572 Gr.50",
		],
		forms: [
			"Hot Rolled Plates and Coils",
			"Cold Rolled Sheet and Coils",
			"Galvanized Sheet and Coils",
			"Chequered Plates",
			"Stainless Steel Sheet and Plates",
			"Stainless Steel Round, Flat, Angle Bars",
			"Aluminum Plain Sheet and Coils",
			"Aluminum Chequered Plates",
			"Brass and Copper Sheet",
			"Equal and Unequal Angles, Flat, T-Bar, Square Bars",
			"Square and Rectangular MSH Section",
			"ERW and Seamless Pipes",
			"Wear Resistance Plates: HARDOX 400/450/500, SIDUR 400/450, Perdur 400/450, DMX110",
			"Hot Rolled Steel Grating",
			"Beams and Channels: HEA, HEB, IPE, IPN, UPN, UPE, JIS Beams, W Beams, UB, UC, PFC, C and Z Channels",
		],
	},
	{
		metalType: "BULB BARS",
		grades: ["GRADE A, D, AH32, AH40, DH36, EH32, EH40", "GOST A40S, FH3, ABS, Lloyds Register, DNV-GL, BV, ClassNK, RMRS, KR, RINA"],
		forms: ["Sheets and Plates, Bars and Rods, Tubes and Pipes, Fasteners and Fittings"],
	},
	{
		metalType: "TUBE & TUBULAR PRODUCT",
		grades: ["ASTM A500 Gr. A/B/C", "EN10219 and EN10210", "S275JR", "S355JRH / J0H / J2H", "STKR 400"],
		forms: ["Tubes and Pipes", "Circular Hollow Sections"],
	},
	{
		metalType: "MILD STEEL ERW PIPE",
		grades: ["Class A, B, C, A-1", "SCH-20, 40", "Grade: ASTM A500 / A53 / GR-A / B / BS 1387"],
		forms: ["Tubes and Pipes"],
	},
	{
		metalType: "GALVANIZED ERW PIPES",
		grades: ["Class A, B, A-1", "SCH-40, 80", "Grade: ASTM A500 / A53 / GR-A / B / BS 1387"],
		forms: ["Tubes and Pipes"],
	},
	{
		metalType: "SEAMLESS PIPE",
		grades: ["Class A, B, C, A-1", "SCH-20, 40, XS, 80, 100, 120, 160", "Grade: API 5L / ASTM A53 / 106 / GR-A / B"],
		forms: ["Tubes and Pipes"],
	},
	{
		metalType: "STAINLESS STEEL",
		grades: [
			"304 / 304L / 316 / 316L / 430 (2B, BA, No.1, No.4, No.8)",
			"AISI 201, 202, 253MA, 317, 321, 410, 420, 430, 904L",
			"304H, 321, 321H, Super Austenitic, Duplex, Super Duplex",
			"Chemical resistant steel 309, Heat resistant sheet 310S / 314",
		],
		forms: ["Sheets and Plates, Bars and Rods, Tubes and Pipes, Fasteners and Fittings"],
	},
	{
		metalType: "BOILER QUALITY / PRESSURE VESSEL",
		grades: [
			"ASTM / ASME SA516 Gr.60 / 65 / 70 +N / 490B",
			"EN10028-3 P355NL1, P355NL2, P275NH",
			"BS1501 161 430 A/B, EN10028-2 P265GH, EN10207 P265S",
		],
		forms: ["Sheets and Plates"],
	},
	{
		metalType: "460-YIELD STEEL PLATE",
		grades: ["EN10028-3 P460NL1, P460NL2, P460NH", "EN10025-3 S460N, S460NL"],
		forms: ["Sheets and Plates"],
	},
	{
		metalType: "CHROME MOLY PLATE",
		grades: ["ASME SA387 and ASTM A387", "SA387 / A387 Gr.11, Gr.12, Gr.22", "EN10028-2"],
		forms: ["Sheets and Plates"],
	},
	{
		metalType: "HIC PLATE",
		grades: ["CAREL SO-HIC PREMIUM+", "ASME SA516 HIC-70", "ASTM SA516 Gr.60 / Gr.65"],
		forms: ["Sheets and Plates"],
	},
	{
		metalType: "NONFERROUS METAL - ALUMINUM",
		grades: ["1050, 1100, 2024, 3003, 6061, 6063, 7075", "5052, 5083, 5754, 6061, 6082, 7050, 7075", "Alumec 79, Alumec 89, Alumec 99"],
		forms: ["Sheets and Plates, Bars and Rods, Tubes and Pipes, Fasteners and Fittings", "Round Plates"],
	},
	{
		metalType: "NONFERROUS METAL - BRASS",
		grades: ["C26000, C36000, C37000, C46400", "C38500", "Free cutting Brass"],
		forms: ["Round, Hexagonal, Square, Flat"],
	},
	{
		metalType: "NONFERROUS METAL - COPPER",
		grades: ["C10200, C11000, C12000, C14500, C21000", "Copper alloys", "Electrolytic Copper, Beryllium Copper"],
		forms: ["Tubes and Pipes, Sheets and Plates, Bars and Rods, Fasteners and Fittings"],
	},
	{
		metalType: "NONFERROUS METAL - BRONZE",
		grades: ["Bronze (Round and Hollow)", "Tiger Bronze (83600, LG2, C84400, LG1)", "Aluminium Bronze (C95400)", "Nickel Aluminium Bronze (C95800, C95500)", "Manganese Bronze (C863600)", "Phosphorus Bronze (C54400, C90700)"],
		forms: ["Bars and Rods, Sheets"],
	},
	{
		metalType: "CARBON STEEL / ENGINEERING STEEL / TOOL STEEL",
		grades: ["A36, AISI 1045, AISI 4140, AISI 4340, D2, O1"],
		forms: ["Sheets and Plates, Bars and Rods, Tubes and Pipes, Fasteners and Fittings"],
	},
	{
		metalType: "TITANIUM",
		grades: ["Grade 1, Grade 2, Grade 3, Grade 4, Grade 9"],
		forms: ["Sheets and Plates, Bars and Rods, Fasteners and Fittings"],
	},
	{
		metalType: "FERROUS METAL - STAINLESS STEEL",
		grades: ["304 / 316 / 302", "410 / 420 (Q&T) / 17-4PH", "Austenitic, Martensitic and PH grades"],
		forms: ["Sheets and Plates, Bars and Rods, Tubes and Pipes, Fasteners and Fittings"],
	},
	{
		metalType: "ENGINEERING PLASTIC",
		grades: ["Politef (Pure Teflon Virgin) - PTFE", "Polyamide - PA6", "Polipom (Polyacetal) - POM", "Polipolen (Polyethylene) - PE300 / PEHD / PE500"],
		forms: ["Round Bars, Sheets"],
	},
	{
		metalType: "FERROUS METAL - CARBON & ALLOY STEEL",
		grades: ["Carbon Grades: EN8, C20, C22, C35, C40, C45, C60", "Alloy Grades: EN19, 8.8, B-7, 4140, 4140 Q&T, EN24, 10.9, 4340, 4340 Q&T", "Structural Grades: ST52, S355JR", "Wear Resistance: Hardox 400, 450, 500, 600 Series"],
		forms: ["Sheets and Plates, Bars and Rods, Tubes and Pipes"],
	},
	{
		metalType: "FERROUS METAL - DIA & TOOL STEEL",
		grades: ["D2, D3, HCHCR", "DIN 1.2379, 1.2080", "H13 - DIN 1.2344", "P20 - 1.2311, 1.2312, 1.2316, 1.2738"],
		forms: ["Sheets, Bars and Rods"],
	},
	{
		metalType: "BRONZE",
		grades: ["C51000, C54400, C93600, C95400"],
		forms: ["Sheets and Plates, Bars and Rods, Fasteners and Fittings"],
	},
	{
		metalType: "DUPLEX STEEL",
		grades: ["S32205, S31803, S32304, S32101"],
		forms: ["Sheets and Plates, Bars and Rods, Tubes and Pipes, Fasteners and Fittings"],
	},
	{
		metalType: "SUPER DUPLEX STEEL",
		grades: ["S32750, S32760, S32550"],
		forms: ["Sheets and Plates, Bars and Rods, Tubes and Pipes, Fasteners and Fittings"],
	},
	{
		metalType: "HIGH NICKEL ALLOYS",
		grades: ["Inconel 600, 625, 718", "Monel 400", "Hastelloy C-276, B-3"],
		forms: ["Sheets and Plates, Bars and Rods, Tubes and Pipes, Fasteners and Fittings"],
	},
];

function CellText({ items }) {
	return (
		<div className="space-y-1 text-center text-slate-700 leading-6">
			{items.map((item) => (
				<p key={item}>{item}</p>
			))}
		</div>
	);
}

export default function MaterialsRange() {
	return (
		<section className="min-h-screen bg-slate-50 py-12 lg:py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<div className="mb-8 lg:mb-10">
					<p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#408ccb]">Materials Range</p>
					<h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">Metal Types, Grades and Forms</h1>
				
				</div>

			

				<div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xl">
					<table className="min-w-full divide-y divide-slate-200 text-center">
						<thead className="bg-slate-900 text-white">
							<tr>
								<th className="px-5 py-4 text-sm font-semibold uppercase tracking-wider">Metal Type</th>
								<th className="px-5 py-4 text-sm font-semibold uppercase tracking-wider">Grades</th>
								<th className="px-5 py-4 text-sm font-semibold uppercase tracking-wider">Forms &amp; Shapes</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-slate-200 bg-white">
							{materials.map((material, index) => (
								<tr key={`${material.metalType}-${index}`} className="hover:bg-slate-50/80">
									<td className="px-5 py-5 align-top text-sm font-semibold text-slate-800 uppercase tracking-wide">
										{material.metalType}
									</td>
									<td className="px-5 py-5 align-top text-sm font-semibold text-slate-800 uppercase tracking-wide">
										<CellText items={material.grades} />
									</td>
									<td className="px-5 py-5 align-top text-sm font-semibold text-slate-800 uppercase tracking-wide ">
										<CellText items={material.forms} />
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
}