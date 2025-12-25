# Privacy Policy

Last updated: December 23, 2025

## Summary (plain English)

- VeriFlash helps you fact-check claims. You can type a claim or extract text using on-device OCR.
- **Privacy**: Uses OCR on your screenshot; a copy of your fact-check history is stored on your device and on the VeriFlash backend associated with a non-reversible hashed device identifier
- **Your data is cleaned locally to remove system info before being verified by privacy-protected AI.**
- When you run a fact-check, we send the claim text (or OCR-extracted text you choose to submit) to our backend to process and return a result.
- If you enable push notifications, we store an APNs device token so we can notify you when queued fact-checks finish.
- The iOS app may show ads (Google AdMob). Ads may involve device identifiers and related data as described by Google.

## Information we collect

### Claim content you submit
- **Claim text** you enter, paste, or submit after OCR.
- **Associated metadata** such as request identifiers and timestamps.

### On-device OCR / Photos / Screenshots
- If you choose to use OCR, the app may request access to **Photos** (or screenshots) to extract text on-device.
- We do **not** need your full photo library on our servers to provide OCR; the app extracts text locally and you choose what to submit for fact-checking.
- **Geometry-Aware Filtering (data minimization)**: When extracting text from a screenshot, the app can automatically detect and discard common system UI elements (such as battery indicator, carrier name, and time) locally on your device before any text is sent to our servers. This supports purpose-limitation and data minimization principles (e.g., GDPR/CCPA).

### Device and app information
- Platform (iOS)
- App version
- Bundle ID
- Basic diagnostics needed for reliability and abuse prevention

### Push notification registration (optional)
If you enable notifications, we store:
- **APNs device token** (an identifier issued by Apple)
- Notification preferences (e.g., whether you enabled in-app notifications and “detailed” notifications)
- Environment/topic needed to deliver pushes correctly (production vs development; bundle ID)

### Advertising (Google AdMob) (if shown in the app)
If the app displays ads using Google AdMob:
- Google may collect and process data such as device identifiers, IP address, coarse location, and ad interaction data in accordance with Google’s policies and your device settings.
- **App Tracking Transparency (ATT) and ad serving**: If you allow tracking via Apple’s App Tracking Transparency prompt (or iOS Settings), AdMob may be able to use device identifiers and related signals to help deliver more relevant (potentially personalized) ads, subject to Google’s policies and regional rules. If you decline tracking, we request **non‑personalized ads** where supported and limit the use of tracking-related identifiers, subject to platform capabilities and Google’s controls.

## How we use information

We use collected information to:
- Provide the fact-checking service and return results
- Deliver push notifications for queued fact-check completion (if enabled)
- Prevent abuse (rate limiting) and protect the service
- Debug reliability issues and improve the product

### AI data processing disclosure
To provide fact-checking results, VeriFlash uses third-party AI providers (for example, OpenAI and Anthropic) to help analyze claim text and produce a response.

- **What is sent**: the claim text (and any OCR-extracted text you choose to submit), plus limited technical metadata needed for processing (e.g., request identifiers).
- **How it is used**: the text is transmitted for analysis to generate a fact-check result.
- **No training**: we do not permit the claim text you submit to be used to train the underlying AI models. Where available, we use provider settings and contractual terms intended to prevent training on submitted content, consistent with Apple’s App Store guideline 5.1.2(i).

## Data storage and retention

- **Local history**: The app may store your recent fact-check history on-device.
- **Backend history**: A copy of your fact-check history may be stored on the VeriFlash backend and associated with a non-reversible hashed device identifier.
- **Backend processing**: We process claims on our servers and may retain limited request and result data for reliability, security, and abuse prevention.
- **Push tokens**: Stored only to deliver notifications and may be disabled/removed when you unregister or stop using notifications.

## Automated decision-making (ADMT)
VeriFlash provides fact-check results using automated processing, including AI-assisted analysis.

- **How it works (high level)**: our systems analyze the text you submit, may retrieve and summarize information from public web sources, and generate a verdict category and confidence indicator intended to help you understand whether a claim appears true, false, mixed, or unverifiable.
- **Human review**: results are generated automatically and may not be reviewed by a human before being shown to you.
- **Your rights**: depending on your jurisdiction (including GDPR Article 22 and certain 2025 U.S. state amendments such as Connecticut/California), you may have the right to contest a result, request an explanation, or request that we re-check a claim. To exercise these rights, contact us at support@veriflash.com and include the claim text and (if available) the request identifier shown in the app.

## Third-party services

VeriFlash may rely on third-party services to operate, which may include:
- AI model providers used to analyze claims
- External sources and websites referenced as evidence
- Google AdMob (for ads, if enabled in the app)

These providers have their own privacy practices. We recommend reviewing their policies where applicable.

## Your choices and controls

- **Notifications**: You can disable notifications at any time in the app or in iOS Settings.
- **Photos/OCR**: You can deny Photos permission; OCR is optional.
- **Delete local history**: You can remove the app or clear history within the app (if provided).
- **Request deletion**: You can contact us to request deletion of server-side data associated with your device, subject to legal and security retention needs.

## Contact

If you have questions about this Privacy Policy, contact us at support@veriflash.com.



