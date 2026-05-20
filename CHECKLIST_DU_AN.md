# TRANTAMCAPITAL — DANH SÁCH CÔNG VIỆC CHI TIẾT

> Dùng để theo dõi tiến độ. Đánh dấu ✅ khi hoàn thành.

---

## PHẦN 1: CHUẨN BỊ MÔI TRƯỜNG

### 1.1 Cài Node.js
- [x] Vào https://nodejs.org/ tải bản LTS
- [x] Chạy file cài đặt, nhấn Next → Install
- [x] Mở Command Prompt (CMD), gõ `node --version` → thấy số phiên bản
- [x] Gõ `npm --version` → thấy số phiên bản

### 1.2 Cài VS Code
- [x] Vào https://code.visualstudio.com/ tải và cài đặt
- [x] Mở VS Code → Extensions (Ctrl+Shift+X)
- [x] Cài extension: Tailwind CSS IntelliSense
- [x] Cài extension: ES7+ React/Redux snippets

### 1.3 Tạo tài khoản GitHub
- [x] Vào https://github.com/signup
- [x] Điền email, password, username
- [x] Xác nhận email
- [x] Chọn Free plan

### 1.4 Tạo tài khoản Vercel
- [x] Vào https://vercel.com/
- [x] Đăng ký bằng GitHub (Continue with GitHub)
- [x] Authorize Vercel

---

## PHẦN 2: TẠO DỰ ÁN NEXT.JS

- [x] Mở CMD, gõ `cd C:\CodeProjects`
- [x] Gõ `npx create-next-app@latest trantamcapital --typescript --tailwind --eslint --app --src-dir --no-import-alias --use-npm`
- [x] Đợi cài đặt xong (khoảng 2 phút)
- [x] Gõ `cd trantamcapital`
- [x] Gõ `npm install react-icons`
- [x] Gõ `npm run dev` → vào http://localhost:3000 → thấy trang Next.js

---

## PHẦN 3: DESIGN SYSTEM & GLOBAL CSS

- [x] Tạo file: `src/app/globals.css` — màu sắc, font, utility classes
- [x] Sửa: `tailwind.config.ts` — custom colors, fonts (dùng @theme trong globals.css do Tailwind v4)
- [x] **next/font**: Import Open Sans + Roboto từ `next/font/google` (layout.tsx)
- [x] Layout: `src/app/layout.tsx` — Header + PriceTicker + Footer

---

## PHẦN 4: COMPONENT GLOBAL

- [x] `src/components/Header.tsx` — Nav bar vàng #FFCA00, 10 menu, search icon, mobile hamburger
- [x] `src/components/PriceTicker.tsx` — CoinGecko API, 12 coins, marquee, cleanup interval
- [x] `src/components/Footer.tsx` — 4 cột (About, Links, Markets, Contact), risk disclaimer
- [x] `src/components/SectionTitle.tsx` — Title + subtitle + underline cam
- [x] `src/components/Card.tsx` — Card wrapper chuẩn
- [x] `src/components/NewsCard.tsx` — Card tin tức + image + badge
- [x] `src/components/BrokerCard.tsx` — Card broker/exchange + rating + features
- [x] `src/components/ContactForm.tsx` — Form validations
- [x] `src/components/MarketOverview.tsx` — Bảng giá 8 coin (desktop table + mobile scroll)
- [x] `src/components/NewsletterForm.tsx` — Form đăng ký email

---

## PHẦN 5: CẤU HÌNH BẢO MẬT & HIỆU SUẤT

### next.config.js
- [x] `images.remotePatterns` cho assets.coingecko.com + coin-images.coingecko.com
- [x] HSTS headers (Strict-Transport-Security)

### SEO
- [x] `src/app/sitemap.ts` — tạo sitemap.xml

### Kiểm tra build
- [x] Chạy `npm run build` — 0 lỗi

---

## PHẦN 6: TRANG CHỦ — Home (/)

### Section 1: Hero
- [x] Background navy #0F1A2E + gradient cam
- [x] Headline: "Trade Smarter, Invest Wiser"
- [x] Subheadline: mô tả website
- [x] Trust Bar: "50+ Brokers Reviewed | $2B+ Volume | 100K+ Readers"
- [x] 3 CTA buttons: Start Trading → Compare Brokers → Latest News

### Section 2: Market Overview
- [x] Bảng 8 coin (BTC, ETH, BNB, SOL, XRP, ADA, DOGE, DOT)
- [x] Cột: Name, Price, 24h Change, Market Cap
- [x] Màu xanh/đỏ cho tăng/giảm
- [x] Mobile: card scroll ngang (swipeable)

### Section 3: Featured Brokers & Exchanges
- [x] 7 sàn: 3 Forex + 3 Crypto + 1 Binary
- [x] Mỗi card: Logo, Tên, Rating, Tags, "Read Review"
- [x] Link đến trang chi tiết từng sàn

