# 💻 Portfolio Techniques: Modern Minimalist × Programmer

> เทคนิคการออกแบบ Portfolio สำหรับ Programmer/Developer ที่เน้นสไตล์ Modern Minimalist ผสมกลิ่นอายของ Code Editor และ Terminal
> 
> **Updated:** เพิ่ม GSAP Animations, Glassmorphism Effects และ Navigation Structure

---

## 📐 Website Structure

### Navigation Menu

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   🖥️ DevPortfolio        [Home]  [Projects]  [Contact]    🌙   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Page Structure

| Page | Route | Content |
|------|-------|---------|
| **Home** | `/` | Hero, About, Skills, Experience |
| **Projects** | `/projects` | Project Gallery, Featured Works |
| **Contact** | `/contact` | Contact Form, Social Links, Location |

### Sitemap

```
📁 Portfolio
├── 🏠 Home
│   ├── Hero Section
│   ├── About Section
│   ├── Skills Section
│   └── Experience Timeline
│
├── 💼 Projects
│   ├── Featured Projects
│   ├── Project Grid
│   └── Project Detail Modal
│
└── 📧 Contact
    ├── Contact Form
    ├── Social Links
    └── Location/Availability
```

---

## 🎨 Color Palette

| สี | Hex Code | การใช้งาน |
|---|----------|----------|
| Terminal Black | `#0d1117` | พื้นหลังหลัก (GitHub dark) |
| Editor Dark | `#161b22` | พื้นหลังรอง / Cards |
| Code Green | `#00ff9f` | Accent หลัก (Matrix feel) |
| Syntax Blue | `#58a6ff` | Links / Accent รอง |
| Syntax Purple | `#bd93f9` | Highlight keywords |
| Syntax Orange | `#ffab70` | Warning / Tags |
| Comment Gray | `#8b949e` | ข้อความรอง |
| White | `#f0f6fc` | ข้อความหลัก |
| Glass White | `rgba(255,255,255,0.05)` | Glassmorphism background |
| Glass Border | `rgba(255,255,255,0.1)` | Glassmorphism border |

### Glassmorphism Colors

```css
/* Glass Card - Dark Theme */
--glass-bg: rgba(255, 255, 255, 0.03);
--glass-bg-hover: rgba(255, 255, 255, 0.06);
--glass-border: rgba(255, 255, 255, 0.08);
--glass-border-hover: rgba(255, 255, 255, 0.15);
--glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
--glass-blur: blur(12px);

/* Glass Card - Light Theme */
--glass-bg-light: rgba(255, 255, 255, 0.7);
--glass-border-light: rgba(255, 255, 255, 0.5);
--glass-shadow-light: 0 8px 32px rgba(0, 0, 0, 0.1);
```

### Alternative Themes

**Dracula Theme:**
- Background: `#282a36`
- Purple: `#bd93f9`
- Green: `#50fa7b`
- Pink: `#ff79c6`

**One Dark:**
- Background: `#1e2127`
- Blue: `#61afef`
- Green: `#98c379`
- Orange: `#d19a66`

---

## 🔤 Typography

| ประเภท | Font แนะนำ | เหตุผล |
|--------|-----------|--------|
| Headings | Fira Code, JetBrains Mono | ดู code-like |
| Body | IBM Plex Sans, Source Sans Pro | อ่านง่าย technical |
| Code blocks | Fira Code, Cascadia Code | รองรับ ligatures |
| Accent | Space Mono, Roboto Mono | Terminal feel |

### Font Features
- เปิด `font-variant-ligatures` สำหรับ `=>`, `===`, `!==`
- ใช้ `letter-spacing: 0.02em` สำหรับ mono fonts
- Line height: `1.6` สำหรับ body, `1.4` สำหรับ code

---

## 🧊 Glassmorphism Design System

### Core Principles

```
1. Transparency  → พื้นหลังโปร่งแสง 3-10%
2. Blur         → backdrop-filter: blur(8-20px)
3. Border       → ขอบสีขาวจาง 5-15%
4. Shadow       → เงาอ่อนๆ สร้างมิติ
5. Layering     → ซ้อนหลายชั้นสร้าง depth
```

### Glass Components

#### Glass Card

```css
.glass-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.glass-card:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-4px);
  box-shadow: 
    0 12px 40px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}
```

#### Glass Navigation

```css
.glass-nav {
  background: rgba(13, 17, 23, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
}
```

#### Glass Button

