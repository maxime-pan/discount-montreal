import { useState, useEffect } from "react";
import StatusBar from "./StatusBar";
import NavBar from "./NavBar";
import { searchItems, getResultsForItem } from "../data/groceries";

export default function Results({ query, navigate }) {
  const [sort, setSort] = useState("price");
  const [item, setItem] = useState(null);
  const [results, setResults] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const f = searchItems(query);
    if (f.length>0) { setItem(f[0]); setResults(getResultsForItem(f[0])); }
    setTimeout(()=>setLoaded(true), 50);
  }, [query]);

  const sorted = [...results].sort((a,b)=>sort==="price"?a.finalPrice-b.finalPrice:a.store.distance-b.store.distance);
  if (!item) return null;

  const best = sorted[0];
  const worst = sorted[sorted.length-1];
  const savings = (worst.finalPrice - best.finalPrice).toFixed(2);

  return (
    <>
      <StatusBar/>
      <div style={{background:"var(--surface)",padding:"10px 16px 0",borderBottom:"1px solid var(--border)"}}>
        <button className="back-btn" onClick={()=>navigate("home")}>← Back</button>
        <div style={{marginTop:12,marginBottom:14}}>
          <h2 style={{fontSize:22,fontWeight:800,color:"var(--text)",letterSpacing:"-0.4px"}}>{item.name}</h2>
          <p style={{fontSize:13,color:"var(--text-3)",marginTop:3}}>{results.length} stores · {sort==="price"?"by price":"by distance"}</p>
        </div>
        <div className="filter-bar" style={{padding:0,paddingBottom:14}}>
          <button className={`filter-btn ${sort==="price"?"active":""}`} onClick={()=>setSort("price")}>💰 Lowest price</button>
          <button className={`filter-btn ${sort==="distance"?"active":""}`} onClick={()=>setSort("distance")}>📍 Nearest</button>
        </div>
      </div>

      <div className="screen-content" style={{paddingTop:12}}>
        {/* Savings banner */}
        {parseFloat(savings)>0 && (
          <div style={{margin:"0 16px 14px",padding:"12px 16px",background:"var(--gold-lt)",border:"1px solid rgba(245,166,35,0.3)",borderRadius:14,display:"flex",alignItems:"center",gap:10}}>
            <span style={{fontSize:20}}>💡</span>
            <div>
              <div style={{fontSize:13,fontWeight:700,color:"var(--gold)"}}>Save ${savings} by choosing {best.store.name}</div>
              <div style={{fontSize:12,color:"rgba(245,166,35,0.6)",marginTop:1}}>vs. the most expensive option nearby</div>
            </div>
          </div>
        )}

        {sorted.map((r,i)=>(
          <div key={r.store.id} className={`store-card fade-up ${i===0&&sort==="price"?"best":""}`}
            style={{animationDelay:`${i*50}ms`}}
            onClick={()=>navigate("detail",{store:{...r.store,item,result:r}})}>
            {i===0&&sort==="price"&&(
              <div style={{fontSize:11,fontWeight:700,color:"var(--green)",marginBottom:8,display:"flex",alignItems:"center",gap:5,letterSpacing:"0.06em"}}>
                🏆 BEST DEAL
              </div>
            )}
            <div className="store-card-top">
              <div className="store-name-row">
                <div className="store-logo-wrap">{r.store.logo}</div>
                <div>
                  <div className="store-name">{r.store.name}</div>
                  <div className="store-dist">📍 {r.store.distance} km · {r.store.hours}</div>
                </div>
              </div>
              <div className="price-col">
                <div className="price-final">${r.finalPrice.toFixed(2)}</div>
                {r.discount&&<div className="price-original">${r.rawPrice.toFixed(2)}</div>}
              </div>
            </div>
            <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
              {r.discount&&<span className="badge badge-green">−{r.discount}% off</span>}
              {i===0&&sort==="price"&&<span className="badge badge-green">Best price</span>}
            </div>
          </div>
        ))}

        <button className="btn-primary" onClick={()=>navigate("compare",{item})}>
          Compare top 3 deals →
        </button>
        <div style={{height:8}}/>
      </div>
      <NavBar navigate={navigate} active="search"/>
    </>
  );
}
