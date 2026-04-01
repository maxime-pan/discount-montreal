import { useState } from "react";
import { categories, searchItems } from "../data/groceries";

export default function Home({ navigate }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    if (val.trim().length > 1) {
      setSuggestions(searchItems(val).slice(0, 5));
    } else {
      setSuggestions([]);
    }
  };

  const handleSearch = (item) => {
    setSuggestions([]);
    setQuery("");
    navigate("results", { query: item.name, item });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const results = searchItems(query);
    if (results.length > 0) handleSearch(results[0]);
  };

  return (
    <>
      <div className="status-bar">
        <span>9:41</span>
        <span>📶 🔋</span>
      </div>

      <div className="screen-content">
        <div style={{ padding: "20px 20px 0" }}>
          <div className="location-chip">📍 Côte-des-Neiges, Montréal</div>
          <h1 style={{ fontSize: 26, fontWeight: 700, color: "var(--gray-900)", lineHeight: 1.2, marginBottom: 6 }}>
            Find the best<br />grocery deals nearby
          </h1>
          <p style={{ fontSize: 14, color: "var(--gray-400)", marginBottom: 20 }}>
            Search any item — we compare all nearby stores instantly.
          </p>

          <form onSubmit={handleSubmit} style={{ position: "relative", marginBottom: 24 }}>
            <div className="search-wrap">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search for milk, eggs, bread..."
                value={query}
                onChange={handleChange}
                autoComplete="off"
              />
              {query && (
                <button type="submit" style={{ background: "var(--blue)", color: "#fff", border: "none", borderRadius: 8, padding: "6px 12px", fontFamily: "inherit", fontWeight: 600, fontSize: 13, cursor: "pointer" }}>
                  Go
                </button>
              )}
            </div>

            {suggestions.length > 0 && (
              <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "#fff", borderRadius: "var(--radius)", boxShadow: "var(--shadow-md)", border: "1px solid var(--gray-200)", zIndex: 10, marginTop: 4 }}>
                {suggestions.map(item => (
                  <div
                    key={item.id}
                    onClick={() => handleSearch(item)}
                    style={{ padding: "12px 16px", cursor: "pointer", borderBottom: "1px solid var(--gray-100)", fontSize: 14, color: "var(--gray-900)", display: "flex", alignItems: "center", gap: 8 }}
                    onMouseEnter={e => e.currentTarget.style.background = "var(--gray-100)"}
                    onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                  >
                    <span style={{ fontSize: 16 }}>🔍</span> {item.name}
                  </div>
                ))}
              </div>
            )}
          </form>

          <p className="section-label" style={{ padding: 0, marginBottom: 12 }}>Browse by category</p>
          <div className="category-grid" style={{ padding: 0, marginBottom: 28 }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                className="cat-tile"
                onClick={() => navigate("category", { category: cat })}
              >
                <span className="cat-emoji">{cat.emoji}</span>
                <span className="cat-label">{cat.label}</span>
              </button>
            ))}
          </div>

          <p className="section-label" style={{ padding: 0, marginBottom: 12 }}>Featured deals this week</p>
          {[
            { name: "2% Milk (2L)", store: "Maxi", price: "$3.82", disc: "−15%", emoji: "🥛" },
            { name: "Eggs 12pk", store: "Metro", price: "$4.49", disc: "−10%", emoji: "🥚" },
            { name: "Chicken Breast 1kg", store: "Metro", price: "$9.34", disc: "−15%", emoji: "🍗" },
          ].map((deal, i) => (
            <div key={i} className="deal-row" style={{ padding: "12px 0", borderBottom: "1px solid var(--gray-100)" }}
              onClick={() => { const found = searchItems(deal.name.split(" ")[0]); if (found[0]) handleSearch(found[0]); }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 42, height: 42, background: "var(--gray-100)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{deal.emoji}</div>
                <div>
                  <div className="deal-item-name">{deal.name}</div>
                  <div className="deal-store-name">{deal.store}</div>
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div className="deal-price">{deal.price}</div>
                <span className="badge badge-green">{deal.disc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="nav-bar">
        <button className="nav-item active"><span className="nav-icon">🏠</span>Home</button>
        <button className="nav-item"><span className="nav-icon">🔍</span>Search</button>
        <button className="nav-item"><span className="nav-icon">📋</span>List</button>
        <button className="nav-item"><span className="nav-icon">👤</span>Profile</button>
      </div>
    </>
  );
}