```css
.glass-button {
  background: rgba(0, 255, 159, 0.1);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 255, 159, 0.3);
  color: #00ff9f;
  padding: 12px 24px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.glass-button:hover {
  background: rgba(0, 255, 159, 0.2);
  border-color: rgba(0, 255, 159, 0.5);
  box-shadow: 0 0 20px rgba(0, 255, 159, 0.3);
}
```

#### Glass Input

```css
.glass-input {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 14px 18px;
  color: #f0f6fc;
  transition: all 0.3s ease;
}

.glass-input:focus {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(88, 166, 255, 0.5);
  box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.1);
  outline: none;
}
```

### Glass Variations

| Variation | Background | Blur | Border | Use Case |
|-----------|------------|------|--------|----------|
| **Subtle** | 2-3% | 8px | 5% | Cards, containers |
| **Medium** | 5-8% | 12px | 10% | Modals, navigation |
| **Strong** | 10-15% | 20px | 15% | Overlays, popups |
| **Colored** | accent 10% | 12px | accent 30% | Buttons, highlights |

---

## 🎬 GSAP Animation System

### Dependencies

```json
{
  "dependencies": {
    "gsap": "^3.14.2",
    "@gsap/react": "^2.1.0"
  }
}
```

### GSAP Plugins ที่ใช้

| Plugin | Purpose | ตัวอย่างการใช้ |
|--------|---------|---------------|
| **ScrollTrigger** | Animation ตาม scroll | Reveal sections, parallax |
| **TextPlugin** | Animate text content | Typing effect |
| **SplitText** | แยกตัวอักษร (Club) | Letter-by-letter animation |
| **Flip** | Layout transitions | Page transitions |
| **MotionPath** | เคลื่อนที่ตาม path | Cursor trail, decorations |

### Core Animations

#### 1. Page Load Sequence

```javascript
// Initial Page Load Animation
const pageLoadTimeline = () => {
  const tl = gsap.timeline();
  
  tl.from(".nav-logo", {
    opacity: 0,
    x: -30,
    duration: 0.6,
    ease: "power3.out"
  })
  .from(".nav-links li", {
    opacity: 0,
    y: -20,
    duration: 0.4,
    stagger: 0.1,
    ease: "power2.out"
  }, "-=0.3")
  .from(".hero-title", {
    opacity: 0,
    y: 60,
    duration: 0.8,
    ease: "power3.out"
  }, "-=0.2")
  .from(".hero-subtitle", {
    opacity: 0,
    y: 40,
    duration: 0.6,
    ease: "power2.out"
  }, "-=0.4")
  .from(".hero-cta", {
    opacity: 0,
    y: 30,
    duration: 0.5,
    stagger: 0.15,
    ease: "power2.out"
  }, "-=0.3")
  .from(".glass-card", {
    opacity: 0,
    y: 40,
    scale: 0.95,
    duration: 0.6,
    ease: "power2.out"
  }, "-=0.2");
  
  return tl;
};
```

#### 2. Typing Effect (Terminal Style)

```javascript
// Terminal Typing Animation
const terminalTyping = (element, text, speed = 0.05) => {
  const tl = gsap.timeline();
  
  // Clear text first
  tl.set(element, { text: "" });
  
  // Type each character
  tl.to(element, {
    text: {
      value: text,
      delimiter: ""
    },
    duration: text.length * speed,
    ease: "none"
  });
  
  // Add blinking cursor
  tl.to(".cursor", {
    opacity: 0,
    repeat: -1,
    yoyo: true,
    duration: 0.5,
    ease: "power2.inOut"
  }, 0);
  
  return tl;
};

// Usage
terminalTyping("#hero-command", "$ ./welcome.sh --dev");
```

#### 3. Scroll-Triggered Reveals

```javascript
// Section Reveal on Scroll
const scrollReveal = () => {
  // Register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);
  
  // Fade In Up
  gsap.utils.toArray(".reveal-up").forEach((elem) => {
    gsap.from(elem, {
      opacity: 0,
      y: 60,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: elem,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse"
      }
    });
  });
  
  // Stagger Children
  gsap.utils.toArray(".stagger-container").forEach((container) => {
    const children = container.querySelectorAll(".stagger-item");
    
    gsap.from(children, {
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container,
        start: "top 80%"
      }
    });
  });
};
```

#### 4. Glass Card Hover Effects

```javascript
// Glass Card 3D Hover
const glassCardHover = () => {
  const cards = document.querySelectorAll(".glass-card");
  
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        y: -8,
        scale: 1.02,
        duration: 0.4,
        ease: "power2.out",
        boxShadow: "0 20px 50px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)"
      });
      
      // Glow effect
      gsap.to(card, {
        borderColor: "rgba(0, 255, 159, 0.3)",
        duration: 0.3
      });
    });
    
    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)"
      });
      
      gsap.to(card, {
        borderColor: "rgba(255, 255, 255, 0.08)",
        duration: 0.3
      });
    });
  });
};
```

