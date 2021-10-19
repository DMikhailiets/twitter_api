import React from "react";
import "./App.css";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { Switch, Input, Layout } from "antd";
import { Route } from 'react-router-dom' 
import { RootComponent } from './pages/index'

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState();
  const { switcher, currentTheme, status, themes } = useThemeSwitcher();

  const toggleTheme = (isChecked) => {
    setIsDarkMode(isChecked);
    switcher({ theme: isChecked ? themes.dark : themes.light });
  };

  // Avoid theme change flicker
  if (status === "loading") {
    return null;
  }

  return (
    <Layout>
      <header className="header">
        Night mode
        <Switch checked={isDarkMode} onChange={toggleTheme} style={{marginLeft: '1%'}}/>
      </header>
      
        <Route path={["/"]} render = { () => <RootComponent/>}/>
      
    </Layout>
  );
}

export default App;