### Section 4: Featured News
- [x] 3 bài viết (Crypto, Forex, Binary)
- [x] Card: Image + Category badge + Date + Title + Excerpt
- [x] "View All News" → /news

### Section 5: Trading Platforms
- [x] 4 card: Forex, Crypto, Binary, Tools
- [x] Icon + Title + Description
- [x] Link đến trang tương ứng

### Section 6: Why TrantamCapital
- [x] 4 lý do: Expert Analysis, Coverage, Education, Trust
- [x] Nền navy #0F1A2E

### Section 7: Newsletter
- [x] Email input + Subscribe button
- [x] Nền cam #E84910

---

## PHẦN 7: TRANG TIN TỨC — News (/news)

- [x] Page Header: navy, "Market News"
- [x] Filter tabs: All, Crypto, Forex, Binary, Markets
- [x] 9 bài viết dạng grid 2 cột (image + content)
- [x] Sidebar: Categories + Recent Posts + Newsletter widget
- [x] Pagination: [1] [2] [3]

---

## PHẦN 8: DÀNH CHO NGƯỜI MỚI — For Beginners (/for-beginners)

- [x] Page Header
- [x] 3 cards giới thiệu: What is Crypto / Forex / Binary Options
- [x] Getting Started: 7 steps
- [x] Glossary: 15+ thuật ngữ (Ask, Bid, Spread, Leverage...)

---

## PHẦN 9: PHÂN TÍCH ĐẦU TƯ — Investment Analysis (/investment-analysis)

- [x] Page Header
- [x] Market Overview cards: Crypto, Forex, Commodities
- [x] Today's Market Report
- [x] Technical Analysis Tools section

---

## PHẦN 10: FOREX BROKER (/forex-broker)

- [x] Page Header
- [x] 6 brokers grid: card + rating + features + "Read Review" + "Visit Site"
- [x] Comparison table: Regulation, Min Deposit, Spread, Leverage, Platforms
- [x] How to Choose a Broker guide

---

## PHẦN 11: CRYPTO EXCHANGE (/crypto-exchange)

- [x] Page Header
- [x] 6 exchanges grid
- [x] Comparison table

---

## PHẦN 12: BINARY OPTION (/binary-option)

- [x] Page Header
- [x] Risk warning (nền vàng)
- [x] 3 platforms grid
- [x] How Binary Options Work: 4 bước

---

## PHẦN 13: TRANG CHI TIẾT SÀN (Sub Pages)

### Forex Broker Sub Pages
- [x] `/forex-broker/broker-a` — Review + 3 bài viết
- [x] `/forex-broker/broker-b` — Review + 3 bài viết
- [x] `/forex-broker/broker-c` — Review + 3 bài viết

### Crypto Exchange Sub Pages
- [x] `/crypto-exchange/exchange-a` — Review + 3 bài viết
- [x] `/crypto-exchange/exchange-b` — Review + 3 bài viết
- [x] `/crypto-exchange/exchange-c` — Review + 3 bài viết

### Binary Option Sub Pages
- [x] `/binary-option/platform-a` — Review + 3 bài viết

---

## PHẦN 14: TOOLS (/tools)

- [x] Page Header
- [x] 6 tools grid: Economic Calendar, Position Size, Profit/Loss, Currency Converter, Margin, Pip

---

## PHẦN 15: TRANG ABOUT (/about)

- [x] Page Header
- [x] Our Story section
- [x] Mission & Vision
- [x] Core Values: Integrity, Education, Innovation, Community
- [x] Team: 3 members
- [x] Timeline: 2024 → 2025 → 2026

---

## PHẦN 16: TRANG CONTACT (/contact)

- [x] Page Header
- [x] Form: Name, Email, Subject, Message + validation
- [x] Contact info: email, phone, address, hours

---

## PHẦN 17: TRANG PHÁP LÝ

- [x] `/privacy-policy` — Nội dung từ generator
- [x] `/terms-of-service` — Nội dung từ generator
- [x] Link 2 trang trong Footer

---

## PHẦN 18: TRANG 404

- [x] `not-found.tsx` — "404 - Page Not Found" + "Back to Home" button

---

## PHẦN 19: MOBILE RESPONSIVE

- [x] Mobile: hamburger menu hoạt động
- [x] Mobile: nav gom Platforms ▼ thành dropdown
- [x] Mobile: cards 1 cột, padding 16px
- [x] Mobile: Market Overview thành card scroll ngang
- [x] Tablet: 2-3 cột
- [x] Touch targets: tất cả nút ≥ 44x44px

---

## PHẦN 20: DEPLOY & KIỂM TRA

### Push code lên GitHub
- [x] `git init`
- [x] `git add .`
- [x] `git commit -m "Initial commit"`
- [x] `git branch -M main`
- [x] `git remote add origin https://github.com/YOUR_USERNAME/trantamcapital.git`
- [x] `git push -u origin main`

