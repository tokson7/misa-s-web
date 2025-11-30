# Figma Extraction Guide - Pixel Perfect Implementation

## 🎯 Goal
Extract every single detail from Figma to achieve 1:1 pixel-perfect implementation.

## ⚡ QUICK START - Method 1: WITH Dev Mode (Easiest)

### Step 1: Enable Dev Mode
1. Open your Figma file
2. Click **"Dev Mode"** button in top-right corner (toggle switch)
3. You'll see a new panel on the right with code properties

**Note:** Dev Mode requires a Figma Professional, Organization, or Enterprise plan. If you don't have access, use **Method 2** below.

### Step 2: Extract Element Details
For each element you want to implement:

1. **Click on the element** in Figma
2. **Look at the right panel** - you'll see:
   - CSS properties (position, size, colors, fonts)
   - SVG code (for icons/shapes)
3. **Copy the CSS properties** - they show exact pixel values
4. **For vectors/icons**: Right-click → "Copy/Paste as" → "Copy as SVG"

### Step 3: Share with Me
Paste the CSS and SVG code here in this format:

```
/* Element Name */
position: absolute;
left: 99px;
top: 420px;
width: 1242px;
height: 96px;
font-family: 'Funnel_Display-Bold', Helvetica;
font-size: 96px;
color: #000000;
/* ... all other properties ... */

/* SVG (if applicable) */
<svg>...</svg>
```

That's it! I'll implement it pixel-perfectly.

---

## ⚡ QUICK START - Method 2: WITHOUT Dev Mode (Manual Extraction)

### Step 1: Select Element and Check Right Panel
1. **Click on any element** in Figma
2. Look at the **right panel** (Design tab) - you'll see:
   - Position: X, Y coordinates
   - Size: Width, Height
   - Fill: Colors, gradients
   - Typography: Font, size, weight
   - Effects: Shadows, blurs

### Step 2: Extract Properties Manually

For each element, note down:

**Position & Size:**
- X position (left)
- Y position (top)
- Width
- Height

