# EmailJS Setup Instructions

To enable the contact form to send emails to `osaganiperera123@gmail.com`, follow these steps:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account

## 2. Add Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (recommended)
4. Follow the instructions to connect your Gmail account
5. Note down the **Service ID**

## 3. Create Email Template
1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent through the contact form on your website.
```

4. Set the "To Email" to: `osaganiperera123@gmail.com`
5. Note down the **Template ID**

## 4. Get Public Key
1. Go to "API Keys" in EmailJS dashboard
2. Copy your **Public Key**

## 5. Update Configuration
1. Open `src/config/emailjs.js`
2. Replace the placeholder values with your actual EmailJS credentials:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: "your_actual_service_id",
  TEMPLATE_ID: "your_actual_template_id", 
  PUBLIC_KEY: "your_actual_public_key",
  TO_EMAIL: "osaganiperera123@gmail.com"
};
```

## 6. Test the Form
1. Start your development server: `npm run dev`
2. Navigate to the Contact section
3. Fill out and submit the form
4. Check `osaganiperera123@gmail.com` for the test message

## Template Variables Available
The following variables are automatically passed to your EmailJS template:
- `{{from_name}}` - Name from the contact form
- `{{from_email}}` - Email address from the contact form
- `{{message}}` - Message content from the contact form
- `{{to_email}}` - Destination email (osaganiperera123@gmail.com)

## Free Tier Limits
EmailJS free tier includes:
- 200 emails per month
- 2 email services
- 2 email templates

This should be sufficient for most personal/portfolio websites.
