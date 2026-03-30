# LinksBox Component Replacements - Complete Guide

## How to Use This Document

Each section shows exact string replacements needed for category pages. For each file:

1. Find the `OLD_IMPORT` section and replace it with `NEW_IMPORT`
2. Find the `OLD_JSX` section and replace it with `NEW_JSX`

---

## CATEGORY: FlatsProducts (7 remaining pages after BulbBars)

### FILE: ColdRolledSheetCoil.jsx

PATH: `e:\project2\Jakir-Vai\ikt2\ikt2\src\pages\FlatsProducts\ColdRolledSheetCoil.jsx`
LINKSBOX: `FlatsProductsLinksBox`

**OLD_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/FlatsProducts/ColdRolledSheetCoil/InfoSection";
import Applications from "../../components/products/FlatsProducts/ColdRolledSheetCoil/Applications";
import RequestBrochure from "../../components/products/FlatsProducts/ColdRolledSheetCoil/RequestBrochure";
import GetInTouch from "../../components/products/FlatsProducts/ColdRolledSheetCoil/GetInTouch";
import Banner from "../../components/products/FlatsProducts/ColdRolledSheetCoil/Banner";
```

**NEW_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/FlatsProducts/ColdRolledSheetCoil/InfoSection";
import Applications from "../../components/products/FlatsProducts/ColdRolledSheetCoil/Applications";
import RequestBrochure from "../../components/products/FlatsProducts/ColdRolledSheetCoil/RequestBrochure";
import GetInTouch from "../../components/products/FlatsProducts/ColdRolledSheetCoil/GetInTouch";
import Banner from "../../components/products/FlatsProducts/ColdRolledSheetCoil/Banner";
import FlatsProductsLinksBox from "../../components/products/FlatsProducts/FlatsProductsLinksBox";
```

**OLD_JSX:**

```javascript
const ColdRolledSheetCoil = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <RequestBrochure />
      <GetInTouch />
    </div>
  );
};
```

**NEW_JSX:**

```javascript
const ColdRolledSheetCoil = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <RequestBrochure />
      <FlatsProductsLinksBox />
      <GetInTouch />
    </div>
  );
};
```

---

### FILE: GalvanizedPlainSheetsCoil.jsx

PATH: `e:\project2\Jakir-Vai\ikt2\ikt2\src\pages\FlatsProducts\GalvanizedPlainSheetsCoil.jsx`
LINKSBOX: `FlatsProductsLinksBox`

**OLD_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/FlatsProducts/GalvanizedPlainSheetsCoil/InfoSection";
import Applications from "../../components/products/FlatsProducts/GalvanizedPlainSheetsCoil/Applications";
import RequestBrochure from "../../components/products/FlatsProducts/GalvanizedPlainSheetsCoil/RequestBrochure";
import GetInTouch from "../../components/products/FlatsProducts/GalvanizedPlainSheetsCoil/GetInTouch";
import Banner from "../../components/products/FlatsProducts/GalvanizedPlainSheetsCoil/Banner";
```

**NEW_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/FlatsProducts/GalvanizedPlainSheetsCoil/InfoSection";
import Applications from "../../components/products/FlatsProducts/GalvanizedPlainSheetsCoil/Applications";
import RequestBrochure from "../../components/products/FlatsProducts/GalvanizedPlainSheetsCoil/RequestBrochure";
import GetInTouch from "../../components/products/FlatsProducts/GalvanizedPlainSheetsCoil/GetInTouch";
import Banner from "../../components/products/FlatsProducts/GalvanizedPlainSheetsCoil/Banner";
import FlatsProductsLinksBox from "../../components/products/FlatsProducts/FlatsProductsLinksBox";
```

**OLD_JSX:**

```javascript
const GalvanizedPlainSheetsCoil = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <RequestBrochure />
      <GetInTouch />
    </div>
  );
};
```

**NEW_JSX:**

```javascript
const GalvanizedPlainSheetsCoil = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <RequestBrochure />
      <FlatsProductsLinksBox />
      <GetInTouch />
    </div>
  );
};
```

---

### FILE: HotRolledPlates.jsx

PATH: `e:\project2\Jakir-Vai\ikt2\ikt2\src\pages\FlatsProducts\HotRolledPlates.jsx`
LINKSBOX: `FlatsProductsLinksBox`

**OLD_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/FlatsProducts/HotRolledPlates/InfoSection";
import Applications from "../../components/products/FlatsProducts/HotRolledPlates/Applications";
import RequestBrochure from "../../components/products/FlatsProducts/HotRolledPlates/RequestBrochure";
import GetInTouch from "../../components/products/FlatsProducts/HotRolledPlates/GetInTouch";
import Banner from "../../components/products/FlatsProducts/HotRolledPlates/Banner";
```

**NEW_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/FlatsProducts/HotRolledPlates/InfoSection";
import Applications from "../../components/products/FlatsProducts/HotRolledPlates/Applications";
import RequestBrochure from "../../components/products/FlatsProducts/HotRolledPlates/RequestBrochure";
import GetInTouch from "../../components/products/FlatsProducts/HotRolledPlates/GetInTouch";
import Banner from "../../components/products/FlatsProducts/HotRolledPlates/Banner";
import FlatsProductsLinksBox from "../../components/products/FlatsProducts/FlatsProductsLinksBox";
```

**OLD_JSX:**

```javascript
const HotRolledPlates = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <RequestBrochure />
      <GetInTouch />
    </div>
  );
};
```

**NEW_JSX:**

```javascript
const HotRolledPlates = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <RequestBrochure />
      <FlatsProductsLinksBox />
      <GetInTouch />
    </div>
  );
};
```

---

### FILE: HotRolledSheetCoils.jsx

PATH: `e:\project2\Jakir-Vai\ikt2\ikt2\src\pages\FlatsProducts\HotRolledSheetCoils.jsx`
LINKSBOX: `FlatsProductsLinksBox`

