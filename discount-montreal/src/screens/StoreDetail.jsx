import StatusBar from "./StatusBar";
import NavBar from "./NavBar";
import { items } from "../data/groceries";

export default function StoreDetail({ store, navigate }) {
  if (!store) return null;
  const dealsHere = items.filter(i=>i.discounts[store.id]!==null).slice(0,12);

  return (
    <>
      <StatusBar/>
      <div style={{background:"var(--surface)",padding:"10px 16px 0",borderBottom:"1px solid var(--border)"}}>
        <button className="back-btn" onClick={()=>navigate("results",{query:store.item?.name||"milk",item:store.item})}>← Back</button>
      </div>

      <div className="screen-content">
        {/* Store header */}
        <div style={{background:"var(--surface)",padding:"16px 16px 18px",marginBottom:12,borderBottom:"1px solid var(--border)"}}>
          <div className="detail-store-header">
            <div className="detail-logo">{store.logo}</div>
            <div>
              <div className="detail-name">{store.name}</div>
              <div className="detail-address">📍 {store.address}</div>
            </div>
          </div>
          <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
            <span className="badge badge-green">🕐 {store.hours}</span>
            <span className="badge badge-blue">📍 {store.distance} km away</span>
          </div>
        </div>

        {/* Searched item */}
        {store.result&&(
          <div style={{margin:"0 16px 14px",padding:"16px",background:"linear-gradient(135deg,rgba(48,209,88,0.1),var(--surface))",borderRadius:16,border:"1px solid var(--green)"}}>
            <div style={{fontSize:11,fontWeight:700,color:"var(--green)",marginBottom:8,textTransform:"uppercase",letterSpacing:"0.06em"}}>Your item</div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div style={{fontSize:15,fontWeight:700,color:"var(--text)"}}>{store.item?.name}</div>
              <div style={{fontSize:28,fontWeight:800,color:"var(--text)",fontFamily:"'DM Mono',monospace",letterSpacing:"-0.5px"}}>${store.result.finalPrice.toFixed(2)}</div>
            </div>
            {store.result.discount&&(
              <div style={{display:"flex",alignItems:"center",gap:8,marginTop:8}}>
                <span className="badge badge-green">−{store.result.discount}% off</span>
                <span style={{fontSize:12,color:"var(--green)"}}>Saving ${((store.result.rawPrice-store.result.finalPrice)).toFixed(2)} this week</span>
              </div>
            )}
          </div>
        )}

        <p className="section-label" style={{marginBottom:8}}>All deals at {store.name}</p>
        <div className="card-section">
          {dealsHere.map(it=>{
            const disc=it.discounts[store.id]; const raw=it.prices[store.id];
            const fin=disc?+(raw*(1-disc/100)).toFixed(2):raw;
            return (
              <div key={it.id} className="detail-row" style={{padding:"13px 16px"}}>
                <div>
                  <div style={{fontSize:14,fontWeight:600,color:"var(--text)"}}>{it.name}</div>
                  {disc&&<span className="badge badge-green" style={{marginTop:5,display:"inline-flex"}}>−{disc}%</span>}
                </div>
                <div style={{textAlign:"right"}}>
                  <div style={{fontSize:17,fontWeight:800,color:"var(--text)",fontFamily:"'DM Mono',monospace"}}>${fin.toFixed(2)}</div>
                  {disc&&<div style={{fontSize:11,color:"var(--text-4)",textDecoration:"line-through",marginTop:1,fontFamily:"'DM Mono',monospace"}}>${raw.toFixed(2)}</div>}
                </div>
              </div>
            );
          })}
        </div>
        <div style={{height:16}}/>
      </div>
      <NavBar navigate={navigate} active="search"/>
    </>
  );
}
