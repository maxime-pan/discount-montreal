import { useState, useEffect } from "react";
import StatusBar from "./StatusBar";
import NavBar from "./NavBar";
import { categories, searchItems } from "../data/groceries";

const TIPS = ["milk","eggs","chicken breast","bread","cheese","pasta","olive oil","yogurt"];
const FEATURED = [
  { key:"milk",    name:"2% Milk (2L)",        store:"Maxi",  price:"$3.82", disc:15, emoji:"🥛" },
  { key:"eggs",    name:"Eggs (12pk)",           store:"Metro", price:"$4.49", disc:10, emoji:"🥚" },
  { key:"chicken", name:"Chicken Breast (1kg)", store:"Metro", price:"$9.34", disc:15, emoji:"🍗" },
];

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  return "Good evening";
}

export default function Home({ navigate }) {
  const [query, setQuery] = useState("");
  const [sugg, setSugg] = useState([]);
  const [tipIdx, setTipIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTipIdx(i => (i+1) % TIPS.length), 2500);
    return () => clearInterval(id);
  }, []);

  const go = (item) => { setSugg([]); setQuery(""); navigate("results",{query:item.name,item}); };
  const onInput = (v) => { setQuery(v); setSugg(v.trim().length>1 ? searchItems(v).slice(0,5) : []); };
  const submit = (e) => { e.preventDefault(); const r=searchItems(query); if(r[0]) go(r[0]); };

  const TODAY = new Date().toLocaleDateString("en-CA",{weekday:"short",month:"short",day:"numeric"});

  return (
    <>
      {/* Hero */}
      <div className="hero-header">
        <StatusBar light />
        <div style={{position:"relative",zIndex:1,marginTop:10}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:18}}>
            <div className="location-chip"><div className="dot"/>Côte-des-Neiges</div>
            <div style={{fontSize:11,color:"rgba(255,255,255,0.4)",fontWeight:600,fontFamily:"'DM Mono',monospace"}}>{TODAY}</div>
          </div>
          <p style={{fontSize:12,color:"rgba(255,255,255,0.45)",fontWeight:600,letterSpacing:"0.05em",textTransform:"uppercase",marginBottom:6}}>{getGreeting()}</p>
          <h1 style={{fontSize:26,fontWeight:800,color:"#fff",lineHeight:1.25,marginBottom:18,letterSpacing:"-0.4px"}}>
            Find the cheapest<br/>groceries nearby
          </h1>
          {/* Search */}
          <form onSubmit={submit} style={{position:"relative"}}>
            <div style={{display:"flex",alignItems:"center",background:"rgba(255,255,255,0.1)",backdropFilter:"blur(20px)",borderRadius:14,padding:"12px 15px",gap:10,border:"1px solid rgba(255,255,255,0.18)",boxShadow:"0 4px 24px rgba(0,0,0,0.3)"}}>
              <span style={{fontSize:16,opacity:0.6}}>🔍</span>
              <input type="text" value={query} onChange={e=>onInput(e.target.value)}
                placeholder={`Try "${TIPS[tipIdx]}"…`} autoComplete="off"
                style={{flex:1,background:"none",border:"none",outline:"none",fontFamily:"inherit",fontSize:15,fontWeight:500,color:"#fff"}}/>
              {query && <button type="submit" style={{background:"var(--blue)",color:"#fff",border:"none",borderRadius:9,padding:"6px 14px",fontFamily:"inherit",fontWeight:700,fontSize:13,cursor:"pointer",boxShadow:"var(--blue-glow)"}}>Go</button>}
            </div>
            {sugg.length>0 && (
              <div style={{position:"absolute",top:"calc(100%+6px)",left:0,right:0,marginTop:6,background:"var(--surface2)",borderRadius:14,boxShadow:"var(--shadow-lg)",zIndex:30,overflow:"hidden",border:"1px solid var(--border2)"}}>
                {sugg.map(item=>(
                  <div key={item.id} onClick={()=>go(item)}
                    style={{padding:"13px 16px",cursor:"pointer",borderBottom:"1px solid var(--border)",fontSize:14,fontWeight:600,color:"var(--text)",display:"flex",alignItems:"center",gap:10,transition:"background 0.1s"}}
                    onMouseEnter={e=>e.currentTarget.style.background="var(--surface3)"}
                    onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
                    <span style={{opacity:0.3}}>🔍</span>{item.name}
                  </div>
                ))}
              </div>
            )}
          </form>
        </div>
      </div>

      <div className="screen-content">
        {/* Categories */}
        <div style={{padding:"20px 0 0"}}>
          <p className="section-label" style={{marginBottom:12}}>Categories</p>
          <div className="category-grid" style={{paddingBottom:4}}>
            {categories.map(cat=>(
              <button key={cat.id} className="cat-tile" onClick={()=>navigate("category",{category:cat})}>
                <span className="cat-emoji">{cat.emoji}</span>
                <span className="cat-label">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Hot deals */}
        <div style={{padding:"20px 0 20px"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px",marginBottom:12}}>
            <p className="section-label" style={{padding:0,marginBottom:0}}>🔥 Hot deals</p>
            <span style={{fontSize:11,color:"var(--gold)",fontWeight:700}}>This week</span>
          </div>
          <div className="card-section">
            {FEATURED.map((deal,i)=>(
              <div key={i} className="deal-row" onClick={()=>{const f=searchItems(deal.key);if(f[0])go(f[0]);}}>
                <div style={{display:"flex",alignItems:"center",gap:13}}>
                  <div style={{width:46,height:46,background:"var(--surface3)",borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,border:"1px solid var(--border)",flexShrink:0}}>{deal.emoji}</div>
                  <div>
                    <div className="deal-item-name">{deal.name}</div>
                    <div className="deal-store-name">📍 {deal.store}</div>
                  </div>
                </div>
                <div style={{textAlign:"right"}}>
                  <div className="deal-price">{deal.price}</div>
                  <span className="badge badge-green" style={{marginTop:3,display:"inline-block"}}>−{deal.disc}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <NavBar navigate={navigate} active="home"/>
    </>
  );
}