**OLD_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/FlatsProducts/HotRolledSheetCoils/InfoSection";
import Applications from "../../components/products/FlatsProducts/HotRolledSheetCoils/Applications";
import RequestBrochure from "../../components/products/FlatsProducts/HotRolledSheetCoils/RequestBrochure";
import GetInTouch from "../../components/products/FlatsProducts/HotRolledSheetCoils/GetInTouch";
import Banner from "../../components/products/FlatsProducts/HotRolledSheetCoils/Banner";
```

**NEW_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/FlatsProducts/HotRolledSheetCoils/InfoSection";
import Applications from "../../components/products/FlatsProducts/HotRolledSheetCoils/Applications";
import RequestBrochure from "../../components/products/FlatsProducts/HotRolledSheetCoils/RequestBrochure";
import GetInTouch from "../../components/products/FlatsProducts/HotRolledSheetCoils/GetInTouch";
import Banner from "../../components/products/FlatsProducts/HotRolledSheetCoils/Banner";
import FlatsProductsLinksBox from "../../components/products/FlatsProducts/FlatsProductsLinksBox";
```

**OLD_JSX:**

```javascript
const HotRolledSheetCoils = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <RequestBrochure />
      <GetInTouch />
    </div>
  );
};
```

**NEW_JSX:**

```javascript
const HotRolledSheetCoils = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <RequestBrochure />
      <FlatsProductsLinksBox />
      <GetInTouch />
    </div>
  );
};
```

---

### FILE: MildSteelChequerredSteel.jsx

PATH: `e:\project2\Jakir-Vai\ikt2\ikt2\src\pages\FlatsProducts\MildSteelChequerredSteel.jsx`
LINKSBOX: `FlatsProductsLinksBox`

**OLD_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/FlatsProducts/MildSteelChequerredSteel/InfoSection";
import Applications from "../../components/products/FlatsProducts/MildSteelChequerredSteel/Applications";
import RequestBrochure from "../../components/products/FlatsProducts/MildSteelChequerredSteel/RequestBrochure";
import GetInTouch from "../../components/products/FlatsProducts/MildSteelChequerredSteel/GetInTouch";
import Banner from "../../components/products/FlatsProducts/MildSteelChequerredSteel/Banner";
```

**NEW_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/FlatsProducts/MildSteelChequerredSteel/InfoSection";
import Applications from "../../components/products/FlatsProducts/MildSteelChequerredSteel/Applications";
import RequestBrochure from "../../components/products/FlatsProducts/MildSteelChequerredSteel/RequestBrochure";
import GetInTouch from "../../components/products/FlatsProducts/MildSteelChequerredSteel/GetInTouch";
import Banner from "../../components/products/FlatsProducts/MildSteelChequerredSteel/Banner";
import FlatsProductsLinksBox from "../../components/products/FlatsProducts/FlatsProductsLinksBox";
```

**OLD_JSX:**

```javascript
const MildSteelChequerredSteel = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <RequestBrochure />
      <GetInTouch />
    </div>
  );
};
```

**NEW_JSX:**

```javascript
const MildSteelChequerredSteel = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <RequestBrochure />
      <FlatsProductsLinksBox />
      <GetInTouch />
    </div>
  );
};
```

---

### FILE: MildSteelGratings.jsx

PATH: `e:\project2\Jakir-Vai\ikt2\ikt2\src\pages\FlatsProducts\MildSteelGratings.jsx`
LINKSBOX: `FlatsProductsLinksBox`

**OLD_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/FlatsProducts/MildSteelGratings/InfoSection";
import Applications from "../../components/products/FlatsProducts/MildSteelGratings/Applications";
import RequestBrochure from "../../components/products/FlatsProducts/MildSteelGratings/RequestBrochure";
import GetInTouch from "../../components/products/FlatsProducts/MildSteelGratings/GetInTouch";
import Banner from "../../components/products/FlatsProducts/MildSteelGratings/Banner";
```

**NEW_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/FlatsProducts/MildSteelGratings/InfoSection";
import Applications from "../../components/products/FlatsProducts/MildSteelGratings/Applications";
import RequestBrochure from "../../components/products/FlatsProducts/MildSteelGratings/RequestBrochure";
import GetInTouch from "../../components/products/FlatsProducts/MildSteelGratings/GetInTouch";
import Banner from "../../components/products/FlatsProducts/MildSteelGratings/Banner";
import FlatsProductsLinksBox from "../../components/products/FlatsProducts/FlatsProductsLinksBox";
```

**OLD_JSX:**

```javascript
const MildSteelGratings = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <RequestBrochure />
      <GetInTouch />
    </div>
  );
};
```

**NEW_JSX:**

```javascript
const MildSteelGratings = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <RequestBrochure />
      <FlatsProductsLinksBox />
      <GetInTouch />
    </div>
  );
};
```

---

### FILE: ShipbuildingGrades.jsx

PATH: `e:\project2\Jakir-Vai\ikt2\ikt2\src\pages\FlatsProducts\ShipbuildingGrades.jsx`
LINKSBOX: `FlatsProductsLinksBox`

**OLD_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/FlatsProducts/ShipbuildingGrades/InfoSection";
import Applications from "../../components/products/FlatsProducts/ShipbuildingGrades/Applications";
import RequestBrochure from "../../components/products/FlatsProducts/ShipbuildingGrades/RequestBrochure";
import GetInTouch from "../../components/products/FlatsProducts/ShipbuildingGrades/GetInTouch";
import Banner from "../../components/products/FlatsProducts/ShipbuildingGrades/Banner";
```

**NEW_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/FlatsProducts/ShipbuildingGrades/InfoSection";
import Applications from "../../components/products/FlatsProducts/ShipbuildingGrades/Applications";
import RequestBrochure from "../../components/products/FlatsProducts/ShipbuildingGrades/RequestBrochure";
import GetInTouch from "../../components/products/FlatsProducts/ShipbuildingGrades/GetInTouch";
import Banner from "../../components/products/FlatsProducts/ShipbuildingGrades/Banner";
import FlatsProductsLinksBox from "../../components/products/FlatsProducts/FlatsProductsLinksBox";
```