#### 5. Navigation Animations

```javascript
// Navigation Scroll Effect
const navScrollEffect = () => {
  const nav = document.querySelector(".glass-nav");
  
  ScrollTrigger.create({
    start: "top -100",
    end: "max",
    onUpdate: (self) => {
      if (self.direction === 1) {
        // Scrolling down - hide nav
        gsap.to(nav, {
          y: -100,
          duration: 0.3,
          ease: "power2.out"
        });
      } else {
        // Scrolling up - show nav
        gsap.to(nav, {
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    }
  });
  
  // Nav background on scroll
  ScrollTrigger.create({
    start: "top -50",
    onEnter: () => {
      gsap.to(nav, {
        background: "rgba(13, 17, 23, 0.95)",
        duration: 0.3
      });
    },
    onLeaveBack: () => {
      gsap.to(nav, {
        background: "rgba(13, 17, 23, 0.8)",
        duration: 0.3
      });
    }
  });
};

// Active Menu Item Animation
const menuItemHover = () => {
  const menuItems = document.querySelectorAll(".nav-link");
  
  menuItems.forEach((item) => {
    const underline = item.querySelector(".nav-underline");
    
    item.addEventListener("mouseenter", () => {
      gsap.to(underline, {
        scaleX: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    item.addEventListener("mouseleave", () => {
      gsap.to(underline, {
        scaleX: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });
};
```

#### 6. Page Transitions

```javascript
// Page Transition Animation
const pageTransition = {
  // Exit current page
  exit: () => {
    const tl = gsap.timeline();
    
    tl.to(".page-content", {
      opacity: 0,
      y: -30,
      duration: 0.4,
      ease: "power2.in"
    })
    .to(".transition-overlay", {
      scaleY: 1,
      transformOrigin: "bottom",
      duration: 0.5,
      ease: "power3.inOut"
    }, "-=0.2");
    
    return tl;
  },
  
  // Enter new page
  enter: () => {
    const tl = gsap.timeline();
    
    tl.to(".transition-overlay", {
      scaleY: 0,
      transformOrigin: "top",
      duration: 0.5,
      ease: "power3.inOut"
    })
    .from(".page-content", {
      opacity: 0,
      y: 30,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.2");
    
    return tl;
  }
};
```

#### 7. Skills Progress Animation

```javascript
// Skill Bar Animation
const animateSkills = () => {
  const skillBars = document.querySelectorAll(".skill-progress");
  
  skillBars.forEach((bar) => {
    const progress = bar.dataset.progress;
    
    gsap.from(bar, {
      width: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: bar,
        start: "top 85%"
      },
      onComplete: () => {
        // Add glow pulse after fill
        gsap.to(bar, {
          boxShadow: "0 0 15px rgba(0, 255, 159, 0.5)",
          repeat: 1,
          yoyo: true,
          duration: 0.3
        });
      }
    });
  });
};

// Counter Animation
const animateCounter = (element, target) => {
  gsap.to(element, {
    innerText: target,
    duration: 2,
    ease: "power2.out",
    snap: { innerText: 1 },
    scrollTrigger: {
      trigger: element,
      start: "top 85%"
    }
  });
};
```

#### 8. Project Card Animations

```javascript
// Project Card Stagger
const projectCardsAnimation = () => {
  const container = document.querySelector(".projects-grid");
  const cards = container.querySelectorAll(".project-card");
  
  gsap.from(cards, {
    opacity: 0,
    y: 60,
    scale: 0.9,
    duration: 0.7,
    stagger: {
      amount: 0.6,
      from: "start"
    },
    ease: "power3.out",
    scrollTrigger: {
      trigger: container,
      start: "top 75%"
    }
  });
};

// Project Card Hover (3D Tilt)
const projectCardTilt = () => {
  const cards = document.querySelectorAll(".project-card");
  
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        transformPerspective: 1000,
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: "power2.out"
      });
    });
  });
};
```

#### 9. Contact Form Animations

