import { Search } from "lucide-react";

export const Header = () => {
  return (
    <header>
      <div id="left-layout">
        <div id="logo">
          <a href="#" onClick={() => alert("Beauty Home")}>
            Beauty<span>Home</span>
          </a>
        </div>
      </div>
      <div id="middle-layout">
        <Search id="search-icon" />
        <input type="text" placeholder="Search..." />
      </div>
      <div id="right-layout">
        <ul>
          <li>1item</li>
          <li>2item</li>
          <li>3item</li>
        </ul>
      </div>
    </header>
  );
};

// export default Header;
