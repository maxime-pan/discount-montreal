import { useState, useEffect } from "react";
import StatusBar from "./StatusBar";
import NavBar from "./NavBar";

export default function ProfileScreen({ navigate }) {
  const [now, setNow] = useState(new Date());
  useEffect(()=>{const id=setInterval(()=>setNow(new Date()),1000);return()=>clearInterval(id);},[]);
  const h=now.getHours(),m=now.getMinutes().toString().padStart(2,"0"),s=now.getSeconds().toString().padStart(2,"0");
  const ampm=h>=12?"PM":"AM",h12=(h%12)||12;
  const TIME=`${h12}:${m}:${s} ${ampm}`;
  const DATE=now.toLocaleDateString("en-CA",{weekday:"long",month:"long",day:"numeric",year:"numeric"});

  const team=[
    {name:"Mohammad Alhaji",id:"40264810",initials:"MA",color:"#0A84FF"},
    {name:"Ming Pan",id:"40031821",initials:"MP",color:"#30D158"},
    {name:"Adam Mohammed Dahmane",id:"40251506",initials:"AM",color:"#F5A623"},
    {name:"Nkrumah Leugoue Nougoue",id:"40258711",initials:"NL",color:"#FF453A"},
  ];
  const stats=[
    {v:"4",l:"Stores",i:"🏪"},{v:"40",l:"Items",i:"🛒"},
    {v:"6",l:"Categories",i:"📦"},{v:"~15%",l:"Avg. saving",i:"💰"},
  ];

  return (
    <>
      {/* Dark hero */}
      <div style={{background:"linear-gradient(160deg,#0A1628 0%,#0D1F3C 50%,#0D0D0F 100%)",padding:"0 20px 28px",position:"relative",overflow:"hidden",flexShrink:0}}>
        <div style={{position:"absolute",top:"-40px",right:"-40px",width:"200px",height:"200px",background:"radial-gradient(circle,rgba(10,132,255,0.15) 0%,transparent 70%)",borderRadius:"50%",pointerEvents:"none"}}/>
        <StatusBar light/>
        <div style={{position:"relative",zIndex:1,marginTop:14,textAlign:"center",paddingBottom:4}}>
          <div style={{fontSize:44,marginBottom:8}}>🛒</div>
          <h2 style={{fontSize:20,fontWeight:800,color:"#fff",letterSpacing:"-0.3px"}}>Discount Montréal</h2>
          <p style={{fontSize:11,color:"rgba(255,255,255,0.4)",marginTop:4}}>SOEN 357 · Winter 2026 · Concordia University</p>
          {/* Live clock */}
          <div style={{marginTop:16,display:"inline-block",background:"rgba(255,255,255,0.07)",backdropFilter:"blur(10px)",borderRadius:14,padding:"10px 20px",border:"1px solid rgba(255,255,255,0.1)"}}>
            <div style={{fontSize:20,fontWeight:600,color:"#fff",fontFamily:"'DM Mono',monospace",letterSpacing:"0.02em"}}>{TIME}</div>
            <div style={{fontSize:11,color:"rgba(255,255,255,0.4)",marginTop:3}}>{DATE}</div>
          </div>
        </div>
      </div>

      <div className="screen-content">
        {/* Location */}
        <div style={{margin:"14px 16px 0"}}>
          <div style={{background:"var(--surface)",borderRadius:16,padding:"13px 16px",border:"1px solid var(--border)",display:"flex",alignItems:"center",gap:12}}>
            <div style={{width:40,height:40,borderRadius:12,background:"var(--blue-lt)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,flexShrink:0}}>📍</div>
            <div style={{flex:1}}>
              <div style={{fontSize:11,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.08em"}}>Simulated location</div>
              <div style={{fontSize:14,fontWeight:700,color:"var(--text)",marginTop:2}}>Côte-des-Neiges, Montréal</div>
            </div>
            <div style={{width:8,height:8,background:"var(--green)",borderRadius:"50%",boxShadow:"0 0 6px var(--green)",animation:"blink 2s infinite"}}/>
          </div>
        </div>

        {/* Stats */}
        <div style={{margin:"12px 16px 0",display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
          {stats.map(s=>(
            <div key={s.l} style={{background:"var(--surface)",borderRadius:16,padding:"14px 16px",border:"1px solid var(--border)"}}>
              <div style={{fontSize:22,marginBottom:6}}>{s.i}</div>
              <div style={{fontSize:24,fontWeight:800,color:"var(--text)",letterSpacing:"-0.5px",fontFamily:"'DM Mono',monospace"}}>{s.v}</div>
              <div style={{fontSize:12,color:"var(--text-3)",marginTop:2}}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Team */}
        <p className="section-label" style={{marginTop:20,marginBottom:8}}>Team 123</p>
        <div className="card-section">
          {team.map((m,i)=>(
            <div key={m.id} style={{display:"flex",alignItems:"center",padding:"13px 16px",borderBottom:i<team.length-1?"1px solid var(--border)":"none",gap:12}}>
              <div style={{width:38,height:38,borderRadius:11,background:m.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:800,color:"#fff",flexShrink:0}}>{m.initials}</div>
              <div style={{flex:1}}>
                <div style={{fontSize:14,fontWeight:600,color:"var(--text)"}}>{m.name}</div>
                <div style={{fontSize:12,color:"var(--text-4)",marginTop:1,fontFamily:"'DM Mono',monospace"}}>{m.id}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{height:20}}/>
      </div>
      <NavBar navigate={navigate} active="profile"/>
    </>
  );
}