```javascript
// Form Input Focus Animation
const formAnimations = () => {
  const inputs = document.querySelectorAll(".glass-input");
  
  inputs.forEach((input) => {
    const label = input.previousElementSibling;
    
    input.addEventListener("focus", () => {
      gsap.to(label, {
        y: -25,
        scale: 0.85,
        color: "#00ff9f",
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(input, {
        borderColor: "rgba(0, 255, 159, 0.5)",
        duration: 0.3
      });
    });
    
    input.addEventListener("blur", () => {
      if (!input.value) {
        gsap.to(label, {
          y: 0,
          scale: 1,
          color: "#8b949e",
          duration: 0.3,
          ease: "power2.out"
        });
      }
      
      gsap.to(input, {
        borderColor: "rgba(255, 255, 255, 0.1)",
        duration: 0.3
      });
    });
  });
};

// Submit Button Animation
const submitAnimation = () => {
  const btn = document.querySelector(".submit-btn");
  
  btn.addEventListener("click", () => {
    const tl = gsap.timeline();
    
    tl.to(btn, {
      scale: 0.95,
      duration: 0.1
    })
    .to(btn, {
      scale: 1,
      duration: 0.3,
      ease: "elastic.out(1, 0.5)"
    })
    .to(".btn-text", {
      opacity: 0,
      y: -20,
      duration: 0.2
    }, "-=0.2")
    .to(".btn-loader", {
      opacity: 1,
      duration: 0.2
    })
    // After submission success
    .to(".btn-loader", {
      opacity: 0,
      duration: 0.2
    }, "+=1.5")
    .to(".btn-success", {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "back.out(1.7)"
    });
  });
};
```

#### 10. Background Particles

```javascript
// Floating Particles Animation
const floatingParticles = () => {
  const particles = document.querySelectorAll(".particle");
  
  particles.forEach((particle, index) => {
    // Random starting position
    gsap.set(particle, {
      x: gsap.utils.random(0, window.innerWidth),
      y: gsap.utils.random(0, window.innerHeight),
      opacity: gsap.utils.random(0.1, 0.4)
    });
    
    // Floating animation
    gsap.to(particle, {
      y: `-=${gsap.utils.random(50, 150)}`,
      x: `+=${gsap.utils.random(-30, 30)}`,
      opacity: gsap.utils.random(0.2, 0.5),
      duration: gsap.utils.random(3, 6),
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: index * 0.2
    });
  });
};
```

### Animation Timing Reference

| Animation | Duration | Ease | Delay |
|-----------|----------|------|-------|
| Page load elements | 0.6-0.8s | power3.out | stagger 0.1s |
| Hover effects | 0.3-0.4s | power2.out | - |
| Scroll reveals | 0.6-0.8s | power3.out | stagger 0.1s |
| Typing effect | 0.05s/char | none | - |
| Page transitions | 0.4-0.5s | power3.inOut | - |
| Button clicks | 0.1-0.3s | elastic.out | - |
| Skill bars | 1-1.5s | power3.out | stagger 0.15s |
| Counter | 1.5-2s | power2.out | - |

### GSAP Best Practices

```
✅ Do:
- ใช้ timeline สำหรับ sequential animations
- Register plugins ก่อนใช้งาน
- ใช้ ease ที่เหมาะสม (power2, power3, elastic, back)
- Clean up ScrollTrigger on unmount
- ใช้ gsap.context() สำหรับ React
- Test บน mobile devices

❌ Don't:
- สร้าง animation loop ไม่มีที่สิ้นสุด
- Animate expensive properties (width, height)
- ลืม kill animations on unmount
- ใช้ duration ยาวเกินไป (>1.5s)
- Animate too many elements พร้อมกัน
```

---

## ✨ เทคนิคหลัก

### 1. Terminal/CLI Style Hero

| Element | รายละเอียด |
|---------|-----------|
| Prompt line | `> hello_world.exe` กระพริบ cursor |
| Typing effect | พิมพ์ข้อความทีละตัว (GSAP TextPlugin) |
| ASCII art | ชื่อหรือโลโก้แบบ ASCII |
| Command output | แสดงผลแบบ terminal response |
| Window chrome | ปุ่ม 🔴🟡🟢 ด้านบน |
| Glass overlay | Glassmorphism window frame |

### 2. Code Editor Layout

| Element | รายละเอียด |
|---------|-----------|
| Line numbers | เลขบรรทัดด้านซ้าย |
| Syntax highlighting | สี keyword, string, comment |
| Tab bar | แท็บไฟล์ด้านบน `.js` `.tsx` `.py` |
| File tree | Sidebar แสดง folder structure |
| Minimap | แถบ preview ด้านขวา (optional) |
| Glass panels | Glassmorphism sidebar และ panels |

### 3. GitHub-style Elements