**OLD_JSX:**

```javascript
const ShipbuildingGrades = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <RequestBrochure />
      <GetInTouch />
    </div>
  );
};
```

**NEW_JSX:**

```javascript
const ShipbuildingGrades = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <RequestBrochure />
      <FlatsProductsLinksBox />
      <GetInTouch />
    </div>
  );
};
```

---

## CATEGORY: LongProducts (All 6 pages)

### FILE: AmericanWideFlangeBeam.jsx

PATH: `e:\project2\Jakir-Vai\ikt2\ikt2\src\pages\LongProducts\AmericanWideFlangeBeam.jsx`
LINKSBOX: `LongProductsLinksBox`

**OLD_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/LongProducts/AmericanWideFlangeBeam/InfoSection";
import Applications from "../../components/products/LongProducts/AmericanWideFlangeBeam/Applications";
import RequestBrochure from "../../components/products/LongProducts/AmericanWideFlangeBeam/RequestBrochure";
import GetInTouch from "../../components/products/LongProducts/AmericanWideFlangeBeam/GetInTouch";
import Banner from "../../components/products/LongProducts/AmericanWideFlangeBeam/Banner";
```

**NEW_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/LongProducts/AmericanWideFlangeBeam/InfoSection";
import Applications from "../../components/products/LongProducts/AmericanWideFlangeBeam/Applications";
import RequestBrochure from "../../components/products/LongProducts/AmericanWideFlangeBeam/RequestBrochure";
import GetInTouch from "../../components/products/LongProducts/AmericanWideFlangeBeam/GetInTouch";
import Banner from "../../components/products/LongProducts/AmericanWideFlangeBeam/Banner";
import LongProductsLinksBox from "../../components/products/LongProducts/LongProductsLinksBox";
```

**OLD_JSX:**

```javascript
const AmericanWideFlangeBeam = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <RequestBrochure />
      <GetInTouch />
    </div>
  );
};
```

**NEW_JSX:**

```javascript
const AmericanWideFlangeBeam = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <RequestBrochure />
      <LongProductsLinksBox />
      <GetInTouch />
    </div>
  );
};
```

---

### FILE: BritishEuropeanAndJapaneseChannels.jsx

PATH: `e:\project2\Jakir-Vai\ikt2\ikt2\src\pages\LongProducts\BritishEuropeanAndJapaneseChannels.jsx`
LINKSBOX: `LongProductsLinksBox`

**OLD_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/LongProducts/BritishEuropeanAndJapaneseChannels/InfoSection";
import Applications from "../../components/products/LongProducts/BritishEuropeanAndJapaneseChannels/Applications";
import RequestBrochure from "../../components/products/LongProducts/BritishEuropeanAndJapaneseChannels/RequestBrochure";
import GetInTouch from "../../components/products/LongProducts/BritishEuropeanAndJapaneseChannels/GetInTouch";
import Banner from "../../components/products/LongProducts/BritishEuropeanAndJapaneseChannels/Banner";
```

**NEW_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/LongProducts/BritishEuropeanAndJapaneseChannels/InfoSection";
import Applications from "../../components/products/LongProducts/BritishEuropeanAndJapaneseChannels/Applications";
import RequestBrochure from "../../components/products/LongProducts/BritishEuropeanAndJapaneseChannels/RequestBrochure";
import GetInTouch from "../../components/products/LongProducts/BritishEuropeanAndJapaneseChannels/GetInTouch";
import Banner from "../../components/products/LongProducts/BritishEuropeanAndJapaneseChannels/Banner";
import LongProductsLinksBox from "../../components/products/LongProducts/LongProductsLinksBox";
```

**OLD_JSX:**

```javascript
const BritishEuropeanAndJapaneseChannels = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <RequestBrochure />
      <GetInTouch />
    </div>
  );
};
```

**NEW_JSX:**

```javascript
const BritishEuropeanAndJapaneseChannels = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <RequestBrochure />
      <LongProductsLinksBox />
      <GetInTouch />
    </div>
  );
};
```

---

### FILE: EqualUnequalAndTAngle.jsx

PATH: `e:\project2\Jakir-Vai\ikt2\ikt2\src\pages\LongProducts\EqualUnequalAndTAngle.jsx`
LINKSBOX: `LongProductsLinksBox`

**OLD_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/LongProducts/EqualUnequalAndTAngle/InfoSection";
import Applications from "../../components/products/LongProducts/EqualUnequalAndTAngle/Applications";
import RequestBrochure from "../../components/products/LongProducts/EqualUnequalAndTAngle/RequestBrochure";
import GetInTouch from "../../components/products/LongProducts/EqualUnequalAndTAngle/GetInTouch";
import Banner from "../../components/products/LongProducts/EqualUnequalAndTAngle/Banner";
```

**NEW_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/LongProducts/EqualUnequalAndTAngle/InfoSection";
import Applications from "../../components/products/LongProducts/EqualUnequalAndTAngle/Applications";
import RequestBrochure from "../../components/products/LongProducts/EqualUnequalAndTAngle/RequestBrochure";
import GetInTouch from "../../components/products/LongProducts/EqualUnequalAndTAngle/GetInTouch";
import Banner from "../../components/products/LongProducts/EqualUnequalAndTAngle/Banner";
import LongProductsLinksBox from "../../components/products/LongProducts/LongProductsLinksBox";
```

**OLD_JSX:**

```javascript
const EqualUnequalAndTAngle = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <RequestBrochure />
      <GetInTouch />
    </div>
  );
};
```

**NEW_JSX:**

```javascript
const EqualUnequalAndTAngle = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <RequestBrochure />
      <LongProductsLinksBox />
      <GetInTouch />
    </div>
  );
};
```

---

### FILE: FlatSquareAndRoundBars.jsx

