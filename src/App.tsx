import React from "react";
import "./App.css";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { Switch, Input, Layout } from "antd";
// import { Route } from 'react-router-dom' 
import { RootComponent } from './pages/index'

const {Search} = Input

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState();
  const { switcher, currentTheme, status, themes } = useThemeSwitcher();

  const toggleTheme = (isChecked: any) => {
    setIsDarkMode(isChecked);
    switcher({ theme: isChecked ? themes.dark : themes.light });
  };

  // Avoid theme change flicker
  if (status === "loading") {
    return null;
  }

  return (
    <Layout>
       <div className="main fade-in">
      <h1>The current theme is: {currentTheme}</h1>
      <Switch checked={isDarkMode} onChange={toggleTheme} />

      <Search enterButton='Search'></Search>
    </div>
    </Layout>
  );
}

export default App;