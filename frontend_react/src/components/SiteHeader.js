import React from "react";
import { Link, NavLink } from "react-router-dom";

/**
 * Site-wide header and navigation.
 */

// PUBLIC_INTERFACE
export function SiteHeader() {
  /** Renders the sticky header with site title and navigation. */
  return (
    <header className="siteHeader">
      <div className="container headerInner">
        <Link className="brand" to="/" aria-label="Free Mans Journey home">
          <span className="brandMark" aria-hidden="true" />
          <div className="brandText">
            <div className="brandTitle">Free Mans Journey</div>
            <div className="brandTagline">Stories, notes, and practical freedom</div>
          </div>
        </Link>

        <nav className="nav" aria-label="Primary">
          <NavLink to="/" className={({ isActive }) => `navLink ${isActive ? "active" : ""}`}>
            Home
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
