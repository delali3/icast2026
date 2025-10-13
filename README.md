# IEEE ICAST 2026 Conference Website - Rebuilt with Tailwind CSS

## Overview
This is a completely rebuilt version of the IEEE ICAST 2026 conference website using modern HTML5 and Tailwind CSS. The site maintains all the original content, images, and branding while featuring a fresh, contemporary design.

## What's New

### Design Changes
- **Modern UI/UX**: Clean, contemporary design with smooth transitions and hover effects
- **Tailwind CSS**: Utility-first CSS framework for rapid development and consistency
- **Improved Typography**: Better font hierarchy using Inter and Poppins fonts
- **Enhanced Color Scheme**: Gradient effects and modern color combinations
- **Card-Based Layouts**: Modern card designs for better content organization
- **Glassmorphism Effects**: Subtle glass effects on navigation and components

### Layout Improvements
1. **Header/Navigation**
   - Sticky header with glass effect
   - Mobile-responsive hamburger menu
   - Improved navigation structure

2. **Hero Sections**
   - Gradient backgrounds with overlay effects
   - Better visual hierarchy
   - Animated elements

3. **Content Sections**
   - Card-based layouts for speakers, workshops, and committees
   - Color-coded sections for better visual organization
   - Improved spacing and padding

4. **Interactive Elements**
   - Smooth scroll behavior
   - Hover transitions on cards and buttons
   - Back-to-top button
   - Active state indicators

## Pages Included

### 1. index.html (Home Page)
- Hero section with countdown timer
- About section
- Speakers showcase with cards
- Information grid (Background, Important Info, Keynote)
- Call for Papers section
- Submission guidelines
- Event schedule with tabs
- Venue with Google Maps
- Hotels section
- Sponsors grid
- Contact form
- Footer

### 2. committee.html (Organizing Committee)
- Committee groups with color-coded cards:
  - Local Organising Committee (Blue)
  - Finance & Sponsorship Committee (Green)
  - Technical Programs Committee (Purple)
  - Publicity Committee (Orange)
  - Logistics/Registration Committee (Teal)

### 3. workshop.html (Workshops)
- 12 workshop cards with unique colors:
  - Humanitarian Technology in Africa
  - Big Data
  - Communication
  - Cloud Computing
  - Industrial Applications
  - Networks
  - Power and Energy
  - Nanotechnology
  - Aviation and E-learning
  - Artificial Intelligence
  - Electronics
  - Mobile Computing

### 4. doctoral-consortium.html (Doctoral Consortium)
- Aims section
- Scope details
- Format information
- Application submission guidelines
- Important dates
- Programme outline with timeline
- Senior faculty mentors

## Technical Features

### Technologies Used
- **HTML5**: Semantic markup for better SEO and accessibility
- **Tailwind CSS 3.x**: Utility-first CSS framework (CDN)
- **Font Awesome 6.4**: Modern icon library
- **Google Fonts**: Inter and Poppins fonts
- **Vanilla JavaScript**: Minimal JS for interactivity

### Responsive Design
- Mobile-first approach
- Breakpoints for mobile, tablet, and desktop
- Fully responsive grid layouts
- Mobile navigation menu

### Features
- Countdown timer to conference date
- Schedule day switcher
- Smooth scrolling
- Back-to-top button
- Mobile menu toggle
- Google Analytics integration

### Color Palette
- **IEEE Blue**: #003f7f
- **IEEE Light Blue**: #00aeef
- Supporting colors for different sections

## Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Installation & Usage

### Local Development
1. Copy all files from the `new` folder to your web server directory
2. Ensure the `images` folder is in the same directory
3. Open `index.html` in a web browser

### For XAMPP Users
1. Place the `new` folder in `c:\xampp\htdocs\Conferences\icast2026-conference\`
2. Start Apache server
3. Navigate to: `http://localhost/Conferences/icast2026-conference/new/index.html`

## File Structure
```
new/
├── index.html
├── committee.html
├── workshop.html
├── doctoral-consortium.html
├── register.php (from old site)
├── images/
│   ├── logo/
│   ├── speakers/
│   ├── hotels/
│   ├── sponsors/
│   └── (other image assets)
└── README.md
```

## Customization

### Changing Colors
Edit the Tailwind config in each HTML file's `<script>` tag:
```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        'ieee-blue': '#003f7f',
        'ieee-light-blue': '#00aeef',
      }
    }
  }
}
```

### Modifying Fonts
Update the Google Fonts link and Tailwind config:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

## SEO & Accessibility
- Semantic HTML5 elements
- Proper heading hierarchy (h1-h6)
- Alt text for images
- Meta descriptions and keywords
- ARIA labels where appropriate
- Keyboard navigation support

## Performance
- CDN-based Tailwind CSS (production-ready)
- Optimized images (retained from original)
- Minimal JavaScript
- Lazy loading for images (via browser native)

## Credits
- **Original Design**: GhProfit (https://ghprofit.com/)
- **Rebuilt By**: Claude Code with Tailwind CSS
- **Conference**: IEEE ICAST 2026
- **Organizer**: IEEE Ghana Section
- **Venue**: Academic City University, Accra, Ghana

## Support & Contact
For questions about the conference:
- Email: info@ieeeghicast2026.org
- Phone: +233 20 835 1347 / +233 24 965 3242

## License
© Copyright IEEE. All Rights Reserved

## Notes
- The `register.php` file should be copied from the old site as it contains backend PHP logic
- All images are retained from the original site
- Color scheme matches the original IEEE branding
- Content is identical to the original site, only the layout/design has changed