PATH: `e:\project2\Jakir-Vai\ikt2\ikt2\src\pages\LongProducts\FlatSquareAndRoundBars.jsx`
LINKSBOX: `LongProductsLinksBox`

**OLD_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/LongProducts/FlatSquareAndRoundBars/InfoSection";
import Applications from "../../components/products/LongProducts/FlatSquareAndRoundBars/Applications";
import RequestBrochure from "../../components/products/LongProducts/FlatSquareAndRoundBars/RequestBrochure";
import GetInTouch from "../../components/products/LongProducts/FlatSquareAndRoundBars/GetInTouch";
import Banner from "../../components/products/LongProducts/FlatSquareAndRoundBars/Banner";
```

**NEW_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/LongProducts/FlatSquareAndRoundBars/InfoSection";
import Applications from "../../components/products/LongProducts/FlatSquareAndRoundBars/Applications";
import RequestBrochure from "../../components/products/LongProducts/FlatSquareAndRoundBars/RequestBrochure";
import GetInTouch from "../../components/products/LongProducts/FlatSquareAndRoundBars/GetInTouch";
import Banner from "../../components/products/LongProducts/FlatSquareAndRoundBars/Banner";
import LongProductsLinksBox from "../../components/products/LongProducts/LongProductsLinksBox";
```

**OLD_JSX:**

```javascript
const FlatSquareAndRoundBars = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <RequestBrochure />
      <GetInTouch />
    </div>
  );
};
```

**NEW_JSX:**

```javascript
const FlatSquareAndRoundBars = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <RequestBrochure />
      <LongProductsLinksBox />
      <GetInTouch />
    </div>
  );
};
```

---

### FILE: HEAAndHEBIPEIPEAAIPNEuropeanIBeamHBeamJapaneseSection.jsx

PATH: `e:\project2\Jakir-Vai\ikt2\ikt2\src\pages\LongProducts\HEAAndHEBIPEIPEAAIPNEuropeanIBeamHBeamJapaneseSection.jsx`
LINKSBOX: `LongProductsLinksBox`

**OLD_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/LongProducts/HEAAndHEBIPEIPEAAIPNEuropeanIBeamHBeamJapaneseSection/InfoSection";
import Applications from "../../components/products/LongProducts/HEAAndHEBIPEIPEAAIPNEuropeanIBeamHBeamJapaneseSection/Applications";
import RequestBrochure from "../../components/products/LongProducts/HEAAndHEBIPEIPEAAIPNEuropeanIBeamHBeamJapaneseSection/RequestBrochure";
import GetInTouch from "../../components/products/LongProducts/HEAAndHEBIPEIPEAAIPNEuropeanIBeamHBeamJapaneseSection/GetInTouch";
import Banner from "../../components/products/LongProducts/HEAAndHEBIPEIPEAAIPNEuropeanIBeamHBeamJapaneseSection/Banner";
```

**NEW_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/LongProducts/HEAAndHEBIPEIPEAAIPNEuropeanIBeamHBeamJapaneseSection/InfoSection";
import Applications from "../../components/products/LongProducts/HEAAndHEBIPEIPEAAIPNEuropeanIBeamHBeamJapaneseSection/Applications";
import RequestBrochure from "../../components/products/LongProducts/HEAAndHEBIPEIPEAAIPNEuropeanIBeamHBeamJapaneseSection/RequestBrochure";
import GetInTouch from "../../components/products/LongProducts/HEAAndHEBIPEIPEAAIPNEuropeanIBeamHBeamJapaneseSection/GetInTouch";
import Banner from "../../components/products/LongProducts/HEAAndHEBIPEIPEAAIPNEuropeanIBeamHBeamJapaneseSection/Banner";
import LongProductsLinksBox from "../../components/products/LongProducts/LongProductsLinksBox";
```

**OLD_JSX:**

```javascript
const HEAAndHEBIPEIPEAAIPNEuropeanIBeamHBeamJapaneseSection = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <RequestBrochure />
      <GetInTouch />
    </div>
  );
};
```

**NEW_JSX:**

```javascript
const HEAAndHEBIPEIPEAAIPNEuropeanIBeamHBeamJapaneseSection = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <RequestBrochure />
      <LongProductsLinksBox />
      <GetInTouch />
    </div>
  );
};
```

---

### FILE: UniversalBeams.jsx

PATH: `e:\project2\Jakir-Vai\ikt2\ikt2\src\pages\LongProducts\UniversalBeams.jsx`
LINKSBOX: `LongProductsLinksBox`

**OLD_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/LongProducts/UniversalBeams/InfoSection";
import Applications from "../../components/products/LongProducts/UniversalBeams/Applications";
import RequestBrochure from "../../components/products/LongProducts/UniversalBeams/RequestBrochure";
import GetInTouch from "../../components/products/LongProducts/UniversalBeams/GetInTouch";
import Banner from "../../components/products/LongProducts/UniversalBeams/Banner";
```

**NEW_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/LongProducts/UniversalBeams/InfoSection";
import Applications from "../../components/products/LongProducts/UniversalBeams/Applications";
import RequestBrochure from "../../components/products/LongProducts/UniversalBeams/RequestBrochure";
import GetInTouch from "../../components/products/LongProducts/UniversalBeams/GetInTouch";
import Banner from "../../components/products/LongProducts/UniversalBeams/Banner";
import LongProductsLinksBox from "../../components/products/LongProducts/LongProductsLinksBox";
```

**OLD_JSX:**

```javascript
const UniversalBeams = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <RequestBrochure />
      <GetInTouch />
    </div>
  );
};
```

**NEW_JSX:**

```javascript
const UniversalBeams = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <RequestBrochure />
      <LongProductsLinksBox />
      <GetInTouch />
    </div>
  );
};
```

---

## CATEGORY: TubeTubularsProducts (All 3 pages)

### FILE: CircularHollowSections.jsx

