import { useState, useEffect } from "react";
export default function StatusBar({ light = false }) {
  const [t, setT] = useState(new Date());
  useEffect(() => { const id = setInterval(() => setT(new Date()), 1000); return () => clearInterval(id); }, []);
  const h = t.getHours(), m = t.getMinutes().toString().padStart(2,"0");
  const ampm = h >= 12 ? "PM" : "AM", h12 = (h % 12) || 12;
  const col = light ? "rgba(255,255,255,0.9)" : "var(--text)";
  return (
    <div className="status-bar" style={{ color: col }}>
      <span style={{ fontFamily:"'DM Mono',monospace", fontWeight:500, fontSize:13 }}>{h12}:{m} {ampm}</span>
      <div style={{ display:"flex", alignItems:"center", gap:5, color:col }}>
        <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor"><rect x="0" y="3" width="3" height="9" rx="1" opacity="0.3"/><rect x="4.5" y="1.5" width="3" height="10.5" rx="1" opacity="0.55"/><rect x="9" y="0" width="3" height="12" rx="1" opacity="0.8"/><rect x="13.5" y="0" width="3" height="12" rx="1"/></svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor"><path d="M8 2.5C9.9 2.5 11.6 3.3 12.9 4.6L14.4 3.1C12.7 1.4 10.5 0.3 8 0.3S3.3 1.4 1.6 3.1L3.1 4.6C4.4 3.3 6.1 2.5 8 2.5Z" opacity="0.3"/><path d="M8 5.5C9.2 5.5 10.3 6 11.1 6.9L12.6 5.4C11.5 4.2 9.8 3.5 8 3.5S4.5 4.2 3.4 5.4L4.9 6.9C5.7 6 6.8 5.5 8 5.5Z" opacity="0.65"/><circle cx="8" cy="10" r="2"/></svg>
        <svg width="25" height="12" viewBox="0 0 25 12" fill="currentColor"><rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="currentColor" strokeOpacity="0.3" fill="none"/><rect x="2" y="2" width="16" height="8" rx="2" fill="currentColor"/><path d="M23 4.5V7.5C23.8 7.1 24.4 6.4 24.4 6S23.8 4.9 23 4.5Z" fill="currentColor" fillOpacity="0.4"/></svg>
      </div>
    </div>
  );
}
