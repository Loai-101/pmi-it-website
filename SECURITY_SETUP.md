# Security Setup Documentation - PMI IT Website

## Overview
This document outlines the security measures implemented for the PMI IT website hosted on Vercel, including Content Security Policy (CSP), security headers, and spam protection.

## Security Headers Configuration

### Current Headers (vercel.json)
The following security headers are configured globally for all routes:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "Strict-Transport-Security", "value": "max-age=31536000; includeSubDomains; preload" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" },
        { "key": "Content-Security-Policy", "value": "default-src 'self'; img-src 'self' data: https: https://res.cloudinary.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; font-src 'self' https: data:; connect-src 'self' https:;" }
      ]
    }
  ]
}
```

### Header Explanations

1. **Strict-Transport-Security (HSTS)**
   - Forces HTTPS connections
   - Prevents protocol downgrade attacks
   - Duration: 1 year with preload

2. **X-Content-Type-Options: nosniff**
   - Prevents MIME type sniffing
   - Reduces risk of XSS attacks

3. **X-Frame-Options: DENY**
   - Prevents clickjacking attacks
   - Blocks all framing attempts

4. **Referrer-Policy: strict-origin-when-cross-origin**
   - Controls referrer information
   - Balances privacy and functionality

5. **Permissions-Policy**
   - Restricts access to sensitive APIs
   - Blocks camera, microphone, and geolocation

6. **Content-Security-Policy (CSP)**
   - Controls resource loading
   - Prevents XSS and injection attacks

## Content Security Policy (CSP) Details

### Current CSP Configuration
```
default-src 'self';
img-src 'self' data: https: https://res.cloudinary.com;
script-src 'self' 'unsafe-inline' 'unsafe-eval' https:;
style-src 'self' 'unsafe-inline' https:;
font-src 'self' https: data:;
connect-src 'self' https:;
```

### CSP Directives Explained

- **default-src 'self'**: Only allow resources from same origin
- **img-src**: Allow images from same origin, data URIs, HTTPS sources, and Cloudinary
- **script-src**: Allow scripts from same origin, inline scripts, eval (for React), and HTTPS sources
- **style-src**: Allow styles from same origin, inline styles, and HTTPS sources
- **font-src**: Allow fonts from same origin, HTTPS sources, and data URIs
- **connect-src**: Allow connections to same origin and HTTPS sources

### Adding External Resources to CSP

When adding new external resources (CDNs, APIs, fonts, etc.), update the CSP in `vercel.json`:

1. **For new image sources:**
   ```json
   "img-src 'self' data: https: https://res.cloudinary.com https://new-cdn.com"
   ```

2. **For new script sources:**
   ```json
   "script-src 'self' 'unsafe-inline' 'unsafe-eval' https: https://new-script-cdn.com"
   ```

3. **For new style sources:**
   ```json
   "style-src 'self' 'unsafe-inline' https: https://new-style-cdn.com"
   ```

## Spam and Phantom URL Protection

### 410 Gone Redirects
Configured to block common spam URLs:

```json
{
  "redirects": [
    { "source": "/about.php", "destination": "/404", "permanent": false, "statusCode": 410 },
    { "source": "/about.php(.*)", "destination": "/404", "permanent": false, "statusCode": 410 }
  ]
}
```

### Adding New Blocked Patterns
To block additional spam patterns, add new redirect rules:

```json
{
  "source": "/spam-pattern(.*)", 
  "destination": "/404", 
  "permanent": false, 
  "statusCode": 410 
}
```

## Cache Headers

### Static Asset Caching
Long-term caching for fingerprinted files:

```json
{
  "source": "/(.*\\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot))",
  "headers": [
    { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
  ]
}
```

## Monitoring and Maintenance

### Testing CSP
1. Use browser developer tools to check for CSP violations
2. Monitor console errors for blocked resources
3. Test with CSP reporting (if enabled)

### Updating Security Configuration
1. Modify `vercel.json` with new security rules
2. Test locally with `vercel dev`
3. Deploy to staging environment first
4. Monitor for any broken functionality
5. Deploy to production

### Security Checklist
- [ ] All external resources are explicitly allowed in CSP
- [ ] No unnecessary permissions are granted
- [ ] HTTPS is enforced
- [ ] Spam URLs are blocked
- [ ] Cache headers are optimized
- [ ] Security headers are properly configured

## Troubleshooting

### Common CSP Issues
1. **Images not loading**: Check `img-src` directive
2. **Scripts not executing**: Check `script-src` directive
3. **Styles not applying**: Check `style-src` directive
4. **Fonts not loading**: Check `font-src` directive

### Debugging Steps
1. Check browser console for CSP violation messages
2. Temporarily relax CSP rules for testing
3. Gradually tighten restrictions
4. Monitor for functionality issues

## Resources
- [MDN Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [Vercel Headers Documentation](https://vercel.com/docs/concepts/projects/project-configuration#headers)
- [Security Headers Best Practices](https://owasp.org/www-project-secure-headers/)