PATH: `e:\project2\Jakir-Vai\ikt2\ikt2\src\pages\TubeTubularsProducts\CircularHollowSections.jsx`
LINKSBOX: `TubeAndTubularsProductsLinksBox`

**OLD_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/TubeTubularsProducts/CircularHollowSections/InfoSection";
import Applications from "../../components/products/TubeTubularsProducts/CircularHollowSections/Applications";
import RequestBrochure from "../../components/products/TubeTubularsProducts/CircularHollowSections/RequestBrochure";
import GetInTouch from "../../components/products/TubeTubularsProducts/CircularHollowSections/GetInTouch";
import Banner from "../../components/products/TubeTubularsProducts/CircularHollowSections/Banner";
```

**NEW_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/TubeTubularsProducts/CircularHollowSections/InfoSection";
import Applications from "../../components/products/TubeTubularsProducts/CircularHollowSections/Applications";
import RequestBrochure from "../../components/products/TubeTubularsProducts/CircularHollowSections/RequestBrochure";
import GetInTouch from "../../components/products/TubeTubularsProducts/CircularHollowSections/GetInTouch";
import Banner from "../../components/products/TubeTubularsProducts/CircularHollowSections/Banner";
import TubeAndTubularsProductsLinksBox from "../../components/products/TubeTubularsProducts/TubeAndTubularsProductsLinksBox";
```

**OLD_JSX:**

```javascript
const CircularHollowSections = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <RequestBrochure />
      <GetInTouch />
    </div>
  );
};
```

**NEW_JSX:**

```javascript
const CircularHollowSections = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <RequestBrochure />
      <TubeAndTubularsProductsLinksBox />
      <GetInTouch />
    </div>
  );
};
```

---

### FILE: RectangularHollowSections.jsx

PATH: `e:\project2\Jakir-Vai\ikt2\ikt2\src\pages\TubeTubularsProducts\RectangularHollowSections.jsx`
LINKSBOX: `TubeAndTubularsProductsLinksBox`

**OLD_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/TubeTubularsProducts/RectangularHollowSections/InfoSection";
import Applications from "../../components/products/TubeTubularsProducts/RectangularHollowSections/Applications";
import RequestBrochure from "../../components/products/TubeTubularsProducts/RectangularHollowSections/RequestBrochure";
import GetInTouch from "../../components/products/TubeTubularsProducts/RectangularHollowSections/GetInTouch";
import Banner from "../../components/products/TubeTubularsProducts/RectangularHollowSections/Banner";
```

**NEW_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/TubeTubularsProducts/RectangularHollowSections/InfoSection";
import Applications from "../../components/products/TubeTubularsProducts/RectangularHollowSections/Applications";
import RequestBrochure from "../../components/products/TubeTubularsProducts/RectangularHollowSections/RequestBrochure";
import GetInTouch from "../../components/products/TubeTubularsProducts/RectangularHollowSections/GetInTouch";
import Banner from "../../components/products/TubeTubularsProducts/RectangularHollowSections/Banner";
import TubeAndTubularsProductsLinksBox from "../../components/products/TubeTubularsProducts/TubeAndTubularsProductsLinksBox";
```

**OLD_JSX:**

```javascript
const RectangularHollowSections = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <RequestBrochure />
      <GetInTouch />
    </div>
  );
};
```

**NEW_JSX:**

```javascript
const RectangularHollowSections = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <RequestBrochure />
      <TubeAndTubularsProductsLinksBox />
      <GetInTouch />
    </div>
  );
};
```

---

### FILE: SquareHollowSections.jsx

PATH: `e:\project2\Jakir-Vai\ikt2\ikt2\src\pages\TubeTubularsProducts\SquareHollowSections.jsx`
LINKSBOX: `TubeAndTubularsProductsLinksBox`

**OLD_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/TubeTubularsProducts/SquareHollowSections/InfoSection";
import Applications from "../../components/products/TubeTubularsProducts/SquareHollowSections/Applications";
import RequestBrochure from "../../components/products/TubeTubularsProducts/SquareHollowSections/RequestBrochure";
import GetInTouch from "../../components/products/TubeTubularsProducts/SquareHollowSections/GetInTouch";
import Banner from "../../components/products/TubeTubularsProducts/SquareHollowSections/Banner";
```

**NEW_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/TubeTubularsProducts/SquareHollowSections/InfoSection";
import Applications from "../../components/products/TubeTubularsProducts/SquareHollowSections/Applications";
import RequestBrochure from "../../components/products/TubeTubularsProducts/SquareHollowSections/RequestBrochure";
import GetInTouch from "../../components/products/TubeTubularsProducts/SquareHollowSections/GetInTouch";
import Banner from "../../components/products/TubeTubularsProducts/SquareHollowSections/Banner";
import TubeAndTubularsProductsLinksBox from "../../components/products/TubeTubularsProducts/TubeAndTubularsProductsLinksBox";
```

**OLD_JSX:**

```javascript
const SquareHollowSections = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <RequestBrochure />
      <GetInTouch />
    </div>
  );
};
```

**NEW_JSX:**

```javascript
const SquareHollowSections = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <RequestBrochure />
      <TubeAndTubularsProductsLinksBox />
      <GetInTouch />
    </div>
  );
};
```

---

## CATEGORY: StainlessSteelPlate (All 6 pages)

### FILE: 316316lStainlessSteel.jsx

PATH: `e:\project2\Jakir-Vai\ikt2\ikt2\src\pages\StainlessSteelPlate\316316lStainlessSteel.jsx`
LINKSBOX: `StainlessSteelLinksBox`