| Element | รายละเอียด |
|---------|-----------|
| Contribution graph | ตาราง commit สีเขียว (GSAP stagger) |
| Repo cards | การ์ดโปรเจกต์แบบ GitHub (Glass cards) |
| Stats badges | `★ stars` `⎇ forks` `● issues` |
| Commit messages | แสดง commit history |
| Language dots | จุดสีบอกภาษา |

### 4. Matrix/Digital Effects

| Element | รายละเอียด |
|---------|-----------|
| Falling code | ตัวอักษร/เลขตกลงมาช้าๆ |
| Binary pattern | `01010` เป็นพื้นหลังจางๆ |
| Glitch text | ข้อความ glitch เป็นบางครั้ง |
| Scan lines | เส้นแนวนอนจางๆ |
| Floating particles | อนุภาคลอยผ่าน glass layers |

---

## 🖼️ Layout & Components

### Navigation (Glass Navbar)

```
┌─────────────────────────────────────────────────────────────────┐
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░                                                             ░ │
│ ░   🖥️ <Dev/>            [Home]  [Projects]  [Contact]    🌙  ░ │
│ ░                           ────                              ░ │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
└─────────────────────────────────────────────────────────────────┘

Features:
- Fixed position, backdrop-blur
- Hide on scroll down, show on scroll up
- Active link underline animation
- Theme toggle button
- Mobile hamburger menu
```

#### Navigation HTML Structure

```html
<nav class="glass-nav">
  <div class="nav-container">
    <!-- Logo -->
    <a href="/" class="nav-logo">
      <span class="logo-bracket">&lt;</span>
      <span class="logo-text">Dev</span>
      <span class="logo-bracket">/&gt;</span>
    </a>
    
    <!-- Menu -->
    <ul class="nav-links">
      <li>
        <a href="/" class="nav-link active">
          Home
          <span class="nav-underline"></span>
        </a>
      </li>
      <li>
        <a href="/projects" class="nav-link">
          Projects
          <span class="nav-underline"></span>
        </a>
      </li>
      <li>
        <a href="/contact" class="nav-link">
          Contact
          <span class="nav-underline"></span>
        </a>
      </li>
    </ul>
    
    <!-- Actions -->
    <div class="nav-actions">
      <button class="theme-toggle glass-button-sm">
        🌙
      </button>
      <button class="mobile-menu-btn">
        <span class="hamburger"></span>
      </button>
    </div>
  </div>
</nav>
```

