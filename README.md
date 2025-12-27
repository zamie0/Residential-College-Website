# Residential College - Website

Website for Residential College K10, Universiti Putra Malaysia. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for modern styling
- **Responsive Design** - Mobile-first approach
- **Form Validation** with react-hook-form
- **Toast Notifications** with react-hot-toast
- **Image Optimization** with Next.js Image
- **Modern UI/UX** with animations and transitions

## Pages

1. **Home** (`/`) - Main page with hero section, accommodation options, campus, facilities, and student life
2. **Staff** (`/staff`) - Staff directory
3. **Facilities** (`/facilities`) - Facilities provided
4. **Rules** (`/rules`) - Rules and regulations
5. **College Plan** (`/college-plan`) - College block layout plan
6. **Room Plan** (`/room-plan`) - Room plans offered
7. **Contact** (`/contact`) - Contact form and contact information
8. **Application** (`/application`) - Residence application form

## Setup & Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Ensure all images are in the `public/image/` folder:
   - `logo.png`
   - `background.jpg`
   - `cm1.jfif`, `cm2.jfif`, `cm3.jfif`
   - `canteen.jfif`
   - `auditorium.jfif`
   - `hostel.jfif`
   - `staf/warden.jpg`, `staf/fellow1.jpg`, `staf/admin1.jpg`, `staf/security.jpg`

3. Run development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Styling

Website uses Tailwind CSS with custom configuration. All styles are in:
- `app/globals.css` - Global styles and utilities
- `tailwind.config.js` - Tailwind CSS configuration

## Configuration

- `next.config.js` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS configuration

## Notes

- All forms use client-side validation
- For production, you need to set up backend API for:
  - Contact form submission (`/api/contact`)
  - Application form submission (`/api/application`)
- Staff images use fallback if not found
- PDF download buttons show alerts (can add actual function later)

## Deployment

This website can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Or any platform that supports Next.js

## License

Copyright (c) 2024 - MUHAMAD HAZAMI BIN JAMIL

All rights reserved.
