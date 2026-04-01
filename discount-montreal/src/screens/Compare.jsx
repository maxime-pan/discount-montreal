import { getResultsForItem } from "../data/groceries";

export default function Compare({ item, navigate }) {
  if (!item) return null;
  const results = getResultsForItem(item).slice(0, 3);

  return (
    <>
      <div className="status-bar"><span>9:41</span><span>📶 🔋</span></div>
      <div className="screen-header">
        <button className="back-btn" onClick={() => navigate("results", { query: item.name, item })}>← Back</button>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--gray-900)", marginTop: 10 }}>Compare deals</h2>
        <p style={{ fontSize: 13, color: "var(--gray-400)", marginTop: 2 }}>{item.name} · Top 3 stores</p>
      </div>

      <div className="screen-content">
        <div className="compare-grid" style={{ marginBottom: 20 }}>
          {results.map((r, i) => (
            <div key={r.store.id} className={`compare-card ${i === 0 ? "best" : ""}`}>
              {i === 0 && <div style={{ fontSize: 10, fontWeight: 700, color: "var(--green)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>🏆 Best deal</div>}
              <div style={{ fontSize: 22 }}>{r.store.logo}</div>
              <div className="compare-card-store">{r.store.name}</div>
              <div className="compare-card-price">${r.finalPrice.toFixed(2)}</div>
              {r.discount && <div className="badge badge-green" style={{ margin: "4px auto 0", display: "inline-flex" }}>−{r.discount}%</div>}
              <div className="compare-card-dist">📍 {r.store.distance} km</div>
            </div>
          ))}
        </div>

        <div style={{ margin: "0 20px 16px", padding: 16, background: "var(--blue-lt)", borderRadius: "var(--radius)" }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "var(--blue)", marginBottom: 4 }}>💡 Savings tip</div>
          <div style={{ fontSize: 13, color: "var(--gray-600)" }}>
            Shopping at {results[0].store.name} saves you <strong>${(results[results.length - 1].finalPrice - results[0].finalPrice).toFixed(2)}</strong> compared to the most expensive option nearby.
          </div>
        </div>

        <p className="section-label">All stores — price breakdown</p>
        {getResultsForItem(item).map((r, i) => (
          <div key={r.store.id} className="deal-row">
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 20 }}>{r.store.logo}</span>
              <div>
                <div className="deal-item-name">{r.store.name}</div>
                <div className="deal-store-name">📍 {r.store.distance} km</div>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div className="deal-price">${r.finalPrice.toFixed(2)}</div>
              {r.discount && <span className="badge badge-green">−{r.discount}%</span>}
            </div>
          </div>
        ))}
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
