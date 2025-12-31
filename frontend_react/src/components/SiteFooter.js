import React from "react";

/**
 * Minimal footer.
 */

// PUBLIC_INTERFACE
export function SiteFooter() {
  /** Renders the minimal footer with copyright. */
  return (
    <footer className="siteFooter">
      <div className="container footerInner">
        <p className="footerText">
          © {new Date().getFullYear()} Free Mans Journey. Built with React.
        </p>
      </div>
    </footer>
  );
}
