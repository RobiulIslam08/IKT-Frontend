import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper functions
function toComponentName(str) {
  let name = str
    .replace(/®/g, "")
    .split(/[^a-zA-Z0-9]+/)
    .filter((word) => word.length > 0)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");

  // If starts with a number, prefix with 'Product'
  if (/^\d/.test(name)) {
    name = "Product" + name;
  }

  return name;
}

function toSlug(str) {
  return str
    .toLowerCase()
    .replace(/®/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Product categories and items (exactly from menuItems.js)
const products = [
  {
    category: "STAINLESS-STEEL-PLATE",
    items: [
      "304-304L-STAINLESS-STEEL",
      "304H-STAINLESS-STEEL",
      "316-316L-STAINLESS-STEEL",
      "321-321H-STAINLESS-STEEL",
    ],
  },
  { category: "SUPER-AUSTENITIC-STAINLESS-STEEL", items: [] },
  {
    category: "SUPER-DUPLEX-STAINLESS-STEEL",
    items: ["UNS S32750 (1.4410)", "UNS S32760 (1.4501)"],
  },
  {
    category: "PRESSURE-VESSEL-STEEL",
    items: [
      "ASME SA516 / ASTM A516 - Gr. 65",
      "ASME SA516 / ASTM A516 - Gr. 70",
      "490B-LT50",
      "P355NL2",
    ],
  },
  {
    category: "BOILER-PLATE-STEEL",
    items: [
      "ASME SA516 / ASTM A516 Gr. 60",
      "EN 10028:3 P275NH",
      "BS 1501 161 430 A/B",
      "EN 10028:2 P265GH",
      "EN 10207 P265S",
      "EN 10025 5890QL",
    ],
  },
  {
    category: "QUENCHED-AND-TEMPERED-STEEL",
    items: ["EN 10025 S690QL", "EN 10025 S890QL"],
  },
  { category: "ABRACLAD-CHROMIUM-CARBIDE-WEAR-PLATE", items: [] },
  { category: "CREUSABRO®-4800-&-CREUSABRO®-8000", items: [] },
  { category: "ABRASION-&-WEAR-RESISTANT-STEEL", items: [] },
  { category: "HIGH-YIELD-COLD-FORMING-STEEL-PLATE", items: [] },
  {
    category: "460-YIELD-STEEL-PLATE",
    items: [
      "EN 10028:3 P460NL1",
      "EN 10028:3 P460NL2",
      "EN 10028:3 P460NH",
      "EN 10025:3 S460N",
      "EN 10025:3 S460NL",
    ],
  },
  { category: "ARMOUR-PLATE", items: [] },
  {
    category: "CHROME-MOLY-PLATE",
    items: [
      "ASME SA387 AND ASTM A387",
      "SA387 / A387 Gr 11",
      "SA387 / A387 Gr 12",
      "SA387 / A387 Gr 22",
      "EN 10028-2",
    ],
  },
  { category: "OFFSHORE-&-STRUCTURA-STEEL-PLATE", items: [] },
  {
    category: "HIC-STEEL-PLATE",
    items: ["CARELSO HIC PREMIUM+", "ASME SA516 HIC AND ASTM A516 HIC"],
  },
  { category: "WEATHER-RESISTANT-STEEL-PLATE", items: [] },
];

const allProducts = [];
products.forEach((cat) => {
  if (cat.items.length === 0) {
    allProducts.push({
      category: cat.category,
      item: cat.category,
      isCategory: true,
    });
  } else {
    cat.items.forEach((item) => {
      allProducts.push({ category: cat.category, item, isCategory: false });
    });
  }
});

// Generate imports
let imports = "";
let routes = "";

allProducts.forEach((product, index) => {
  const componentName = toComponentName(product.item);
  const slug = toSlug(product.item);
  const categoryFolder = toComponentName(product.category);

  imports += `import ${componentName} from '../pages/${categoryFolder}/${componentName}';\n`;

  routes += `      {
        path: '/products/${slug}',
        element: <${componentName}/>,
      },\n`;
});

// Generate complete Routes.jsx content
const routesContent = `import { createBrowserRouter } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import NotFoundPage from '../pages/NotFoundPage';
import MainLayout from '../layout/MainLayout';
${imports}
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
${routes}    ],
  },
]);
`;

// Write the new Routes.jsx file
const routesPath = path.join(__dirname, "src", "routes", "Routes.jsx");
fs.writeFileSync(routesPath, routesContent);

console.log("✓ Routes.jsx has been updated successfully");
console.log(`✓ Added ${allProducts.length} product routes`);
