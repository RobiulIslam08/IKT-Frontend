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
          "Super-Austenitic-Stainless-Steel",
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
      {
        name: "Duplex Stainless Steel",
        items: ["S31803 (1.4462) and S32205 Duplex Steel"],
      },
      {
        name: "Super-Duplex-Stainless-Steel",
        items: ["UNS S32750 (1.4410)", "UNS S32760 (1.4501)"],
      },
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
        name: "High-Yield-Cold-Forming-Steel-Plate",
        items: [],
        href: generateProductUrl("HIGH-YIELD-COLD-FORMING-STEEL-PLATE"),
      },
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
        items: ["CARELSO HIC PREMIUM+", "ASME SA516 HIC AND ASTM A516 HIC"],
      },
     
      {
        name: "Non-Ferrous-Metals",
        items: ["Aluminum", "Brass", "Bronze", "Copper"],
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
       {
        name: "Weather-Resistant-Steel-Plate",
        items: [],
        href: generateProductUrl("WEATHER-RESISTANT-STEEL-PLATE"),
      },

      {
        name: "Offshore-&-Structura-Steel-Plate",
        items: [],
        href: generateProductUrl("OFFSHORE-&-STRUCTURA-STEEL-PLATE"),
      },
    ],
  },
  {
    name: "Services",
    hasDropdown: true,
    categories: [
      {
        name: "Plate Cutting",
        items: [
          { name: "Laser Cutting", href: "/services/laser-cutting" },
          { name: "Plasma Cutting", href: "/services/plasma-cutting" },
          { name: "Oxy Gas Cutting", href: "/services/oxy-gas-cutting" },
          {
            name: "Infinity Plasma Contour Bevelling & Mechanical Bevelling",
            href: "/services/infinity-plasma-contour-bevelling-mechanical-bevelling",
          },
          { name: "Waterjet Cutting", href: "/services/waterjet-cutting" },
        ],
      },
      {
        name: "Plate Procession",
        items: [
          { name: "Plate Bending", href: "/services/plate-bending" },
          { name: "Plate Drilling", href: "/services/plate-drilling" },
          { name: "Plate Machining", href: "/services/plate-machining" },
          { name: "Plate Pickling", href: "/services/plate-pickling" },
          { name: "Plate Bevelling", href: "/services/plate-bevelling" },
          { name: "Plate Forming", href: "/services/plate-forming" },
          { name: "Plate Rolling", href: "/services/plate-rolling" },
        ],
      },
      {
        name: "Other Services",
        items: [
          { name: "Project Management", href: "/services/project-management" },
          {
            name: "Steel Profiling & Weld Preparation",
            href: "/services/steel-profiling-weld-preparation",
          },
          { name: "General Services", href: "/services/general-services" },
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
          "Abraclad-Chromium-Carbide-Wear-Plate",
          "Creusabro-4800-8000",
          "Armour-Plate",
        ],
      },
    ],
  },

  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];
