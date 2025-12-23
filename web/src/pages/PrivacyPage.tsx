import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { canonicalForPath } from "../seo/site";
import "./LegalPage.css";

export default function PrivacyPage() {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    fetch("/PRIVACY_POLICY.md")
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch(() => {
        setContent(`# Privacy Policy

Last updated: ${new Date().toLocaleDateString()}

## Introduction

VeriFlash ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application.

## Information We Collect

### Device Information
- Platform (iOS)
- Bundle ID
- App Version

### Usage Data
- Fact-check requests and results
- Request timestamps
- Processing times

### Authentication Data
- Device identifiers
- Authentication tokens (stored securely)

## How We Use Your Information

We use the information we collect to:
- Provide fact-checking services
- Improve our services
- Prevent abuse and ensure security
- Comply with legal obligations

## Data Storage

- All data is stored securely on our servers
- Authentication tokens are hashed before storage
- We retain request data for observability and abuse prevention

## Your Rights

You have the right to:
- Access your data
- Request deletion of your data
- Opt out of data collection (by uninstalling the app)

## Contact Us

If you have questions about this Privacy Policy, please contact us at support@veriflash.com.`);
      });
  }, []);

  return (
    <div className="legal-page">
      <Helmet>
        <title>Privacy Policy | VeriFlash</title>
        <meta name="description" content="VeriFlash privacy policy." />
        <link rel="canonical" href={canonicalForPath("/privacy")} />
        <meta property="og:title" content="Privacy Policy | VeriFlash" />
        <meta property="og:description" content="VeriFlash privacy policy." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalForPath("/privacy")} />
      </Helmet>
      <div className="container">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}



