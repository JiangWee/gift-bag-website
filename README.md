# GiftBuyBuy - Custom Laser Gift Bags Website

A modern, responsive B2B website for promoting custom laser holographic gift bags.

## 🌐 Live Website
**Domain:** www.giftbuybuy.com

## 📋 Features

- **Responsive Design** - Works on all devices
- **Modern UI** - Clean, professional design with animations
- **Contact Form** - Integrated with backend API for email notifications
- **SEO Optimized** - Meta tags and semantic HTML
- **B2B Focused** - Tailored for corporate clients

## 🛠 Tech Stack

- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript
- Google Fonts (Inter, Playfair Display)

## 📁 Project Structure

```
gift-bag-website/
├── index.html      # Main HTML file
├── style.css       # Stylesheet
├── app.js          # JavaScript interactions
├── README.md       # This file
└── images/         # Product images (add your images here)
    ├── 单个特写.png
    ├── 4款特写.png
    └── 多款宣传.png
```

## 🚀 Deployment to Vercel

### Prerequisites
1. A GitHub account
2. A Vercel account (sign up at vercel.com)

### Steps

1. **Create a new GitHub repository**
   - Go to github.com
   - Click "New repository"
   - Name it `gift-bag-website` (or your preferred name)
   - Make it Public
   - Click "Create repository"

2. **Push your code to GitHub**
   ```bash
   cd D:\code\gift-bag-website
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/gift-bag-website.git
   git push -u origin main
   ```

3. **Deploy to Vercel**
   - Go to vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Wait for deployment to complete

4. **Connect Custom Domain (www.giftbuybuy.com)**
   - In Vercel dashboard, go to your project
   - Click "Settings" → "Domains"
   - Add `www.giftbuybuy.com`
   - Follow Vercel's instructions to configure DNS

## 📧 Backend Integration

The contact form sends emails through the existing backend API:
- **Endpoint:** `POST /api/contact/send`
- **Backend:** Railway (existing `gift-shop-backend-vercel` repository)

Make sure the backend is running and CORS is configured to allow requests from your Vercel domain.

## 🎨 Customization

### Colors
Edit CSS variables in `style.css`:
```css
:root {
    --primary: #6366f1;      /* Main color */
    --secondary: #ec4899;     /* Accent color */
    --dark: #1e1b4b;          /* Text color */
}
```

### Product Images
Replace placeholder images in the products section:
```html
<div class="product-image">
    <img src="your-image.jpg" alt="Product description">
</div>
```

### Contact Email
The form sends to `service@giftbuybuy.cn` by default (configured in backend).

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

Private - All rights reserved

---

Built with ❤️ for GiftBuyBuy
