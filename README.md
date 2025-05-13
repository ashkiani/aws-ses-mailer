# aws-ses-mailer
Lightweight AWS SES email sender for Node.js — simple utility to send HTML/text emails with optional reply-to, built on AWS SDK v3.


# @ashkiani/aws-ses-mailer

Simple and reusable AWS SES email sender for Node.js apps using the AWS SDK v3.

This utility wraps common email-sending functionality with support for plain text, HTML, subject, and reply-to addresses — ideal for backend services, alerts, and transactional email delivery.

---

## 📦 Installation

```bash
npm install @ashkiani/aws-ses-mailer
```bash

---

## 🛠 Usage

1. Set your environment variable:

```env
AWS_REGION=us-east-1
```

2. Import and use the module:

```js
const mailer = require('@ashkiani/aws-ses-mailer');

await mailer.sendMail(
    "recipient@example.com",
    "sender@yourdomain.com",
    "This is the plain text body",
    "<p>This is the <strong>HTML</strong> body</p>",
    "Test Email Subject",
    "replyto@yourdomain.com"
);
```

---

## 📘 API

### `sendMail(to, from, textBody, htmlBody, subject, replyTo)`

| Param      | Type   | Description                          |
| ---------- | ------ | ------------------------------------ |
| `to`       | string | Recipient email address              |
| `from`     | string | Sender email (must be SES verified)  |
| `textBody` | string | Plain text version of the email body |
| `htmlBody` | string | HTML version of the email body       |
| `subject`  | string | Email subject line                   |
| `replyTo`  | string | (Optional) Reply-to address          |

Returns an SES send result object on success.

---

## 💡 Notes

* Built using [@aws-sdk/client-ses](https://www.npmjs.com/package/@aws-sdk/client-ses).
* Sender (`from`) address must be verified in your AWS SES setup.
* Supports both HTML and plain text emails for better deliverability.
* You can add `CcAddresses` or multiple recipients by modifying the source code if needed.

---

## 📄 License

MIT © Siavash Ashkiani