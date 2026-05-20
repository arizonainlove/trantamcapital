# TRANTAMCAPITAL — DANH SÁCH CÔNG VIỆC CHI TIẾT

> Dùng để theo dõi tiến độ. Đánh dấu ✅ khi hoàn thành.

---

## PHẦN 1: CHUẨN BỊ MÔI TRƯỜNG

### 1.1 Cài Node.js
- [ ] Vào https://nodejs.org/ tải bản LTS
- [ ] Chạy file cài đặt, nhấn Next → Install
- [ ] Mở Command Prompt (CMD), gõ `node --version` → thấy số phiên bản
- [ ] Gõ `npm --version` → thấy số phiên bản

### 1.2 Cài VS Code
- [ ] Vào https://code.visualstudio.com/ tải và cài đặt
- [ ] Mở VS Code → Extensions (Ctrl+Shift+X)
- [ ] Cài extension: Tailwind CSS IntelliSense
- [ ] Cài extension: ES7+ React/Redux snippets

### 1.3 Tạo tài khoản GitHub
- [ ] Vào https://github.com/signup
- [ ] Điền email, password, username
- [ ] Xác nhận email
- [ ] Chọn Free plan

### 1.4 Tạo tài khoản Vercel
- [ ] Vào https://vercel.com/
- [ ] Đăng ký bằng GitHub (Continue with GitHub)
- [ ] Authorize Vercel

---

## PHẦN 2: TẠO DỰ ÁN NEXT.JS

- [ ] Mở CMD, gõ `cd C:\CodeProjects`
- [ ] Gõ `npx create-next-app@latest trantamcapital --typescript --tailwind --eslint --app --src-dir --no-import-alias --use-npm`
- [ ] Đợi cài đặt xong (khoảng 2 phút)
- [ ] Gõ `cd trantamcapital`
- [ ] Gõ `npm install react-icons`
- [ ] Gõ `npm run dev` → vào http://localhost:3000 → thấy trang Next.js

---

## PHẦN 3: DESIGN SYSTEM & GLOBAL CSS

- [ ] Tạo file: `src/app/globals.css` — màu sắc, font, utility classes
- [ ] Sửa: `tailwind.config.ts` — custom colors, fonts
- [ ] **next/font**: Import Open Sans + Roboto từ `next/font/google` (layout.tsx)
- [ ] Layout: `src/app/layout.tsx` — Header + PriceTicker + Footer

---

## PHẦN 4: COMPONENT GLOBAL

- [ ] `src/components/Header.tsx` — Nav bar vàng #FFCA00, 10 menu, search icon, mobile hamburger
- [ ] `src/components/PriceTicker.tsx` — CoinGecko API, 12 coins, marquee, cleanup interval
- [ ] `src/components/Footer.tsx` — 4 cột (About, Links, Markets, Contact), risk disclaimer
- [ ] `src/components/SectionTitle.tsx` — Title + subtitle + underline cam
- [ ] `src/components/Card.tsx` — Card wrapper chuẩn
- [ ] `src/components/NewsCard.tsx` — Card tin tức + image + badge
- [ ] `src/components/BrokerCard.tsx` — Card broker/exchange + rating + features
- [ ] `src/components/ContactForm.tsx` — Form validations

---

## PHẦN 5: CẤU HÌNH BẢO MẬT & HIỆU SUẤT

### next.config.js
- [ ] `images.remotePatterns` cho assets.coingecko.com
- [ ] HSTS headers (Strict-Transport-Security)

### SEO
- [ ] `src/app/sitemap.ts` — tạo sitemap.xml

### Kiểm tra build
- [ ] Chạy `npm run build` — 0 lỗi

---

## PHẦN 6: TRANG CHỦ — Home (/)

### Section 1: Hero
- [ ] Background navy #0F1A2E + gradient cam
- [ ] Headline: "Trade Smarter, Invest Wiser"
- [ ] Subheadline: mô tả website
- [ ] Trust Bar: "50+ Brokers Reviewed | $2B+ Volume | 100K+ Readers"
- [ ] 3 CTA buttons: Start Trading → Compare Brokers → Latest News

