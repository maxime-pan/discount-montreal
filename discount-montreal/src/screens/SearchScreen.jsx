import { useState } from "react";
import StatusBar from "./StatusBar";
import NavBar from "./NavBar";
import { searchItems } from "../data/groceries";

export default function SearchScreen({ navigate }) {
  const [query, setQuery] = useState("");
  const [sugg, setSugg] = useState([]);
  const go = (item) => navigate("results",{query:item.name,item});
  const onInput = (v) => { setQuery(v); setSugg(v.trim().length>1?searchItems(v).slice(0,8):[]); };

  return (
    <>
      <StatusBar/>
      <div style={{background:"var(--surface)",padding:"10px 16px 16px",borderBottom:"1px solid var(--border)"}}>
        <h2 style={{fontSize:22,fontWeight:800,color:"var(--text)",marginBottom:14,letterSpacing:"-0.4px"}}>Search</h2>
        <div className="search-wrap">
          <span style={{fontSize:16,opacity:0.5}}>🔍</span>
          <input type="text" placeholder="Search any item across all stores…" value={query}
            onChange={e=>onInput(e.target.value)} autoFocus autoComplete="off"/>
        </div>
      </div>
      <div className="screen-content" style={{paddingTop:10}}>
        {sugg.length>0&&(
          <div className="card-section">
            {sugg.map(item=>(
              <div key={item.id} onClick={()=>go(item)} className="deal-row">
                <div style={{display:"flex",alignItems:"center",gap:12}}>
                  <div style={{width:36,height:36,background:"var(--blue-lt)",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,flexShrink:0}}>🔍</div>
                  <div className="deal-item-name">{item.name}</div>
                </div>
                <span style={{color:"var(--text-4)",fontSize:16}}>›</span>
              </div>
            ))}
          </div>
        )}
        {!query&&(
          <div style={{textAlign:"center",paddingTop:64,paddingBottom:20}}>
            <div style={{fontSize:48,marginBottom:14,opacity:0.3}}>🔍</div>
            <p style={{fontSize:16,fontWeight:700,color:"var(--text-2)"}}>Search across 4 stores</p>
            <p style={{fontSize:13,color:"var(--text-4)",marginTop:6}}>milk · eggs · bread · chicken · cheese</p>
          </div>
        )}
        {query.length>1&&sugg.length===0&&(
          <div style={{textAlign:"center",paddingTop:64}}>
            <div style={{fontSize:40,marginBottom:12,opacity:0.3}}>🤷</div>
            <p style={{fontSize:15,fontWeight:700,color:"var(--text-2)"}}>No results for "{query}"</p>
          </div>
        )}
      </div>
      <NavBar navigate={navigate} active="search"/>
    </>
  );
}
