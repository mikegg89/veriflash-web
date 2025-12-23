import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { canonicalForPath } from "../seo/site";
import "./LegalPage.css";

export default function TermsPage() {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    fetch("/TERMS_OF_SERVICE.md")
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch(() => {
        setContent(`# Terms of Service

Last updated: ${new Date().toLocaleDateString()}

## Agreement to Terms

By accessing or using VeriFlash, you agree to be bound by these Terms of Service.

## Description of Service

VeriFlash provides fact-checking services through a mobile application. We use AI technology to analyze claims and provide fact-check results.

## User Responsibilities

You agree to:
- Use the service only for lawful purposes
- Not abuse or attempt to circumvent rate limits
- Not use the service to generate false or misleading information
- Respect intellectual property rights

## Service Availability

We strive to maintain high availability but do not guarantee uninterrupted service. We reserve the right to:
- Modify or discontinue the service
- Implement rate limits
- Restrict access for abuse prevention

## Limitation of Liability

VeriFlash is provided "as is" without warranties. We are not liable for:
- Accuracy of fact-check results
- Decisions made based on our service
- Service interruptions or errors

## Changes to Terms

We may update these terms at any time. Continued use constitutes acceptance of changes.

## Contact Us

For questions about these Terms, contact us at support@veriflash.com.`);
      });
  }, []);

  return (
    <div className="legal-page">
      <Helmet>
        <title>Terms of Service | VeriFlash</title>
        <meta name="description" content="VeriFlash terms of service." />
        <link rel="canonical" href={canonicalForPath("/terms")} />
        <meta property="og:title" content="Terms of Service | VeriFlash" />
        <meta property="og:description" content="VeriFlash terms of service." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalForPath("/terms")} />
      </Helmet>
      <div className="container">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}