**OLD_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/StainlessSteelPlate/316316lStainlessSteel/InfoSection";
import Applications from "../../components/products/StainlessSteelPlate/316316lStainlessSteel/Applications";
import RequestBrochure from "../../components/products/StainlessSteelPlate/316316lStainlessSteel/RequestBrochure";
import GetInTouch from "../../components/products/StainlessSteelPlate/316316lStainlessSteel/GetInTouch";
import PropertiesTable from "../../components/products/StainlessSteelPlate/316316lStainlessSteel/PropertiesTable";
import Banner from "../../components/products/StainlessSteelPlate/316316lStainlessSteel/Banner";
```

**NEW_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/StainlessSteelPlate/316316lStainlessSteel/InfoSection";
import Applications from "../../components/products/StainlessSteelPlate/316316lStainlessSteel/Applications";
import RequestBrochure from "../../components/products/StainlessSteelPlate/316316lStainlessSteel/RequestBrochure";
import GetInTouch from "../../components/products/StainlessSteelPlate/316316lStainlessSteel/GetInTouch";
import PropertiesTable from "../../components/products/StainlessSteelPlate/316316lStainlessSteel/PropertiesTable";
import Banner from "../../components/products/StainlessSteelPlate/316316lStainlessSteel/Banner";
import StainlessSteelLinksBox from "../../components/products/StainlessSteelPlate/StainlessSteelLinksBox";
```

**OLD_JSX:**

```javascript
const StainlessSteel316316l = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <PropertiesTable />
      <RequestBrochure />
      <GetInTouch />
    </div>
  );
};
```

**NEW_JSX:**

```javascript
const StainlessSteel316316l = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <PropertiesTable />
      <RequestBrochure />
      <StainlessSteelLinksBox />
      <GetInTouch />
    </div>
  );
};
```

---

### FILE: 321321hStainlessSteel.jsx

PATH: `e:\project2\Jakir-Vai\ikt2\ikt2\src\pages\StainlessSteelPlate\321321hStainlessSteel.jsx`
LINKSBOX: `StainlessSteelLinksBox`

**OLD_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/StainlessSteelPlate/321321hStainlessSteel/InfoSection";
import Applications from "../../components/products/StainlessSteelPlate/321321hStainlessSteel/Applications";
import RequestBrochure from "../../components/products/StainlessSteelPlate/321321hStainlessSteel/RequestBrochure";
import GetInTouch from "../../components/products/StainlessSteelPlate/321321hStainlessSteel/GetInTouch";
import PropertiesTable from "../../components/products/StainlessSteelPlate/321321hStainlessSteel/PropertiesTable";
import Banner from "../../components/products/StainlessSteelPlate/321321hStainlessSteel/Banner";
```

**NEW_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/StainlessSteelPlate/321321hStainlessSteel/InfoSection";
import Applications from "../../components/products/StainlessSteelPlate/321321hStainlessSteel/Applications";
import RequestBrochure from "../../components/products/StainlessSteelPlate/321321hStainlessSteel/RequestBrochure";
import GetInTouch from "../../components/products/StainlessSteelPlate/321321hStainlessSteel/GetInTouch";
import PropertiesTable from "../../components/products/StainlessSteelPlate/321321hStainlessSteel/PropertiesTable";
import Banner from "../../components/products/StainlessSteelPlate/321321hStainlessSteel/Banner";
import StainlessSteelLinksBox from "../../components/products/StainlessSteelPlate/StainlessSteelLinksBox";
```

**OLD_JSX:**

```javascript
const 321321hStainlessSteel = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			<PropertiesTable />
			<RequestBrochure />
			<GetInTouch />
		</div>
	);
};
```

**NEW_JSX:**

```javascript
const 321321hStainlessSteel = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			<PropertiesTable />
			<RequestBrochure />
			<StainlessSteelLinksBox />
			<GetInTouch />
		</div>
	);
};
```

---

### FILE: Product316316lStainlessSteel.jsx

PATH: `e:\project2\Jakir-Vai\ikt2\ikt2\src\pages\StainlessSteelPlate\Product316316lStainlessSteel.jsx`
LINKSBOX: `StainlessSteelLinksBox`

**OLD_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/StainlessSteelPlate/Product316316lStainlessSteel/InfoSection";
import Applications from "../../components/products/StainlessSteelPlate/Product316316lStainlessSteel/Applications";
import RequestBrochure from "../../components/products/StainlessSteelPlate/Product316316lStainlessSteel/RequestBrochure";
import GetInTouch from "../../components/products/StainlessSteelPlate/Product316316lStainlessSteel/GetInTouch";
import PropertiesTable from "../../components/products/StainlessSteelPlate/Product316316lStainlessSteel/PropertiesTable";
import Banner from "../../components/products/StainlessSteelPlate/Product316316lStainlessSteel/Banner";
```

**NEW_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/StainlessSteelPlate/Product316316lStainlessSteel/InfoSection";
import Applications from "../../components/products/StainlessSteelPlate/Product316316lStainlessSteel/Applications";
import RequestBrochure from "../../components/products/StainlessSteelPlate/Product316316lStainlessSteel/RequestBrochure";
import GetInTouch from "../../components/products/StainlessSteelPlate/Product316316lStainlessSteel/GetInTouch";
import PropertiesTable from "../../components/products/StainlessSteelPlate/Product316316lStainlessSteel/PropertiesTable";
import Banner from "../../components/products/StainlessSteelPlate/Product316316lStainlessSteel/Banner";
import StainlessSteelLinksBox from "../../components/products/StainlessSteelPlate/StainlessSteelLinksBox";
```

**OLD_JSX:**

```javascript
const Product316316lStainlessSteel = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <PropertiesTable />
      <RequestBrochure />
      <GetInTouch />
    </div>
  );
};
```

**NEW_JSX:**

```javascript
const Product316316lStainlessSteel = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <PropertiesTable />
      <RequestBrochure />
      <StainlessSteelLinksBox />
      <GetInTouch />
    </div>
  );
};
```

---

### FILE: Product321321hStainlessSteel.jsx

PATH: `e:\project2\Jakir-Vai\ikt2\ikt2\src\pages\StainlessSteelPlate\Product321321hStainlessSteel.jsx`
LINKSBOX: `StainlessSteelLinksBox`

