# 📁 Public Assets - Installation Guide

## 📹 Videos

Place your food videos in this directory:

**Required files:**
- `pizza.mp4` - Pizza preparation/showcase
- `maggi.mp4` - Maggi preparation
- `sandwich.mp4` - Sandwich preparation
- `fries.mp4` - Fries preparation
- `garlicbread.mp4` - Garlic bread preparation

**Video Recommendations:**
- Format: MP4 (H.264, AAC)
- Duration: 5-15 seconds
- Resolution: 1920x1080 or higher
- File size: 5-50MB each
- Aspect ratio: 16:9

---

## 🖼️ Images

### Menu Images (`images/`)
Place your menu item images here:
- `pizza.jpg` - Pizza dish photo
- `maggi.jpg` - Maggi dish photo
- `sandwich.jpg` - Sandwich dish photo
- `fries.jpg` - Fries dish photo
- `garlicbread.jpg` - Garlic bread photo
- `hero-bg.jpg` - Hero section background

**Image Recommendations:**
- Format: JPG, PNG, or WebP
- Resolution: 1200x800px or higher
- File size: 200KB-2MB each
- Aspect ratio: 4:3 or 16:9 for hero

### Gallery Images (`gallery/`)
Place 8 gallery images:
- `gallery-1.jpg` to `gallery-8.jpg`

**Gallery Recommendations:**
- Format: JPG, PNG, or WebP
- Square aspect ratio (1:1)
- Resolution: 600x600px or higher
- File size: 150KB-1MB each

---

## 🎨 Logo

Place your café logo:
- `logo.svg` - Your café logo (preferred: SVG format)

**Logo Recommendations:**
- Format: SVG (best) or PNG
- Size: Keep under 100KB
- Should work well on 40x40px

---

## ⚡ Fallback System

**Don't have media files yet?**

No problem! The website will auto-generate fallback content:
- Missing videos → Gray placeholder with play button
- Missing images → SVG placeholder with emoji + name
- Missing logo → Default CraveBox Café logo

This means you can test the site immediately without any media files!

---

## 🚀 Upload Instructions

### Using VS Code:
1. Right-click `public/videos/` folder
2. Select "Reveal in Explorer"
3. Paste video files into the folder

### Using Command Line:
```bash
# From project root
cp /path/to/pizza.mp4 public/videos/
cp /path/to/pizza.jpg public/images/
# ... repeat for all files
```

### Using File Explorer:
1. Navigate to `c:\Users\hp 2703\OneDrive\Desktop\ccc\public\`
2. Create folders: `videos/`, `images/`, `gallery/`
3. Drag and drop your files

---

## ✅ Verification

After uploading files, refresh your browser at `http://localhost:3000`

**Check:**
- ✅ Videos play in menu section
- ✅ Images show in gallery
- ✅ Hero background displays
- ✅ Gallery modal works

---

## 🎬 Video Setup (Quick Guide)

### Best way to record menu videos:

1. **Setup:**
   - Use phone or camera on tripod
   - Good lighting (natural or ring light)
   - Clean background (matching café aesthetic)

2. **Recording:**
   - Record 5-15 second clips
   - Show food being prepared or plated
   - Include close-ups and angles
   - Add motion for appeal

3. **Editing:**
   - Trim to 5-15 seconds
   - Add subtle background music (optional)
   - Export as MP4 (H.264, 1080p)

4. **Upload:**
   - Save as `pizza.mp4`, `maggi.mp4`, etc.
   - Upload to `public/videos/`
   - Test playback

---

## 📸 Photography Setup

### Menu Photos:
- Use white or light background
- Professional food photography
- Good lighting (daylight or studio)
- Include whole dish, not parts
- Consistent style for all items

### Gallery Photos:
- Mix of food, ambience, and people
- Behind-the-scenes content
- Customer moments
- Interior design
- Staff and team

### Hero Background:
- High-res, moody café aesthetic
- Wide-angle restaurant interior
- Or food close-up with blur effect
- Supports 16:9 aspect ratio

---

## 🔧 Troubleshooting

**Videos not playing?**
- Verify file names match exactly (case-sensitive)
- Ensure files are in `public/videos/`
- Try converting to MP4 with FFmpeg if corrupted

**Images not showing?**
- Check file names and extensions
- Verify files are in correct folder
- Try JPG format if PNG doesn't work

**Hero background not loading?**
- Check `hero-bg.jpg` is in `public/images/`
- Verify file size isn't too large (>2MB)
- Try different image format

**Gallery empty?**
- Ensure you have 8 images
- Check all `gallery-1.jpg` through `gallery-8.jpg` exist
- Files should be square (1:1 aspect ratio)

---

## 📝 Example File Structure

```
public/
├── videos/
│   ├── pizza.mp4 (10 MB)
│   ├── maggi.mp4 (8 MB)
│   ├── sandwich.mp4 (9 MB)
│   ├── fries.mp4 (7 MB)
│   └── garlicbread.mp4 (8 MB)
├── images/
│   ├── pizza.jpg (500 KB)
│   ├── maggi.jpg (450 KB)
│   ├── sandwich.jpg (480 KB)
│   ├── fries.jpg (420 KB)
│   ├── garlicbread.jpg (470 KB)
│   └── hero-bg.jpg (1.2 MB)
├── gallery/
│   ├── gallery-1.jpg (600 KB)
│   ├── gallery-2.jpg (620 KB)
│   ├── gallery-3.jpg (610 KB)
│   ├── gallery-4.jpg (590 KB)
│   ├── gallery-5.jpg (630 KB)
│   ├── gallery-6.jpg (600 KB)
│   ├── gallery-7.jpg (615 KB)
│   └── gallery-8.jpg (605 KB)
└── logo.svg (50 KB)
```

---

**Total Size Estimate: ~45-60 MB**

Start with videos and menu images, add gallery later. Fallback system will handle missing files!
