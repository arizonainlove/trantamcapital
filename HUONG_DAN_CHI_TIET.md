# HƯỚNG DẪN XÂY DỰNG WEBSITE TRANTAMCAPITAL.COM

> Phiên bản: 1.0
> Ngày: 20/05/2026
> Công nghệ: Next.js 14 + TypeScript + Tailwind CSS

---

## MỤC LỤC

1. [Giới thiệu](#1-giới-thiệu)
2. [Kiến thức cần biết](#2-kiến-thức-cần-biết)
3. [Môi trường làm việc](#3-môi-trường-làm-việc)
4. [Cài đặt dự án](#4-cài-đặt-dự-án)
5. [Cấu trúc thư mục](#5-cấu-trúc-thư-mục)
6. [Xây dựng Design System (Màu sắc, Font chữ)](#6-xây-dựng-design-system)
7. [Tạo Layout (Header, Footer)](#7-tạo-layout)
8. [Widget giá Coin Live](#8-widget-giá-coin-live)
9. [Xây dựng Component tái sử dụng](#9-xây-dựng-component-tái-sử-dụng)
10. [Xây dựng các Trang](#10-xây-dựng-các-trang)
11. [Responsive Mobile](#11-responsive-mobile)
12. [Tối ưu SEO](#12-tối-ưu-seo)
13. [Build & Deploy lên Vercel](#13-build--deploy)
14. [Bảo trì & Cập nhật](#14-bảo-trì--cập-nhật)
15. [FAQs](#15-faqs)

---

## 1. Giới thiệu

### 1.1 Về dự án

**trantamcapital.com** là website giới thiệu, chia sẻ thông tin về thị trường tài chính bao gồm:
- **Tiền điện tử (Cryptocurrency)**
- **Forex (Foreign Exchange)**
- **Binary Option (Quyền chọn nhị phân)**
- **Phân tích đầu tư & Tin tức thị trường**

### 1.2 Các trang sẽ có

| # | Trang | URL | Mục đích |
|---|-------|-----|----------|
| 1 | Trang chủ | `/` | Giới thiệu tổng quan, giá coin, tin nổi bật |
| 2 | Tin tức | `/news` | Danh sách bài viết thị trường |
| 3 | Dành cho người mới | `/for-beginners` | Kiến thức căn bản, thuật ngữ |
| 4 | Phân tích đầu tư | `/investment-analysis` | Nhận định thị trường |
| 5 | Forex Broker | `/forex-broker` | So sánh, đánh giá sàn Forex |
| 6 | Crypto Exchange | `/crypto-exchange` | So sánh sàn giao dịch Crypto |
| 7 | Binary Option | `/binary-option` | Thông tin về Binary Option |
| 8 | Tools | `/tools` | Máy tính, lịch kinh tế |
| 9 | Về chúng tôi | `/about` | Giới thiệu công ty |
| 10 | Liên hệ | `/contact` | Form liên hệ |

### 1.3 Công nghệ sử dụng

| Công nghệ | Phiên bản | Mục đích |
|-----------|-----------|----------|
| Node.js | 18+ | Môi trường chạy JavaScript |
| Next.js | 14+ (App Router) | Framework React full-stack |
| TypeScript | 5+ | An toàn kiểu dữ liệu |
| Tailwind CSS | 3+ | Framework CSS utility-first |
| CoinGecko API | Free | Lấy giá crypto real-time |
| react-icons | 5+ | Thư viện icon |
| Vercel | - | Nền tảng deploy |

---

## 2. Kiến thức cần biết

Bạn **KHÔNG cần** biết hết tất cả. Chỉ cần hiểu khái niệm cơ bản:

### 2.1 HTML căn bản
- Các thẻ: `<div>`, `<h1>`, `<p>`, `<a>`, `<img>`, `<input>`
- Cấu trúc trang: `<html>` → `<head>` → `<body>`
- Class, ID

### 2.2 CSS căn bản
- Màu sắc (`color`, `background-color`)
- Kích thước (`width`, `height`, `padding`, `margin`)
- Bố cục (`flexbox`, `grid`)

### 2.3 JavaScript căn bản
- Biến, hàm
- `if/else`, vòng lặp
- `fetch()` để gọi API

### 2.4 React căn bản (sẽ học qua dự án)
- Component: `<TênComponent />`
- Props: truyền dữ liệu vào component
- useState, useEffect: quản lý state

### 2.5 Terminal/Command Line
- `cd` — chuyển thư mục
- `npm run dev` — chạy dự án
- `npm install` — cài đặt thư viện

---

## 3. Môi trường làm việc

### 3.1 Cài đặt phần mềm

#### Bước 1: Cài đặt Node.js
1. Truy cập https://nodejs.org/
2. Tải bản **LTS** (18.x hoặc 20.x)
3. Chạy file cài đặt, nhấn Next → Next → Install
4. Kiểm tra: Mở Terminal (CMD hoặc PowerShell), gõ:
   ```
   node --version
   npm --version
   ```
   Sẽ thấy hiện phiên bản (vd: `v18.17.0`, `9.6.7`)

#### Bước 2: Cài đặt VS Code
1. Truy cập https://code.visualstudio.com/
2. Tải và cài đặt
3. Mở VS Code, vào Extensions (Ctrl+Shift+X), cài đặt:
   - **Tailwind CSS IntelliSense**
   - **ES7+ React/Redux/React-Native snippets**
   - **Prettier - Code formatter**

#### Bước 3: Cài đặt Git (tùy chọn, để quản lý code)
1. Truy cập https://git-scm.com/
2. Tải và cài đặt
3. Kiểm tra: `git --version`

### 3.2 Tạo tài khoản cần thiết

#### GitHub (lưu code + deploy)
1. Truy cập https://github.com/
2. Đăng ký tài khoản (free)
3. Xác nhận email

#### Vercel (deploy website - sẽ làm sau)
1. Truy cập https://vercel.com/
2. Đăng ký bằng tài khoản GitHub (free)

---

## 4. Cài đặt dự án

### 4.1 Tạo dự án Next.js

Mở Terminal (CMD/PowerShell) và gõ:

```bash
# Di chuyển đến thư mục bạn muốn đặt dự án
cd C:\CodeProjects

# Tạo dự án Next.js
npx create-next-app@latest trantamcapital --typescript --tailwind --eslint --app --src-dir --no-import-alias
```

**Giải thích các flag:**
- `--typescript`: Dùng TypeScript
- `--tailwind`: Cài sẵn Tailwind CSS
- `--eslint`: Công cụ kiểm tra code
- `--app`: Dùng App Router (mới nhất)
- `--src-dir`: Code trong thư mục `src/`

Khi được hỏi, chọn **Yes** cho tất cả.

### 4.2 Cài đặt thêm thư viện

```bash
cd trantamcapital
npm install react-icons
```

### 4.3 Chạy thử dự án

```bash
npm run dev
```

Mở trình duyệt, vào `http://localhost:3000`. Bạn sẽ thấy trang mặc định của Next.js.

Nhấn `Ctrl+C` trong terminal để dừng.

---

## 5. Cấu trúc thư mục

Sau khi cài đặt, thư mục dự án sẽ như sau:

```
trantamcapital/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout chính (Header + Footer)
│   │   ├── page.tsx            # Trang chủ
│   │   ├── globals.css         # CSS toàn cục
│   │   └── favicon.ico         # Icon tab
│   ├── components/             # (tạo mới) Component tái sử dụng
│   └── ...
├── public/                     # Hình ảnh, file tĩnh
├── package.json
├── next.config.js
├── tsconfig.json
├── tailwind.config.ts
└── postcss.config.js
```

### 5.1 Tạo cấu trúc thư mục

Tạo các thư mục sau trong `src/app/`:

```bash
# Di chuyển vào thư mục dự án
cd C:\CodeProjects\trantamcapital

# Tạo thư mục components
mkdir src\components

# Tạo thư mục cho từng trang
mkdir src\app\news
mkdir src\app\for-beginners
mkdir src\app\investment-analysis
mkdir src\app\forex-broker
mkdir src\app\crypto-exchange
mkdir src\app\binary-option
mkdir src\app\tools
mkdir src\app\about
mkdir src\app\contact
```

---

## 6. Xây dựng Design System

Đây là bước định nghĩa **màu sắc, font chữ, kiểu dáng** cho toàn bộ website.

### 6.1 Màu sắc chủ đạo (dựa trên thuancapital.com)

| Tên | Mã màu | Công dụng |
|-----|--------|-----------|
| Cam chủ đạo | `#FF5E00` | Nút CTA, link active |
| Cam đậm | `#E54D00` | Hover của nút |
| Xanh navy | `#051323` | Nền tối (footer, dark section) |
| Vàng nav | `#FFCA00` | Thanh navigation |
| Xanh lam | `#0C83E7` | Link text |
| Cyan | `#55AADD` | Accent phụ |
| Xanh lá | `#3D9400` | Giá tăng |
| Đỏ | `#FF0000` | Giá giảm |
| Vàng cảnh báo | `#FF9B00` | Badge cảnh báo |

### 6.2 Font chữ

- **Font chính**: Open Sans (đọc, hiển thị nội dung)
- **Font phụ**: Roboto (dữ liệu, số liệu)

### 6.3 Kích thước chữ

| Loại | Cỡ | Đậm | Dòng |
|------|-----|-----|------|
| Tiêu đề lớn (H1) | 32px | Bold (700) | 35px |
| Tiêu đề section (H2) | 28px | Bold (700) | 31px |
| Tiêu đề phụ (H3) | 18px | Medium (500) | 20px |
| Nội dung (Body) | 14px | Regular (400) | 23px |
| Chữ nhỏ | 13px | Regular (400) | 20px |
| Link menu | 14px | Regular (400) | - |

### 6.4 Component chuẩn

#### Button chính
- Nền: `#FF5E00`
- Chữ: trắng, đậm 700, cỡ 16px
- Padding: 12px 24px
- Bo góc: 4px
- Cao: 44px
- Bóng: `0px 2px 8px rgba(255, 94, 0, 0.3)`

#### Card
- Nền: trắng
- Viền: `1px solid #DEE2E6`
- Bo góc: 7px
- Padding trong: 20px 24px
- Bóng nhẹ

#### Navigation
- Nền: `#FFCA00` (vàng)
- Cao: 48px
- Link active: gạch chân 3px màu cam `#FF5E00`

### 6.5 Tiến hành code

#### Mở file `src/app/globals.css`, thay nội dung sau:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* Primary */
  --primary: #FF5E00;
  --primary-dark: #E54D00;
  --primary-light: rgba(255, 94, 0, 0.15);

  /* Backgrounds */
  --dark-bg: #051323;
  --nav-bg: #FFCA00;
  --body-bg: #FFFFFF;
  --section-bg: #FAFAFA;

  /* Text */
  --text-primary: #333333;
  --text-secondary: #555555;
  --text-light: #999999;

  /* Status */
  --success: #3D9400;
  --error: #FF0000;
  --warning: #FF9B00;
  --warning-light: #FABF2C;

  /* UI */
  --link: #0C83E7;
  --accent-cyan: #55AADD;
  --border: #DEE2E6;
  --light-gray: #EBEEF0;

  /* Typography */
  --font-primary: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;  /* Fallback — next/font ghi đè khi build */
  --font-secondary: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-primary);
  font-size: 14px;
  line-height: 23px;
  color: var(--text-primary);
  background-color: var(--body-bg);
}

a {
  color: inherit;
  text-decoration: none;
}

/* Utility classes cho design system */
.container-custom {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

@media (min-width: 768px) {
  .container-custom {
    padding: 0 32px;
  }
}

/* Button styles */
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  background-color: var(--primary);
  color: #FFFFFF;
  font-family: var(--font-primary);
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 4px;
  height: 44px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0px 2px 8px rgba(255, 94, 0, 0.3);
  min-width: 44px;
}

.btn-primary:hover {
  background-color: var(--primary-dark);
  box-shadow: 0px 4px 12px rgba(255, 94, 0, 0.4);
}

.btn-primary:active {
  background-color: #CC4400;
  box-shadow: 0px 1px 4px rgba(255, 94, 0, 0.2);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  background-color: rgba(255, 94, 0, 0.15);
  color: var(--primary);
  font-family: var(--font-primary);
  font-size: 14px;
  font-weight: 400;
  border: 1px solid var(--primary);
  border-radius: 4px;
  height: 36px;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 44px;
}

.btn-secondary:hover {
  background-color: rgba(255, 94, 0, 0.25);
}

/* Section spacing */
.section-padding {
  padding: 52px 0;
}

@media (max-width: 767px) {
  .section-padding {
    padding: 36px 0;
  }
}

/* Card styles */
.card {
  background: #FFFFFF;
  border: 1px solid var(--border);
  border-radius: 7px;
  padding: 20px 24px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.2s ease;
}

.card:hover {
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
}

/* Price up/down */
.price-up {
  color: var(--success);
}

.price-down {
  color: var(--error);
}

/* Marquee animation for ticker */
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}

.animate-marquee:hover {
  animation-play-state: paused;
}

/* Focus styles for accessibility */
*:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
```

#### Mở `tailwind.config.ts`, cập nhật:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF5E00',
          dark: '#E54D00',
          light: 'rgba(255, 94, 0, 0.15)',
        },
        'dark-bg': '#051323',
        'nav-bg': '#FFCA00',
        'text-primary': '#333333',
        'text-secondary': '#555555',
        'success': '#3D9400',
        'error': '#FF0000',
        'warning': '#FF9B00',
        'link': '#0C83E7',
        'accent-cyan': '#55AADD',
      },
      fontFamily: {
        primary: ['Open Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        secondary: ['Roboto', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        'display': ['32px', { lineHeight: '35px', fontWeight: '700' }],
        'h1': ['28px', { lineHeight: '31px', fontWeight: '700' }],
        'h2': ['17px', { lineHeight: '21px', fontWeight: '500' }],
        'h3': ['18px', { lineHeight: '20px', fontWeight: '500' }],
        'body': ['14px', { lineHeight: '23px', fontWeight: '400' }],
        'small': ['13px', { lineHeight: '20px', fontWeight: '400' }],
      },
      maxWidth: {
        'container': '1200px',
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## 7. Tạo Layout

Layout là khung chung cho tất cả các trang, gồm **Header** (thanh navigation) và **Footer**.

### 7.1 Tạo Header Component

Tạo file `src/components/Header.tsx`:

```tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX } from 'react-icons/hi';

// Danh sách menu
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'News', path: '/news' },
  { name: 'For Beginners', path: '/for-beginners' },
  { name: 'Investment Analysis', path: '/investment-analysis' },
  { name: 'Forex Broker', path: '/forex-broker' },
  { name: 'Crypto Exchange', path: '/crypto-exchange' },
  { name: 'Binary Option', path: '/binary-option' },
  { name: 'Tools', path: '/tools' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-nav-bg" style={{ backgroundColor: '#FFCA00' }}>
      {/* Top bar với logo và menu desktop */}
      <div className="container-custom flex items-center justify-between h-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">TC</span>
          </div>
          <span className="font-bold text-base hidden sm:block" style={{ color: '#333333' }}>
            TRANTAM<span className="text-primary">CAPITAL</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center h-full">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className="flex items-center px-3 h-full text-sm transition-colors duration-200"
                style={{
                  color: isActive ? '#FF5E00' : '#333333',
                  borderBottom: isActive ? '3px solid #FF5E00' : '3px solid transparent',
                  fontWeight: isActive ? 600 : 400,
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = '#FF5E00';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = '#333333';
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10"
          style={{ color: '#333333', minWidth: '44px', minHeight: '44px' }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="container-custom py-4 space-y-1 max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className="block px-4 py-3 rounded text-sm transition-colors"
                  style={{
                    backgroundColor: isActive ? 'rgba(255, 94, 0, 0.1)' : 'transparent',
                    color: isActive ? '#FF5E00' : '#333333',
                    fontWeight: isActive ? 600 : 400,
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
```

### 7.2 Tạo Footer Component

Tạo file `src/components/Footer.tsx`:

```tsx
import Link from 'next/link';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'News', path: '/news' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const marketLinks = [
  { name: 'Forex Trading', path: '/forex-broker' },
  { name: 'Cryptocurrency', path: '/crypto-exchange' },
  { name: 'Binary Options', path: '/binary-option' },
  { name: 'Investment Analysis', path: '/investment-analysis' },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#051323', color: '#EBEEF0' }}>
      {/* Main footer - 4 columns */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">TC</span>
              </div>
              <span className="font-bold text-lg text-white">
                TRANTAM<span className="text-primary">CAPITAL</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed opacity-80">
              Your trusted source for financial market insights, cryptocurrency analysis,
              forex trading education, and binary options information.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Markets */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Markets</h3>
            <ul className="space-y-2">
              {marketLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm opacity-80">
                <HiLocationMarker className="mt-0.5 text-primary flex-shrink-0" size={16} />
                <span>123 Financial District, New York, NY 10004</span>
              </li>
              <li className="flex items-center gap-2 text-sm opacity-80">
                <HiMail className="text-primary flex-shrink-0" size={16} />
                <a href="mailto:info@trantamcapital.com" className="hover:text-primary transition-colors">
                  info@trantamcapital.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm opacity-80">
                <HiPhone className="text-primary flex-shrink-0" size={16} />
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-opacity-20 border-white">
        <div className="container-custom py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs opacity-60">
            &copy; {new Date().getFullYear()} TrantamCapital. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs opacity-60">
            <span>Risk Warning</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>

      {/* Risk disclaimer */}
      <div className="border-t border-opacity-20 border-white">
        <div className="container-custom py-3">
          <p className="text-[10px] leading-relaxed opacity-50 text-center">
            <strong>Risk Warning:</strong> Trading forex, cryptocurrencies, and binary options involves
            substantial risk of loss and is not suitable for all investors. Past performance is not
            indicative of future results. The information on this website is for educational purposes
            only and should not be considered financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

### 7.3 Cập nhật Root Layout

Mở `src/app/layout.tsx`:

```tsx
import type { Metadata } from 'next';
import { Open_Sans, Roboto } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

// Tối ưu font qua next/font — tự động self-host, không gọi Google CDN
const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-primary',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-secondary',
});

export const metadata: Metadata = {
  title: {
    default: 'TrantamCapital — Financial Markets & Crypto Insights',
    template: '%s | TrantamCapital',
  },
  description: 'Your trusted source for financial market insights, cryptocurrency analysis, forex trading education, and binary options information.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${openSans.variable} ${roboto.variable}`}>
      <body style={{ fontFamily: 'var(--font-primary)' }}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
```

---

## 8. Widget giá Coin Live

Widget hiển thị giá crypto chạy ngang dưới header, cập nhật mỗi 60 giây từ CoinGecko API.

### Tạo file `src/components/PriceTicker.tsx`:

```tsx
'use client';

import { useState, useEffect } from 'react';
import { HiArrowSmUp, HiArrowSmDown } from 'react-icons/hi';

interface CoinData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
}

const COIN_IDS = [
  'bitcoin', 'ethereum', 'binancecoin', 'solana', 'ripple',
  'cardano', 'dogecoin', 'polkadot', 'avalanche-2', 'matic-network',
  'chainlink', 'litecoin',
];

export default function PriceTicker() {
  const [coins, setCoins] = useState<CoinData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${COIN_IDS.join(',')}&order=market_cap_desc&sparkline=false&price_change_percentage=24h`
        );
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setCoins(data);
        setError(null);
      } catch (err) {
        setError('Could not load prices');
        console.error('Price fetch error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000); // Refresh mỗi 60s
    return () => clearInterval(interval);
  }, []);

  const formatPrice = (price: number) => {
    if (price >= 1000) return '$' + price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    if (price >= 1) return '$' + price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 });
    return '$' + price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 8 });
  };

  if (isLoading) {
    return (
      <div className="bg-dark-bg text-white py-2 overflow-hidden">
        <div className="container-custom">
          <div className="flex gap-8 text-sm">
            <span className="animate-pulse">Loading prices...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-dark-bg text-white py-2 overflow-hidden">
        <div className="container-custom">
          <div className="flex gap-8 text-sm">
            <span className="opacity-60">Prices unavailable</span>
          </div>
        </div>
      </div>
    );
  }

  // Double the array for seamless marquee effect
  const displayCoins = [...coins, ...coins];

  return (
    <div className="bg-dark-bg text-white py-2 overflow-hidden border-b border-gray-800">
      <div className="relative">
        <div className="flex animate-marquee" style={{ width: 'fit-content' }}>
          {displayCoins.map((coin, index) => (
            <div
              key={`${coin.id}-${index}`}
              className="flex items-center gap-2 px-4 whitespace-nowrap text-sm"
            >
              <img
                src={coin.image}
                alt={coin.name}
                className="w-4 h-4 rounded-full"
                loading="lazy"
              />
              <span className="font-semibold uppercase">{coin.symbol}</span>
              <span className="font-mono">{formatPrice(coin.current_price)}</span>
              <span
                className={`flex items-center gap-0.5 text-xs ${
                  coin.price_change_percentage_24h >= 0 ? 'text-success' : 'text-error'
                }`}
              >
                {coin.price_change_percentage_24h >= 0 ? <HiArrowSmUp /> : <HiArrowSmDown />}
                {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

### Thêm PriceTicker vào Layout

Mở `src/app/layout.tsx` và thêm `import PriceTicker from '@/components/PriceTicker';` sau đó chèn `<PriceTicker />` sau `<Header />`, đồng thời dùng `next/font` để tối ưu font:

```tsx
import type { Metadata } from 'next';
import { Open_Sans, Roboto } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PriceTicker from '@/components/PriceTicker';
import './globals.css';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-primary',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-secondary',
});

export const metadata: Metadata = {
  title: {
    default: 'TrantamCapital — Financial Markets & Crypto Insights',
    template: '%s | TrantamCapital',
  },
  description: 'Your trusted source for financial market insights, cryptocurrency analysis, forex trading education, and binary options information.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${openSans.variable} ${roboto.variable}`}>
      <body style={{ fontFamily: 'var(--font-primary)' }}>
        <Header />
        <PriceTicker />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
```

---

## 9. Xây dựng Component tái sử dụng

### 9.1 SectionTitle Component

Tạo `src/components/SectionTitle.tsx`:

```tsx
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionTitle({ title, subtitle, light = false }: SectionTitleProps) {
  return (
    <div className="text-center mb-10">
      <h2
        className="text-h1 mb-3"
        style={{ color: light ? '#FFFFFF' : '#333333' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-body max-w-2xl mx-auto"
          style={{ color: light ? '#AAAAAA' : '#555555' }}
        >
          {subtitle}
        </p>
      )}
      <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
    </div>
  );
}
```

### 9.2 Card Component

Tạo `src/components/Card.tsx`:

```tsx
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`bg-white border border-border rounded-[7px] p-5 md:p-6 ${
        hover ? 'hover:shadow-md transition-shadow duration-200' : ''
      } ${className}`}
      style={{ boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.05)' }}
    >
      {children}
    </div>
  );
}
```

### 9.3 NewsCard Component

Tạo `src/components/NewsCard.tsx`:

```tsx
import Link from 'next/link';
import { HiCalendar } from 'react-icons/hi';

interface NewsCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  slug: string;
}

export default function NewsCard({ title, excerpt, category, date, image, slug }: NewsCardProps) {
  return (
    <Link href={`/news/${slug}`} className="block group">
      <div className="card overflow-hidden p-0">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundImage: `url(${image})` }}
          />
          <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase">
            {category}
          </span>
        </div>
        {/* Content */}
        <div className="p-5">
          <div className="flex items-center gap-2 text-xs mb-2" style={{ color: '#555555' }}>
            <HiCalendar size={14} />
            <span>{date}</span>
          </div>
          <h3 className="font-semibold text-base mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-sm" style={{ color: '#555555' }}>
            {excerpt}
          </p>
        </div>
      </div>
    </Link>
  );
}
```

### 9.4 BrokerCard Component

Tạo `src/components/BrokerCard.tsx`:

```tsx
import { HiStar, HiShieldCheck } from 'react-icons/hi';

interface BrokerCardProps {
  name: string;
  logo: string;
  rating: number;
  features: string[];
  pros: string[];
  link: string;
}

export default function BrokerCard({ name, logo, rating, features, pros, link }: BrokerCardProps) {
  return (
    <div className="card">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
          <span className="text-2xl font-bold text-primary">{name.charAt(0)}</span>
        </div>
        <div>
          <h3 className="font-bold text-base">{name}</h3>
          <div className="flex items-center gap-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <HiStar
                key={i}
                size={16}
                className={i < rating ? 'text-warning-light' : 'text-gray-300'}
              />
            ))}
            <span className="text-xs ml-1 text-text-secondary">({rating}.0)</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {features.map((feature, i) => (
          <span key={i} className="text-xs bg-blue-50 text-link px-2 py-1 rounded font-medium">
            {feature}
          </span>
        ))}
      </div>

      <ul className="space-y-1 mb-4">
        {pros.map((pro, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
            <HiShieldCheck className="text-success mt-0.5 flex-shrink-0" size={16} />
            {pro}
          </li>
        ))}
      </ul>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary w-full text-center text-sm"
      >
        Visit {name}
      </a>
    </div>
  );
}
```

---

## 10. Xây dựng các Trang

### 10.1 HÌNH ẢNH (Placeholder)

Vì chưa có hình ảnh thật, chúng ta sẽ dùng ảnh màu nền (placeholder) với gradient hoặc màu sắc tài chính.

Các ảnh cần có:
- **Hero banner**: Gradient tối + text
- **News thumbnails**: Ảnh nền màu với icon
- **Broker logos**: Chữ cái đầu tiên

Chúng ta sẽ dùng `div` với `background` gradient thay vì ảnh thật, hoặc bạn có thể dùng ảnh từ unsplash.com sau.

### 10.2 Trang Chủ (`src/app/page.tsx`)

```tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiTrendingUp, HiShieldCheck, HiChartBar, HiGlobe, HiArrowSmUp, HiArrowSmDown } from 'react-icons/hi';
import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import NewsCard from '@/components/NewsCard';

// Dữ liệu mẫu
const featuredNews = [
  {
    title: 'Bitcoin Surges Past $100K: What This Means for Investors in 2026',
    excerpt: 'The world\'s largest cryptocurrency has reached a new all-time high, signaling a potential bull run across the entire crypto market.',
    category: 'Crypto',
    date: 'May 19, 2026',
    image: '/images/news-crypto-1.jpg',
    slug: 'bitcoin-surges-past-100k',
  },
  {
    title: 'Forex Market Update: Fed Decision Triggers Major USD Movement',
    excerpt: 'The Federal Reserve\'s latest interest rate decision has caused significant volatility in major currency pairs.',
    category: 'Forex',
    date: 'May 18, 2026',
    image: '/images/news-forex-1.jpg',
    slug: 'forex-market-update-fed',
  },
  {
    title: 'Binary Options Trading: New Regulations in 2026',
    excerpt: 'Regulatory changes are reshaping the binary options landscape. Here\'s what traders need to know.',
    category: 'Binary Option',
    date: 'May 17, 2026',
    image: '/images/news-binary-1.jpg',
    slug: 'binary-options-new-regulations',
  },
];

const platforms = [
  {
    title: 'Forex Brokers',
    description: 'Compare top regulated forex brokers with competitive spreads, leverage options, and trading platforms.',
    icon: HiGlobe,
    link: '/forex-broker',
  },
  {
    title: 'Crypto Exchanges',
    description: 'Discover the best cryptocurrency exchanges for trading, staking, and storing digital assets.',
    icon: HiTrendingUp,
    link: '/crypto-exchange',
  },
  {
    title: 'Binary Options',
    description: 'Learn about binary options trading platforms, strategies, and risk management.',
    icon: HiChartBar,
    link: '/binary-option',
  },
  {
    title: 'Trading Tools',
    description: 'Access professional trading tools including calculators, calendars, and market analysis resources.',
    icon: HiShieldCheck,
    link: '/tools',
  },
];

const whyChooseUs = [
  {
    title: 'Expert Analysis',
    description: 'In-depth market analysis from experienced financial professionals.',
    icon: HiChartBar,
  },
  {
    title: 'Comprehensive Coverage',
    description: 'Covering forex, crypto, and binary options markets worldwide.',
    icon: HiGlobe,
  },
  {
    title: 'Educational Focus',
    description: 'Beginner-friendly guides and resources to help you start trading.',
    icon: HiTrendingUp,
  },
  {
    title: 'Trusted Information',
    description: 'Accurate, up-to-date information you can rely on for your trading decisions.',
    icon: HiShieldCheck,
  },
];

const topCoins = [
  { name: 'Bitcoin', symbol: 'BTC', price: 102450, change: 2.45, marketCap: '2.02T' },
  { name: 'Ethereum', symbol: 'ETH', price: 5230, change: -1.23, marketCap: '628B' },
  { name: 'Binance Coin', symbol: 'BNB', price: 612, change: 3.78, marketCap: '94B' },
  { name: 'Solana', symbol: 'SOL', price: 145, change: 5.12, marketCap: '62B' },
  { name: 'Ripple', symbol: 'XRP', price: 0.78, change: -0.45, marketCap: '42B' },
  { name: 'Cardano', symbol: 'ADA', price: 0.62, change: 1.34, marketCap: '22B' },
  { name: 'Dogecoin', symbol: 'DOGE', price: 0.12, change: -2.56, marketCap: '17B' },
  { name: 'Polkadot', symbol: 'DOT', price: 7.89, change: 4.67, marketCap: '11B' },
];

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#051323' }}>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #FF5E00 0%, transparent 50%), radial-gradient(circle at 80% 50%, #55AADD 0%, transparent 50%)',
        }} />
        <div className="container-custom relative z-10 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display md:text-[42px] md:leading-[46px] text-white font-bold mb-4">
              Trade Smarter,<br />
              <span className="text-primary">Invest Wiser</span>
            </h1>
            <p className="text-base md:text-lg mb-8 opacity-80 max-w-2xl mx-auto" style={{ color: '#EBEEF0' }}>
              Your trusted source for forex, cryptocurrency, and binary options market insights.
              Expert analysis, broker reviews, and educational resources for traders of all levels.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/for-beginners" className="btn-primary">
                Start Learning
              </Link>
              <Link href="/news" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-dark-bg transition-colors min-w-[44px] h-[44px]">
                Latest News
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MARKET OVERVIEW */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Market Overview"
            subtitle="Real-time cryptocurrency market data and price movements"
          />
          <div className="overflow-x-auto -mx-4 md:mx-0">
            <div className="min-w-[600px] px-4 md:px-0">
              {/* Table header */}
              <div className="grid grid-cols-4 gap-4 py-3 px-4 text-sm font-semibold uppercase tracking-wide" style={{ color: '#555555', backgroundColor: '#FAFAFA', borderRadius: '7px 7px 0 0' }}>
                <span>Name</span>
                <span className="text-right">Price</span>
                <span className="text-right">24h Change</span>
                <span className="text-right">Market Cap</span>
              </div>
              {/* Table rows */}
              {topCoins.map((coin) => (
                <div
                  key={coin.symbol}
                  className="grid grid-cols-4 gap-4 py-3 px-4 border-b border-border text-sm hover:bg-gray-50 transition-colors items-center"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-[10px] font-bold">
                      {coin.name.charAt(0)}
                    </div>
                    <div>
                      <span className="font-semibold">{coin.symbol}</span>
                      <span className="text-xs text-text-secondary ml-2 hidden sm:inline">{coin.name}</span>
                    </div>
                  </div>
                  <span className="text-right font-mono font-medium">
                    ${coin.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                  <span className={`text-right flex items-center justify-end gap-1 ${
                    coin.change >= 0 ? 'text-success' : 'text-error'
                  }`}>
                    {coin.change >= 0 ? <HiArrowSmUp /> : <HiArrowSmDown />}
                    {Math.abs(coin.change)}%
                  </span>
                  <span className="text-right font-medium">{coin.marketCap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED NEWS */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAFA' }}>
        <div className="container-custom">
          <SectionTitle
            title="Market News"
            subtitle="Stay informed with the latest market analysis and trading insights"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredNews.map((news) => (
              <NewsCard key={news.slug} {...news} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/news" className="btn-secondary">
              View All News
            </Link>
          </div>
        </div>
      </section>

      {/* PLATFORMS SECTION */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Trading Platforms"
            subtitle="Explore our comprehensive reviews and comparisons of trading platforms"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform) => {
              const IconComponent = platform.icon;
              return (
                <Link key={platform.title} href={platform.link} className="group">
                  <Card className="text-center h-full">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center bg-primary-light group-hover:bg-primary transition-colors">
                      <IconComponent className="text-primary group-hover:text-white transition-colors" size={24} />
                    </div>
                    <h3 className="font-bold text-base mb-2">{platform.title}</h3>
                    <p className="text-sm text-text-secondary">{platform.description}</p>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-padding" style={{ backgroundColor: '#051323' }}>
        <div className="container-custom">
          <SectionTitle
            title="Why TrantamCapital?"
            subtitle="What sets us apart as your trusted financial information source"
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.title} className="text-center p-6 rounded-lg border border-gray-800 hover:border-primary transition-colors">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255, 94, 0, 0.15)' }}>
                    <IconComponent className="text-primary" size={20} />
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-sm opacity-70">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-16" style={{ backgroundColor: '#FF5E00' }}>
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Stay Updated with Market Insights
            </h2>
            <p className="text-white opacity-90 mb-6">
              Subscribe to our newsletter for daily market analysis and trading tips.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded text-sm border-none outline-none focus:ring-2 focus:ring-white"
                style={{ height: '44px' }}
                required
              />
              <button type="submit" className="btn-primary bg-white text-primary hover:bg-gray-100 shadow-none" style={{ color: '#FF5E00', boxShadow: 'none' }}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
```

**Lưu ý**: Tạo thư mục `public/images/` và thêm ảnh placeholder nếu cần. Hoặc bạn có thể bỏ qua thuộc tính `image` trong NewsCard và dùng gradient màu.

### 10.3 Trang News (`src/app/news/page.tsx`)

```tsx
import Link from 'next/link';
import type { Metadata } from 'next';
import { HiCalendar, HiUser, HiTag } from 'react-icons/hi';

export const metadata: Metadata = {
  title: 'Market News',
  description: 'Latest financial market news, cryptocurrency updates, forex analysis, and binary options insights.',
};

const newsArticles = [
  { id: 1, title: 'Bitcoin Surges Past $100K: What This Means for Investors in 2026', category: 'Cryptocurrency', date: 'May 19, 2026', author: 'John Doe', excerpt: 'Bitcoin has reached a historic milestone, surpassing the $100,000 mark for the first time. This comprehensive analysis explores the factors driving this rally and what it means for the future of digital assets.', image: 'btc' },
  { id: 2, title: 'Federal Reserve Rate Decision: Impact on Forex Markets', category: 'Forex', date: 'May 18, 2026', author: 'Jane Smith', excerpt: 'The Federal Reserve\'s latest monetary policy decision has sent ripples through the forex market. Major currency pairs experience heightened volatility as traders digest the implications.', image: 'forex' },
  { id: 3, title: 'Ethereum 2.0: Complete Guide to the Merge Upgrade', category: 'Cryptocurrency', date: 'May 17, 2026', author: 'Mike Johnson', excerpt: 'Ethereum\'s transition to proof-of-stake has transformed the network. This guide covers everything you need to know about staking, gas fees, and the future of ETH.', image: 'eth' },
  { id: 4, title: 'Best Forex Brokers for Beginners in 2026', category: 'Forex', date: 'May 16, 2026', author: 'Sarah Williams', excerpt: 'Starting your forex trading journey? We review the best brokers for beginners, focusing on regulation, ease of use, educational resources, and demo accounts.', image: 'broker' },
  { id: 5, title: 'Binary Options Strategies That Actually Work', category: 'Binary Options', date: 'May 15, 2026', author: 'Tom Brown', excerpt: 'Not all binary options strategies are created equal. We break down the most effective approaches backed by real trading data and risk management principles.', image: 'binary' },
  { id: 6, title: 'Solana vs Ethereum: Layer 1 Blockchain Comparison', category: 'Cryptocurrency', date: 'May 14, 2026', author: 'Alex Chen', excerpt: 'A detailed comparison between Solana and Ethereum, examining transaction speeds, costs, ecosystem development, and future scalability solutions.', image: 'sol' },
  { id: 7, title: 'Gold Price Forecast: How Geopolitical Tensions Drive Safe-Haven Demand', category: 'Markets', date: 'May 13, 2026', author: 'Lisa Wang', excerpt: 'Gold prices continue to rally amid global uncertainty. Our analysis examines the key factors driving precious metals and what traders should watch.', image: 'gold' },
  { id: 8, title: 'Top 5 Crypto Exchanges for Altcoin Trading', category: 'Cryptocurrency', date: 'May 12, 2026', author: 'Mike Johnson', excerpt: 'Not all exchanges offer the same altcoin selection. We compare the top platforms for trading smaller cryptocurrencies with good liquidity and security.', image: 'altcoin' },
  { id: 9, title: 'Risk Management in Binary Options: Essential Guide', category: 'Binary Options', date: 'May 11, 2026', author: 'Tom Brown', excerpt: 'Risk management is crucial in binary options trading. Learn position sizing, stop-loss strategies, and how to protect your capital effectively.', image: 'risk' },
];

const categories = ['All', 'Cryptocurrency', 'Forex', 'Binary Options', 'Markets'];

export default function NewsPage() {
  return (
    <>
      {/* Page Header */}
      <section style={{ backgroundColor: '#051323' }} className="py-12">
        <div className="container-custom">
          <h1 className="text-display text-white font-bold mb-2">Market News</h1>
          <p className="text-base opacity-80" style={{ color: '#EBEEF0' }}>
            Stay informed with the latest financial market news, analysis, and insights
          </p>
        </div>
      </section>

      {/* News Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Category filter */}
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className="px-4 py-2 text-sm rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                    style={cat === 'All' ? { backgroundColor: '#FF5E00', color: 'white', borderColor: '#FF5E00' } : {}}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* News list */}
              <div className="space-y-6">
                {newsArticles.map((article) => (
                  <Link key={article.id} href={`/news/${article.id}`} className="block group">
                    <div className="card flex flex-col sm:flex-row gap-5 p-0 overflow-hidden">
                      <div
                        className="sm:w-48 h-48 sm:h-auto bg-cover bg-center flex-shrink-0"
                        style={{
                          background: `linear-gradient(135deg, #051323 0%, #FF5E00 100%)`,
                          opacity: 0.9,
                        }}
                      >
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-4xl font-bold text-white opacity-30">
                            {article.image.toUpperCase()}
                          </span>
                        </div>
                      </div>
                      <div className="p-5 sm:pl-0 flex-1">
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">
                          {article.category}
                        </span>
                        <h3 className="font-bold text-base mt-1 mb-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-sm text-text-secondary mb-3 line-clamp-2">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-text-secondary">
                          <span className="flex items-center gap-1">
                            <HiCalendar size={14} />
                            {article.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <HiUser size={14} />
                            {article.author}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center gap-2 mt-10">
                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    className="w-10 h-10 rounded border border-border text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                    style={page === 1 ? { backgroundColor: '#FF5E00', color: 'white', borderColor: '#FF5E00' } : {}}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Categories */}
              <div className="card">
                <h3 className="font-bold text-base mb-4">Categories</h3>
                <ul className="space-y-2">
                  {['Cryptocurrency', 'Forex', 'Binary Options', 'Market Analysis', 'Trading Guides'].map((cat) => (
                    <li key={cat}>
                      <Link href="#" className="flex items-center justify-between py-2 text-sm hover:text-primary transition-colors border-b border-border last:border-0">
                        <span className="flex items-center gap-2">
                          <HiTag size={14} />
                          {cat}
                        </span>
                        <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">12</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent posts */}
              <div className="card">
                <h3 className="font-bold text-base mb-4">Recent Posts</h3>
                <ul className="space-y-3">
                  {newsArticles.slice(0, 5).map((article) => (
                    <li key={article.id}>
                      <Link href={`/news/${article.id}`} className="group flex gap-3">
                        <div className="w-16 h-16 rounded flex-shrink-0 bg-gradient-to-br from-dark-bg to-primary flex items-center justify-center">
                          <span className="text-white font-bold text-xs">{article.image.toUpperCase()}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                            {article.title}
                          </h4>
                          <span className="text-xs text-text-secondary">{article.date}</span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="card text-center" style={{ backgroundColor: '#051323', borderColor: '#002B45' }}>
                <h3 className="text-white font-bold text-base mb-2">Newsletter</h3>
                <p className="text-sm opacity-80 mb-4">Get the latest market news delivered to your inbox.</p>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 rounded text-sm mb-3 border border-gray-700 bg-dark-bg text-white placeholder-gray-500 outline-none focus:border-primary"
                />
                <button className="btn-primary w-full text-sm">Subscribe</button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
```

### 10.4 Trang Forex Broker (`src/app/forex-broker/page.tsx`)

```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { HiStar, HiShieldCheck, HiCheck } from 'react-icons/hi';

export const metadata: Metadata = {
  title: 'Forex Broker Reviews',
  description: 'Compare the best forex brokers. Detailed reviews, ratings, and comparisons of regulated forex trading platforms.',
};

const brokers = [
  { id: 1, name: 'ForexBroker A', rating: 4.5, features: ['Regulated', 'Low Spreads', 'MT5 Support', 'Demo Account'], pros: ['FCA regulated', '0.0 pips spreads from', 'Fast execution'], link: '#' },
  { id: 2, name: 'ForexBroker B', rating: 4.0, features: ['Regulated', 'Islamic Account', 'Copy Trading', 'Educational'], pros: ['CySEC regulated', 'Welcome bonus', 'Great education center'], link: '#' },
  { id: 3, name: 'ForexBroker C', rating: 5.0, features: ['Regulated', 'ECN Accounts', '24/7 Support', 'VIP Program'], pros: ['ASIC regulated', 'Deep liquidity', 'Dedicated account manager'], link: '#' },
  { id: 4, name: 'ForexBroker D', rating: 3.5, features: ['Regulated', 'Low Minimum', 'Web Platform', 'Mobile App'], pros: ['Beginner friendly', '$10 minimum deposit', 'Intuitive platform'], link: '#' },
  { id: 5, name: 'ForexBroker E', rating: 4.0, features: ['Regulated', 'Premium Tools', 'Trading Signals', 'Webinars'], pros: ['CFTC regulated', 'Advanced charting', 'Weekly market analysis'], link: '#' },
  { id: 6, name: 'ForexBroker F', rating: 4.5, features: ['Regulated', 'High Leverage', 'Multiple Assets', 'API Trading'], pros: ['Offshore regulated', '1:500 leverage', 'Forex + Crypto + CFDs'], link: '#' },
];

const comparisonData = [
  { feature: 'Regulation', broker1: 'FCA', broker2: 'CySEC', broker3: 'ASIC' },
  { feature: 'Min Deposit', broker1: '$100', broker2: '$50', broker3: '$200' },
  { feature: 'Spread', broker1: '0.0 pips', broker2: '0.5 pips', broker3: '0.1 pips' },
  { feature: 'Leverage', broker1: '1:30', broker2: '1:500', broker3: '1:100' },
  { feature: 'Platforms', broker1: 'MT4, MT5', broker2: 'cTrader', broker3: 'MT4, MT5, Web' },
];

export default function ForexBrokerPage() {
  return (
    <>
      {/* Page Header */}
      <section style={{ backgroundColor: '#051323' }} className="py-12">
        <div className="container-custom">
          <h1 className="text-display text-white font-bold mb-2">Forex Broker Reviews</h1>
          <p className="text-base opacity-80" style={{ color: '#EBEEF0' }}>
            Find the best forex broker for your trading style. Compare regulated brokers side by side.
          </p>
        </div>
      </section>

      {/* Top Brokers Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brokers.map((broker) => (
              <div key={broker.id} className="card flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-dark-bg to-primary flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{broker.name.charAt(12)}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-base">{broker.name}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <HiStar key={i} size={16} className={i < Math.floor(broker.rating) ? 'text-warning-light' : 'text-gray-300'} />
                      ))}
                      <span className="text-xs ml-1 text-text-secondary">({broker.rating})</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {broker.features.map((f, i) => (
                    <span key={i} className="text-xs bg-blue-50 text-link px-2 py-1 rounded font-medium">{f}</span>
                  ))}
                </div>

                <ul className="space-y-1 mb-4 flex-1">
                  {broker.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <HiShieldCheck className="text-success mt-0.5 flex-shrink-0" size={16} />
                      {pro}
                    </li>
                  ))}
                </ul>

                <a href={broker.link} className="btn-primary w-full text-center text-sm" target="_blank" rel="noopener noreferrer">
                  Visit {broker.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAFA' }}>
        <div className="container-custom">
          <h2 className="text-h1 text-center mb-8">Top Brokers Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg overflow-hidden shadow-sm">
              <thead style={{ backgroundColor: '#051323' }}>
                <tr>
                  <th className="py-3 px-4 text-left text-white text-sm font-semibold">Feature</th>
                  <th className="py-3 px-4 text-left text-white text-sm font-semibold">ForexBroker A</th>
                  <th className="py-3 px-4 text-left text-white text-sm font-semibold">ForexBroker B</th>
                  <th className="py-3 px-4 text-left text-white text-sm font-semibold">ForexBroker C</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="py-3 px-4 text-sm font-medium">{row.feature}</td>
                    <td className="py-3 px-4 text-sm">{row.broker1}</td>
                    <td className="py-3 px-4 text-sm">{row.broker2}</td>
                    <td className="py-3 px-4 text-sm">{row.broker3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-h1 mb-4">How to Choose a Forex Broker</h2>
              <ul className="space-y-3">
                {[
                  { title: 'Check Regulation', desc: 'Ensure the broker is regulated by a reputable authority like FCA, CySEC, or ASIC.' },
                  { title: 'Compare Spreads & Fees', desc: 'Look for competitive spreads and transparent fee structures that match your trading style.' },
                  { title: 'Test the Platform', desc: 'Use demo accounts to test the trading platform, execution speed, and available tools.' },
                  { title: 'Review Deposit/Withdrawal', desc: 'Check deposit methods, processing times, and withdrawal fees before committing.' },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0 mt-0.5">
                      <HiCheck className="text-primary" size={16} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{item.title}</h4>
                      <p className="text-sm text-text-secondary">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden" style={{ background: 'linear-gradient(135deg, #051323 0%, #FF5E00 100%)', minHeight: '300px' }}>
              <div className="w-full h-full flex items-center justify-center p-8">
                <div className="text-center text-white">
                  <HiShieldCheck size={48} className="mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-semibold">Trading with confidence starts with the right broker</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
```

### 10.5 Trang Binary Option (`src/app/binary-option/page.tsx`)

Tương tự Forex Broker nhưng dành cho Binary Option platforms:

```tsx
import type { Metadata } from 'next';
import { HiStar, HiShieldCheck, HiExclamation, HiCheck } from 'react-icons/hi';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Binary Options Platforms',
  description: 'Compare binary options trading platforms. Reviews, ratings, and educational resources for binary options traders.',
};

const platforms = [
  { id: 1, name: 'BinaryPlatform A', rating: 4.0, features: ['Regulated', 'Demo Account', '60+ Assets', 'Mobile App'], pros: ['User-friendly interface', 'Payouts up to 95%', 'Excellent support'], link: '#' },
  { id: 2, name: 'BinaryPlatform B', rating: 3.5, features: ['Regulated', 'Low Minimum', 'Tutorials', '24/7 Support'], pros: ['$10 minimum trade', 'Great for beginners', 'Educational content'], link: '#' },
  { id: 3, name: 'BinaryPlatform C', rating: 4.5, features: ['Regulated', 'Advanced Charting', 'High Payouts', 'Signals'], pros: ['Professional tools', 'Up to 98% payout', 'Trading signals included'], link: '#' },
];

export default function BinaryOptionPage() {
  return (
    <>
      {/* Page Header */}
      <section style={{ backgroundColor: '#051323' }} className="py-12">
        <div className="container-custom">
          <h1 className="text-display text-white font-bold mb-2">Binary Options Platforms</h1>
          <p className="text-base opacity-80" style={{ color: '#EBEEF0' }}>
            Compare binary options trading platforms and find the right one for your trading journey.
          </p>
        </div>
      </section>

      {/* Platforms Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform) => (
              <div key={platform.id} className="card flex flex-col">
                {/* Same broker card style */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-dark-bg to-primary flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{platform.name.charAt(14)}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-base">{platform.name}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <HiStar key={i} size={16} className={i < Math.floor(platform.rating) ? 'text-warning-light' : 'text-gray-300'} />
                      ))}
                      <span className="text-xs ml-1 text-text-secondary">({platform.rating})</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {platform.features.map((f, i) => (
                    <span key={i} className="text-xs bg-blue-50 text-link px-2 py-1 rounded font-medium">{f}</span>
                  ))}
                </div>
                <ul className="space-y-1 mb-4 flex-1">
                  {platform.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <HiShieldCheck className="text-success mt-0.5 flex-shrink-0" size={16} />
                      {pro}
                    </li>
                  ))}
                </ul>
                <a href={platform.link} className="btn-primary w-full text-center text-sm" target="_blank" rel="noopener noreferrer">
                  Visit {platform.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Warning */}
      <section className="py-8" style={{ backgroundColor: '#FFF8E1' }}>
        <div className="container-custom">
          <div className="flex items-start gap-3 max-w-3xl mx-auto">
            <HiExclamation className="text-warning-light flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-base mb-1" style={{ color: '#333333' }}>Risk Warning</h3>
              <p className="text-sm" style={{ color: '#555555' }}>
                Binary options trading involves significant risk. You may lose all of your invested capital.
                Do not invest money you cannot afford to lose. This website provides educational information
                only and does not constitute financial advice. Always conduct your own research before trading.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Binary Options Work */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-h1 text-center mb-8">How Binary Options Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Choose an Asset', desc: 'Select from stocks, commodities, currencies, or cryptocurrencies.' },
              { step: '02', title: 'Predict Direction', desc: 'Forecast whether the price will go up or down within a set time.' },
              { step: '03', title: 'Set Investment', desc: 'Choose your investment amount based on your risk management strategy.' },
              { step: '04', title: 'Wait for Expiry', desc: 'If your prediction is correct at expiry, you receive a fixed payout.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-sm text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
```

### 10.6 Trang Crypto Exchange (`src/app/crypto-exchange/page.tsx`)

Tương tự Forex Broker page, thay đổi nội dung cho crypto exchanges:

```tsx
import type { Metadata } from 'next';
import { HiStar, HiShieldCheck } from 'react-icons/hi';

export const metadata: Metadata = {
  title: 'Crypto Exchange Reviews',
  description: 'Compare the best cryptocurrency exchanges. Detailed reviews of top crypto trading platforms with fees, features, and security ratings.',
};

const exchanges = [
  { id: 1, name: 'Exchange A', rating: 4.5, features: ['High Liquidity', 'Low Fees', '500+ Coins', 'Staking'], pros: ['Industry-leading liquidity', '0.1% trading fee', 'Wide asset selection'], link: '#' },
  { id: 2, name: 'Exchange B', rating: 4.0, features: ['Regulated', 'Fiat Onramp', 'Insurance', 'USD Pairs'], pros: ['Regulated in US/EU', 'FDIC insured USD', 'Great for beginners'], link: '#' },
  { id: 3, name: 'Exchange C', rating: 5.0, features: ['Derivatives', 'High Leverage', 'Advanced Tools', 'API'], pros: ['Best for margin trading', 'Up to 100x leverage', 'Professional API'], link: '#' },
  { id: 4, name: 'Exchange D', rating: 3.5, features: ['DEX', 'Self-Custody', 'Low Fees', 'Swap'], pros: ['Non-custodial', 'No KYC for small trades', 'Direct wallet swaps'], link: '#' },
  { id: 5, name: 'Exchange E', rating: 4.0, features: ['Social Trading', 'Copy Trading', 'Demo', 'Education'], pros: ['Copy top traders', 'Earn yield on deposits', 'Learning rewards'], link: '#' },
  { id: 6, name: 'Exchange F', rating: 4.5, features: ['NFT Marketplace', 'Web3 Wallet', 'Launchpad', 'Staking'], pros: ['Integrated NFT trading', 'Multi-chain support', 'Early access to new projects'], link: '#' },
];

export default function CryptoExchangePage() {
  return (
    <>
      <section style={{ backgroundColor: '#051323' }} className="py-12">
        <div className="container-custom">
          <h1 className="text-display text-white font-bold mb-2">Crypto Exchange Reviews</h1>
          <p className="text-base opacity-80" style={{ color: '#EBEEF0' }}>
            Find the best cryptocurrency exchange for your needs. Compare fees, features, and security.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exchanges.map((exchange) => (
              <div key={exchange.id} className="card flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-dark-bg to-primary flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{exchange.name.charAt(9)}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-base">{exchange.name}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <HiStar key={i} size={16} className={i < Math.floor(exchange.rating) ? 'text-warning-light' : 'text-gray-300'} />
                      ))}
                      <span className="text-xs ml-1 text-text-secondary">({exchange.rating})</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {exchange.features.map((f, i) => (
                    <span key={i} className="text-xs bg-blue-50 text-link px-2 py-1 rounded font-medium">{f}</span>
                  ))}
                </div>
                <ul className="space-y-1 mb-4 flex-1">
                  {exchange.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <HiShieldCheck className="text-success mt-0.5 flex-shrink-0" size={16} />
                      {pro}
                    </li>
                  ))}
                </ul>
                <a href={exchange.link} className="btn-primary w-full text-center text-sm" target="_blank" rel="noopener noreferrer">
                  Visit {exchange.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
```

### 10.7 Các trang còn lại

Các trang còn lại (For Beginners, Investment Analysis, Tools, About, Contact) có thể xây dựng tương tự với:
- **For Beginners**: Cards kiến thức + bảng glossary + section hướng dẫn
- **Investment Analysis**: Bài phân tích + chart placeholder
- **Tools**: Grid các tool (Economic Calendar, Calculator...)
- **About**: Company info + mission + team
- **Contact**: Form + thông tin liên hệ

---

## 11. Responsive Mobile

### 11.1 Nguyên tắc chung

- **Mobile-first**: Thiết kế cho mobile trước, sau đó mở rộng lên tablet/desktop
- **Touch targets**: Tất cả nút bấm tối thiểu 44x44px
- **Khoảng cách**: Giữa các nút bấm tối thiểu 8px

### 11.2 Tailwind breakpoints sử dụng

```css
/* Mặc định: Mobile (< 768px) */
/* sm: 640px+ */
/* md: 768px+ */  — Tablet
/* lg: 1024px+ */ — Desktop
/* xl: 1280px+ */
```

### 11.3 Class responsive thường dùng

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* 1 cột mobile, 2 cột tablet, 3 cột desktop */}
</div>

<div className="text-sm md:text-base lg:text-lg">
  {/* Chữ nhỏ dần trên mobile */}
</div>

<div className="hidden lg:block">
  {/* Ẩn trên mobile/tablet, hiện trên desktop */}
</div>

<div className="px-4 md:px-8">
  {/* Padding nhỏ trên mobile */}
</div>
```

### 11.4 Kiểm tra responsive

Trong trình duyệt:
1. Mở Chrome DevTools (F12)
2. Click icon điện thoại (Toggle Device Toolbar) — Ctrl+Shift+M
3. Chọn thiết bị: iPhone 12/SE, iPad, Desktop
4. Kiểm tra từng trang

---

## 12. Tối ưu SEO

### 12.1 Meta tags cho mỗi trang

Mỗi trang đã có `export const metadata` với title và description riêng.

### 12.2 Semantic HTML

```tsx
<header> — Thanh navigation
<main> — Nội dung chính
<section> — Mỗi section riêng
<article> — Bài viết tin tức
<footer> — Chân trang
<nav> — Menu điều hướng
<aside> — Sidebar
```

### 12.3 Open Graph (chia sẻ mạng xã hội)

Thêm vào `layout.tsx`:

```tsx
export const metadata: Metadata = {
  // ... các metadata khác
  openGraph: {
    title: 'TrantamCapital',
    description: 'Your trusted source for financial market insights.',
    url: 'https://trantamcapital.com',
    siteName: 'TrantamCapital',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
};
```

### 12.4 Tạo sitemap

Tạo file `src/app/sitemap.ts`:

```typescript
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://trantamcapital.com';
  
  const pages = [
    '', '/news', '/for-beginners', '/investment-analysis',
    '/forex-broker', '/crypto-exchange', '/binary-option',
    '/tools', '/about', '/contact',
  ];
  
  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: page === '' ? 1 : 0.8,
  }));
}
```

---

## 13. Build & Deploy

### 13.1 Build thử

```bash
npm run build
```

Kiểm tra không có lỗi. Nếu có lỗi, sửa theo thông báo.

### 13.2 Deploy lên Vercel (miễn phí)

#### Cách 1: Qua GitHub (khuyên dùng)

1. **Push code lên GitHub**:
```bash
# Tạo repository trên GitHub trước
git init
git add .
git commit -m "Initial commit - TrantamCapital website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/trantamcapital.git
git push -u origin main
```

2. **Deploy trên Vercel**:
   - Vào https://vercel.com/
   - Đăng nhập bằng GitHub
   - Click "Add New" → "Project"
   - Chọn repository `trantamcapital`
   - Click "Deploy"
   - Chờ ~2 phút, website sẽ live tại `https://trantamcapital.vercel.app`

3. **(Tùy chọn) Thêm custom domain**:
   - Mua domain (Namecheap, GoDaddy, .com giá ~$10-15/năm)
   - Trong Vercel dashboard: Project → Settings → Domains
   - Thêm domain, làm theo hướng dẫn trỏ DNS

#### Cách 2: Deploy trực tiếp từ CLI

```bash
npm i -g vercel
vercel
# Làm theo hướng dẫn trong terminal
```

### 13.3 Cập nhật sau khi deploy

Khi có thay đổi:
```bash
git add .
git commit -m "Mô tả thay đổi"
git push
```
Vercel tự động build lại.

---

## 14. Bảo trì & Cập nhật

### 14.1 Cập nhật nội dung

Để thay đổi nội dung:
1. Mở file `.tsx` tương ứng trong `src/app/`
2. Sửa text, link, hình ảnh
3. Chạy `npm run dev` để kiểm tra
4. Commit & push lên GitHub → Vercel auto-deploy

### 14.2 Thêm bài viết mới

Thêm object vào mảng `newsArticles` trong file `src/app/news/page.tsx`, hoặc tạo file riêng cho từng bài.

### 14.3 Thêm trang mới

1. Tạo thư mục: `src/app/ten-trang-moi/`
2. Tạo file `page.tsx` trong thư mục đó
3. Thêm link vào `navLinks` trong `src/components/Header.tsx`
4. Commit & push

### 14.4 Cập nhật giá coin

Widget giá coin tự động cập nhật mỗi 60 giây từ CoinGecko API — không cần làm gì.

---

## 15. FAQs

### Hỏi: Tôi không biết code, làm sao để thay đổi nội dung?

**Đáp**: Mỗi file `.tsx` chứa nội dung của một trang. Bạn chỉ cần:
1. Mở file trong VS Code
2. Tìm text cũ và sửa thành text mới
3. Lưu file (Ctrl+S)
4. Commit & push lên GitHub

### Hỏi: Website có tốn phí không?

**Đáp**: 
- Next.js: miễn phí
- Vercel: miễn phí (100GB bandwidth/tháng)
- CoinGecko API: miễn phí
- Domain: $10-15/năm (nếu muốn)
- Hosting: $0

### Hỏi: Làm sao để thêm hình ảnh thật?

**Đáp**:
1. Bỏ ảnh vào thư mục `public/images/`
2. Trong code, đổi đường dẫn `style={{ backgroundImage: 'url(...)' }}` thành ảnh thật
3. Hoặc dùng `<Image>` component của Next.js

### Hỏi: Website có an toàn không?

**Đáp**: 
- Vercel tự động cấp HTTPS (SSL)
- Next.js bảo vệ khỏi XSS
- Không có database nên không lo bị hack dữ liệu
- Không thu thập thông tin người dùng

### Hỏi: Làm sao để thêm Google Analytics?

**Đáp**: 
1. Tạo tài khoản Google Analytics
2. Lấy tracking ID
3. Cài đặt: `npm install @next/third-parties`
4. Thêm vào `layout.tsx`

---

## TÓM TẮT CÁC BƯỚC

```
1. Cài Node.js
2. Cài VS Code
3. Tạo tài khoản GitHub
4. Tạo tài khoản Vercel
5. Chạy: npx create-next-app@latest trantamcapital
6. Cài: npm install react-icons
7. Tạo thư mục components + pages
8. Copy code từ hướng dẫn này vào từng file
9. Chạy: npm run dev → kiểm tra
10. Push lên GitHub → Deploy Vercel
```

---

*Chúc bạn xây dựng thành công website trantamcapital.com! Nếu có thắc mắc, hãy hỏi Claude nhé.*
