# Discount Montreal

A mobile grocery savings interface for Montreal residents, built as part of the SOEN 357 (User Interface Design) course at Concordia University, Winter 2026.

## Project Overview

Finding grocery discounts in Montreal currently requires users to open multiple store applications, browse through separate flyers, and compare prices manually across different sources. This fragmented experience imposes unnecessary cognitive load and makes it difficult for budget-conscious shoppers to identify the best available deals near them.

Discount Montreal proposes a different approach: users search by item, and the app immediately returns all nearby stores ranked by price. No flyer browsing, no switching between applications, and no manual price tracking.

**Core features:**
- Item-first search with autocomplete (e.g., "milk", "eggs", "chicken breast")
- Results sorted by lowest price or nearest store
- Side-by-side comparison of the top three deals
- Category browsing across six sections: Dairy, Produce, Meat, Pantry, Frozen, Household
- Store detail view showing all active discounts at a given location
- Neighbourhood location chip (simulated for prototype)

## Team

| Name | Student ID |
|------|-----------|
| Mohammad Alhaji | 40264810 |
| Ming Pan | 40031821 |
| Adam Mohammed Dahmane | 40251506 |
| Nkrumah Leugoue Nougoue | 40258711 |

**Course:** SOEN 357 — User Interface Design  
**Professor:** Dr. Hakim Mellah  
**Institution:** Concordia University, Montreal  

## Technology Stack

- React 18
- Vite (development server and build tool)
- Plain CSS (no external UI library)
- Static mock data — all grocery pricing is defined in `src/data/groceries.js`

## How to Run

Node.js version 16 or higher is required. Download it from https://nodejs.org if not already installed.

**Step 1 — Clone the repository**
```bash
git clone https://github.com/maxime-pan/discount-montreal.git
cd discount-montreal
```

**Step 2 — Install dependencies**
```bash
npm install
```

**Step 3 — Start the development server**
```bash
npm run dev
```

Open a browser and navigate to `http://localhost:5173`. The application is designed for a mobile form factor and looks best in a narrow browser window (approximately 400px wide). It is functional at any width.

**To build for production:**
```bash
npm run build
npm run preview
```

## Project Structure

```
discount-montreal/
├── src/
│   ├── App.jsx              # Root component and navigation state
│   ├── main.jsx             # React entry point
│   ├── index.css            # All global styles and CSS variables
│   ├── screens/
│   │   ├── Home.jsx         # Home screen: search bar and category tiles
│   │   ├── Results.jsx      # Search results ranked by price or distance
│   │   ├── Compare.jsx      # Side-by-side comparison of top 3 stores
│   │   ├── StoreDetail.jsx  # Individual store with all active deals
│   │   └── Category.jsx     # Browse all discounts within a category
│   └── data/
│       └── groceries.js     # Mock grocery data: 4 stores, 40 items, 6 categories
├── docs/
│   ├── Discount_Montreal_FINAL_REPORT.docx   # Full project report
│   ├── prototype_screens.html                # Static prototype screen reference
│   └── study_materials.html                  # Consent form, tasks, questionnaire
├── index.html
├── vite.config.js
└── package.json
```

## Data

All grocery data is defined in `src/data/groceries.js`. The dataset includes:
- 4 stores: IGA, Metro, Maxi, Super C, each with addresses, hours, and distances
- 40 grocery items across 6 categories
- Pricing drawn from actual Montreal weekly flyers at the time of design
- Approximately 30% of items carry an active discount at any given store, consistent with real flyer patterns

In a production version, this would connect to a live pricing API or automated flyer data source. For this prototype, all data is static.

## Design Decisions

**Item-first, not store-first.** Every existing grocery application requires users to select a store before browsing. Discount Montreal inverts that: the user searches for what they need, and the interface returns all nearby stores ranked by price. This decision was the central hypothesis of the HCI usability study conducted as part of the course project.

**Flat navigation.** The deepest point in the application is three screens from the Home screen. There are no hamburger menus, hidden settings, or modal overlays. Every screen has a back button and a persistent bottom navigation bar.

**Colour as meaning.** Green indicates the best available deal or an active discount. Blue is used for interactive elements and the location chip. Red marks deals expiring within 24 hours. Colour is used to communicate, not to decorate.

**No authentication required.** The prototype does not require any sign-in. Removing authentication from the test flow ensures that usability measurements reflect interaction with the core interface rather than onboarding friction.

## Documentation

The full project report, including the research question, hypothesis, methods, usability study results, and discussion, is available in the `/docs` folder as `Discount_Montreal_FINAL_REPORT.docx`. Study materials including the participant consent form, task instructions, and post-task questionnaire are available as `study_materials.html` in the same folder.

## Notes for the Evaluator

- The application runs entirely in the browser with no backend setup required.
- All five screens are interactive and clickable.
- The search bar includes autocomplete. Suggested search terms: "milk", "eggs", "bread", "chicken", "tomatoes".
- The comparison screen calculates savings automatically based on the mock dataset.
- Tested on Chrome and Firefox. Both work without issues.
