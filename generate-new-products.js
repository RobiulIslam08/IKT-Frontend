const fs = require("fs");
const path = require("path");

const BASE_DIR = path.join(__dirname, "src");

// ─── Helpers ────────────────────────────────────────────────────────────────

/** "Hot-Work-Tool-Steel" → "HotWorkToolSteel" */
function toPascalCase(str) {
  return str
    .replace(/[^a-zA-Z0-9]/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
}

/** "1.2344" → "Steel12344"  (safe component/file name) */
function safePascal(name) {
  // if starts with digit, prepend "Steel"
  let s = toPascalCase(name);
  if (/^\d/.test(s)) s = "Steel" + s;
  return s;
}

/** "Hot-Work-Tool-Steel" → "hot-work-tool-steel" */
function toSlug(str) {
  return str
    .replace(/[^a-zA-Z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

function mkdir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function write(filePath, content) {
  fs.writeFileSync(filePath, content, "utf8");
}

// ─── All entries ──────────────────────────────────────────────────────────────
// category: folder under pages/ and components/products/
// items: each becomes a page+component set

const groups = [
  {
    category: "HotWorkToolSteel",
    items: ["1.2344", "SKD61", "X40CrMoV5-1"],
  },
  {
    category: "ColdWorkToolSteel",
    items: ["A3", "A4", "A6", "A8", "O2", "DC53", "SKD11"],
  },
  {
    category: "PlasticMouldSteel",
    items: ["OT718", "1.2312", "1.2311", "1.2083"],
  },
  {
    category: "QuenchedAndTemperedAlloySteels",
    items: ["4340", "1.7225", "1.6511"],
  },
  {
    category: "CarbonSteel",
    items: ["1045", "1020", "S235JR", "Q235B"],
  },
  {
    category: "BearingSteelAndGearSteel",
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
    category: "HighSpeedSteel",
    items: ["T5", "T15", "M35"],
  },

  // ── Materials menu ──────────────────────────────────────────────────────────
  {
    category: "Inconel",
    items: [
      "Inconel-600",
      "Inconel-601",
      "Inconel-625",
      "Inconel-718",
      "Inconel-X-750",
    ],
  },
  {
    category: "Incoloy",
    items: [
      "Incoloy-800-H-HT",
      "Incoloy-825",
      "Incoloy-925",
      "Alloy-330",
      "Alloy-A286-Incoloy",
      "EN-Standards-Incoloy",
    ],
  },
  {
    category: "Monel",
    items: ["Monel-400", "Monel-K500"],
  },
  {
    category: "Hastelloy",
    items: [
      "Hastelloy-B-B2-B3",
      "Hastelloy-C22",
      "Hastelloy-C276",
      "Hastelloy-C2000",
      "Hastelloy-X",
    ],
  },
  {
    category: "NickelAlloy",
    items: ["Nickel-200", "Nickel-201"],
  },
  {
    category: "Materials",
    items: ["254-SMO", "Alloy-20", "904L-Stainless-Steel"],
  },
  {
    category: "Titanium",
    items: [
      "Titanium-Grade-1",
      "Titanium-Grade-2",
      "Titanium-Grade-3",
      "Titanium-Grade-4",
      "Titanium-Grade-5",
      "Titanium-Grade-6",
      "Titanium-Grade-7",
      "Titanium-Grade-9",
      "Titanium-Grade-11",
      "Titanium-Grade-12",
    ],
  },
  {
    category: "CopperNickel",
    items: ["Copper-Nickel-90-10", "Copper-Nickel-70-30"],
  },
  {
    category: "Nimonic",
    items: [
      "Nimonic-75",
      "Nimonic-81",
      "Nimonic-86",
      "Nimonic-80-80A",
      "Nimonic-90",
      "Nimonic-105",
      "Nimonic-115",
      "Nimonic-263",
      "Nimonic-901",
    ],
  },
  {
    category: "Materials",
    items: [
      "Invar",
      "AL6XN",
      "Carbon-Steel-Material",
      "Alloy-Steel-Material",
      "Alloy-A286",
      "EN-Standards-Materials",
    ],
  },
];

// ─── Templates ───────────────────────────────────────────────────────────────

function bannerTemplate(displayName, description, points) {
  return `/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import banner1 from "../../../../assets/banner1.jpg";

export default function Banner() {
  const slide = {
    title: '${displayName}',
    description: '${description}',
    points: ${JSON.stringify(points)},
    bgColor: 'from-slate-900 via-slate-800 to-slate-900',
    image: banner1,
  };

  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className={\`absolute inset-0 bg-linear-to-br \${slide.bgColor}\`}
      >
        <div className="absolute inset-0 opacity-20">
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="w-full grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white space-y-6"
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {slide.title}
              </motion.h1>
              <motion.p
                className="text-base md:text-lg font-medium text-gray-200 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {slide.description}
              </motion.p>
              <motion.ul
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {slide.points.map((point, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-base font-medium text-gray-200">{point}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden md:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary rounded-2xl blur-3xl opacity-20" />
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
`;
}

function infoSectionTemplate(displayName, overview, boxes) {
  return `/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';
import { LayersIcon, Settings, PackageOpen } from 'lucide-react';

export function InfoSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <div className="bg-gray-50 py-5 md:py-10">
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center md:text-left mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Material Overview</h1>
          <p className="text-lg font-medium text-primary">${displayName}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl">
                <LayersIcon className="w-8 h-8 text-primary shrink-0" />
              </motion.div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">${boxes[0].title}</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">${boxes[0].body}</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl">
                <Settings className="w-8 h-8 text-primary shrink-0" />
              </motion.div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">${boxes[1].title}</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">${boxes[1].body}</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl">
                <PackageOpen className="w-8 h-8 text-primary shrink-0" />
              </motion.div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">${boxes[2].title}</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">${boxes[2].body}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default InfoSection;
`;
}

function applicationsTemplate(displayName, applications) {
  return `/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import image from "../../../../assets/application.jpg";

export default function Applications() {
  const applications = ${JSON.stringify(applications, null, 4)};

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-6 bg-primary rounded-full"></div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a4a]">Common Applications</h2>
              </div>
              <div className="w-16 h-1 bg-linear-to-r from-primary to-primary/30 rounded-full"></div>
            </div>
            <motion.ul variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-3 mb-8">
              {applications.map((app, index) => (
                <motion.li key={index} variants={itemVariants} className="flex items-center gap-3 group">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    className="shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center"
                  >
                    <ChevronRight className="w-3 h-3 text-primary" />
                  </motion.div>
                  <span className="text-base font-medium text-gray-700 group-hover:text-primary transition-colors duration-300">{app}</span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.5 }}>
              <button className="group relative px-6 py-3 bg-primary text-white font-semibold rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <motion.div className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></motion.div>
                <span className="relative flex items-center gap-2">
                  REQUEST A QUOTE FROM IKT
                  <motion.svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </span>
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group flex items-center justify-center"
          >
            <div className="w-full h-72 md:h-[380px] lg:h-[400px] xl:h-[430px] rounded-xl overflow-hidden shadow-2xl">
              <img
                src={image}
                alt="${displayName} Applications"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute top-40 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
`;
}

function getInTouchTemplate() {
  return `import GetInTouch from '../../GetInTouch';
export default GetInTouch;
`;
}

function pageTemplate(componentName, category, itemFolder) {
  return `import React from 'react';
import Banner from '../../components/products/${category}/${itemFolder}/Banner';
import InfoSection from '../../components/products/${category}/${itemFolder}/InfoSection';
import Applications from '../../components/products/${category}/${itemFolder}/Applications';
import GetInTouch from '../../components/products/${category}/${itemFolder}/GetInTouch';

const ${componentName} = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <GetInTouch />
    </div>
  );
};

export default ${componentName};
`;
}

// ─── Content generators ───────────────────────────────────────────────────────

function getDisplayName(rawName) {
  return rawName.replace(/-/g, " ");
}

function getBannerContent(rawName, category) {
  const display = getDisplayName(rawName);
  const desc = `IKT is your trusted supplier of premium ${display}. This high-performance material is engineered to meet the most demanding industrial applications, providing outstanding mechanical properties and reliability in service.`;
  const points = [
    `Superior mechanical properties and performance characteristics of ${display}.`,
    `Optimized for demanding industrial environments and critical applications.`,
  ];
  return { desc, points };
}

function getInfoBoxes(rawName, category) {
  const display = getDisplayName(rawName);
  return [
    {
      title: `Technical Insights: ${display}`,
      body: `IKT supplies ${display} to the highest industry standards. This material offers exceptional performance characteristics that make it ideal for critical applications. Our team of metallurgical experts ensures every batch meets stringent quality requirements before delivery to our customers worldwide.`,
    },
    {
      title: `Performance & Properties`,
      body: `${display} from IKT delivers outstanding mechanical performance including excellent strength, toughness, and durability. The material undergoes rigorous testing to verify compliance with international standards. IKT recommends this grade for applications where dimensional accuracy and material consistency are paramount.`,
    },
    {
      title: `Forms, Sizes & Availability`,
      body: `IKT maintains an extensive inventory of ${display} in a wide range of forms, sizes, and finishes to suit your specific requirements. We supply this material in round bars, flat bars, plates, sheets, and custom profiles in both imperial and metric dimensions. Contact IKT for rapid quotation and delivery to your facility.`,
    },
  ];
}

function getApplications(rawName, category) {
  const catAppMap = {
    HotWorkToolSteel: [
      "Die Casting Dies and Inserts",
      "Hot Forging Dies and Tools",
      "Extrusion Dies and Tooling",
      "Pressure Die Casting Moulds",
      "Hot Shear Blades",
      "Piercing and Punching Tools",
      "Hot Trimming Dies",
    ],
    ColdWorkToolSteel: [
      "Cold Forming and Stamping Dies",
      "Blanking and Piercing Punches",
      "Deep Drawing Dies",
      "Thread Rolling Dies",
      "Cold Extrusion Tools",
      "Gauges and Measuring Tools",
      "Slitting and Trimming Knives",
    ],
    PlasticMouldSteel: [
      "Injection Moulding Dies",
      "Compression Moulding Tools",
      "Blow Moulding Tooling",
      "Transfer Moulding Dies",
      "Plastic Extrusion Dies",
      "High-Gloss Optical Moulds",
      "Large Mould Bases and Plates",
    ],
    QuenchedAndTemperedAlloySteels: [
      "High-Strength Structural Components",
      "Shafts, Axles and Gears",
      "Pressure Vessels and Containers",
      "Mining and Excavation Equipment",
      "Crane Booms and Lifting Equipment",
      "Offshore and Marine Structures",
      "Heavy-Duty Engineering Parts",
    ],
    CarbonSteel: [
      "General Engineering Components",
      "Structural Fabrications",
      "Shafts and Spindles",
      "Gears and Pinions",
      "Fasteners and Bolts",
      "Machine Parts and Fixtures",
      "Agricultural Equipment Parts",
    ],
    BearingSteelAndGearSteel: [
      "Rolling Element Bearings",
      "Ball and Roller Bearings",
      "Gear Wheels and Pinions",
      "Transmission Shafts",
      "Cam Followers and Rollers",
      "Precision Spindles",
      "Automotive Drivetrain Components",
    ],
    HighSpeedSteel: [
      "Cutting Tools and Drill Bits",
      "Milling Cutters and End Mills",
      "Taps, Dies and Reamers",
      "Broaches and Hobs",
      "Form Tools and Thread Chasers",
      "Circular Saw Blades",
      "High-Speed CNC Tooling",
    ],
    Inconel: [
      "Gas Turbine Components and Blades",
      "Aerospace Engine Parts",
      "Chemical Processing Equipment",
      "Heat Exchangers and Recuperators",
      "Pressure Vessels at High Temperature",
      "Nuclear Reactor Components",
      "Exhaust Systems and Manifolds",
    ],
    Incoloy: [
      "Heat Treating Equipment",
      "Industrial Furnace Components",
      "Chemical and Petrochemical Processing",
      "High-Temperature Heat Exchangers",
      "Power Generation Equipment",
      "Pollution Control Systems",
      "Carburizing and Nitriding Fixtures",
    ],
    Monel: [
      "Marine Engineering Components",
      "Chemical Processing Vessels",
      "Offshore Oil and Gas Equipment",
      "Pump Shafts and Impellers",
      "Fasteners in Corrosive Environments",
      "Heat Exchangers",
      "Electronic and Electrical Components",
    ],
    Hastelloy: [
      "Chemical Process Equipment",
      "Pollution Control and Scrubbers",
      "Pharmaceutical Processing Equipment",
      "Flue Gas Desulfurisation Systems",
      "Pulp and Paper Industry",
      "Waste Treatment Equipment",
      "High-Temperature Corrosive Applications",
    ],
    NickelAlloy: [
      "Chemical Industry Equipment",
      "Food Processing Machinery",
      "Electroplating Anodes",
      "Electronic Component Leads",
      "Caustic Handling Equipment",
      "Battery Electrodes",
      "Hydrogen Generation Equipment",
    ],
    Titanium: [
      "Aerospace Structural Components",
      "Medical Implants and Prosthetics",
      "Chemical Processing Equipment",
      "Marine Hardware and Fasteners",
      "Sporting Equipment",
      "Automotive Exhaust Systems",
      "Military and Defence Applications",
    ],
    CopperNickel: [
      "Marine Condenser Tubes",
      "Seawater Piping Systems",
      "Heat Exchangers in Marine Service",
      "Desalination Plant Components",
      "Offshore Platform Piping",
      "Naval Defence Equipment",
      "Coastal and Harbour Structures",
    ],
    Nimonic: [
      "Turbine Blades and Discs",
      "Combustion Chamber Components",
      "High-Temperature Spring Applications",
      "Exhaust Valves and Valve Seats",
      "Bolting for High-Temperature Service",
      "Nuclear Reactor Components",
      "Industrial Furnace Parts",
    ],
    Materials: [
      "Chemical Processing Equipment",
      "General High-Performance Applications",
      "Heat Exchangers and Process Vessels",
      "Offshore and Marine Structures",
      "Power Generation Equipment",
      "High-Purity and Specialty Applications",
      "Corrosion-Resistant Fabrications",
    ],
  };

  return (
    catAppMap[category] || [
      "General Industrial Applications",
      "Precision Engineering Components",
      "Structural Fabrications",
      "Heat Treatment Applications",
      "Corrosion Resistant Equipment",
      "High-Performance Tooling",
      "Custom Engineering Solutions",
    ]
  );
}

// ─── Route accumulator ────────────────────────────────────────────────────────

const routeImports = [];
const routeEntries = [];

// ─── Main generation ──────────────────────────────────────────────────────────

// Deduplicate: category "Materials" appears twice, need unique folder names
const seen = new Set();

groups.forEach(({ category, items }) => {
  items.forEach((rawName) => {
    const displayName = getDisplayName(rawName);
    const itemFolder = toPascalCase(rawName); // folder name for components
    const componentName = safePascal(rawName); // React component name
    const slug = toSlug(rawName); // URL slug

    // Unique key to avoid duplicates
    const key = `${category}/${itemFolder}`;
    if (seen.has(key)) return;
    seen.add(key);

    // ── component folder ──────────────────────────────────────────────────────
    const compDir = path.join(
      BASE_DIR,
      "components",
      "products",
      category,
      itemFolder,
    );
    mkdir(compDir);

    // Banner.jsx
    const { desc, points } = getBannerContent(rawName, category);
    write(
      path.join(compDir, "Banner.jsx"),
      bannerTemplate(displayName, desc, points),
    );

    // InfoSection.jsx
    const boxes = getInfoBoxes(rawName, category);
    write(
      path.join(compDir, "InfoSection.jsx"),
      infoSectionTemplate(displayName, "", boxes),
    );

    // Applications.jsx
    const apps = getApplications(rawName, category);
    write(
      path.join(compDir, "Applications.jsx"),
      applicationsTemplate(displayName, apps),
    );

    // GetInTouch.jsx
    write(path.join(compDir, "GetInTouch.jsx"), getInTouchTemplate());

    // ── page file ─────────────────────────────────────────────────────────────
    const pageDir = path.join(BASE_DIR, "pages", category);
    mkdir(pageDir);
    write(
      path.join(pageDir, `${componentName}.jsx`),
      pageTemplate(componentName, category, itemFolder),
    );

    // ── route accumulation ────────────────────────────────────────────────────
    routeImports.push(
      `import ${componentName} from '../pages/${category}/${componentName}';`,
    );
    routeEntries.push(
      `      {\n        path: '/products/${slug}',\n        element: <${componentName} />,\n      },`,
    );

    console.log(`✅  ${category}/${componentName}`);
  });
});

// ─── Write route snippet ──────────────────────────────────────────────────────

const routeSnippet = `// ─── AUTO-GENERATED ROUTES (new products) ───────────────────────────────────
${routeImports.join("\n")}

// route entries (paste inside children array):
/*
${routeEntries.join("\n")}
*/
`;

write(path.join(__dirname, "generated-route-snippet.js"), routeSnippet);
console.log("\n✅  Route snippet written to generated-route-snippet.js");
console.log(`\nTotal pages generated: ${seen.size}`);