### Section 2: Market Overview
- [ ] Bảng 8 coin (BTC, ETH, BNB, SOL, XRP, ADA, DOGE, DOT)
- [ ] Cột: Name, Price, 24h Change, Market Cap
- [ ] Màu xanh/đỏ cho tăng/giảm
- [ ] Mobile: card scroll ngang (swipeable)

### Section 3: Featured Brokers & Exchanges
- [ ] 7 sàn: 3 Forex + 3 Crypto + 1 Binary
- [ ] Mỗi card: Logo, Tên, Rating, Tags, "Read Review"
- [ ] Link đến trang chi tiết từng sàn

### Section 4: Featured News
- [ ] 3 bài viết (Crypto, Forex, Binary)
- [ ] Card: Image + Category badge + Date + Title + Excerpt
- [ ] "View All News" → /news

### Section 5: Trading Platforms
- [ ] 4 card: Forex, Crypto, Binary, Tools
- [ ] Icon + Title + Description
- [ ] Link đến trang tương ứng

### Section 6: Why TrantamCapital
- [ ] 4 lý do: Expert Analysis, Coverage, Education, Trust
- [ ] Nền navy #0F1A2E

### Section 7: Newsletter
- [ ] Email input + Subscribe button
- [ ] Nền cam #E84910

---

## PHẦN 7: TRANG TIN TỨC — News (/news)

- [ ] Page Header: navy, "Market News"
- [ ] Filter tabs: All, Crypto, Forex, Binary, Markets
- [ ] 9 bài viết dạng list (image trái, content phải)
- [ ] Sidebar: Categories + Recent Posts + Newsletter widget
- [ ] Pagination: [1] [2] [3]

---

## PHẦN 8: DÀNH CHO NGƯỜI MỚI — For Beginners (/for-beginners)

- [ ] Page Header
- [ ] 3 cards giới thiệu: What is Crypto / Forex / Binary Options
- [ ] Getting Started: 7 steps
- [ ] Glossary: 15+ thuật ngữ (Ask, Bid, Spread, Leverage...)

---

## PHẦN 9: PHÂN TÍCH ĐẦU TƯ — Investment Analysis (/investment-analysis)

- [ ] Page Header
- [ ] Market Overview cards: Crypto, Forex, Commodities
- [ ] Today's Market Report
- [ ] Technical Analysis Tools section

---

## PHẦN 10: FOREX BROKER (/forex-broker)

- [ ] Page Header
- [ ] 6 brokers grid: card + rating + features + "Read Review" + "Visit Site"
- [ ] Comparison table: Regulation, Min Deposit, Spread, Leverage, Platforms
- [ ] How to Choose a Broker guide

---

## PHẦN 11: CRYPTO EXCHANGE (/crypto-exchange)

- [ ] Page Header
- [ ] 6 exchanges grid
- [ ] Comparison table

---

## PHẦN 12: BINARY OPTION (/binary-option)

- [ ] Page Header
- [ ] Risk warning (nền vàng)
- [ ] 3 platforms grid
- [ ] How Binary Options Work: 4 bước

---

## PHẦN 13: TRANG CHI TIẾT SÀN (Sub Pages)

### Forex Broker Sub Pages
- [ ] `/forex-broker/broker-a` — Review + 3 bài viết
- [ ] `/forex-broker/broker-b` — Review + 3 bài viết
- [ ] `/forex-broker/broker-c` — Review + 3 bài viết

### Crypto Exchange Sub Pages
- [ ] `/crypto-exchange/exchange-a` — Review + 3 bài viết
- [ ] `/crypto-exchange/exchange-b` — Review + 3 bài viết
- [ ] `/crypto-exchange/exchange-c` — Review + 3 bài viết

### Binary Option Sub Pages
- [ ] `/binary-option/platform-a` — Review + 3 bài viết