### Hero Section (Home Page)

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                    ╭─────────────────────────────────╮              │
│                    │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│              │
│                    │░ 🔴 🟡 🟢  terminal.dev        ░│              │
│                    │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│              │
│                    │░                               ░│              │
│                    │░  $ whoami                     ░│              │
│                    │░  > Full Stack Developer       ░│              │
│                    │░                               ░│              │
│                    │░  $ cat skills.json            ░│              │
│                    │░  > ["React", "Node", "TS"]    ░│              │
│                    │░                               ░│              │
│                    │░  $ ./start_journey.sh▌        ░│              │
│                    │░                               ░│              │
│                    │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│              │
│                    ╰─────────────────────────────────╯              │
│                                                                     │
│                    [View Projects]    [Contact Me]                  │
│                                                                     │
│                          ↓ Scroll                                   │
└─────────────────────────────────────────────────────────────────────┘
```

### About Section (Home Page)

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                        // About Me                                  │
│                                                                     │
│   ╭───────────────────────────────────────────────────────────╮    │
│   │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│    │
│   │░                                                         ░│    │
│   │░   {                                                     ░│    │
│   │░     "name": "Your Name",                                ░│    │
│   │░     "role": "Full Stack Developer",                     ░│    │
│   │░     "location": "Bangkok, Thailand",                    ░│    │
│   │░     "experience": "5+ years",                           ░│    │
│   │░     "passion": ["Clean Code", "UI/UX", "Open Source"],  ░│    │
│   │░     "available": true                                   ░│    │
│   │░   }                                                     ░│    │
│   │░                                                         ░│    │
│   │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│    │
│   ╰───────────────────────────────────────────────────────────╯    │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Skills Section (Home Page)

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                      // Skills & Technologies                       │
│                                                                     │
│   ╭─────────────────╮  ╭─────────────────╮  ╭─────────────────╮    │
│   │░░░░░░░░░░░░░░░░░│  │░░░░░░░░░░░░░░░░░│  │░░░░░░░░░░░░░░░░░│    │
│   │░   Frontend    ░│  │░    Backend    ░│  │░     Tools     ░│    │
│   │░               ░│  │░               ░│  │░               ░│    │
│   │░  ⚛️ React     ░│  │░  🟢 Node.js   ░│  │░  🐳 Docker    ░│    │
│   │░  ████████ 95% ░│  │░  ████████ 90% ░│  │░  ██████░░ 75% ░│    │
│   │░               ░│  │░               ░│  │░               ░│    │
│   │░  📘 TypeScript░│  │░  🐍 Python    ░│  │░  ☁️ AWS       ░│    │
│   │░  ████████ 90% ░│  │░  ██████░░ 80% ░│  │░  █████░░░ 70% ░│    │
│   │░               ░│  │░               ░│  │░               ░│    │
│   │░  🎨 Tailwind  ░│  │░  🗄️ PostgreSQL░│  │░  📦 Git       ░│    │
│   │░  ████████ 95% ░│  │░  ███████░ 85% ░│  │░  ████████ 95% ░│    │
│   │░░░░░░░░░░░░░░░░░│  │░░░░░░░░░░░░░░░░░│  │░░░░░░░░░░░░░░░░░│    │
│   ╰─────────────────╯  ╰─────────────────╯  ╰─────────────────╯    │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Projects Page

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   // Projects                                $ ls -la projects/     │
│                                                                     │
│   ╭─────────────────────────╮  ╭─────────────────────────╮         │
│   │░░░░░░░░░░░░░░░░░░░░░░░░░│  │░░░░░░░░░░░░░░░░░░░░░░░░░│         │
│   │░  ┌─────────────────┐  ░│  │░  ┌─────────────────┐  ░│         │
│   │░  │   Project 01    │  ░│  │░  │   Project 02    │  ░│         │
│   │░  │   Screenshot    │  ░│  │░  │   Screenshot    │  ░│         │
│   │░  └─────────────────┘  ░│  │░  └─────────────────┘  ░│         │
│   │░                       ░│  │░                       ░│         │
│   │░  E-Commerce Platform  ░│  │░  Dashboard App        ░│         │
│   │░  ─────────────────    ░│  │░  ─────────────────    ░│         │
│   │░  React • Node • SQL   ░│  │░  Next.js • GraphQL    ░│         │
│   │░                       ░│  │░                       ░│         │
│   │░  ⭐ 124  ⎇ 45         ░│  │░  ⭐ 89   ⎇ 23         ░│         │
│   │░                       ░│  │░                       ░│         │
│   │░  [Demo]  [GitHub]     ░│  │░  [Demo]  [GitHub]     ░│         │
│   │░░░░░░░░░░░░░░░░░░░░░░░░░│  │░░░░░░░░░░░░░░░░░░░░░░░░░│         │
│   ╰─────────────────────────╯  ╰─────────────────────────╯         │
│                                                                     │
│   ╭─────────────────────────╮  ╭─────────────────────────╮         │
│   │░░░░░░░░░░░░░░░░░░░░░░░░░│  │░░░░░░░░░░░░░░░░░░░░░░░░░│         │
│   │░       Project 03      ░│  │░       Project 04      ░│         │
│   │░░░░░░░░░░░░░░░░░░░░░░░░░│  │░░░░░░░░░░░░░░░░░░░░░░░░░│         │
│   ╰─────────────────────────╯  ╰─────────────────────────╯         │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Contact Page

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   // Contact                            $ ./send_message.sh         │
│                                                                     │
│   ╭─────────────────────────────────────────────────────────────╮  │
│   │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│  │
│   │░                                                           ░│  │
│   │░   const message = {                                       ░│  │
│   │░                                                           ░│  │
│   │░     name: ┌─────────────────────────────────────────┐     ░│  │
│   │░           │ Your Name                               │     ░│  │
│   │░           └─────────────────────────────────────────┘     ░│  │
│   │░                                                           ░│  │
│   │░     email: ┌────────────────────────────────────────┐     ░│  │
│   │░            │ your@email.com                         │     ░│  │
│   │░            └────────────────────────────────────────┘     ░│  │
│   │░                                                           ░│  │
│   │░     message: ┌──────────────────────────────────────┐     ░│  │
│   │░              │                                      │     ░│  │
│   │░              │ Write your message here...           │     ░│  │
│   │░              │                                      │     ░│  │
│   │░              └──────────────────────────────────────┘     ░│  │
│   │░                                                           ░│  │
│   │░   };                                                      ░│  │
│   │░                                                           ░│  │
│   │░   ╭────────────────────────────────────────────────╮      ░│  │
│   │░   │            >>> Send Message >>>                │      ░│  │
│   │░   ╰────────────────────────────────────────────────╯      ░│  │
│   │░                                                           ░│  │
│   │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│  │
│   ╰─────────────────────────────────────────────────────────────╯  │
│                                                                     │
│   ─────────────────────────────────────────────────────────────    │
│                                                                     │
│   // Other ways to reach me                                         │
│                                                                     │
│   ╭───────────╮  ╭───────────╮  ╭───────────╮  ╭───────────╮       │
│   │░ GitHub  ░│  │░ LinkedIn░│  │░ Twitter ░│  │░  Email  ░│       │
│   ╰───────────╯  ╰───────────╯  ╰───────────╯  ╰───────────╯       │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Footer

```
┌─────────────────────────────────────────────────────────────────────┐
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
│░                                                                   ░│
│░   <Dev/>                                   [Home] [Projects] [Contact]
│░                                                                   ░│
│░   Built with Next.js & 💚                  © 2024 Your Name       ░│
│░                                                                   ░│
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
│ main ✓ │ UTF-8 │ LF │ TypeScript │ Ln 142, Col 1          │ 📡 99% │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Micro-interactions