### Deploy lên Vercel
- [x] Vào https://vercel.com → Add New → Project
- [x] Chọn repo trantamcapital → Deploy
- [x] Đợi build xong → click link

### Kiểm tra sau deploy
- [x] Home: hero, giá coin, news đều hiển thị
- [x] Tất cả link menu: không 404
- [x] News: bài viết + sidebar + pagination
- [x] Forex Broker: grid + comparison table
- [x] Crypto Exchange: grid
- [x] Binary Option: grid + risk warning
- [x] Tools: 6 cards
- [x] About: story, team, timeline
- [x] Contact: form + info
- [x] Privacy Policy + Terms: hiển thị
- [x] 404: vào link sai → trang 404
- [x] Mobile: menu hamburger, responsive
- [ ] Vào https://pagespeed.web.dev/ → điểm ≥90

---

## PHẦN 21: DOMAIN — KHI CÓ TÊN MIỀN RIÊNG

### 21.1 Mua domain
- [ ] Chọn nhà cung cấp: Namecheap, GoDaddy, hoặc Nhân Hòa/PA Việt Nam
- [ ] Tìm domain: `trantamcapital.com` (khoảng $10-15/năm)
- [ ] Mua, thanh toán

### 21.2 Trỏ domain về Vercel
- [ ] Vào https://vercel.com/ → Dashboard → Project trantamcapital
- [ ] Vào tab Settings → Domains
- [ ] Nhập `trantamcapital.com` → Add
- [ ] Vercel hiện hướng dẫn: "Set the following record in your DNS provider:"
  - Thường là CNAME record: `www` → `cname.vercel-dns.com`
  - Hoặc A records trỏ đến IP của Vercel
- [ ] Vào trang quản lý domain của bạn (Namecheap/GoDaddy/...)
- [ ] Tìm DNS Settings hoặc Advanced DNS
- [ ] Thêm CNAME record:
  - Host: `www`, Target: `cname.vercel-dns.com`, TTL: Automatic
- [ ] Thêm A record (nếu cần):
  - Host: `@`, Value: `76.76.21.21`, TTL: Automatic
- [ ] Lưu lại, đợi 5-30 phút

### 21.3 Kiểm tra domain
- [ ] Vào https://trantamcapital.com → website hiển thị
- [ ] Vào https://www.trantamcapital.com → cũng hiển thị
- [ ] Vercel tự động cấp SSL cho domain — check icon khóa trên trình duyệt

### 21.4 Chuyển hướng (Redirect)
- [ ] Vào Vercel → Settings → Domains
- [ ] Bật: "Redirect www.trantamcapital.com to trantamcapital.com" (hoặc ngược lại)

---

## PHẦN 22: SAU KHI DEPLOY (TUỲ CHỌN)

- [ ] Mua domain (trantamcapital.com) — Namecheap ~$12/năm
- [ ] Trỏ domain → Vercel
- [ ] Tạo Open Graph image (Canva, 1200x630px)
- [ ] Cài Google Analytics 4
- [ ] Thêm Cookie Consent (nếu dùng GA)
- [ ] Tích hợp Decap CMS

---

## TỔNG KẾT

| Phần | Số mục | Hoàn thành |
|------|--------|-----------|
| 1. Chuẩn bị | 11 | ✅ 11 / 11 |
| 2. Tạo dự án | 6 | ✅ 6 / 6 |
| 3. Design System | 4 | ✅ 4 / 4 |
| 4. Components | 8 | ✅ 8 / 8 |
| 5. Config & SEO | 4 | ✅ 4 / 4 |
| 6. Home | 20 | ✅ 20 / 20 |
| 7. News | 5 | ✅ 5 / 5 |
| 8. For Beginners | 4 | ✅ 4 / 4 |
| 9. Investment Analysis | 4 | ✅ 4 / 4 |
| 10. Forex Broker | 4 | ✅ 4 / 4 |
| 11. Crypto Exchange | 2 | ✅ 2 / 2 |
| 12. Binary Option | 4 | ✅ 4 / 4 |
| 13. Sub Pages | 7 | ✅ 7 / 7 |
| 14. Tools | 2 | ✅ 2 / 2 |
| 15. About | 6 | ✅ 6 / 6 |
| 16. Contact | 3 | ✅ 3 / 3 |
| 17. Pháp lý | 3 | ✅ 3 / 3 |
| 18. 404 | 1 | ✅ 1 / 1 |
| 19. Responsive | 5 | ✅ 5 / 5 |
| 20. Deploy | 16 | ✅ 15 / 16 |
| 21. Domain setup | 11 | ⬜ 0 / 11 |
| 22. Sau deploy | 6 | ⬜ 0 / 6 |
| **Tổng** | **136 mục** | **✅ 118 / 136** |
