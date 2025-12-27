# Setup Guide - Kolej K10 UPM Website

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Copy Images

Pastikan semua imej dari folder `image/` telah disalin ke `public/image/`. Jika belum, jalankan:

```bash
# Windows PowerShell
Copy-Item -Path "image\*" -Destination "public\image\" -Recurse -Force

# Linux/Mac
cp -r image/* public/image/
```

### 3. Run Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── bantuan/           # Contact/Help page
│   ├── fasiliti/          # Facilities page
│   ├── pelan-bilik/       # Room plans page
│   ├── pelan-kolej/       # College layout page
│   ├── peraturan/          # Rules page
│   ├── permohonan/        # Application form page
│   ├── staf/              # Staff page
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── Navbar.tsx         # Navigation bar
│   └── Footer.tsx          # Footer component
├── public/                 # Static assets
│   └── image/             # Images
├── Poppins/               # Font files
└── package.json           # Dependencies
```

## Features Implemented

✅ **All Pages Converted to Next.js**
- Home page with hero section
- Staff directory
- Facilities showcase
- Rules and regulations
- College layout
- Room plans
- Contact/Help page
- Application form

✅ **Fully Functional Forms**
- Contact form with validation
- Application form with validation
- API routes for form submission
- Toast notifications for user feedback

✅ **Modern UI/UX**
- Responsive design (mobile-first)
- Smooth animations and transitions
- Modern gradient backgrounds
- Card-based layouts
- Hover effects

✅ **All Buttons Functional**
- Navigation links
- Form submissions
- Download buttons (with alerts)
- Back to home buttons
- Application links

## Next Steps for Production

1. **Backend Integration**
   - Connect forms to actual database
   - Set up email service for notifications
   - Add authentication if needed

2. **Image Optimization**
   - Ensure all images are optimized
   - Add proper alt texts
   - Consider using CDN for images

3. **SEO**
   - Add proper meta tags (already done)
   - Add sitemap.xml
   - Add robots.txt

4. **Analytics**
   - Add Google Analytics or similar
   - Track form submissions
   - Monitor user behavior

5. **Testing**
   - Test all forms
   - Test on different devices
   - Test browser compatibility

## Troubleshooting

### Images not showing?
- Check that images are in `public/image/` folder
- Verify image paths in components
- Check browser console for errors

### Forms not submitting?
- Check API routes are working
- Verify network tab in browser dev tools
- Check server logs for errors

### Styling issues?
- Clear `.next` folder and rebuild
- Verify Tailwind CSS is configured correctly
- Check browser console for CSS errors

## Support

Untuk bantuan, sila hubungi:
- Email: residence.k10@upm.edu.my
- Atau rujuk dokumentasi Next.js: https://nextjs.org/docs

