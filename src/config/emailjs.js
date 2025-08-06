// EmailJS Configuration
// To set this up:
// 1. Go to https://www.emailjs.com/
// 2. Create a free account
// 3. Add an email service (Gmail recommended)
// 4. Create an email template
// 5. Get your Public Key from the API Keys section
// 6. Replace the values below with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  // Your EmailJS Service ID (from EmailJS dashboard)
  SERVICE_ID: "your_service_id_here",
  
  // Your EmailJS Template ID (from EmailJS dashboard)
  TEMPLATE_ID: "your_template_id_here", 
  
  // Your EmailJS Public Key (from EmailJS dashboard)
  PUBLIC_KEY: "your_public_key_here",
  
  // The email address where messages should be sent
  TO_EMAIL: "osaganiperera123@gmail.com"
};

// Example template variables that will be available in your EmailJS template:
// {{from_name}} - Name from the form
// {{from_email}} - Email from the form  
// {{message}} - Message from the form
// {{to_email}} - Destination email (osaganiperera123@gmail.com)
