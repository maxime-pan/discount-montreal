import StatusBar from "./StatusBar";
import NavBar from "./NavBar";
import { getItemsByCategory, getResultsForItem } from "../data/groceries";

export default function Category({ category, navigate }) {
  if (!category) return null;
  const catItems = getItemsByCategory(category.id);
  return (
    <>
      <StatusBar/>
      <div style={{background:"var(--surface)",padding:"10px 16px 16px",borderBottom:"1px solid var(--border)"}}>
        <button className="back-btn" onClick={()=>navigate("home")}>← Back</button>
        <h2 style={{fontSize:22,fontWeight:800,color:"var(--text)",marginTop:12,letterSpacing:"-0.4px"}}>{category.emoji} {category.label}</h2>
        <p style={{fontSize:13,color:"var(--text-3)",marginTop:3}}>Best deals · sorted by discount</p>
      </div>
      <div className="screen-content" style={{paddingTop:12}}>
        <div className="card-section">
          {catItems.map(item=>{
            const r=getResultsForItem(item); const best=r[0];
            return (
              <div key={item.id} className="deal-row" onClick={()=>navigate("results",{query:item.name,item})}>
                <div>
                  <div className="deal-item-name">{item.name}</div>
                  <div className="deal-store-name">Best at <strong style={{color:"var(--text-2)"}}>{best.store.name}</strong> · 📍 {best.store.distance} km</div>
                </div>
                <div style={{textAlign:"right"}}>
                  <div className="deal-price">${best.finalPrice.toFixed(2)}</div>
                  {best.discount&&<span className="badge badge-green" style={{marginTop:3,display:"inline-block"}}>−{best.discount}%</span>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <NavBar navigate={navigate} active="search"/>
    </>
  );
}