**OLD_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/StainlessSteelPlate/Product321321hStainlessSteel/InfoSection";
import Applications from "../../components/products/StainlessSteelPlate/Product321321hStainlessSteel/Applications";
import RequestBrochure from "../../components/products/StainlessSteelPlate/Product321321hStainlessSteel/RequestBrochure";
import GetInTouch from "../../components/products/StainlessSteelPlate/Product321321hStainlessSteel/GetInTouch";
import PropertiesTable from "../../components/products/StainlessSteelPlate/Product321321hStainlessSteel/PropertiesTable";
import Banner from "../../components/products/StainlessSteelPlate/Product321321hStainlessSteel/Banner";
```

**NEW_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/StainlessSteelPlate/Product321321hStainlessSteel/InfoSection";
import Applications from "../../components/products/StainlessSteelPlate/Product321321hStainlessSteel/Applications";
import RequestBrochure from "../../components/products/StainlessSteelPlate/Product321321hStainlessSteel/RequestBrochure";
import GetInTouch from "../../components/products/StainlessSteelPlate/Product321321hStainlessSteel/GetInTouch";
import PropertiesTable from "../../components/products/StainlessSteelPlate/Product321321hStainlessSteel/PropertiesTable";
import Banner from "../../components/products/StainlessSteelPlate/Product321321hStainlessSteel/Banner";
import StainlessSteelLinksBox from "../../components/products/StainlessSteelPlate/StainlessSteelLinksBox";
```

**OLD_JSX:**

```javascript
const Product321321hStainlessSteel = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <PropertiesTable />
      <RequestBrochure />
      <GetInTouch />
    </div>
  );
};
```

**NEW_JSX:**

```javascript
const Product321321hStainlessSteel = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <PropertiesTable />
      <RequestBrochure />
      <StainlessSteelLinksBox />
      <GetInTouch />
    </div>
  );
};
```

---

### FILE: StainlessSteel304H.jsx

PATH: `e:\project2\Jakir-Vai\ikt2\ikt2\src\pages\StainlessSteelPlate\StainlessSteel304H.jsx`
LINKSBOX: `StainlessSteelLinksBox`

**OLD_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/Stainless-Steel-Plate/StainlessSteel304H/InfoSection";
import Applications from "../../components/products/Stainless-Steel-Plate/StainlessSteel304H/Applications";
import RequestBrochure from "../../components/products/Stainless-Steel-Plate/StainlessSteel304H/RequestBrochure";
import GetInTouch from "../../components/products/Stainless-Steel-Plate/StainlessSteel304H/GetInTouch";
import PropertiesTable from "../../components/products/Stainless-Steel-Plate/StainlessSteel304H/PropertiesTable";
import Banner from "../../components/products/Stainless-Steel-Plate/StainlessSteel304H/Banner";
```

**NEW_IMPORT:**

```javascript
import React from "react";

import InfoSection from "../../components/products/Stainless-Steel-Plate/StainlessSteel304H/InfoSection";
import Applications from "../../components/products/Stainless-Steel-Plate/StainlessSteel304H/Applications";
import RequestBrochure from "../../components/products/Stainless-Steel-Plate/StainlessSteel304H/RequestBrochure";
import GetInTouch from "../../components/products/Stainless-Steel-Plate/StainlessSteel304H/GetInTouch";
import PropertiesTable from "../../components/products/Stainless-Steel-Plate/StainlessSteel304H/PropertiesTable";
import Banner from "../../components/products/Stainless-Steel-Plate/StainlessSteel304H/Banner";
import StainlessSteelLinksBox from "../../components/products/StainlessSteelPlate/StainlessSteelLinksBox";
```

**OLD_JSX:**

```javascript
const StainlessSteel304H = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <PropertiesTable />
      <RequestBrochure />
      <GetInTouch />
    </div>
  );
};
```

**NEW_JSX:**

```javascript
const StainlessSteel304H = () => {
  return (
    <div>
      <Banner />
      <InfoSection />
      <Applications />
      <PropertiesTable />
      <RequestBrochure />
      <StainlessSteelLinksBox />
      <GetInTouch />
    </div>
  );
};
```

---

### FILE: StainlessSteel304_304L.jsx

PATH: `e:\project2\Jakir-Vai\ikt2\ikt2\src\pages\StainlessSteelPlate\StainlessSteel304_304L.jsx`
LINKSBOX: `StainlessSteelLinksBox`

**OLD_IMPORT:**

```javascript
import React from "react";

import { InfoSection } from "../../components/products/Stainless-Steel-Plate/StainlessSteel304_304L/InfoSection";
import Applications from "../../components/products/Stainless-Steel-Plate/StainlessSteel304_304L/Applications";
import RequestBrochure from "../../components/products/Stainless-Steel-Plate/StainlessSteel304_304L/RequestBrochure";
import GetInTouch from "../../components/products/Stainless-Steel-Plate/StainlessSteel304_304L/GetInTouch";
import PropertiesTable from "../../components/products/Stainless-Steel-Plate/StainlessSteel304_304L/PropertiesTable";
import Banner from "../../components/products/Stainless-Steel-Plate/StainlessSteel304_304L/Banner";
```

**NEW_IMPORT:**

```javascript
import React from "react";

