import { useState } from "react";
import Home from "./screens/Home";
import Results from "./screens/Results";
import Compare from "./screens/Compare";
import StoreDetail from "./screens/StoreDetail";
import Category from "./screens/Category";
import SearchScreen from "./screens/SearchScreen";
import ListScreen from "./screens/ListScreen";
import ProfileScreen from "./screens/ProfileScreen";
import "./index.css";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedStore, setSelectedStore] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const navigate = (to, params = {}) => {
    if (params.query    !== undefined) setSearchQuery(params.query);
    if (params.item     !== undefined) setSelectedItem(params.item);
    if (params.store    !== undefined) setSelectedStore(params.store);
    if (params.category !== undefined) setSelectedCategory(params.category);
    setScreen(to);
  };

  return (
    <div className="app-shell">
      <div className="phone-frame">
        {screen === "home"     && <Home      navigate={navigate} />}
        {screen === "results"  && <Results   query={searchQuery} navigate={navigate} />}
        {screen === "compare"  && <Compare   item={selectedItem} navigate={navigate} />}
        {screen === "detail"   && <StoreDetail store={selectedStore} navigate={navigate} />}
        {screen === "category" && <Category  category={selectedCategory} navigate={navigate} />}
        {screen === "search"   && <SearchScreen navigate={navigate} />}
        {screen === "list"     && <ListScreen   navigate={navigate} />}
        {screen === "profile"  && <ProfileScreen navigate={navigate} />}
      </div>
    </div>
  );
}
