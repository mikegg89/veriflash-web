import "./HomePage.css";
import { Helmet } from "react-helmet-async";
import { canonicalForPath } from "../seo/site";

export default function HomePage() {
  return (
    <div className="home-page">
      <Helmet>
        <title>VeriFlash - Fact-Checking Made Simple</title>
        <meta
          name="description"
          content="VeriFlash helps you verify claims and fact-check information quickly and reliably."
        />
        <link rel="canonical" href={canonicalForPath("/")} />
        <meta property="og:title" content="VeriFlash - Fact-Checking Made Simple" />
        <meta
          property="og:description"
          content="VeriFlash helps you verify claims and fact-check information quickly and reliably."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalForPath("/")} />
        <meta property="og:image" content={`${window.location.origin}/Veriflash_app_icon.png`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="VeriFlash - Fact-Checking Made Simple" />
        <meta
          name="twitter:description"
          content="VeriFlash helps you verify claims and fact-check information quickly and reliably."
        />
      </Helmet>
      <div className="container">
        <div className="hero">
          <span className="app-icon app-icon--lg hero-icon-wrap" aria-hidden="true">
            <img
              src="/Veriflash_app_icon.png"
              alt="VeriFlash app icon"
              className="hero-icon"
            />
          </span>
          <h1>VeriFlash</h1>
          <p className="tagline">Fact-Checking Made Simple</p>
          <p className="description">
            Verify claims and fact-check information quickly and reliably with
            VeriFlash. Get instant, accurate fact-checking powered by advanced
            AI technology.
          </p>
          <div className="cta-section">
            <a
              href="https://apps.apple.com/us/app/veriflash/id6756589715"
              className="app-store-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1609459200"
                alt="Download on the App Store"
                className="app-store-badge"
              />
            </a>
          </div>
          <div className="features">
            <div className="feature">
              <h3>Fast & Accurate</h3>
              <p>Get fact-check results in seconds with high accuracy</p>
            </div>
            <div className="feature">
              <h3>Reliable Sources</h3>
              <p>Verified sources and citations for every fact-check</p>
            </div>
            <div className="feature">
              <h3>Easy to Use</h3>
              <p>Simple interface designed for quick verification</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



