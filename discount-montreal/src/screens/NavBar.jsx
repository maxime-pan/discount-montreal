export default function NavBar({ navigate, active }) {
  const tabs = [
    { id:"home",    icon:"🏠", label:"Home",    screen:"home" },
    { id:"search",  icon:"🔍", label:"Search",  screen:"search" },
    { id:"list",    icon:"🛒", label:"List",    screen:"list" },
    { id:"profile", icon:"👤", label:"Profile", screen:"profile" },
  ];
  return (
    <div className="nav-bar">
      {tabs.map(tab => (
        <button key={tab.id} className={`nav-item ${active===tab.id?"active":""}`} onClick={()=>navigate(tab.screen)}>
          <div className="nav-icon-wrap"><span className="nav-icon">{tab.icon}</span></div>
          {tab.label}
        </button>
      ))}
    </div>
  );
}