import { InfoSection } from "../../components/products/Stainless-Steel-Plate/StainlessSteel304_304L/InfoSection";
import Applications from "../../components/products/Stainless-Steel-Plate/StainlessSteel304_304L/Applications";
import RequestBrochure from "../../components/products/Stainless-Steel-Plate/StainlessSteel304_304L/RequestBrochure";
import GetInTouch from "../../components/products/Stainless-Steel-Plate/StainlessSteel304_304L/GetInTouch";
import PropertiesTable from "../../components/products/Stainless-Steel-Plate/StainlessSteel304_304L/PropertiesTable";
import Banner from "../../components/products/Stainless-Steel-Plate/StainlessSteel304_304L/Banner";
import StainlessSteelLinksBox from "../../components/products/StainlessSteelPlate/StainlessSteelLinksBox";
```

**OLD_JSX:**

```javascript
const StainlessSteel304_304L = () => {
  return (
    <div>
      <Banner />

      <InfoSection />
      <Applications />
      <PropertiesTable />
      <RequestBrochure />
      <GetInTouch />
    </div>
  );
};
```

**NEW_JSX:**

```javascript
const StainlessSteel304_304L = () => {
  return (
    <div>
      <Banner />

      <InfoSection />
      <Applications />
      <PropertiesTable />
      <RequestBrochure />
      <StainlessSteelLinksBox />
      <GetInTouch />
    </div>
  );
};
```

---

## REMAINING CATEGORIES SUMMARY

Due to length constraints, here's a quick reference for the remaining categories. All follow the same pattern:

**PATTERN FOR REMAINING FILES:**

1. Add import line at the end of imports: `import [CategoryName]LinksBox from '../../components/products/[CategoryPath]/[CategoryName]LinksBox';`
2. Add component between last visible component and `<GetInTouch />`: `<[CategoryName]LinksBox />`

---

### LinePattern Categories (PropertiesTable but NO RequestBrochure):

- **BearingSteelAndGearSteel** (7 pages): all pages follow this pattern
- **ColdWorkToolSteel** (7 pages): all pages follow this pattern
- **HotWorkToolSteel** (3 pages): all pages follow this pattern
- **PlasticMouldSteel** (4 pages): all pages follow this pattern
- **QuenchedAndTemperedAlloySteels** (4 pages): all pages follow this pattern (except Steel4140Plate has RequestBrochure)
- **HighSpeedSteel** (4 pages): all pages follow this pattern
- **Materials** (12 pages): all pages follow this pattern

**Replacement for each:**

```javascript
import [Name]LinksBox from '../../components/products/[Category]/[Name]LinksBox';
```

And in JSX:

```javascript
<PropertiesTable />
<[Name]LinksBox />
<GetInTouch />
```

---

### RequestBrochure Categories:

- **PressureVesselSteel** (4 pages)
- **BoilerPlateSteel** (6 pages)
- **460YieldSteelPlate** (5 pages)
- **ChromeMolyPlate** (5 pages)
- **HicSteelPlate** (4 pages)
- **NonFerrousMetals** (4 pages)
- **FerrousMetals** (4 pages)
- **ToolSteel** (21 pages)

**Replacement for each:**

```javascript
import [Name]LinksBox from '../../components/products/[Category]/[Name]LinksBox';
```

And in JSX:

```javascript
<RequestBrochure />
<[Name]LinksBox />
<GetInTouch />
```

---

## LinksBox Component Names & Paths Reference

| Category                       | LinksBox Name                    | Component Path                                                                              |
| ------------------------------ | -------------------------------- | ------------------------------------------------------------------------------------------- |
| FlatsProducts                  | FlatsProductsLinksBox            | `../../components/products/FlatsProducts/FlatsProductsLinksBox`                             |
| LongProducts                   | LongProductsLinksBox             | `../../components/products/LongProducts/LongProductsLinksBox`                               |
| TubeTubularsProducts           | TubeAndTubularsProductsLinksBox  | `../../components/products/TubeTubularsProducts/TubeAndTubularsProductsLinksBox`            |
| StainlessSteelPlate            | StainlessSteelLinksBox           | `../../components/products/StainlessSteelPlate/StainlessSteelLinksBox`                      |
| PressureVesselSteel            | PressureVesselSteelLinksBox      | `../../components/products/PressureVesselSteel/PressureVesselSteelLinksBox`                 |
| BoilerPlateSteel               | BoilerPlateSteelLinksBox         | `../../components/products/BoilerPlateSteel/BoilerPlateSteelLinksBox`                       |
| 460YieldSteelPlate             | YieldSteelPlateLinksBox          | `../../components/products/460YieldSteelPlate/YieldSteelPlateLinksBox`                      |
| ChromeMolyPlate                | ChromeMolyPlateLinksBox          | `../../components/products/ChromeMolyPlate/ChromeMolyPlateLinksBox`                         |
| HicSteelPlate                  | HicSteelPlateLinksBox            | `../../components/products/HicSteelPlate/HicSteelPlateLinksBox`                             |
| NonFerrousMetals               | NonFerrousMetalsLinksBox         | `../../components/products/NonFerrousMetals/NonFerrousMetalsLinksBox`                       |
| FerrousMetals                  | FerrousMetalsLinksBox            | `../../components/products/FerrousMetals/FerrousMetalsLinksBox`                             |
| HotWorkToolSteel               | HotWorkToolSteelLinksBox         | `../../components/products/HotWorkToolSteel/HotWorkToolSteelLinksBox`                       |
| ColdWorkToolSteel              | ColdWorkToolSteelLinksBox        | `../../components/products/ColdWorkToolSteel/ColdWorkToolSteelLinksBox`                     |
| PlasticMouldSteel              | PlasticMouldSteelLinksBox        | `../../components/products/PlasticMouldSteel/PlasticMouldSteelLinksBox`                     |
| QuenchedAndTemperedAlloySteels | QuenchedAndTemperedAlloyLinksBox | `../../components/products/QuenchedAndTemperedAlloySteels/QuenchedAndTemperedAlloyLinksBox` |
| BearingSteelAndGearSteel       | BearingSteelLinksBox             | `../../components/products/BearingSteelAndGearSteel/BearingSteelLinksBox`                   |
| HighSpeedSteel                 | HighSpeedSteelLinksBox           | `../../components/products/HighSpeedSteel/HighSpeedSteelLinksBox`                           |
| Materials (SpecialAlloys)      | SpecialAlloysLinksBox            | `../../components/products/Materials/SpecialAlloysLinksBox`                                 |
| ToolSteel                      | ToolSteelLinksBox                | `../../components/products/ToolSteel/ToolSteelLinksBox`                                     |

---

**End of Document**

Use this file as your reference guide for all replacements. Each section provides exact strings to find and replace.
