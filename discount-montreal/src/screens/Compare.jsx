import StatusBar from "./StatusBar";
import NavBar from "./NavBar";
import { getResultsForItem } from "../data/groceries";

export default function Compare({ item, navigate }) {
  if (!item) return null;
  const all = getResultsForItem(item);
  const top = all.slice(0,3);
  const saved = (all[all.length-1].finalPrice - all[0].finalPrice).toFixed(2);

  return (
    <>
      <StatusBar/>
      <div style={{background:"var(--surface)",padding:"10px 16px 16px",borderBottom:"1px solid var(--border)"}}>
        <button className="back-btn" onClick={()=>navigate("results",{query:item.name,item})}>← Back</button>
        <h2 style={{fontSize:22,fontWeight:800,color:"var(--text)",marginTop:12,letterSpacing:"-0.4px"}}>Compare deals</h2>
        <p style={{fontSize:13,color:"var(--text-3)",marginTop:3}}>{item.name} · top 3 stores</p>
      </div>

      <div className="screen-content" style={{paddingTop:14}}>
        <div className="compare-grid" style={{marginBottom:14}}>
          {top.map((r,i)=>(
            <div key={r.store.id} className={`compare-card ${i===0?"best":""}`}>
              {i===0&&<div style={{fontSize:10,fontWeight:800,color:"var(--green)",marginBottom:6,textTransform:"uppercase",letterSpacing:"0.06em"}}>🏆 Best</div>}
              <div style={{fontSize:24,marginBottom:4}}>{r.store.logo}</div>
              <div className="compare-card-store">{r.store.name}</div>
              <div className="compare-card-price">${r.finalPrice.toFixed(2)}</div>
              {r.discount&&<span className="badge badge-green" style={{margin:"5px auto 0",display:"inline-flex"}}>−{r.discount}%</span>}
              <div className="compare-card-dist">📍 {r.store.distance} km</div>
            </div>
          ))}
        </div>

        {/* Savings callout */}
        <div style={{margin:"0 16px 16px",padding:"16px",background:"var(--gold-lt)",borderRadius:16,border:"1px solid rgba(245,166,35,0.25)"}}>
          <div style={{fontSize:13,fontWeight:700,color:"var(--gold)",marginBottom:5,display:"flex",alignItems:"center",gap:6}}>
            💸 You save <span style={{fontFamily:"'DM Mono',monospace",fontSize:15}}>${saved}</span>
          </div>
          <div style={{fontSize:13,color:"rgba(245,166,35,0.7)",lineHeight:1.5}}>
            Choosing <strong style={{color:"var(--text)"}}>{top[0].store.name}</strong> over the most expensive option.
          </div>
        </div>

        <p className="section-label" style={{marginBottom:8}}>All 4 stores</p>
        <div className="card-section">
          {all.map((r,i)=>(
            <div key={r.store.id} className="deal-row">
              <div style={{display:"flex",alignItems:"center",gap:11}}>
                <div className="store-logo-wrap" style={{width:36,height:36,borderRadius:10,fontSize:18}}>{r.store.logo}</div>
                <div>
                  <div className="deal-item-name">{r.store.name}</div>
                  <div className="deal-store-name">📍 {r.store.distance} km</div>
                </div>
              </div>
              <div style={{textAlign:"right"}}>
                <div className="deal-price">${r.finalPrice.toFixed(2)}</div>
                {r.discount&&<span className="badge badge-green" style={{marginTop:3,display:"inline-block"}}>−{r.discount}%</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
      <NavBar navigate={navigate} active="search"/>
    </>
  );
}
