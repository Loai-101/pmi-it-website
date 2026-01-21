const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting Vercel build process...');

// Check if we're in Vercel environment
const isVercel = process.env.VERCEL === '1' || process.env.VERCEL_ENV;

try {
  // Step 1: Generate sitemap
  console.log('Generating sitemap...');
  execSync('node scripts/generate-sitemap.mjs', { stdio: 'inherit' });
  
  // Step 2: Build React app
  console.log('Building React app...');
  // Disable ESLint warnings as errors in CI environment
  const buildEnv = { ...process.env, CI: 'false', DISABLE_ESLINT_PLUGIN: 'true' };
  execSync('react-scripts build', { stdio: 'inherit', env: buildEnv });
  
  // Step 3: Try to run react-snap, but don't fail if it doesn't work
  console.log('Attempting prerendering with react-snap...');
  try {
    execSync('react-snap', { stdio: 'inherit' });
    console.log('✅ Prerendering completed successfully');
  } catch (error) {
    console.log('⚠️  Prerendering failed, but build will continue...');
    console.log('This is expected in some Vercel environments');
    
    // If we're on Vercel and prerendering fails, create a simple fallback
    if (isVercel) {
      console.log('Creating fallback prerendered files for Vercel...');
      const buildDir = path.join(process.cwd(), 'build');
      
      // Ensure build directory exists
      if (!fs.existsSync(buildDir)) {
        fs.mkdirSync(buildDir, { recursive: true });
      }
      
      // Copy index.html to other routes as fallback
      const routes = ['services', 'projects', 'countries', 'teams'];
      const indexHtml = fs.readFileSync(path.join(buildDir, 'index.html'), 'utf8');
      
      routes.forEach(route => {
        const routeDir = path.join(buildDir, route);
        if (!fs.existsSync(routeDir)) {
          fs.mkdirSync(routeDir, { recursive: true });
        }
        fs.writeFileSync(path.join(routeDir, 'index.html'), indexHtml);
        console.log(`✅ Created fallback for /${route}`);
      });
    }
  }
  
  console.log('✅ Vercel build completed successfully');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
