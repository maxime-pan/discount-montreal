import { useState } from "react";
import StatusBar from "./StatusBar";
import NavBar from "./NavBar";
import { searchItems } from "../data/groceries";

export default function ListScreen({ navigate }) {
  const [list,setList]=useState([{id:1,name:"2% Milk (2L)",done:false},{id:2,name:"Eggs (12pk)",done:false}]);
  const [input,setInput]=useState(""); const [sugg,setSugg]=useState([]);
  const change=(v)=>{setInput(v);setSugg(v.length>1?searchItems(v).slice(0,5):[]);};
  const add=(n)=>{if(!n.trim())return;setList(p=>[...p,{id:Date.now(),name:n.trim(),done:false}]);setInput("");setSugg([]);};
  const toggle=(id)=>setList(p=>p.map(i=>i.id===id?{...i,done:!i.done}:i));
  const remove=(id)=>setList(p=>p.filter(i=>i.id!==id));
  const find=(name)=>{const f=searchItems(name);if(f[0])navigate("results",{query:f[0].name,item:f[0]});};
  const pending=list.filter(i=>!i.done); const done=list.filter(i=>i.done);

  return (
    <>
      <StatusBar/>
      <div style={{background:"var(--surface)",padding:"10px 16px 16px",borderBottom:"1px solid var(--border)"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14}}>
          <h2 style={{fontSize:22,fontWeight:800,color:"var(--text)",letterSpacing:"-0.4px"}}>My list</h2>
          {list.length>0&&<span style={{fontSize:12,fontWeight:600,color:"var(--text-4)"}}>{pending.length} remaining</span>}
        </div>
        <div style={{position:"relative"}}>
          <div style={{display:"flex",gap:8}}>
            <div className="search-wrap" style={{flex:1}}>
              <span style={{opacity:0.4}}>➕</span>
              <input type="text" placeholder="Add an item…" value={input} onChange={e=>change(e.target.value)} onKeyDown={e=>e.key==="Enter"&&add(input)} autoComplete="off"/>
            </div>
            <button onClick={()=>add(input)} style={{background:"var(--blue)",color:"#fff",border:"none",borderRadius:14,padding:"0 16px",fontFamily:"inherit",fontWeight:700,fontSize:14,cursor:"pointer",flexShrink:0,boxShadow:"var(--blue-glow)"}}>Add</button>
          </div>
          {sugg.length>0&&(
            <div style={{position:"absolute",top:"calc(100%+6px)",left:0,right:56,marginTop:6,background:"var(--surface2)",borderRadius:14,boxShadow:"var(--shadow-lg)",zIndex:20,overflow:"hidden",border:"1px solid var(--border2)"}}>
              {sugg.map(s=>(
                <div key={s.id} onClick={()=>add(s.name)} className="deal-row" style={{padding:"11px 14px"}}>
                  <span style={{fontSize:14,fontWeight:600,color:"var(--text)"}}>{s.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="screen-content" style={{paddingTop:12}}>
        {list.length===0?(
          <div style={{textAlign:"center",paddingTop:70}}>
            <div style={{fontSize:48,marginBottom:12,opacity:0.2}}>🛒</div>
            <p style={{fontSize:16,fontWeight:700,color:"var(--text-2)"}}>Your list is empty</p>
            <p style={{fontSize:13,color:"var(--text-4)",marginTop:6}}>Add items above to start</p>
          </div>
        ):(
          <>
            {pending.length>0&&(
              <>
                <p className="section-label" style={{marginBottom:8}}>To buy · {pending.length}</p>
                <div className="card-section">
                  {pending.map(item=>(
                    <div key={item.id} style={{display:"flex",alignItems:"center",padding:"13px 16px",borderBottom:"1px solid var(--border)",gap:12}}>
                      <button onClick={()=>toggle(item.id)} style={{width:22,height:22,borderRadius:7,border:"1.5px solid var(--border2)",background:"none",cursor:"pointer",flexShrink:0,transition:"all 0.15s"}}
                        onMouseEnter={e=>{e.currentTarget.style.borderColor="var(--green)";}}
                        onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--border2)";}}/>
                      <div style={{flex:1,cursor:"pointer"}} onClick={()=>find(item.name)}>
                        <div style={{fontSize:14,fontWeight:600,color:"var(--text)"}}>{item.name}</div>
                        <div style={{fontSize:12,color:"var(--blue)",marginTop:2,fontWeight:500}}>Find best deal →</div>
                      </div>
                      <button onClick={()=>remove(item.id)} style={{background:"none",border:"none",cursor:"pointer",fontSize:16,color:"var(--text-4)",padding:"4px",transition:"color 0.15s"}}
                        onMouseEnter={e=>e.currentTarget.style.color="var(--red)"}
                        onMouseLeave={e=>e.currentTarget.style.color="var(--text-4)"}>✕</button>
                    </div>
                  ))}
                </div>
              </>
            )}
            {done.length>0&&(
              <>
                <p className="section-label" style={{marginBottom:8,marginTop:16}}>Done ✓</p>
                <div className="card-section" style={{opacity:0.5}}>
                  {done.map(item=>(
                    <div key={item.id} style={{display:"flex",alignItems:"center",padding:"13px 16px",borderBottom:"1px solid var(--border)",gap:12}}>
                      <button onClick={()=>toggle(item.id)} style={{width:22,height:22,borderRadius:7,border:"none",background:"var(--green)",cursor:"pointer",flexShrink:0,color:"#fff",fontSize:12,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700}}>✓</button>
                      <div style={{fontSize:14,fontWeight:500,color:"var(--text-3)",textDecoration:"line-through",flex:1}}>{item.name}</div>
                      <button onClick={()=>remove(item.id)} style={{background:"none",border:"none",cursor:"pointer",fontSize:16,color:"var(--text-4)",padding:"4px"}}>✕</button>
                    </div>
                  ))}
                </div>
              </>
            )}
            <div style={{height:16}}/>
          </>
        )}
      </div>
      <NavBar navigate={navigate} active="list"/>
    </>
  );
}
