# Ramkrishna Eye Hospital - Website

A modern, responsive website for Ramkrishna Eye Hospital built with Next.js, TypeScript, and Tailwind CSS. This static website provides comprehensive information about eye care services, online appointment booking, and easy contact options.

## 🌟 Features

- **Modern Design**: Clean, professional design optimized for healthcare
- **Responsive Layout**: Works perfectly on all devices (desktop, tablet, mobile)
- **Poppins Font**: Professional typography with Google Fonts integration
- **Smooth Animations**: Enhanced user experience with CSS transitions and animations
- **Online Appointment Booking**: Multi-step appointment form with calendar integration
- **WhatsApp Integration**: Direct WhatsApp contact for quick communication
- **Google Maps Integration**: Easy location finding and directions
- **Contact Forms**: Multiple contact options with form validation
- **Blog System**: Dynamic blog with routing and professional layout
- **Doctor Profiles**: Professional team section with photos and specializations
- **SEO Optimized**: Proper meta tags and SEO structure

## 📱 Pages

- **Home**: Hero section, services overview, testimonials, and contact CTA
- **About**: Hospital information, team details, mission, and values
- **Contact**: Contact forms, location map, and quick action buttons
- **Appointment**: Multi-step booking system with doctor selection and calendar
- **Blog**: Dynamic blog system with individual post pages

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Typography**: Poppins font from Google Fonts
- **Icons**: Heroicons
- **Form Handling**: React Hook Form (ready for integration)
- **Date Handling**: date-fns
- **Image Optimization**: Next.js Image component with external image support

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/VivekanandDesign/RamkrishnaEyeHospital.git
   cd ramkrishna-eye-hospital
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📞 Contact Information

The website includes the following contact methods:

- **Phone**: +91 98765 43210 (24/7 Emergency)
- **Email**: info@ramkrishnaeye.com
- **WhatsApp**: Integrated WhatsApp chat functionality
- **Address**: 123 Medical Plaza, Health City, Mumbai, Maharashtra 400001

## 🔧 Customization

### Updating Contact Information
Edit the contact details in:
- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`
- `src/components/ContactCTA.tsx`
- `src/app/contact/page.tsx`

### Adding New Services
Update the services array in `src/components/Services.tsx`

### Modifying Doctor Information
Update the doctors array in `src/app/about/page.tsx` and `src/app/appointment/page.tsx`

### Changing Colors/Theme
Modify the Tailwind CSS classes throughout the components. The main colors used are:
- Primary: Blue (blue-600, blue-700, etc.)
- Emergency: Red (red-600, red-700, etc.)
- WhatsApp: Green (green-600, green-700, etc.)

### Typography
The website uses Poppins font with all 9 weight variants (100-900). You can use:
- Default: `font-sans` (applies Poppins automatically)
- Custom weights: `font-poppins-light`, `font-poppins-medium`, `font-poppins-bold`, etc.

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

## 🌐 Static Export (Optional)

To generate a static version of the site:

1. Add to `next.config.js`:
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   module.exports = nextConfig
   ```

2. Run:
   ```bash
   npm run build
   ```

## 🎨 Design Features

- **Professional Healthcare Design**: Clean, trustworthy appearance
- **Poppins Typography**: Modern, readable font across all content
- **Smooth Animations**: CSS transitions and hover effects
- **6px Border Radius**: Consistent design language
- **Accessibility**: Proper contrast ratios and semantic HTML
- **Mobile-First**: Responsive design starting from mobile
- **Fast Loading**: Optimized images and code splitting
- **User Experience**: Intuitive navigation and clear call-to-actions

## 📋 TODO / Future Enhancements

- [ ] Add backend integration for appointment booking
- [ ] Implement email notifications
- [ ] Add patient portal functionality
- [ ] Integrate with hospital management system
- [ ] Add multi-language support
- [ ] Implement payment gateway for consultation fees
- [ ] Add live chat functionality
- [ ] Integrate with Google Calendar for doctor availability

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created for Ramkrishna Eye Hospital. All rights reserved.

## 📞 Support

For technical support or questions about this website, please contact the development team.

---

**Ramkrishna Eye Hospital** - Excellence in Eye Care 👁️‍🗨️
