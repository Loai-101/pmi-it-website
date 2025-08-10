# SEO Implementation Guide - PMI IT Website

## Overview
This document outlines the SEO implementation for the PMI IT website, including meta tags, structured data, sitemap generation, and prerendering configuration.

## SEO Meta Tags Implementation

### React Helmet Async Integration
The website uses `react-helmet-async` for dynamic meta tag management. Each page component includes comprehensive SEO meta tags.

### Page-Specific Meta Tags

#### Home Page (`/`)
```jsx
<Helmet>
  <title>PMI IT - Professional IT Services & Solutions | Gulf Region</title>
  <meta name="description" content="PMI IT delivers comprehensive software solutions, custom development, Odoo ERP systems, and mobile apps. Your trusted technology partner in the Gulf Region for digital transformation." />
  <meta name="keywords" content="IT services, software development, Odoo ERP, mobile apps, digital transformation, Gulf Region, custom software" />
  <link rel="canonical" href="https://it-solutions.pmi-me.net/" />
  
  {/* Open Graph */}
  <meta property="og:title" content="PMI IT - Professional IT Services & Solutions" />
  <meta property="og:description" content="Comprehensive software solutions, custom development, Odoo ERP systems, and mobile apps. Your trusted technology partner in the Gulf Region." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://it-solutions.pmi-me.net/" />
  <meta property="og:image" content="https://res.cloudinary.com/dvybb2xnc/image/upload/v1751550832/pmi-it-logo_pegnsp.png" />
  
  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="PMI IT - Professional IT Services & Solutions" />
  <meta name="twitter:description" content="Comprehensive software solutions, custom development, Odoo ERP systems, and mobile apps. Your trusted technology partner in the Gulf Region." />
  <meta name="twitter:image" content="https://res.cloudinary.com/dvybb2xnc/image/upload/v1751550832/pmi-it-logo_pegnsp.png" />
</Helmet>
```

#### Services Page (`/services`)
- Title: "IT Services & Solutions - PMI IT | Custom Software Development"
- Focus: Custom software development, Odoo ERP, mobile apps, digital transformation

#### Projects Page (`/projects`)
- Title: "Our Projects & Portfolio - PMI IT | Success Stories"
- Focus: Government systems, maritime logistics, healthcare platforms, enterprise solutions

#### Countries Page (`/countries`)
- Title: "Our Regional Presence - PMI IT | Serving 7 Countries"
- Focus: Gulf region, international presence, global IT services

#### Teams Page (`/teams`)
- Title: "Meet Our Team - PMI IT | Expert IT Professionals"
- Focus: IT professionals, team expertise, combined experience

## Structured Data (JSON-LD)

### Organization Schema
Implemented on the home page with comprehensive company information:

```jsx
<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PMI IT",
    "url": "https://it-solutions.pmi-me.net",
    "logo": "https://res.cloudinary.com/dvybb2xnc/image/upload/v1751550832/pmi-it-logo_pegnsp.png",
    "description": "Professional IT Services and Solutions in the Gulf Region",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Gulf Region"
    },
    "sameAs": []
  })}
</script>
```

## Sitemap Generation

### Configuration
- **File**: `scripts/generate-sitemap.mjs`
- **Trigger**: Runs automatically before build (`prebuild` script)
- **Output**: `public/sitemap.xml`

### Current Routes
```javascript
const routes = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/services', changefreq: 'monthly', priority: 0.9 },
  { url: '/projects', changefreq: 'monthly', priority: 0.8 },
  { url: '/countries', changefreq: 'monthly', priority: 0.7 },
  { url: '/teams', changefreq: 'monthly', priority: 0.7 }
];
```

### Adding New Routes
1. Update the `routes` array in `scripts/generate-sitemap.mjs`
2. Add appropriate `changefreq` and `priority` values
3. The sitemap will be regenerated on the next build

## Robots.txt Configuration

### Current Configuration (`public/robots.txt`)
```
User-agent: *
Disallow: /api/
Disallow: /_next/
Disallow: /static/
Allow: /

Sitemap: https://it-solutions.pmi-me.net/sitemap.xml
```

### Updating Robots.txt
- Add new disallow patterns for internal/technical paths
- Update sitemap URL if domain changes
- Ensure all public pages are accessible

## Prerendering with React Snap

### Configuration (`package.json`)
```json
{
  "reactSnap": {
    "inlineCss": true,
    "puppeteerArgs": ["--no-sandbox"],
    "include": ["/", "/services", "/projects", "/countries", "/teams"],
    "source": "build",
    "destination": "build"
  }
}
```

### Prerendered Routes
- `/` (Home)
- `/services`
- `/projects`
- `/countries`
- `/teams`

### Adding New Prerendered Routes
1. Add the route to the `include` array in `package.json`
2. Add corresponding meta tags to the page component
3. Update sitemap generation script
4. Test prerendering locally before deployment

## Build Process Integration

### Package.json Scripts
```json
{
  "scripts": {
    "prebuild": "node scripts/generate-sitemap.mjs",
    "build": "react-scripts build",
    "postbuild": "react-snap"
  }
}
```

### Build Flow
1. **Prebuild**: Generate sitemap.xml
2. **Build**: Create production bundle
3. **Postbuild**: Prerender specified routes

## SEO Best Practices Implementation

### Meta Tags Best Practices
- ✅ Unique titles for each page
- ✅ Descriptive meta descriptions (150-160 characters)
- ✅ Relevant keywords
- ✅ Canonical URLs
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags

### Technical SEO
- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy (H1, H2, H3)
- ✅ Alt text for images
- ✅ Fast loading times
- ✅ Mobile-friendly design
- ✅ HTTPS enforcement

### Content Optimization
- ✅ Relevant, high-quality content
- ✅ Natural keyword integration
- ✅ Internal linking structure
- ✅ Clear call-to-actions

## Monitoring and Maintenance

### SEO Checklist
- [ ] All pages have unique, descriptive titles
- [ ] Meta descriptions are compelling and under 160 characters
- [ ] Canonical URLs are properly set
- [ ] Open Graph and Twitter Card tags are implemented
- [ ] Sitemap is up-to-date and accessible
- [ ] Robots.txt is properly configured
- [ ] Structured data is implemented
- [ ] Prerendering is working for all specified routes

### Regular Maintenance Tasks
1. **Monthly**: Review and update meta descriptions
2. **Quarterly**: Update sitemap with new content
3. **Bi-annually**: Review and optimize page titles
4. **Annually**: Audit structured data implementation

### Performance Monitoring
- Monitor Core Web Vitals
- Track page load speeds
- Monitor search console for issues
- Check for broken links and redirects

## Troubleshooting

### Common SEO Issues
1. **Duplicate titles**: Ensure each page has a unique title
2. **Missing meta descriptions**: Add descriptive meta tags
3. **Broken canonical URLs**: Verify all canonical links work
4. **Prerendering failures**: Check React Snap configuration
5. **Sitemap errors**: Validate XML structure

### Debugging Steps
1. Use browser developer tools to inspect meta tags
2. Test prerendered pages with JavaScript disabled
3. Validate sitemap.xml structure
4. Check robots.txt accessibility
5. Monitor search console for crawl errors

## Resources
- [Google Search Console](https://search.google.com/search-console)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Schema.org Documentation](https://schema.org/)
- [React Helmet Async Documentation](https://github.com/staylor/react-helmet-async)
- [React Snap Documentation](https://github.com/stereobooster/react-snap)
