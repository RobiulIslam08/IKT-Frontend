// Shared menu configuration for Header and RightDrawer

// Utility function to generate clean URLs from product names
export const generateProductUrl = (productName) => {
  return `/products/${productName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")}`;
};

export const menuItems = [
  { name: "Home", href: "/" },
  {
    name: "Products",
    hasDropdown: true,
    categories: [
      {
        name: "Flats-Products",
        items: [
          "Bulb-Bars",
          "Shipbuilding-Grades",
          "Galvanized-Plain-Sheets-&-Coil",
          "Cold-Rolled-Sheet-&-Coil",
          "Hot-Rolled-Sheet-Coils",
          "Mild-Steel-Chequerred-Steel",
          "Mild-Steel-Gratings",
          "Hot-Rolled-Plates",
        ],
      },
      {
        name: "Long-Products",

        items: [
          "American-Wide-Flange-Beam",
          "Universal-Beams",
          "British-European-And-Japanese-Channels",
          "Equal-Unequal-And-T-Angle",
          "Flat-Square-And-Round-Bars",
          "HEA-And-HEB,IPE,IPEAA,IPN(European)-&-I-Beam,-H-Beam-(Japanese-Section)",
          {
            name: "Rebar",
            subItems: [
              "Cutting-And-Bending",
              "Epoxy-Coted-Rebar",
              "Deformed-Welded-Wire-Mesh",
              "Blockmesh",
            ],
          },
        ],
      },
      {
        name: "Tube-&-Tubulars-Products",
        items: [
          "Square-Hollow-Sections", //
          "Rectangular-Hollow-Sections", //
          "Circular-Hollow-Sections", //
        ],
      },
      {
        name: "Stainless-Steel",
        items: [
          "304-304L-Stainless-Steel",
          "304H-Stainless-Steel",
          "316-316L-Stainless-Steel",
          "321-321H-Stainless-Steel",
          "904L Stainless Steel",
          "Super-Austenitic-Stainless-Steel",
          {
            name: "Duplex-Stainless-Steel",
            subItems: ["S31803-(1.4462)-and-S32205-Duplex-Steel"],
          },
          {
            name: "Super-Duplex-Stainless-Steel",
            subItems: ["UNS S32750 (1.4410)", "UNS S32760 (1.4501)"],
          },
        ],
      },
      // {
      //   name: "Super-Austenitic-Stainless-Steel",
      //   items: [], // ইমেজে এই ক্যাটাগরির আন্ডারে সরাসরি আইটেম নেই
      //   href: generateProductUrl("SUPER-AUSTENITIC-STAINLESS-STEEL"),
      // },
      // {
      //   name: "DUPLEX-STAINLESS-STEEL",
      //   items: ["S31803 (1.4462) AND S32205 DUPLEX STEEL"],
      // },

      // {
      //   name: "Duplex-Stainless-Steel",
      //   items: ["S31803-(1.4462)-and-S32205-Duplex-Steel"],
      // },
      // {
      //   name: "Super-Duplex-Stainless-Steel",
      //   items: ["UNS S32750 (1.4410)", "UNS S32760 (1.4501)"],
      // },
      {
        name: "Pressure-Vessel-Steel",
        items: [
          "ASME SA516 / ASTM A516 - Gr. 65",
          "ASME SA516 / ASTM A516 - Gr. 70",
          "490B-LT50",
          "P355NL2",
        ],
      },
      {
        name: "Boiler-Plate-Steel",
        items: [
          "ASME SA516 / ASTM A516 Gr. 60",
          "EN 10028:3 P275NH",
          "BS 1501 161 430 A/B",
          "EN 10028:2 P265GH",
          "EN 10207 P265S",
        ],
      },
      // {
      //   name: "Quenched-And-Tempered-Steel",
      //   items: ["EN 10025 S690QL", "EN 10025 S890QL"],
      //   href: generateProductUrl("Quenched-And-Tempered-Steel"),
      // },

      {
        name: "460-Yield-Steel-Plate",
        items: [
          "EN 10028:3 P460NL1",
          "EN 10028:3 P460NL2",
          "EN 10028:3 P460NH",
          "EN 10025:3 S460N",
          "EN 10025:3 S460NL",
        ],
      },
      // {
      //   name: "Armour-Plate",
      //   items: [],
      //   href: generateProductUrl("ARMOUR-PLATE"),
      // },
      {
        name: "Chrome-Moly-Plate",
        items: [
          "ASME SA387 AND ASTM A387",
          "SA387 / A387 Gr 11",
          "SA387 / A387 Gr 12",
          "SA387 / A387 Gr 22",
          "EN 10028-2",
        ],
      },

      {
        name: "Hic-Steel-Plate",
        items: [
          "CARELSO-HIC-PREMIUM+",
          "ASME-SA516-HIC-AND-ASTM-A516-HIC-70",
          "ASTM-SA516-A516-GR-60",
          "ASTM-SA516-A516-GR-65",
        ],
      },

      {
        name: "Non-Ferrous-Metals",
        items: ["Aluminum", "Brass", "Bronze", "Copper", "Fe"],
      },
      {
        name: "Ferrous-Metals",
        items: [
          "Stainless-Steel",
          "Carbon-&-Alloy-Steel",
          "Die-&-Tool-Steel",
          "Chrome-Bar",
        ],
      },

      // নতুন শুরু
      {
        name: "Hot-Work-Tool-Steel",
        items: ["H13", "1.2344", "SKD61", "X40CrMoV5-1"],
      },
      {
        name: "Cold-Work-Tool-Steel",
        items: [
          "A2",
          "A3",
          "A4",
          "A6",
          "A8",
          "D2",
          "D3",
          "O1",
          "O2",
          "DC53",
          "SKD11",
        ],
      },

      {
        name: "Plastic-Mould-Steel",
        items: ["P20", "OT718", "1.2312", "1.2311", "1.2083"],
      },
      {
        name: "Quenched-and-Tempered-Alloy-Steels",
        items: [
          "4130 - 708A25",
          "4140 - 708M40",
          "4140 - Plate",
          "4340",
          "1.7225",
          "1.6511",
        ],
      },
      {
        name: "Carbon-Steel",
        items: ["1045", "1020", "S235JR", "Q235B"],
      },
      {
        name: "Bearing-Steel-and-Gear-Steel",
        items: [
          "GCr15",
          "100Cr6",
          "52100",
          "8620",
          "16MnCr5",
          "20MnCr5",
          "20CrMnTi",
        ],
      },
      {
        name: "High-Speed-Steel",
        items: ["T1", "T5", "T15", "M2", "M35", "M42"],
      },
      // নতুন শেষ

      // {
      //   name: "Weather-Resistant-Steel-Plate",
      //   items: [],
      //   href: generateProductUrl("WEATHER-RESISTANT-STEEL-PLATE"),
      // },

      {
        name: "Offshore-&-Structura-Steel-Plate",
        href: generateProductUrl("OFFSHORE-&-STRUCTURA-STEEL-PLATE"),
      },
    ],
  },
  // --- নতুন যুক্ত করা Materials সেকশন শুরু ---
  {
    name: "Speacial Alloys",
    hasDropdown: true,
    categories: [
      {
        name: "", // এখানে ক্যাটাগরির নামের প্রয়োজন নেই, তাই ফাঁকা রাখা হয়েছে
        items: [
          {
            name: "Inconel",
            subItems: [
              "Inconel 600",
              "Inconel 601",
              "Inconel 625",
              "Inconel 718",
              "Inconel X-750",
            ],
          },
          {
            name: "Incoloy",
            subItems: [
              "Incoloy 800/H/HT",
              "Incoloy 825",
              "Incoloy 925",
              "Alloy 330",
              "Alloy A286",
            ],
          },
          {
            name: "Monel",
            subItems: ["Monel 400", "Monel K500"],
          },
          {
            name: "Hastelloy",
            subItems: [
              "Hastelloy B / B2 / B3",
              "Hastelloy C22",
              "Hastelloy C276",
              "Hastelloy C2000",
              "Hastelloy X",
            ],
          },
          {
            name: "Nickel Alloy",
            subItems: ["Nickel 200", "Nickel 201"],
          },
          {
            name: "Titanium",
            subItems: [
              "Titanium Grade 1",
              "Titanium Grade 2",
              "Titanium Grade 3",
              "Titanium Grade 4",
              "Titanium Grade 5",
              "Titanium Grade 6",
              "Titanium Grade 7",
              "Titanium Grade 9",
              "Titanium Grade 11",
              "Titanium Grade 12",
            ],
          },

          {
            name: "Copper Nickel",
            subItems: ["Copper Nickel 90/10", "Copper Nickel 70/30"],
          },
          {
            name: "Nimonic",
            subItems: [
              "Nimonic 75",
              "Nimonic 81",
              "Nimonic 86",
              "Nimonic 80/80A",
              "Nimonic 90",
              "Nimonic 105",
              "Nimonic 115",
              "Nimonic 263",
              "Nimonic 901",
            ],
          },
          "254 SMO",
          "Alloy 20",

          "Invar",
          "AL6XN",

          "Carbon Steel",
          "Alloy Steel",
          "Alloy A286",
          "EN Standards",
        ],
      },
    ],
  },
  // --- নতুন যুক্ত করা Materials সেকশন শেষ ---

  {
    name: "Engineering Steel",
    hasDropdown: true,
    categories: [
      {
        name: "",
        items: [
          "EN3B - 080A15 070M20 Mild steel",
          "EN1A - 220M07 230M07",
          "EN1A LD - 220M07 PB 230M07 PB",
          "EN8 - 080A42 080M40",
          "EN9 - 070M55",
          "EN14 - 150M19",
          "EN16 - 605M36 606M36",
          "EN19 - 708M40 709M40",
          "EN24/EN24T - 817M40",
          "EN36 - 655M13",
          "S690QL",
          "Alloy24™",
          // "4130 - 708A25",
          // "4140 - 708M40",
          "Chrome Plated Steel Bar",
          "Steel Hardness conversions",
          // "Steel Weight Calculator",
        ],
      },
    ],
  },
  {
    name: "Tool Steel",
    hasDropdown: true,
    categories: [
      {
        name: "",
        items: [
          "O9B",

          "C45U",

          "D2 Supreme™",

          "D6",

          "PS09",
          "32S",
          "53S",
          "69S",
          "1.2316",
          "Ground flat stock",
          "Pre-machined Economizer",
          "Steel Hardness conversions",
          "Tool steel application chart",
        ],
      },
    ],
  },

  {
    name: "Special Steel",
    hasDropdown: true,
    categories: [
      {
        name: "",
        items: [
          // "Quenched-And-Tempered-Steel",
          {
            name: "Quenched-And-Tempered-Steel",
            subItems: ["EN 10025 S690QL", "EN 10025 S890QL"],
          },

          {
            name: "Abraclad-Chromium-Carbide-Wear-Plate",
            items: [],
            href: generateProductUrl("ABRACLAD-CHROMIUM-CARBIDE-WEAR-PLATE"),
          },
          {
            name: "Creusabro®-4800-&-Creusabro®-8000",
            items: [],
            href: generateProductUrl("CREUSABRO®-4800-&-CREUSABRO®-8000"),
          },
          {
            name: "Abrasion-&-Wear-Resistant-Steel",
            items: [],
            href: generateProductUrl("ABRASION-&-WEAR-RESISTANT-STEEL"),
          },
          {
            name: "Weather-Resistant-Steel-Plate",
            items: [],
            href: generateProductUrl("WEATHER-RESISTANT-STEEL-PLATE"),
          },

          {
            name: "High-Yield-Cold-Forming-Steel-Plate",
            items: [],
            href: generateProductUrl("HIGH-YIELD-COLD-FORMING-STEEL-PLATE"),
          },
          "Creusabro-4800-8000",
          "Armour-Plate",
          {
            name: "Ballistic-Armor-Plates",
            items: [],
            href: generateProductUrl("BALLISTIC-ARMOR-PLATES"),
          },
        ],
      },
    ],
  },
  {
    name: "Services",
    hasDropdown: true,
    categories: [
      {
        name: "Plate-Cutting",
        items: [
          { name: "Laser-Cutting", href: "/services/laser-cutting" },
          { name: "Plasma-Cutting", href: "/services/plasma-cutting" },
          { name: "Oxy-Gas-Cutting", href: "/services/oxy-gas-cutting" },
          {
            name: "Infinity-Plasma-Contour-Bevelling-&-Mechanical-Bevelling",
            href: "/services/infinity-plasma-contour-bevelling-mechanical-bevelling",
          },
          { name: "Waterjet-Cutting", href: "/services/waterjet-cutting" },
        ],
      },
      {
        name: "Plate-Procession",
        items: [
          { name: "Plate-Bending", href: "/services/plate-bending" },
          { name: "Plate-Drilling", href: "/services/plate-drilling" },
          { name: "Plate-Machining", href: "/services/plate-machining" },
          { name: "Plate-Pickling", href: "/services/plate-pickling" },
          { name: "Plate-Bevelling", href: "/services/plate-bevelling" },
          { name: "Plate-Forming", href: "/services/plate-forming" },
          { name: "Plate-Rolling", href: "/services/plate-rolling" },
        ],
      },
      {
        name: "Other-Services",
        items: [
          { name: "Project-Management", href: "/services/project-management" },
          {
            name: "Steel-Profiling-&-Weld-Preparation",
            href: "/services/steel-profiling-weld-preparation",
          },
          { name: "General-Services", href: "/services/general-services" },
        ],
      },
    ],
  },
  {
    name: "Sectors",
    hasDropdown: true,
    categories: [
      {
        name: "", 
        items: [
          { name: "Construction", href: "/sectors/construction" },
          { name: "Defence", href: "/sectors/defence" },
          { name: "Nuclear", href: "/sectors/nuclear" },
          { name: "Oil & Gas", href: "/sectors/oil-gas" },
          { name: "Offshore", href: "/sectors/offshore" },
          { name: "Agricultural", href: "/sectors/agricultural" },
          { name: "Materials And Handling", href: "/sectors/materials-and-handling" },
          { name: "Safety and Access", href: "/sectors/safety-and-access" },
          { name: "Transport", href: "/sectors/transport" },
          { name: "Engineering", href: "/sectors/engineering" },
        ],
      },
    ],
  },
  { name: "Customers", href: "/customers" },
  { name: "Quality", href: "/quality" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];