**Colors & Backgrounds:**
- Fill color (hex code like #000000)
- Gradient type and colors (if applicable)
- Opacity

**Typography (for text):**
- Font family (e.g., 'Funnel_Display-Bold')
- Font size (e.g., 96px)
- Font weight (Bold, Regular, etc.)
- Line height
- Letter spacing
- Text color

**Effects:**
- Shadows (offset, blur, color)
- Blur effects
- Borders (width, color, radius)

### Step 3: Copy SVG Code
For icons, shapes, or complex graphics:
1. **Right-click** the element
2. Select **"Copy/Paste as"** → **"Copy as SVG"**
3. Paste the SVG code

### Step 4: Share with Me
Format it like this:

```
/* Element Name */
position: absolute;
left: 99px;        /* X position from right panel */
top: 420px;         /* Y position from right panel */
width: 1242px;      /* Width from right panel */
height: 96px;       /* Height from right panel */
font-family: 'Funnel_Display-Bold', Helvetica;  /* Font from right panel */
font-size: 96px;    /* Font size from right panel */
color: #000000;     /* Color from Fill section */
/* ... other properties ... */

/* SVG (if applicable) */
<svg>...</svg>
```

### Alternative: Screenshot Method
If manual extraction is too tedious:
1. **Take screenshots** of the Figma file showing the design
2. **Take screenshots** of the right panel for key elements (showing position, size, colors, typography)
3. Share the screenshots with me
4. I can extract the details from the screenshots

### Alternative: Export Assets
1. **Export images/SVGs** from Figma (right-click → Export)
2. Share the exported files
3. I can analyze them and ask for specific details if needed

## 📋 Step-by-Step Process

### Step 1: Open Figma in Dev Mode
1. Open your Figma file
2. Click **"Dev Mode"** button (top right)
3. This shows exact CSS properties for each element

### Step 2: For Each Layer/Element

#### A. Select the Element
- Click on any element in Figma
- The right panel will show its properties

#### B. Copy CSS Properties
In Dev Mode, you'll see:
```
position: absolute;
left: 1440px;
top: 703px;
width: 1440px;
height: 703px;
background: radial-gradient(...);
transform: rotate(180deg);
font-family: 'Funnel_Display-Bold', Helvetica;
font-size: 96px;
color: #000000;
```

**Copy ALL of these properties** - they're exact pixel values.

#### C. Copy SVG Code (for icons, shapes, backgrounds)
1. Right-click the element
2. Select **"Copy/Paste as"** → **"Copy as SVG"**
3. Or in Dev Mode, look for the SVG code in the panel
4. Paste the complete SVG code

#### D. Document Typography
For text elements, note:
- Font family: `'Funnel_Display-Bold'` or `'Funnel_Sans-Regular'`
- Font size: `96px`, `32px`, `28px`, etc.
- Font weight: `bold`, `normal`, `extrabold`
- Line height: `1.2`, `1.5`, etc.
- Letter spacing: `0px`, `-0.5px`, etc.
- Color: `#000000`, `#0000FF`, etc.

#### E. Document Gradients
For gradient backgrounds:
- Type: `linear-gradient`, `radial-gradient`, `diamond-gradient`
- Colors: `#2F00FF`, `#A9FF47`, etc.
- Stops: `0%`, `54.12%`, `96.63%`, etc.
- Direction: `to bottom`, `to right`, `135deg`, etc.

#### F. Document Positioning
For absolute positioning:
- `left`: `0px`, `99px`, `750px`, etc.
- `top`: `0px`, `79px`, `187px`, etc.
- `width`: `1440px`, `590px`, etc.
- `height`: `703px`, `332px`, etc.

### Step 3: Organize by Page

For each Desktop page (5, 6, 7, 8), create a structure:

```
Desktop X:
├── Main Container
│   ├── width: 1440px
│   ├── height: 1266px
│   └── background: white
├── Header (Rectangle X)
│   ├── CSS properties
│   ├── SVG code (if applicable)
│   └── Logo + Navigation
├── Title Section
│   ├── Text: "Title Text"
│   ├── Position: left, top
│   └── Typography: font, size, color
├── Content Cards (Rectangle X, Y, Z)
│   ├── Position: left, top
│   ├── Size: width, height
│   ├── Background: gradient
│   └── Text content
├── Icons (Vrstva_1, etc.)
│   ├── SVG code
│   ├── Position: left, top
│   └── Size: width, height
├── Decorative Elements
│   ├── Background patterns
│   ├── Small squares
│   └── SVG overlays
└── Footer
    ├── Background
    └── Elements
```

### Step 4: Export Assets (if needed)

For images or complex graphics:
1. Select the element
2. Right-click → **"Export"**
3. Choose format: **SVG** (preferred) or **PNG**
4. Save with descriptive name

### Step 5: Format for Implementation

When providing CSS/SVG to me, format it like this:

```css
/* Desktop - X */
/* Group / Element Name */
position: absolute;
left: 99px;
top: 420px;
width: 1242px;
height: 96px;
font-family: 'Funnel_Display-Bold', Helvetica;
font-size: 96px;
font-weight: bold;
line-height: 1.2;
color: #000000;
```

For SVGs:
```xml
<svg width="1440" height="703" viewBox="0 0 1440 703" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- SVG content -->
</svg>
```

## 🎨 What to Extract for Each Element

### ✅ Required Information:
- [ ] Position (`left`, `top`)
- [ ] Size (`width`, `height`)
- [ ] Background (color, gradient, image)
- [ ] Border (width, color, radius)
- [ ] Typography (font, size, weight, color)
- [ ] Transform (rotate, scale, translate)
- [ ] Effects (shadow, blur, opacity)
- [ ] SVG code (for icons/shapes)

### ✅ For Text Elements:
- [ ] Exact text content
- [ ] Font family
- [ ] Font size
- [ ] Font weight
- [ ] Line height
- [ ] Letter spacing
- [ ] Color
- [ ] Text alignment

### ✅ For Gradient Elements:
- [ ] Gradient type (linear, radial, diamond)
- [ ] All color stops with positions
- [ ] Direction/angle
- [ ] Transform (if rotated)

### ✅ For Icons/Shapes:
- [ ] Complete SVG code
- [ ] Position
- [ ] Size
- [ ] Color

## 📝 Example: Complete Element Extraction

**Element:** Header Background (Desktop 5)

**CSS:**
```css
position: absolute;
left: 0px;
top: 0px;
width: 1440px;
height: 703px;
border-radius: 0px;
border: 1px solid #A9FF47;
box-sizing: border-box;
background: radial-gradient(ellipse farthest-corner, #2F00FF 54.12%, #A9FF47 96.63%);
box-shadow: inset 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
transform: rotate(180deg);
transform-origin: center center;
```

**SVG:**
```xml
<svg width="1440" height="703" viewBox="0 0 1440 703" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_i_248_2)">
    <!-- SVG content with gradients and filters -->
  </g>
  <defs>
    <!-- Gradient and filter definitions -->
  </defs>
</svg>
```

## 🚀 Quick Tips

1. **Start from top to bottom** - Extract elements in visual order
2. **Group related elements** - Header, content, footer
3. **Note parent-child relationships** - Some elements are nested
4. **Copy complete SVG code** - Don't simplify, use exact code
5. **Include all CSS properties** - Even if they seem default
6. **Document z-index** - For overlapping elements
7. **Check for transforms** - Rotations, scales, translations
8. **Note blend modes** - For overlays and effects

## 📦 What to Send Me

When you've extracted everything, send me:

1. **CSS properties** for each element (grouped by section)
2. **SVG code** for all icons, shapes, and complex backgrounds
3. **Text content** with exact typography specs
4. **Layer names** from Figma (to match elements)

Format:
```
/* Desktop - 8 */
/* Rectangle 43 - Header */
position: absolute;
left: 0px;
top: 0px;
width: 1440px;
height: 79px;
/* ... all properties ... */

/* SVG for Header Background */
<svg>...</svg>

/* Text: "Domains & IP Addresses" */
position: absolute;
left: 99px;
top: 298px;
font-family: 'Funnel_Display-Bold', Helvetica;
font-size: 96px;
color: #000000;
/* ... */
```

## ✅ Verification Checklist

After extraction, verify:
- [ ] All elements have position values
- [ ] All text has typography specs
- [ ] All gradients have color stops
- [ ] All SVGs are complete (with defs)
- [ ] All icons have SVG code
- [ ] All decorative elements are documented
- [ ] Layer hierarchy is clear

---

**Ready to implement?** Once you provide the extracted CSS and SVG code, I'll rebuild the page pixel-perfectly! 🎯

