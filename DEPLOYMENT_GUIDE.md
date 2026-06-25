# 🚀 DEPLOYMENT GUIDE — CraveBox Café

## Choose Your Hosting Platform

---

## 🔷 **OPTION 1: Vercel (Recommended - Easiest)**

Vercel is the creator of Vite and Next.js. Best for React apps.

### Steps:

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Create Vercel Account:**
   - Go to https://vercel.com
   - Click "Sign Up"
   - Choose "GitHub" to sign up

3. **Deploy:**
   - Click "New Project"
   - Select your CraveBox repository
   - Click "Deploy"
   - Vercel auto-builds and deploys!

4. **Custom Domain:**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records (Vercel provides instructions)

**Advantages:**
- ✅ Free tier (generous)
- ✅ Automatic deployments on push
- ✅ Fast CDN globally
- ✅ SSL certificate included
- ✅ Environment variables support
- ✅ Analytics dashboard

---

## 🟦 **OPTION 2: Netlify**

Another excellent option with great free tier.

### Steps:

1. **Build Locally:**
   ```bash
   npm run build
   ```

2. **Create Netlify Account:**
   - Go to https://netlify.com
   - Click "Sign Up"

3. **Deploy:**
   - Drag and drop the `dist/` folder
   - OR connect GitHub for auto-deploys

4. **Custom Domain:**
   - Settings → Domain Management
   - Add your custom domain

**Advantages:**
- ✅ Free tier available
- ✅ Git-based deployments
- ✅ Form handling built-in
- ✅ Serverless functions support

---

## 🟨 **OPTION 3: GitHub Pages**

Free hosting directly from GitHub.

### Steps:

1. **Update vite.config.js:**
   ```javascript
   export default defineConfig({
     base: '/cravebox-cafe/', // your repo name
     plugins: [react()],
   })
   ```

2. **Update package.json:**
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable Pages:**
   - Go to GitHub repo → Settings → Pages
   - Set source to `gh-pages` branch
   - Site publishes at `https://yourusername.github.io/cravebox-cafe/`

**Advantages:**
- ✅ Completely free
- ✅ No additional services needed
- ✅ Good for portfolios

**Disadvantages:**
- ❌ Limited to static sites
- ❌ Slower than CDNs
- ❌ Custom domain requires DNS setup

---

## 🔵 **OPTION 4: Firebase Hosting**

Google's hosting platform.

### Steps:

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login:**
   ```bash
   firebase login
   ```

3. **Initialize:**
   ```bash
   firebase init hosting
   ```

4. **Build:**
   ```bash
   npm run build
   ```

5. **Deploy:**
   ```bash
   firebase deploy
   ```

**Advantages:**
- ✅ Free tier with generous limits
- ✅ Fast global CDN
- ✅ SSL included

---

## 🟩 **OPTION 5: Traditional Hosting (cpanel, etc.)**

For traditional web hosts like Bluehost, GoDaddy, etc.

### Steps:

1. **Build:**
   ```bash
   npm run build
   ```

2. **Upload:**
   - Upload `dist/` folder contents to `/public_html/`
   - Ensure all files are uploaded (including hidden .htaccess)

3. **Create .htaccess:**
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

4. **Test:**
   - Visit your domain
   - Test navigation and routes

**Note:** This ensures all routes redirect to index.html for React Router to work.

---

## 📋 **DEPLOYMENT CHECKLIST**

Before deploying, verify:

- [ ] All media files added to `public/`
- [ ] Contact information updated (phone, address)
- [ ] Business hours correct
- [ ] WhatsApp number verified
- [ ] Google Maps location updated
- [ ] Build completes without errors: `npm run build`
- [ ] No console errors in production
- [ ] Tested on mobile devices
- [ ] Booking form saves to localStorage
- [ ] Reviews system works
- [ ] All videos play properly
- [ ] Gallery images load
- [ ] WhatsApp link works
- [ ] Performance acceptable (Lighthouse score >90)

---

## 🔧 **ENVIRONMENT VARIABLES** (Optional)

For Vercel/Netlify/Firebase:

1. Create `.env.production`:
   ```
   VITE_APP_NAME=CraveBox Café
   VITE_WHATSAPP_NUMBER=+919187670554
   ```

2. In platform dashboard, add these variables to "Environment Variables"

3. They're available in code as:
   ```javascript
   import.meta.env.VITE_APP_NAME
   ```

---

## 🎯 **POST-DEPLOYMENT**

### 1. **Test Website:**
   - ✅ Click all links
   - ✅ Play videos
   - ✅ Try booking form
   - ✅ Submit review
   - ✅ Open gallery
   - ✅ WhatsApp button
   - ✅ Mobile responsive

### 2. **Performance Check:**
   - Run on [Lighthouse](https://developers.google.com/web/tools/lighthouse)
   - Target: Score > 90
   - Fix any issues

### 3. **SEO Setup:**
   ```html
   <!-- In index.html -->
   <meta name="description" content="Premium restaurant offering delicious food and great vibes">
   <meta name="keywords" content="CraveBox, Café, Restaurant, Food">
   <meta name="author" content="CraveBox Café">
   ```

### 4. **Analytics:**
   - Add Google Analytics (optional)
   - Track user behavior
   - Monitor bookings

---

## 🚨 **COMMON ISSUES**

### Site shows blank page
- Check browser console for errors
- Ensure `dist/` folder is uploaded completely
- Verify `.htaccess` is in place (for traditional hosting)

### Videos/Images not loading
- Check files are in `public/` (development)
- Verify full paths after build
- Check CORS if on different domain

### Forms not working
- localStorage works on HTTPS only (in production)
- Check browser console for errors
- Verify data saves to localStorage

### Performance slow
- Optimize images (use WebP)
- Compress videos
- Enable GZIP compression on server
- Use CDN for media files

---

## 💡 **RECOMMENDED STACK**

For CraveBox Café, we recommend:

1. **Best:** Vercel + GitHub
   - Automatic deployments
   - Fast performance
   - Free tier
   - Perfect for React apps

2. **Alternative:** Netlify + GitHub
   - Slightly better free tier
   - Great UI/UX
   - Form handling

3. **Budget:** Firebase + GitHub
   - Generous free tier
   - Reliable Google infrastructure
   - Scalable

---

## 📞 **SUPPORT FOR EACH PLATFORM**

- **Vercel:** https://vercel.com/support
- **Netlify:** https://www.netlify.com/support/
- **GitHub Pages:** https://docs.github.com/en/pages
- **Firebase:** https://firebase.google.com/support

---

## 🎉 **YOU'RE READY TO LAUNCH!**

Choose your platform and deploy today. Your CraveBox Café website will be live within minutes!

**Recommended: Use Vercel for best experience.** 🚀
