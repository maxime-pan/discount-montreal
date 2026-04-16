export const stores = [
  { id: "iga",    name: "IGA",     logo: "🛒", address: "5500 Sherbrooke St W, Montreal",     hours: "7am–10pm", distance: 0.4 },
  { id: "metro",  name: "Metro",   logo: "🏪", address: "3450 Côte-des-Neiges, Montreal",     hours: "8am–9pm",  distance: 0.8 },
  { id: "maxi",   name: "Maxi",    logo: "🛍", address: "7000 Henri-Bourassa Blvd, Montreal", hours: "8am–10pm", distance: 1.4 },
  { id: "superc", name: "Super C", logo: "🏬", address: "11000 René-Lévesque, Montreal",      hours: "7am–11pm", distance: 2.1 },
];

export const items = [
  // DAIRY (8 items)
  { id: 1,  name: "2% Milk (2L)",           category: "dairy",     prices: { iga: 4.99, metro: 5.29, maxi: 4.49, superc: 4.79 }, discounts: { iga: null, metro: null, maxi: 15,   superc: null } },
  { id: 2,  name: "Eggs (12pk)",             category: "dairy",     prices: { iga: 5.49, metro: 4.99, maxi: 5.29, superc: 4.89 }, discounts: { iga: null, metro: 10,   maxi: null, superc: 5    } },
  { id: 3,  name: "Cheddar Cheese (400g)",   category: "dairy",     prices: { iga: 7.99, metro: 7.49, maxi: 6.99, superc: 7.19 }, discounts: { iga: null, metro: null, maxi: 20,   superc: null } },
  { id: 4,  name: "Greek Yogurt (500g)",     category: "dairy",     prices: { iga: 4.29, metro: 3.99, maxi: 3.79, superc: 4.09 }, discounts: { iga: null, metro: 5,    maxi: null, superc: null } },
  { id: 5,  name: "Butter (454g)",           category: "dairy",     prices: { iga: 6.99, metro: 6.49, maxi: 5.99, superc: 6.29 }, discounts: { iga: 10,   metro: null, maxi: null, superc: null } },
  { id: 6,  name: "Skim Milk (4L)",          category: "dairy",     prices: { iga: 7.49, metro: 7.99, maxi: 6.99, superc: 7.29 }, discounts: { iga: null, metro: null, maxi: 10,   superc: null } },
  { id: 7,  name: "Cream Cheese (250g)",     category: "dairy",     prices: { iga: 4.49, metro: 3.99, maxi: 3.49, superc: 3.79 }, discounts: { iga: null, metro: 15,   maxi: null, superc: null } },
  { id: 8,  name: "Sour Cream (500ml)",      category: "dairy",     prices: { iga: 3.99, metro: 3.49, maxi: 2.99, superc: 3.29 }, discounts: { iga: null, metro: null, maxi: null, superc: 5    } },

  // PRODUCE (8 items)
  { id: 9,  name: "Tomatoes (1kg)",          category: "produce",   prices: { iga: 3.49, metro: 2.99, maxi: 2.79, superc: 3.19 }, discounts: { iga: null, metro: null, maxi: 10,   superc: null } },
  { id: 10, name: "Bananas (1kg)",           category: "produce",   prices: { iga: 1.79, metro: 1.69, maxi: 1.49, superc: 1.59 }, discounts: { iga: null, metro: null, maxi: null, superc: null } },
  { id: 11, name: "Broccoli (each)",         category: "produce",   prices: { iga: 2.99, metro: 2.49, maxi: 2.29, superc: 2.69 }, discounts: { iga: null, metro: 15,   maxi: null, superc: null } },
  { id: 12, name: "Apples Gala (2kg)",       category: "produce",   prices: { iga: 5.99, metro: 5.49, maxi: 4.99, superc: 5.29 }, discounts: { iga: null, metro: null, maxi: 10,   superc: null } },
  { id: 13, name: "Baby Spinach (142g)",     category: "produce",   prices: { iga: 4.49, metro: 3.99, maxi: 3.49, superc: 3.79 }, discounts: { iga: null, metro: 10,   maxi: null, superc: null } },
  { id: 14, name: "Carrots (2lb bag)",       category: "produce",   prices: { iga: 2.49, metro: 2.29, maxi: 1.99, superc: 2.09 }, discounts: { iga: null, metro: null, maxi: null, superc: null } },
  { id: 15, name: "Yellow Onions (3lb)",     category: "produce",   prices: { iga: 3.29, metro: 2.99, maxi: 2.49, superc: 2.79 }, discounts: { iga: null, metro: null, maxi: 15,   superc: null } },
  { id: 16, name: "Avocados (each)",         category: "produce",   prices: { iga: 1.99, metro: 1.69, maxi: 1.49, superc: 1.79 }, discounts: { iga: 10,   metro: null, maxi: null, superc: null } },

  // MEAT (6 items)
  { id: 17, name: "Chicken Breast (1kg)",    category: "meat",      prices: { iga: 11.99, metro: 10.99, maxi: 9.99,  superc: 10.49 }, discounts: { iga: null, metro: 15,   maxi: null, superc: null } },
  { id: 18, name: "Ground Beef (500g)",      category: "meat",      prices: { iga: 7.49,  metro: 6.99,  maxi: 6.49,  superc: 6.79  }, discounts: { iga: 10,   metro: null, maxi: null, superc: null } },
  { id: 19, name: "Pork Chops (1kg)",        category: "meat",      prices: { iga: 9.99,  metro: 8.99,  maxi: 8.49,  superc: 8.79  }, discounts: { iga: null, metro: null, maxi: 10,   superc: null } },
  { id: 20, name: "Atlantic Salmon (400g)",  category: "meat",      prices: { iga: 9.49,  metro: 8.99,  maxi: 7.99,  superc: 8.49  }, discounts: { iga: null, metro: 10,   maxi: null, superc: null } },
  { id: 21, name: "Turkey Breast (500g)",    category: "meat",      prices: { iga: 8.99,  metro: 7.99,  maxi: 7.49,  superc: 7.79  }, discounts: { iga: null, metro: null, maxi: null, superc: 10   } },
  { id: 22, name: "Beef Sirloin (500g)",     category: "meat",      prices: { iga: 12.49, metro: 11.99, maxi: 10.99, superc: 11.49 }, discounts: { iga: 15,   metro: null, maxi: null, superc: null } },

  // PANTRY (10 items)
  { id: 23, name: "Whole Wheat Bread",       category: "pantry",    prices: { iga: 3.99, metro: 3.49, maxi: 3.19, superc: 3.29 }, discounts: { iga: null, metro: null, maxi: null, superc: null } },
  { id: 24, name: "Pasta Penne (900g)",      category: "pantry",    prices: { iga: 2.49, metro: 2.29, maxi: 1.99, superc: 2.09 }, discounts: { iga: null, metro: null, maxi: 15,   superc: null } },
  { id: 25, name: "Olive Oil (500ml)",       category: "pantry",    prices: { iga: 8.99, metro: 7.99, maxi: 7.49, superc: 8.29 }, discounts: { iga: null, metro: 10,   maxi: null, superc: null } },
  { id: 26, name: "Rice Basmati (2kg)",      category: "pantry",    prices: { iga: 6.49, metro: 5.99, maxi: 5.49, superc: 5.79 }, discounts: { iga: null, metro: null, maxi: 10,   superc: null } },
  { id: 27, name: "Canned Tomatoes (796ml)", category: "pantry",    prices: { iga: 2.29, metro: 1.99, maxi: 1.79, superc: 1.89 }, discounts: { iga: null, metro: null, maxi: null, superc: null } },
  { id: 28, name: "Peanut Butter (500g)",    category: "pantry",    prices: { iga: 5.49, metro: 4.99, maxi: 4.49, superc: 4.79 }, discounts: { iga: null, metro: 5,    maxi: null, superc: null } },
  { id: 29, name: "Orange Juice (1.75L)",    category: "pantry",    prices: { iga: 5.99, metro: 5.49, maxi: 4.99, superc: 5.29 }, discounts: { iga: null, metro: null, maxi: 15,   superc: null } },
  { id: 30, name: "Chicken Broth (900ml)",   category: "pantry",    prices: { iga: 3.49, metro: 2.99, maxi: 2.69, superc: 2.89 }, discounts: { iga: 10,   metro: null, maxi: null, superc: null } },
  { id: 31, name: "Granola Bars (8pk)",      category: "pantry",    prices: { iga: 5.99, metro: 5.49, maxi: 4.79, superc: 5.19 }, discounts: { iga: null, metro: null, maxi: null, superc: null } },
  { id: 32, name: "Spaghetti (900g)",        category: "pantry",    prices: { iga: 2.29, metro: 1.99, maxi: 1.79, superc: 1.89 }, discounts: { iga: null, metro: 10,   maxi: null, superc: null } },

  // FROZEN (4 items)
  { id: 33, name: "Frozen Peas (750g)",      category: "frozen",    prices: { iga: 3.29, metro: 2.99, maxi: 2.69, superc: 2.89 }, discounts: { iga: null, metro: null, maxi: 10,   superc: null } },
  { id: 34, name: "Ice Cream Vanilla (2L)",  category: "frozen",    prices: { iga: 7.99, metro: 6.99, maxi: 5.99, superc: 6.49 }, discounts: { iga: null, metro: 15,   maxi: null, superc: null } },
  { id: 35, name: "Frozen Pizza (each)",     category: "frozen",    prices: { iga: 8.99, metro: 7.99, maxi: 6.99, superc: 7.49 }, discounts: { iga: null, metro: null, maxi: null, superc: 10   } },
  { id: 36, name: "Frozen Mixed Berries (1kg)", category: "frozen", prices: { iga: 7.49, metro: 6.99, maxi: 5.99, superc: 6.49 }, discounts: { iga: 10,   metro: null, maxi: null, superc: null } },

  // HOUSEHOLD (4 items)
  { id: 37, name: "Dish Soap (700ml)",       category: "household", prices: { iga: 4.49, metro: 3.99, maxi: 3.49, superc: 3.79 }, discounts: { iga: null, metro: null, maxi: 10,   superc: null } },
  { id: 38, name: "Paper Towels (6pk)",      category: "household", prices: { iga: 8.99, metro: 7.99, maxi: 6.99, superc: 7.49 }, discounts: { iga: null, metro: 10,   maxi: null, superc: null } },
  { id: 39, name: "Laundry Detergent (1.4L)",category: "household", prices: { iga: 12.99, metro: 11.49, maxi: 9.99, superc: 10.99 }, discounts: { iga: null, metro: null, maxi: 15, superc: null } },
  { id: 40, name: "All-Purpose Cleaner (500ml)", category: "household", prices: { iga: 3.99, metro: 3.49, maxi: 2.99, superc: 3.29 }, discounts: { iga: null, metro: null, maxi: null, superc: 10 } },
];

export const categories = [
  { id: "dairy",     label: "Dairy",     emoji: "🥛" },
  { id: "produce",   label: "Produce",   emoji: "🥦" },
  { id: "meat",      label: "Meat",      emoji: "🥩" },
  { id: "pantry",    label: "Pantry",    emoji: "🥫" },
  { id: "frozen",    label: "Frozen",    emoji: "🧊" },
  { id: "household", label: "Household", emoji: "🧹" },
];

export function searchItems(query) {
  const q = query.toLowerCase().trim();
  return items.filter(i => i.name.toLowerCase().includes(q));
}

export function getResultsForItem(item) {
  return stores
    .map(store => {
      const rawPrice = item.prices[store.id];
      const disc = item.discounts[store.id];
      const finalPrice = disc ? +(rawPrice * (1 - disc / 100)).toFixed(2) : rawPrice;
      return { store, rawPrice, discount: disc, finalPrice };
    })
    .sort((a, b) => a.finalPrice - b.finalPrice);
}

export function getItemsByCategory(categoryId) {
  return items.filter(i => i.category === categoryId);
}
