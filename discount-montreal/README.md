# Discount Montréal

A mobile grocery savings app for Montreal residents. Built for SOEN 357 (User Interface Design) at Concordia University.

## What it does

We noticed that finding grocery discounts in Montreal is way more annoying than it needs to be. You have to open like 4 different apps, compare prices in your head, and half the time the deal isn't even at a store near you. So we built this.

Discount Montréal lets you search for any grocery item and immediately see all nearby stores ranked by price. No flyer browsing, no switching between apps, no mental math.

**Main features:**
- Search by item name (e.g. "milk", "eggs") — autocomplete included
- Results ranked by lowest price or nearest store (your choice)
- Side-by-side comparison of top 3 deals
- Category browsing (Dairy, Produce, Meat, Pantry, Frozen, Household)
- Store detail page with all current deals at that location
- Location chip showing your neighborhood (simulated for prototype)

## Team

| Name | Student ID |
|------|-----------|
| Mohammad Alhaji | 40264810 |
| Ming Pan | 40031821 |
| Adam Mohammed Dahmane | 40251506 |
| Nkrumah Leugoue Nougoue | 40258711 |

Course: SOEN 357 — User Interface Design  
Professor: Dr. Hakim Mellah  
Concordia University, Winter 2026

## Tech stack

- React 18
- Vite (dev server + build tool)
- Plain CSS (no UI library — we wrote all the styles ourselves)
- Static mock data (no backend — all grocery data is in `src/data/groceries.js`)

## How to run it

You need Node.js installed (version 16 or higher). If you don't have it, download it from https://nodejs.org.

**Step 1 — Clone the repo**
```bash
git clone https://github.com/team123-soen357/discount-montreal.git
cd discount-montreal
```

**Step 2 — Install dependencies**
```bash
npm install
```

**Step 3 — Start the dev server**
```bash
npm run dev
```

Then open your browser and go to `http://localhost:5173`. The app looks best in a narrow browser window (around 400px wide) to simulate the phone layout, but it works at any size.

**To build for production:**
```bash
npm run build
npm run preview
```

## Project structure

```
discount-montreal/
├── src/
│   ├── App.jsx              # Root component + navigation state
│   ├── main.jsx             # React entry point
│   ├── index.css            # All global styles
│   ├── screens/
│   │   ├── Home.jsx         # Home screen with search + categories
│   │   ├── Results.jsx      # Search results ranked by price/distance
│   │   ├── Compare.jsx      # Side-by-side comparison of top 3 stores
│   │   ├── StoreDetail.jsx  # Individual store with all deals
│   │   └── Category.jsx     # Browse by food category
│   └── data/
│       └── groceries.js     # All mock grocery/price/store data
├── index.html
├── vite.config.js
└── package.json
```

## Data

All grocery data is in `src/data/groceries.js`. It includes:
- 4 stores (IGA, Metro, Maxi, Super C) with addresses and hours
- 19 grocery items across 6 categories
- Realistic Montreal pricing (pulled from actual weekly flyers)
- About 30% of items have active discounts in any given store, which matches real flyer patterns

In a real production version this would connect to a live API or web scraper. For this prototype the data is static.

## Design decisions

We made a few specific choices worth mentioning:

- **Item-first not store-first:** Every existing app makes you pick a store first. We flipped that. You search for what you need, and we show you where to get it cheapest. This was the main hypothesis of our HCI study.
- **Flat navigation:** 3 screens deep maximum. No hamburger menus, no buried settings. You can always get back with one tap.
- **Color means something:** Green = best deal or discount. Blue = interactive / your location. We didn't use colors just for decoration.
- **No login, no account:** The prototype doesn't require any sign-in. We didn't want authentication to get in the way of testing the core interaction.

## Report

The full project report (Discount_Montreal_FINAL.docx) is included in the `/docs` folder along with the usability study materials (consent form, task instructions, questionnaire).

## Notes for the TA

- The prototype runs entirely in the browser, no backend setup needed
- All 5 main screens are functional and clickable
- The search bar has autocomplete — try typing "milk", "eggs", or "bread"
- The compare screen auto-calculates savings between stores
- We tested on Chrome and Firefox — works fine on both
