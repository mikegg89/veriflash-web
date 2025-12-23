import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { canonicalForPath } from "../seo/site";
import "./LegalPage.css";

export default function LicensePage() {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    fetch("/EULA.md")
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch(() => {
        setContent(`# End User License Agreement (EULA)

Last updated: ${new Date().toLocaleDateString()}

This End User License Agreement (“EULA”) is between you and VeriFlash, and governs your use of the VeriFlash iOS application (the “App”).

## Acknowledgement (Apple)

You acknowledge that:
- **Apple is not a party** to this EULA.
- VeriFlash, not Apple, is solely responsible for the App and its content.
- Apple has no obligation to provide any maintenance or support services for the App.

## License grant

Subject to your compliance with this EULA, VeriFlash grants you a limited, non‑exclusive, non‑transferable, revocable license to download and use the App on Apple‑branded products that you own or control, as permitted by the Apple Media Services Terms and Conditions.

## Restrictions

You may not:
- Copy, modify, or distribute the App except as permitted by law
- Reverse engineer, decompile, or attempt to derive source code of the App except where permitted by law
- Remove or alter proprietary notices
- Use the App for unlawful purposes

## Subscriptions

If the App offers subscriptions (e.g., VeriFlash Pro), purchases are processed by Apple through In‑App Purchase. Subscription terms, renewal, cancellation, and refunds are governed by Apple’s policies (see iOS Settings → Apple ID → Subscriptions).

## Privacy

Use of the App is also governed by the VeriFlash Privacy Policy.

## Disclaimer

THE APP IS PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND.

## Limitation of liability

TO THE MAXIMUM EXTENT PERMITTED BY LAW, VERIFLASH SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.

## Governing law

This EULA is governed by the laws of the State of **Texas**, without regard to conflict of law rules.

## Contact

For questions about this EULA, contact support@veriflash.com.`);
      });
  }, []);

  return (
    <div className="legal-page">
      <Helmet>
        <title>End User License Agreement | VeriFlash</title>
        <meta name="description" content="VeriFlash end user license agreement (EULA)." />
        <link rel="canonical" href={canonicalForPath("/license")} />
        <meta property="og:title" content="End User License Agreement | VeriFlash" />
        <meta property="og:description" content="VeriFlash end user license agreement (EULA)." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalForPath("/license")} />
      </Helmet>
      <div className="container">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}



