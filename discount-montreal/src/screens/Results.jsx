import { useState, useEffect } from "react";
import { searchItems, getResultsForItem } from "../data/groceries";

export default function Results({ query, navigate }) {
  const [sort, setSort] = useState("price");
  const [item, setItem] = useState(null);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const found = searchItems(query);
    if (found.length > 0) {
      setItem(found[0]);
      setResults(getResultsForItem(found[0]));
    }
  }, [query]);

  const sorted = [...results].sort((a, b) =>
    sort === "price" ? a.finalPrice - b.finalPrice : a.store.distance - b.store.distance
  );

  if (!item) return <div style={{ padding: 40, textAlign: "center", color: "var(--gray-400)" }}>No results found.</div>;

  return (
    <>
      <div className="status-bar">
        <span>9:41</span>
        <span>📶 🔋</span>
      </div>

      <div className="screen-header">
        <button className="back-btn" onClick={() => navigate("home")}>← Back</button>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--gray-900)", marginTop: 10 }}>{item.name}</h2>
        <p style={{ fontSize: 13, color: "var(--gray-400)", marginTop: 2 }}>
          {results.length} stores nearby · sorted by {sort}
        </p>
      </div>

      <div className="screen-content">
        <div className="filter-bar">
          <button className={`filter-btn ${sort === "price" ? "active" : ""}`} onClick={() => setSort("price")}>
            💰 Lowest price
          </button>
          <button className={`filter-btn ${sort === "distance" ? "active" : ""}`} onClick={() => setSort("distance")}>
            📍 Nearest
          </button>
        </div>

        {sorted.map((r, i) => (
          <div
            key={r.store.id}
            className={`store-card ${i === 0 && sort === "price" ? "best" : ""}`}
            onClick={() => navigate("detail", { store: { ...r.store, item, result: r } })}
          >
            <div className="store-card-top">
              <div className="store-name-row">
                <span className="store-logo">{r.store.logo}</span>
                <div>
                  <div className="store-name">{r.store.name}</div>
                  <div className="store-dist">📍 {r.store.distance} km away</div>
                </div>
              </div>
              <div className="price-col">
                <div className="price-final">${r.finalPrice.toFixed(2)}</div>
                {r.discount && (
                  <div className="price-original">${r.rawPrice.toFixed(2)}</div>
                )}
              </div>
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {i === 0 && sort === "price" && <span className="badge badge-green">🏆 Best deal</span>}
              {r.discount && <span className="badge badge-green">−{r.discount}% off</span>}
              {r.store.hours && <span className="badge" style={{ background: "var(--gray-100)", color: "var(--gray-600)" }}>🕐 {r.store.hours}</span>}
            </div>
          </div>
        ))}

        <button className="btn-primary" onClick={() => navigate("compare", { item })}>
          Compare top 3 deals →
        </button>
      </div>

      <div className="nav-bar">
        <button className="nav-item" onClick={() => navigate("home")}><span className="nav-icon">🏠</span>Home</button>
        <button className="nav-item active"><span className="nav-icon">🔍</span>Search</button>
        <button className="nav-item"><span className="nav-icon">📋</span>List</button>
        <button className="nav-item"><span className="nav-icon">👤</span>Profile</button>
      </div>
    </>
  );
}
