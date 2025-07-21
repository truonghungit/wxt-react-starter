import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "./context/theme-context.tsx";
import AboutPage from "./features/about";
import SettingsPage from "./features/settings";
import CookiesPage from "./features/cookies";
import "./App.css";
import { Header } from "./components/layout/header.tsx";
import { ThemeSwitch } from "./components/theme-switch.tsx";
import { Main } from "./components/layout/main.tsx";
import { DefaultLayout } from "./components/layout/default-layout.tsx";
import { ProfileDropdown } from "./components/profile-dropdown.tsx";
import { NavItem } from "./components/layout/nav-item.tsx";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="cookie-editor-ui-theme">
      <Router>
        <DefaultLayout>
          <Header fixed>
            <nav style={{ display: "flex", gap: 12 }}>
              <NavItem>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[focus-visible]:outline-none data-[focus-visible]:ring-1 data-[focus-visible]:ring-ring focus-visible:outline-none underline-offset-4 data-[hovered]:underline h-9 py-2 px-2 text-foreground/60"
                >
                  Cookies
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to="/settings"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[focus-visible]:outline-none data-[focus-visible]:ring-1 data-[focus-visible]:ring-ring focus-visible:outline-none underline-offset-4 data-[hovered]:underline h-9 py-2 px-2 text-foreground/60"
                >
                  Settings
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[focus-visible]:outline-none data-[focus-visible]:ring-1 data-[focus-visible]:ring-ring focus-visible:outline-none underline-offset-4 data-[hovered]:underline h-9 py-2 px-2 text-foreground/60"
                >
                  About
                </Link>
              </NavItem>
            </nav>
            <div className="ml-auto flex items-center space-x-4">
              <ThemeSwitch />
              <ProfileDropdown />
            </div>
          </Header>
          <Main>
            <Routes>
              <Route path="/" element={<CookiesPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Main>
        </DefaultLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
