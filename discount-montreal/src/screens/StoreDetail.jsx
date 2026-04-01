import { items } from "../data/groceries";

export default function StoreDetail({ store, navigate }) {
  if (!store) return null;
  const storeItems = items.filter(i => i.discounts[store.id] !== null).slice(0, 8);

  return (
    <>
      <div className="status-bar"><span>9:41</span><span>📶 🔋</span></div>
      <div className="screen-header">
        <button className="back-btn" onClick={() => navigate("results", { query: store.item?.name || "milk", item: store.item })}>← Back</button>
      </div>

      <div className="screen-content">
        <div className="detail-wrap" style={{ paddingTop: 0 }}>
          <div className="detail-store-header">
            <span className="detail-logo">{store.logo}</span>
            <div>
              <div className="detail-name">{store.name}</div>
              <div className="detail-address">{store.address}</div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
            <span className="badge" style={{ background: "var(--green-lt)", color: "var(--green)" }}>🕐 {store.hours}</span>
            <span className="badge" style={{ background: "var(--blue-lt)", color: "var(--blue)" }}>📍 {store.distance} km away</span>
          </div>

          {store.result && (
            <div style={{ background: "var(--green-lt)", borderRadius: "var(--radius)", padding: 16, marginBottom: 20, border: "1.5px solid var(--green)" }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: "var(--green)", marginBottom: 4 }}>YOUR SEARCHED ITEM</div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: "var(--gray-900)" }}>{store.item?.name}</div>
                <div style={{ fontSize: 24, fontWeight: 700, color: "var(--gray-900)" }}>${store.result.finalPrice.toFixed(2)}</div>
              </div>
              {store.result.discount && (
                <div style={{ fontSize: 13, color: "var(--green)", marginTop: 4 }}>Saving {store.result.discount}% this week</div>
              )}
            </div>
          )}

          <p className="section-label" style={{ padding: 0, marginBottom: 12 }}>More deals at this store</p>
          <div style={{ background: "var(--white)", border: "1px solid var(--gray-200)", borderRadius: "var(--radius)", overflow: "hidden" }}>
            {storeItems.map((item, i) => {
              const disc = item.discounts[store.id];
              const raw = item.prices[store.id];
              const final = disc ? +(raw * (1 - disc / 100)).toFixed(2) : raw;
              return (
                <div key={item.id} className="detail-row" style={{ padding: "12px 16px" }}>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 500, color: "var(--gray-900)" }}>{item.name}</div>
                    {disc && <span className="badge badge-green" style={{ marginTop: 4 }}>−{disc}%</span>}
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "var(--gray-900)" }}>${final.toFixed(2)}</div>
                    {disc && <div style={{ fontSize: 11, color: "var(--gray-400)", textDecoration: "line-through" }}>${raw.toFixed(2)}</div>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
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