| Interaction | Effect | GSAP Implementation |
|-------------|--------|---------------------|
| Hover link | Underline animation left-to-right | `scaleX: 0 → 1` |
| Hover card | Border glow + lift | `y: -8, boxShadow` |
| Hover button | Background pulse + glow | `boxShadow pulse` |
| Copy code | Click to copy + "Copied!" toast | `scale bounce` |
| Toggle theme | Rotate icon + flash | `rotation: 360` |
| Cursor | Custom cursor with trail | `MotionPath` |
| Scroll | Smooth reveal + parallax | `ScrollTrigger` |
| Page transition | Slide + fade | `timeline` |

---

## 🌟 Decorative Elements

| Element | ลักษณะ | GSAP Animation |
|---------|--------|----------------|
| Line numbers | เลขบรรทัดจางๆ | Fade in stagger |
| Grid dots | จุด dot grid พื้นหลัง | Subtle pulse |
| Corner brackets | `[ ]` มุมของ sections | Draw on scroll |
| Code comments | `// section start` จางๆ | Typing reveal |
| Floating particles | อนุภาคลอย | Random float |
| Cursor glow | Glow ตาม cursor | Follow mouse |
| Glass reflections | แสง reflect บน glass | Mouse parallax |

---

## 📱 Responsive Design

| หน้าจอ | ปรับแต่ง |
|--------|---------|
| Desktop (1200px+) | Full glass effects, all animations |
| Tablet (768-1199px) | Reduced blur, simpler animations |
| Mobile (<768px) | Minimal glass, essential animations only |

### Mobile Considerations

```
✓ ปิด custom cursor
✓ ลด backdrop-filter blur (performance)
✓ ใช้ hamburger menu
✓ Stack columns vertically
✓ ลด particle count
✓ Simpler hover effects (tap instead)
✓ Reduce animation duration
```

---

## 🎯 Do's and Don'ts

### ✅ ควรทำ

| Do | เหตุผล |
|----|--------|
| ใช้ GSAP timeline | จัดการ sequence ง่าย |
| Register plugins ก่อนใช้ | ป้องกัน error |
| Clean up on unmount | Memory management |
| ใช้ will-change sparingly | Performance |
| Test on real devices | Blur performance varies |
| Fallback for no-blur | Safari/older browsers |
| Progressive enhancement | Base functionality first |

### ❌ หลีกเลี่ยง

| Don't | เหตุผล |
|-------|--------|
| Too many blur layers | Performance heavy |
| Animate width/height | Use transform instead |
| Infinite loops ไม่มีจุดจบ | Memory leak |
| ลืม kill ScrollTrigger | Memory leak |
| Heavy effects on mobile | Battery drain |
| Complex glass on scroll | Janky performance |

---

## 🔧 Technical Features

| Feature | รายละเอียด |
|---------|-----------|
| Dark/Light toggle | Theme switch with GSAP transition |
| Keyboard shortcuts | `Ctrl+K` search, navigation |
| Page transitions | GSAP timeline enter/exit |
| Scroll progress | Top bar indicator |
| Lazy loading | Images + heavy components |
| Prefers-reduced-motion | Respect user settings |
| Console easter egg | ASCII art greeting |

---

## 📋 Section Checklist

### Home Page
```
□ Glass Navigation (fixed, blur)
□ Hero Section (terminal + typing)
□ About Section (JSON format)
□ Skills Section (progress bars)
□ Experience Timeline (optional)
□ Footer (status bar style)
```

