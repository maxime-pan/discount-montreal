import { getItemsByCategory, getResultsForItem, stores } from "../data/groceries";

export default function Category({ category, navigate }) {
  if (!category) return null;
  const catItems = getItemsByCategory(category.id);

  return (
    <>
      <div className="status-bar"><span>9:41</span><span>📶 🔋</span></div>
      <div className="screen-header">
        <button className="back-btn" onClick={() => navigate("home")}>← Back</button>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--gray-900)", marginTop: 10 }}>
          {category.emoji} {category.label}
        </h2>
        <p style={{ fontSize: 13, color: "var(--gray-400)", marginTop: 2 }}>Best deals this week · sorted by discount</p>
      </div>

      <div className="screen-content">
        {catItems.map(item => {
          const results = getResultsForItem(item);
          const best = results[0];
          return (
            <div key={item.id} className="deal-row" onClick={() => navigate("results", { query: item.name, item })}>
              <div>
                <div className="deal-item-name">{item.name}</div>
                <div className="deal-store-name">Best at {best.store.name} · 📍 {best.store.distance} km</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div className="deal-price">${best.finalPrice.toFixed(2)}</div>
                {best.discount && <span className="badge badge-green">−{best.discount}%</span>}
              </div>
            </div>
          );
        })}
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
