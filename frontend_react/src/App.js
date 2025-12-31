import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { HomePage } from "./pages/HomePage";
import { PostDetailPage } from "./pages/PostDetailPage";

/**
 * Application root.
 */

// PUBLIC_INTERFACE
function App() {
  /** Entrypoint component: provides global layout and route configuration. */
  return (
    <div className="AppShell">
      <a className="skipLink" href="#main">
        Skip to content
      </a>

      <SiteHeader />

      <div id="main" className="mainWrap">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:slug" element={<PostDetailPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      <SiteFooter />
    </div>
  );
}

export default App;
