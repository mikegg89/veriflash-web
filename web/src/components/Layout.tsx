import { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./Layout.css";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <header className="header">
        <div className="container">
          <Link to="/" className="logo">
            <span className="app-icon app-icon--sm logo-icon-wrap" aria-hidden="true">
              <img src="/Veriflash_app_icon.png" alt="VeriFlash" className="logo-icon" />
            </span>
            <span>VeriFlash</span>
          </Link>
          <nav className="nav">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/license">License</Link>
          </nav>
        </div>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} VeriFlash. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}



