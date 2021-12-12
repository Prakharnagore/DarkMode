import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";
import DarkModeToggle from "react-dark-mode-toggle";

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const [theme, setTheme] = useState(getStorageTheme());

  useEffect(() => {
    if (isDarkMode) {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
    document.documentElement.className = theme;

    localStorage.setItem("theme", theme);
  }, [isDarkMode, theme]);

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>Dark Mode</h1>
          <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={80}
          />
        </div>
      </nav>
      <section className="articles">
        {data.map((item) => {
          return <Article key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
}

export default App;