### Projects Page
```
□ Page header + breadcrumb
□ Filter/Search (optional)
□ Project Grid (glass cards)
□ Project hover effects (tilt)
□ Modal/Detail view
□ Load more / Pagination
```

### Contact Page
```
□ Contact Form (glass inputs)
□ Form validation
□ Submit animation
□ Success/Error states
□ Social links (glass buttons)
□ Location/Availability info
```

---

## 🛠️ Recommended Tech Stack

### Core
```json
{
  "dependencies": {
    "next": "^14.x",
    "react": "^18.x",
    "gsap": "^3.14.2",
    "@gsap/react": "^2.1.0",
    "tailwindcss": "^3.x"
  }
}
```

### GSAP Plugins (Club GreenSock)
```
- ScrollTrigger (Free)
- TextPlugin (Free)
- ScrollSmoother (Club)
- SplitText (Club)
- Flip (Club)
```

### Additional
```json
{
  "devDependencies": {
    "typescript": "^5.x",
    "framer-motion": "^10.x",
    "lucide-react": "^0.x"
  }
}
```

---

## 📚 Resources

### GSAP
- [GSAP Docs](https://greensock.com/docs/)
- [GSAP Eases Visualizer](https://greensock.com/docs/v3/Eases)
- [ScrollTrigger Demos](https://greensock.com/st-demos/)
- [GSAP React Guide](https://greensock.com/react/)

### Glassmorphism
- [Glassmorphism CSS Generator](https://glassmorphism.com/)
- [Hype4 Glass](https://hype4.academy/tools/glassmorphism-generator)
- [CSS Glass](https://css.glass/)

### Inspiration
- [Awwwards](https://www.awwwards.com/)
- [Brittany Chiang](https://brittanychiang.com/)
- [Linear](https://linear.app/)

---

## 🎨 Visual Summary

```
┌─────────────────────────────────────────────────────────────────────┐
│ ░░░░░░░░░░ GLASS NAV ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░  <Dev/>              [Home]  [Projects]  [Contact]          🌙  ░ │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│     ╭───────────────── GLASS CARD ─────────────────╮               │
│     │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │               │
│     │ ░                                         ░ │               │
│     │ ░   $ whoami                              ░ │  ← GSAP       │
│     │ ░   > Full Stack Developer▌               ░ │    Typing     │
│     │ ░                                         ░ │               │
│     │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │               │
│     ╰───────────────────────────────────────────────╯               │
│                                                                     │
│     ╭─── GLASS ───╮  ╭─── GLASS ───╮  ╭─── GLASS ───╮              │
│     │ ░ Frontend ░│  │ ░ Backend  ░│  │ ░  Tools   ░│  ← GSAP     │
│     │ ░ ████████ ░│  │ ░ ███████░ ░│  │ ░ ██████░░ ░│    Stagger  │
│     ╰─────────────╯  ╰─────────────╯  ╰─────────────╯              │
│                                                                     │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░ main ✓ │ UTF-8 │ TypeScript                        │ 📡 Online ░ │
└─────────────────────────────────────────────────────────────────────┘

Legend:
░░░░░ = Glassmorphism (blur + transparency)
─────  = Glass border (rgba white)
▌      = Blinking cursor (GSAP)
████   = Animated progress (GSAP)
```

---

## ✍️ Final Tips

```
1. Performance First
   → Test backdrop-filter on mobile
   → Use will-change sparingly
   → Lazy load heavy animations

2. GSAP Optimization
   → Use timeline for sequences
   → Clean up ScrollTriggers
   → Prefer transform over position

3. Glass Effects
   → Max 2-3 blur layers
   → Fallback for older browsers
   → Reduce on mobile

4. User Experience
   → Respect prefers-reduced-motion
   → Keep animations under 1s
   → Don't animate everything

5. Consistency
   → Same easing throughout
   → Consistent timing
   → Unified glass style
```

---

> 🚀 *"Great portfolios feel alive. GSAP + Glassmorphism = Modern magic."*

---

*Updated by Claude AI | December 2024 | GSAP 3.14.2*

```
╔════════════════════════════════════════════╗
║                                            ║
║   const portfolio = {                      ║
║     style: "Modern Minimalist",            ║
║     animations: "GSAP 3.14.2",             ║
║     effects: "Glassmorphism",              ║
║     pages: ["Home", "Projects", "Contact"],║
║     status: "Ready to build! 🚀"           ║
║   };                                       ║
║                                            ║
╚════════════════════════════════════════════╝
```
