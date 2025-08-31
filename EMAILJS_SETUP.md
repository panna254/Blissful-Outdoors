# EmailJS Setup Guide for Blissful Outdoors Solutions

## Overview
This guide will help you configure EmailJS to use `info@blissfuloutdoorsolutions.com` for receiving contact form and quotation submissions.

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account using `info@blissfuloutdoorsolutions.com`
3. Verify your email address

## Step 2: Connect Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Configure with `info@blissfuloutdoorsolutions.com` credentials
5. Note down the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Templates

### Contact Form Template
1. Go to **Email Templates** → **Create New Template**
2. Template ID: `template_contact` (or similar)
3. **Subject**: `New Contact Form Submission - {{from_name}}`
4. **Content**:
```
New contact form submission from your website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from Blissful Outdoors Website
```

### Quotation Form Template
1. Create another template with ID: `template_quotation`
2. **Subject**: `New Quotation Request - {{service_type}}`
3. **Content**:
```
New quotation request from your website:

=== CLIENT INFORMATION ===
Name: {{client_name}}
Email: {{client_email}}
Phone: {{client_phone}}
Location: {{location}}

=== PROJECT DETAILS ===
Service: {{service_type}}
Project Type: {{project_type}}
Timeline: {{timeline}}
Budget Range: {{budget}}

Project Description:
{{project_description}}

=== SITE SURVEY ===
Survey Required: {{survey_required}}
Survey Cost: {{survey_cost}}

---
Sent from Blissful Outdoors Quotation Form
```

## Step 4: Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key** (e.g., `user_abc123xyz`)

## Step 5: Update Environment Variables
1. Create `.env` file in project root (copy from `.env.example`)
2. Update with your actual credentials:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_contact
VITE_EMAILJS_QUOTATION_TEMPLATE_ID=template_quotation
VITE_EMAILJS_PUBLIC_KEY=user_abc123xyz
VITE_TARGET_EMAIL=info@blissfuloutdoorsolutions.com
```

## Step 6: Test Configuration
1. Start your development server: `npm run dev`
2. Test both contact form and quotation form
3. Check `info@blissfuloutdoorsolutions.com` for received emails

## Security Notes
- Never commit `.env` file to version control
- Keep your EmailJS credentials secure
- Monitor usage in EmailJS dashboard to avoid quota limits

## Troubleshooting
- Ensure email service is properly connected
- Check template variable names match form fields
- Verify public key is correct
- Check browser console for EmailJS errors

## Current Form Fields

### Contact Form (`ContactForm.jsx`)
- `from_name` - Client name
- `from_email` - Client email
- `phone` - Phone number
- `subject` - Message subject
- `message` - Message content

### Quotation Form (`QuotationForm.jsx`)
- `client_name` - Client name
- `client_email` - Client email
- `client_phone` - Phone number
- `service_type` - Selected service
- `project_type` - Project type
- `location` - Project location
- `timeline` - Project timeline
- `budget` - Budget range
- `project_description` - Detailed description
- `survey_required` - Survey requirement
- `survey_cost` - Survey cost

All emails will be sent to: **info@blissfuloutdoorsolutions.com**