---

## PHẦN 14: TOOLS (/tools)

- [ ] Page Header
- [ ] 6 tools grid: Economic Calendar, Position Size, Profit/Loss, Currency Converter, Margin, Pip

---

## PHẦN 15: TRANG ABOUT (/about)

- [ ] Page Header
- [ ] Our Story section
- [ ] Mission & Vision
- [ ] Core Values: Integrity, Education, Innovation, Community
- [ ] Team: 3 members
- [ ] Timeline: 2024 → 2025 → 2026

---

## PHẦN 16: TRANG CONTACT (/contact)

- [ ] Page Header
- [ ] Form: Name, Email, Subject, Message + validation
- [ ] Contact info: email, phone, address, hours

---

## PHẦN 17: TRANG PHÁP LÝ

- [ ] `/privacy-policy` — Nội dung từ generator
- [ ] `/terms-of-service` — Nội dung từ generator
- [ ] Link 2 trang trong Footer

---

## PHẦN 18: TRANG 404

- [ ] `not-found.tsx` — "404 - Page Not Found" + "Back to Home" button

---

## PHẦN 19: MOBILE RESPONSIVE

- [ ] Mobile: hamburger menu hoạt động
- [ ] Mobile: nav gom Platforms ▼ thành dropdown
- [ ] Mobile: cards 1 cột, padding 16px
- [ ] Mobile: Market Overview thành card scroll ngang
- [ ] Tablet: 2-3 cột
- [ ] Touch targets: tất cả nút ≥ 44x44px

---

## PHẦN 20: DEPLOY & KIỂM TRA

### Push code lên GitHub
- [ ] `git init`
- [ ] `git add .`
- [ ] `git commit -m "Initial commit"`
- [ ] `git branch -M main`
- [ ] `git remote add origin https://github.com/YOUR_USERNAME/trantamcapital.git`
- [ ] `git push -u origin main`

### Deploy lên Vercel
- [ ] Vào https://vercel.com → Add New → Project
- [ ] Chọn repo trantamcapital → Deploy
- [ ] Đợi build xong → click link

### Kiểm tra sau deploy
- [ ] Home: hero, giá coin, news đều hiển thị
- [ ] Tất cả link menu: không 404
- [ ] News: bài viết + sidebar + pagination
- [ ] Forex Broker: grid + comparison table
- [ ] Crypto Exchange: grid
- [ ] Binary Option: grid + risk warning
- [ ] Tools: 6 cards
- [ ] About: story, team, timeline
- [ ] Contact: form + info
- [ ] Privacy Policy + Terms: hiển thị
- [ ] 404: vào link sai → trang 404
- [ ] Mobile: menu hamburger, responsive
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
| 1. Chuẩn bị | 11 | □ / 11 |
| 2. Tạo dự án | 6 | □ / 6 |
| 3. Design System | 4 | □ / 4 |
| 4. Components | 8 | □ / 8 |
| 5. Config & SEO | 4 | □ / 4 |
| 6. Home | 20 | □ / 20 |
| 7. News | 5 | □ / 5 |
| 8. For Beginners | 4 | □ / 4 |
| 9. Investment Analysis | 4 | □ / 4 |
| 10. Forex Broker | 4 | □ / 4 |
| 11. Crypto Exchange | 2 | □ / 2 |
| 12. Binary Option | 4 | □ / 4 |
| 13. Sub Pages | 7 | □ / 7 |
| 14. Tools | 2 | □ / 2 |
| 15. About | 6 | □ / 6 |
| 16. Contact | 3 | □ / 3 |
| 17. Pháp lý | 3 | □ / 3 |
| 18. 404 | 1 | □ / 1 |
| 19. Responsive | 5 | □ / 5 |
| 20. Deploy | 16 | □ / 16 |
| 21. Domain setup | 11 | □ / 11 |
| 22. Sau deploy | 6 | □ / 6 |
| **Tổng** | **~130 mục** | **□ / 130** |
