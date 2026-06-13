# CẤU TRÚC & NỘI DUNG WEBSITE PROTRADEVISION.COM

> Ngôn ngữ: Tiếng Anh | Thị trường: Quốc tế
> Màu sắc: Phương án D (Premium Financial)

---

## SITEMAP TỔNG THỂ

```
PROTRADEVISION.COM
│
├── 🏠 Home (/)                          # Trang chủ — giới thiệu tổng quan
│
├── 📰 News (/news)                      # Tin tức thị trường
│
├── 📚 For Beginners (/for-beginners)    # Hướng dẫn cho người mới
│
├── 📊 Investment Analysis (/investment-analysis)  # Phân tích đầu tư
│
├── 💱 Forex Broker (/forex-broker)      # Review & so sánh sàn Forex
│   ├── /forex-broker/broker-a          # Trang chi tiết Broker A + bài viết
│   ├── /forex-broker/broker-b          # Trang chi tiết Broker B + bài viết
│   └── /forex-broker/broker-c          # Trang chi tiết Broker C + bài viết
│
├── 🔷 Crypto Exchange (/crypto-exchange) # Review & so sánh sàn Crypto
│   ├── /crypto-exchange/exchange-a     # Trang chi tiết Exchange A + bài viết
│   ├── /crypto-exchange/exchange-b     # Trang chi tiết Exchange B + bài viết
│   └── /crypto-exchange/exchange-c     # Trang chi tiết Exchange C + bài viết
│
├── 📈 Binary Option (/binary-option)    # Binary Options platforms
│   └── /binary-option/platform-a       # Trang chi tiết Platform A + bài viết
│
├── 🛠️ Tools (/tools)                   # Công cụ giao dịch
│
├── 👥 About Us (/about)                 # Giới thiệu công ty
│
└── 📞 Contact (/contact)                # Liên hệ
```

---

## 1. TRANG CHỦ — Home (/)

### Mục tiêu
- Gây ấn tượng mạnh ngay từ đầu
- Giới thiệu tổng quan về website
- Dẫn người dùng vào các trang khác
- Hiển thị giá coin live + tin tức mới

### Cấu trúc từng section

#### Section 1: Hero (Toàn màn hình)
```
┌──────────────────────────────────────────────────────┐
│  [Background: Navy #0F1A2E + Gradient cam #E84910]   │
│                                                       │
│           TRADE SMARTER, INVEST WISER                │
│     ──── ● ────                                      │
│   Your trusted source for forex, cryptocurrency,      │
│   and binary options market insights.                 │
│                                                       │
│   🏆 50+ Brokers Reviewed  |  📊 $2B+ Volume         │
│   Analyzed  |  🌍 100K+ Monthly Readers              │
│                                                       │
│   ┌──────────────┐  ┌──────────────────┐  ┌────────┐ │
│   │ Start Trading│  │  Compare Brokers │  │Latest  │ │
│   │              │  │                  │  │ News   │ │
│   └──────────────┘  └──────────────────┘  └────────┘ │
│                                                       │
└──────────────────────────────────────────────────────┘
```

- **Headline**: "Trade Smarter, Invest Wiser"
- **Subheadline**: "Your trusted source for forex, cryptocurrency, and binary options market insights. Expert analysis, broker reviews, and educational resources for traders of all levels."
- **Trust Bar**: "50+ Brokers Reviewed | $2B+ Volume Analyzed | 100K+ Monthly Readers" (ngay dưới subheadline)
- **CTA 1**: Start Trading → `/for-beginners`
- **CTA 2**: Compare Brokers → `/forex-broker`
- **CTA 3**: Latest News → `/news`

#### Section 2: Market Overview (Bảng giá nhanh)
```
┌──────────────────────────────────────────────────────┐
│              MARKET OVERVIEW                          │
│     ──── ● ────                                      │
│   Real-time cryptocurrency market data                │
│                                                       │
│   ┌──────┬───────────┬──────────┬─────────────┐      │
│   │ NAME │   PRICE   │ 24H CHG │  MARKET CAP  │      │
│   ├──────┼───────────┼──────────┼─────────────┤      │
│   │ BTC  │ $102,450  │ ▲ 2.45% │   $2.02T    │      │
│   │ ETH  │ $5,230    │ ▼ 1.23% │   $628B     │      │
│   │ BNB  │ $612      │ ▲ 3.78% │   $94B      │      │
│   │ SOL  │ $145      │ ▲ 5.12% │   $62B      │      │
│   │ XRP  │ $0.78     │ ▼ 0.45% │   $42B      │      │
│   │ ADA  │ $0.62     │ ▲ 1.34% │   $22B      │      │
│   │ DOGE │ $0.12     │ ▼ 2.56% │   $17B      │      │
│   │ DOT  │ $7.89     │ ▲ 4.67% │   $11B      │      │
│   └──────┴───────────┴──────────┴─────────────┘      │
└──────────────────────────────────────────────────────┘
```

- **Dữ liệu**: CoinGecko API (real-time)
- **Desktop**: Table 4 cột (Name, Price, 24h Change, Market Cap)
- **Mobile**: Chuyển thành card scroll ngang (swipeable) — mỗi coin 1 card nhỏ, vuốt ngang xem tiếp
- **Màu sắc**: Xanh lá (`#2E7D32`) cho tăng, Đỏ (`#C62828`) cho giảm

#### Section 3: Featured Brokers & Exchanges (Sàn giao dịch nổi bật)
```
┌──────────────────────────────────────────────────────┐
│   [Background: #F7F8FA]                              │
│              FEATURED BROKERS & EXCHANGES            │
│     ──── ● ────                                      │
│   Top-rated trading platforms reviewed by experts     │
│                                                       │
│  ┌──────────┬──────────┬──────────┬──────────┐       │
│  │ForexBrok │ForexBrok │ForexBrok │Exchange  │       │
│  │  er A    │  er B    │  er C    │   A      │       │
│  │ ★★★★☆   │ ★★★★☆    │ ★★★★★    │ ★★★★☆   │       │
│  │ FCA Reg. │ CySEC    │ ASIC     │ Binance  │       │
│  │ 0.0 pips │ $50 min  │ 1:100    │ Clone    │       │
│  │ [Review] │ [Review] │ [Review] │ [Review] │       │
│  ├──────────┼──────────┼──────────┼──────────┤       │
│  │Exchange  │Exchange  │BinaryPlat│          │       │
│  │   B      │   C      │  form A  │          │       │
│  │ ★★★★☆   │ ★★★★★    │ ★★★★☆    │          │       │
│  │ Coinbase │ Bybit    │ IQ Option│          │       │
│  │ -style   │ -style   │ -style   │          │       │
│  │ [Review] │ [Review] │ [Review] │          │       │
│  └──────────┴──────────┴──────────┴──────────┘       │
│                                                       │
│  Mỗi card có: Logo placeholder + Tên + Rating +       │
│  2-3 đặc điểm chính + "Read Review" button            │
│  Bấm vào → /forex-broker/broker-a, /crypto-          │
│  exchange/exchange-a, /binary-option/platform-a       │
└──────────────────────────────────────────────────────┘
```

**Dữ liệu 7 sàn giao dịch mẫu:**

| # | Tên | Loại | Rating | Đặc điểm | URL |
|---|-----|------|--------|----------|-----|
| 1 | ForexBroker A | Forex | 4.5 | FCA Regulated, 0.0 pips, MT5 | /forex-broker/broker-a |
| 2 | ForexBroker B | Forex | 4.0 | CySEC, $50 min, Copy Trading | /forex-broker/broker-b |
| 3 | ForexBroker C | Forex | 5.0 | ASIC, ECN, 1:100 leverage | /forex-broker/broker-c |
| 4 | Exchange A | Crypto | 4.5 | High Liquidity, 500+ Coins | /crypto-exchange/exchange-a |
| 5 | Exchange B | Crypto | 4.0 | Regulated, Fiat Onramp | /crypto-exchange/exchange-b |
| 6 | Exchange C | Crypto | 5.0 | Derivatives, 100x Leverage | /crypto-exchange/exchange-c |
| 7 | BinaryPlatform A | Binary | 4.0 | Demo Account, 60+ Assets | /binary-option/platform-a |

#### Section 4: Featured News (3 bài nổi bật)
```
┌──────────────────────────────────────────────────────┐
│              MARKET NEWS                              │
│     ──── ● ────                                      │
│   Stay informed with the latest market analysis       │
│                                                       │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐           │
│   │ [Image]  │  │ [Image]  │  │ [Image]  │           │
│   │ CATEGORY │  │ CATEGORY │  │ CATEGORY │           │
│   │ Title... │  │ Title... │  │ Title... │           │
│   │ Excerpt  │  │ Excerpt  │  │ Excerpt  │           │
│   └──────────┘  └──────────┘  └──────────┘           │
│                                                       │
│              [ View All News → ]                      │
└──────────────────────────────────────────────────────┘
```

- **3 bài viết**: Crypto, Forex, Binary Option (mỗi bài 1 chủ đề)
- **Card**: Image placeholder + Category badge (cam) + Date + Title + Excerpt
- **CTA**: "View All News" → `/news`

#### Section 4: Trading Platforms (4 danh mục chính)
```
┌──────────────────────────────────────────────────────┐
│              TRADING PLATFORMS                        │
│     ──── ● ────                                      │
│   Explore our reviews and comparisons                 │
│                                                       │
│   ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐│
│   │  🌐     │  │  📈     │  │  📊     │  │  🛡️     ││
│   │ FOREX   │  │ CRYPTO  │  │ BINARY  │  │ TOOLS   ││
│   │ Brokers │  │Exchange │  │ Options │  │         ││
│   └─────────┘  └─────────┘  └─────────┘  └─────────┘│
└──────────────────────────────────────────────────────┘
```

- **4 cards**: Forex Brokers, Crypto Exchanges, Binary Options, Trading Tools
- **Mỗi card**: Icon + Title + Mô tả ngắn
- **Link**: đến trang tương ứng

#### Section 5: Why ProTradeVision (4 lý do)
```
┌──────────────────────────────────────────────────────┐
│   [Background: Navy #0F1A2E]                         │
│                                                       │
│              WHY TRANTAM CAPITAL?                     │
│     ──── ● ────                                      │
│                                                       │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────┐ │
│   │📊 Expert │  │🌍 Comp.  │  │📈 Educ.  │  │🛡️ Trus│ │
│   │ Analysis │  │ Coverage │  │ Focus    │  │Info  │ │
│   └──────────┘  └──────────┘  └──────────┘  └──────┘ │
└──────────────────────────────────────────────────────┘
```

- **4 lý do**: Expert Analysis, Comprehensive Coverage, Educational Focus, Trusted Information
- **Mỗi item**: Icon + Title + Mô tả ngắn

#### Section 6: Newsletter (Call-to-action)
```
┌──────────────────────────────────────────────────────┐
│   [Background: Cam #E84910]                          │
│                                                       │
│   Stay Updated with Market Insights                   │
│   Subscribe to our newsletter for daily market        │
│   analysis and trading tips.                          │
│                                                       │
│   [Enter your email...]  [Subscribe]                  │
└──────────────────────────────────────────────────────┘
```

---

### Global — Header & Navigation Updates

#### Search Box
- Thêm search icon trong Header (nav bar)
- Desktop: hiện search input hoặc icon → click mở rộng
- Mobile: icon search trong hamburger menu
- **Mục đích**: 25-40 tuổi có thói quen gõ tìm kiếm nhanh "best broker low spread", "ethereum price"

#### Mobile Navigation — Gom nhóm Trading Platforms
Hiện tại 10 mục menu trên mobile quá dài. Gom 3 mục thành dropdown:

```
Home
News
For Beginners
Investment Analysis
Trading Platforms ▼           ← Dropdown mới
  ├─ Forex Broker
  ├─ Crypto Exchange
  └─ Binary Option
Tools
About
Contact
```

Desktop giữ nguyên 10 mục riêng (đủ chỗ trên nav 48px).

---

## 2. TIN TỨC — News (/news)

### Mục tiêu
- Cập nhật tin tức thị trường mới nhất
- Phân loại theo chủ đề (Crypto, Forex, Binary Option, Markets)
- Có sidebar với danh mục và bài viết gần đây

### Cấu trúc

#### Page Header
```
┌──────────────────────────────────────────────────┐
│  [Background: Navy #0F1A2E]                      │
│  MARKET NEWS                                     │
│  Stay informed with the latest market updates    │
└──────────────────────────────────────────────────┘
```

#### Main Content (2 cột: Content + Sidebar)

**Cột trái (2/3) — Danh sách bài viết:**
```
┌──────────────────────────────────┐
│  [All] [Crypto] [Forex] [Binary] [Markets]  ← Filter tabs
├──────────────────────────────────┤
│  ┌─────────┬──────────────────┐  │
│  │ [Image] │ CATEGORY         │  │
│  │         │ Title...         │  │ ← 1 bài viết
│  │         │ Excerpt...       │  │
│  │         │ 📅 Date   👤 Author │  │
│  └─────────┴──────────────────┘  │
│  ┌─────────┬──────────────────┐  │
│  │ [Image] │ ...              │  │ ← 1 bài viết
│  └─────────┴──────────────────┘  │
│  ...                              │
│  [1] [2] [3]  ← Pagination      │
└──────────────────────────────────┘
```

**Dữ liệu mẫu (9 bài):**

| # | Title | Category | 
|---|-------|----------|
| 1 | Bitcoin Surges Past $100K: What This Means for Investors in 2026 | Crypto |
| 2 | Federal Reserve Rate Decision: Impact on Forex Markets | Forex |
| 3 | Ethereum 2.0: Complete Guide to the Merge Upgrade | Crypto |
| 4 | Best Forex Brokers for Beginners in 2026 | Forex |
| 5 | Binary Options Strategies That Actually Work | Binary |
| 6 | Solana vs Ethereum: Layer 1 Blockchain Comparison | Crypto |
| 7 | Gold Price Forecast: How Geopolitical Tensions Drive Demand | Markets |
| 8 | Top 5 Crypto Exchanges for Altcoin Trading | Crypto |
| 9 | Risk Management in Binary Options: Essential Guide | Binary |

**Cột phải (1/3) — Sidebar:**
```
┌──────────────────────────────────┐
│  CATEGORIES                      │
│  • Cryptocurrency         12     │
│  • Forex                  8      │
│  • Binary Options         6      │
│  • Market Analysis        10     │
│  • Trading Guides         5      │
├──────────────────────────────────┤
│  RECENT POSTS                    │
│  ┌────┬──────────────────┐      │
│  │Icon│ Bitcoin Surges...│      │
│  ├────┼──────────────────┤      │
│  │Icon│ Fed Rate Decision│      │
│  ├────┼──────────────────┤      │
│  │...  (5 posts)          │      │
│  └────┴──────────────────┘      │
├──────────────────────────────────┤
│  NEWSLETTER                      │
│  [Email input]                   │
│  [Subscribe]                     │
└──────────────────────────────────┘
```

---

## 3. DÀNH CHO NGƯỜI MỚI — For Beginners (/for-beginners)

### Mục tiêu
- Cung cấp kiến thức căn bản cho người mới bắt đầu
- Giải thích crypto, forex, binary option là gì
- Bảng thuật ngữ (Glossary)

### Cấu trúc

#### Page Header
```
┌──────────────────────────────────────────────────┐
│  START HERE                                   │
│  Everything you need to know to begin your      │
│  trading journey                               │
└──────────────────────────────────────────────────┘
```

#### Section 1: What We Cover (3 cards lớn)
```
┌──────────────┬──────────────┬──────────────┐
│ WHAT IS      │ WHAT IS      │ WHAT IS      │
│ CRYPTOCURRENCY│   FOREX?    │ BINARY       │
│              │              │ OPTIONS?     │
│ [Icon]       │ [Icon]       │ [Icon]       │
│ Explanation  │ Explanation  │ Explanation  │
│ + key points │ + key points │ + key points │
│ [Start Trading │ [Start Trading │ [Start Trading│
│  in 7 Steps]  │  in 7 Steps]  │  in 7 Steps] │
└──────────────┴──────────────┴──────────────┘
```

**Nội dung từng card:**

**What is Cryptocurrency?**
- "Digital or virtual currency that uses cryptography for security"
- Key points: Decentralized, Blockchain technology, Volatile market
- Link: → `/crypto-exchange`

**What is Forex?**
- "Foreign exchange — the global marketplace for trading currencies"
- Key points: Largest financial market, 24/5 trading, Major/minor pairs
- Link: → `/forex-broker`

**What is Binary Options?**
- "A financial instrument where you predict price movement within a time frame"
- Key points: Fixed payout, All-or-nothing, Short-term trading
- Link: → `/binary-option`

#### Section 2: Getting Started Guide (Steps)
```
┌──────────────────────────────────────────────────┐
│  GETTING STARTED                                  │
│  7 steps to begin your trading journey            │
│                                                    │
│  01 ┌─────────────┐  02 ┌─────────────┐          │
│     │ Learn the    │     │ Choose a    │          │
│     │ Basics       │     │ Market      │          │
│     └─────────────┘     └─────────────┘          │
│  03 ┌─────────────┐  04 ┌─────────────┐          │
│     │ Pick a       │     │ Open a Demo │          │
│     │ Platform     │     │ Account     │          │
│     └─────────────┘     └─────────────┘          │
│  05 ┌─────────────┐  06 ┌─────────────┐          │
│     │ Learn Risk   │     │ Start Small │          │
│     │ Management   │     │             │          │
│     └─────────────┘     └─────────────┘          │
│  07 ┌─────────────┐                               │
│     │ Keep Learning│                               │
│     └─────────────┘                               │
└──────────────────────────────────────────────────┘
```

#### Section 3: Glossary (Bảng thuật ngữ)
```
┌──────────────────────────────────────────────────┐
│  TRADING GLOSSARY                                 │
│  Common terms every trader should know            │
│                                                    │
│  [A] [B] [C] [D] [E] [F] [G] [H] [I] [J] ...     │ ← Alphabet filter
│                                                    │
│  ┌───────────────┬──────────────────────────────┐  │
│  │ TERM          │ DEFINITION                   │  │
│  ├───────────────┼──────────────────────────────┤  │
│  │ Ask Price     │ The lowest price a seller... │  │
│  │ Bid Price     │ The highest price a buyer... │  │
│  │ Spread        │ The difference between...    │  │
│  │ Leverage      │ Using borrowed capital...    │  │
│  │ Margin        │ The amount required...       │  │
│  │ Volatility    │ The rate of price...         │  │
│  │ Liquidity     │ The ability to buy/sell...   │  │
│  │ Bull Market   │ A market with rising prices  │  │
│  │ Bear Market   │ A market with falling prices │  │
│  │ Stop Loss     │ An order to close a trade... │  │
│  └───────────────┴──────────────────────────────┘  │
└──────────────────────────────────────────────────┘
```

**~15-20 thuật ngữ phổ biến**: Ask, Bid, Spread, Leverage, Margin, Volatility, Liquidity, Bull Market, Bear Market, Stop Loss, Take Profit, Slippage, Hedging, Diversification, Margin Call, Pip, Lot, Candlestick, RSI, MACD

---

## 4. PHÂN TÍCH ĐẦU TƯ — Investment Analysis (/investment-analysis)

### Mục tiêu
- Cung cấp phân tích thị trường chuyên sâu
- Nhận định xu hướng
- Dành cho trader có kinh nghiệm

### Cấu trúc

#### Page Header
```
┌──────────────────────────────────────────────────┐
│  INVESTMENT ANALYSIS                              │
│  Professional market analysis and trading insights │
└──────────────────────────────────────────────────┘
```

#### Section 1: Market Overview Cards
```
┌─────────────┬─────────────┬─────────────┐
│ 📈 CRYPTO   │ 💱 FOREX    │ 📊 COMMODITIES│
│ Market      │ Market      │ Market       │
│ Analysis    │ Analysis    │ Analysis     │
│             │             │              │
│ BTC: ▲2.45% │ EUR/USD:    │ Gold: ▲1.2%  │
│ ETH: ▼1.23% │ ▼0.34%     │ Oil: ▼0.8%   │
│ [View More] │ [View More] │ [View More]  │
└─────────────┴─────────────┴─────────────┘
```

#### Section 2: Daily Market Report
```
┌──────────────────────────────────────────────────┐
│  TODAY'S MARKET REPORT                            │
│  May 20, 2026  |  Written by [Expert Name]        │
│                                                    │
│  ┌────────────────────────────────────────────┐  │
│  │ KEY HIGHLIGHTS:                            │  │
│  │ • Bitcoin consolidates above $100K level   │  │
│  │ • EUR/USD tests support at 1.0850          │  │
│  │ • Gold continues rally amid uncertainty    │  │
│  │ • Oil prices decline on demand concerns    │  │
│  └────────────────────────────────────────────┘  │
│                                                    │
│  Analysis text...                                  │
│                                                    │
│  [Read Full Analysis →]                           │
└──────────────────────────────────────────────────┘
```

#### Section 3: Technical Analysis Tools (giới thiệu)
```
┌──────────────────────────────────────────────────┐
│  TECHNICAL ANALYSIS TOOLS                         │
│                                                    │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐          │
│  │📊 Cand│  │📈 RSI│  │📉 MA  │  │🔲 Fib │          │
│  │lestick│  │Index │  │Moving │  │onacci│          │
│  │Pattern│  │      │  │Avg    │  │      │          │
│  └──────┘  └──────┘  └──────┘  └──────┘          │
└──────────────────────────────────────────────────┘
```

---

## 5. FOREX BROKER (/forex-broker)

### Mục tiêu
- Review & so sánh các sàn Forex
- Giúp người dùng chọn sàn phù hợp
- Bảng so sánh tính năng

### Cấu trúc

#### Page Header
```
┌──────────────────────────────────────────────────┐
│  FOREX BROKER REVIEWS                             │
│  Find the best forex broker for your trading style│
└──────────────────────────────────────────────────┘
```

#### Section 1: Top Brokers Grid (6 brokers)
```
┌──────────────┬──────────────┬──────────────┐
│ [Logo]       │ [Logo]       │ [Logo]       │
│ Broker A     │ Broker B     │ Broker C     │
│ ★★★★☆ 4.5   │ ★★★★☆ 4.0   │ ★★★★★ 5.0   │
│ [tag] [tag]  │ [tag] [tag]  │ [tag] [tag]  │
│ ✓ Feature    │ ✓ Feature    │ ✓ Feature    │
│ ✓ Feature    │ ✓ Feature    │ ✓ Feature    │
│ [Read Review]│ [Read Review]│ [Read Review]│
│ [Visit Site] │ [Visit Site] │ [Visit Site] │
├──────────────┼──────────────┼──────────────┤
│ [Logo]       │ [Logo]       │ [Logo]       │
│ Broker D     │ Broker E     │ Broker F     │
│ ...          │ ...          │ ...          │
└──────────────┴──────────────┴──────────────┘
```

**Dữ liệu 6 broker mẫu:**
| Tên | Rating | Features |
|-----|--------|----------|
| ForexBroker A | 4.5 | FCA, Low Spreads, MT5, Demo |
| ForexBroker B | 4.0 | CySEC, Islamic, Copy Trading, Edu |
| ForexBroker C | 5.0 | ASIC, ECN, 24/7 Support, VIP |
| ForexBroker D | 3.5 | Regulated, Low Min, Web, Mobile |
| ForexBroker E | 4.0 | CFTC, Premium, Signals, Webinars |
| ForexBroker F | 4.5 | Offshore, High Leverage, Multi |

#### Section 2: Comparison Table
```
┌──────────────────────────────────────────────┐
│  TOP BROKERS COMPARISON                       │
│                                                │
│  ┌─────────┬──────┬──────┬──────┐             │
│  │ FEATURE │ BRKR │ BRKR │ BRKR │             │
│  │         │   A  │   B  │   C  │             │
│  ├─────────┼──────┼──────┼──────┤             │
│  │Regulated│ FCA  │CySEC │ ASIC │             │
│  │Min Dep  │ $100 │ $50  │ $200 │             │
│  │Spread   │0.0p  │0.5p  │0.1p  │             │
│  │Leverage │ 1:30 │ 1:500│ 1:100│             │
│  │Platforms│MT4,5 │cTrade│MT4,5 │             │
│  └─────────┴──────┴──────┴──────┘             │
└──────────────────────────────────────────────────┘
```

#### Section 3: How to Choose a Broker (Guide)
```
┌──────────────┬────────────────────────────────┐
│ [Check Icon] │ HOW TO CHOOSE A FOREX BROKER    │
│  Guide       │                                 │
│              │ ✓ Check Regulation              │
│              │ ✓ Compare Spreads & Fees        │
│              │ ✓ Test the Platform             │
│              │ ✓ Review Deposits/Withdrawals   │
│              │ ✓ Read Customer Reviews         │
└──────────────┴────────────────────────────────┘
```

#### Section 4: Individual Broker Pages (Trang chi tiết từng sàn)

**Mỗi broker có 1 trang riêng**: `/forex-broker/broker-a`, `/forex-broker/broker-b`, `/forex-broker/broker-c`

**Cấu trúc trang broker chi tiết:**
```
┌──────────────────────────────────────────────────┐
│  [Background: Navy #0F1A2E]                      │
│  FOREXBROKER A REVIEW                            │
│  ★★★★☆  4.5/5  |  FCA Regulated  |  0.0 pips    │
└──────────────────────────────────────────────────┘

┌─────────────┬────────────────────────────────────┐
│ OVERVIEW    │ SECTION 1: ABOUT BROKER A           │
│ [Logo]      │ Text about the broker, history,     │
│ ★★★★☆ 4.5  │ regulation, target audience...     │
│ FCA Reg.    │                                      │
│ 0.0 pips    │ ┌──────────────────────────────┐   │
│ Demo Acct   │ │ REGULATION & SAFETY          │   │
│ MT5/MT4     │ │ ✓ FCA regulated (License No) │   │
│             │ │ ✓ Client fund segregation    │   │
│             │ │ ✓ Negative balance protection│   │
│             │ └──────────────────────────────┘   │
│             │                                      │
│             │ ┌──────────────────────────────┐   │
│             │ │ FEATURES                     │   │
│             │ │ • Spreads from 0.0 pips     │   │
│             │ │ • Leverage up to 1:30       │   │
│             │ │ • MT5 & MT4 platforms       │   │
│             │ │ • 70+ currency pairs        │   │
│             │ └──────────────────────────────┘   │
├─────────────┴────────────────────────────────────┤
│ SECTION 2: PROS & CONS                           │
│ ┌─────────────────┬────────────────────────────┐ │
│ │ ✅ PROS         │ ❌ CONS                     │ │
│ │ • Tight spreads  │ • Limited crypto          │ │
│ │ • Fast execution │ • High min deposit ($100) │ │
│ │ • Great support  │ • No US clients           │ │
│ └─────────────────┴────────────────────────────┘ │
├──────────────────────────────────────────────────┤
│ SECTION 3: COMMISSION & FEES                     │
│ ┌────────────┬──────────────┬────────────────┐  │
│ │ Fee Type   │ Amount       │ Notes           │  │
│ ├────────────┼──────────────┼────────────────┤  │
│ │ Spread     │ From 0.0 pips│ Major pairs     │  │
│ │ Commission │ $0           │ Spread-only     │  │
│ │ Withdrawal │ Free         │ Bank transfer   │  │
│ │ Inactivity │ $10/month    │ After 3 months  │  │
│ └────────────┴──────────────┴────────────────┘  │
├──────────────────────────────────────────────────┤
│ SECTION 4: RELATED ARTICLES (Bài viết về sàn)    │
│ ┌──────────┬──────────┬──────────┐               │
│ │ How to   │ Broker A │ Broker A │               │
│ │ Open Acc │ vs       │ Review   │               │
│ │ with     │ Broker B │ 2026     │               │
│ │ Broker A │          │          │               │
│ └──────────┴──────────┴──────────┘               │
└──────────────────────────────────────────────────┘
```

**Nội dung mẫu cho từng broker:**

| Broker | Regulation | Nổi bật | Phù hợp |
|--------|-----------|---------|---------|
| **Broker A** | FCA (UK) | Spreads from 0.0 pips, MT5 | Professional traders |
| **Broker B** | CySEC (EU) | $50 min deposit, Copy Trading | Beginners |
| **Broker C** | ASIC (AU) | ECN accounts, 1:100 leverage | Scalpers, day traders |

**Bài viết mẫu cho mỗi broker (3 bài/broker):**

*Broker A articles:*
1. "How to Open an Account with Broker A — Step by Step Guide"
2. "Broker A vs Broker B: Which is Better for Forex Trading?"
3. "Broker A Review 2026: Is It Still Worth It?"

*Broker B articles:*
1. "Getting Started with Broker B: A Beginner's Guide"
2. "Broker B Copy Trading Features: Complete Overview"
3. "Broker B Review 2026: Pros, Cons and Verdict"

*Broker C articles:*
1. "Broker C ECN Accounts Explained: What You Need to Know"
2. "Advanced Trading Strategies with Broker C"
3. "Broker C Review 2026: Deep Dive Analysis"

---

## 6. CRYPTO EXCHANGE (/crypto-exchange)

### Cấu trúc — Tương tự Forex Broker

#### Page Header
```
CRYPTO EXCHANGE REVIEWS
Find the best cryptocurrency exchange for your needs
```

#### Top 6 Exchanges
| Tên | Rating | Features |
|-----|--------|----------|
| Exchange A | 4.5 | High Liquidity, Low Fees, 500+ Coins |
| Exchange B | 4.0 | Regulated, Fiat Onramp, Insurance |
| Exchange C | 5.0 | Derivatives, High Leverage, API |
| Exchange D | 3.5 | DEX, Self-Custody, Low Fees |
| Exchange E | 4.0 | Social Trading, Copy Trading |
| Exchange F | 4.5 | NFT Marketplace, Web3 Wallet |

#### Comparison Table
- Features: Regulation, Trading Fee, Coins Offered, Security, Fiat Support

#### Individual Exchange Pages

**Mỗi exchange có 1 trang riêng**: `/crypto-exchange/exchange-a`, `/crypto-exchange/exchange-b`, `/crypto-exchange/exchange-c`

**Cấu trúc tương tự Forex Broker page**, thay nội dung cho crypto:

| Exchange | Loại | Nổi bật | Phù hợp |
|----------|------|---------|---------|
| **Exchange A** | CEX (Centralized) | High liquidity, 500+ coins, 0.1% fee | Active traders |
| **Exchange B** | CEX (Regulated) | Fiat onramp, FDIC insured, Beginner-friendly | Newcomers |
| **Exchange C** | CEX/Derivatives | 100x leverage, Futures, API | Advanced traders |

**Bài viết mẫu cho mỗi exchange (3 bài/exchange):**

*Exchange A articles:*
1. "How to Trade on Exchange A: Complete Beginner's Guide"
2. "Exchange A vs Exchange B: Fees, Features & Security Compared"
3. "Exchange A Review 2026: Is It Still the Best Exchange?"

*Exchange B articles:*
1. "How to Buy Your First Crypto on Exchange B"
2. "Exchange B Security Features: Is Your Money Safe?"
3. "Exchange B Review 2026: Everything You Need to Know"

*Exchange C articles:*
1. "Margin Trading on Exchange C: A Complete Guide"
2. "Exchange C API Trading: Setup Guide for Algorithmic Traders"
3. "Exchange C Review 2026: Pros, Cons & Final Verdict"

---

## 7. BINARY OPTION (/binary-option)

### Thiết kế tương tự Forex Broker / Crypto Exchange

#### Page Header
```
BINARY OPTIONS PLATFORMS
Compare binary options trading platforms
```

#### Risk Warning (nổi bật — nền vàng cảnh báo)
```
⚠️  RISK WARNING
Binary options trading involves significant risk.
You can lose all your invested capital.
```

#### Top Platforms (3 platforms)
| Tên | Rating | Features |
|-----|--------|----------|
| BinaryPlatform A | 4.0 | Demo Account, 60+ Assets, Mobile |
| BinaryPlatform B | 3.5 | Low Minimum, Tutorials |
| BinaryPlatform C | 4.5 | Advanced Charting, High Payouts |

#### How Binary Options Work (4 bước)
```
01 Choose Asset → 02 Predict Direction → 03 Set Amount → 04 Wait for Expiry
```

#### Individual Platform Page

**Trang chi tiết**: `/binary-option/platform-a`

**Cấu trúc tương tự Forex Broker page** với nội dung:

| Platform | Nổi bật | Phù hợp |
|----------|---------|---------|
| **BinaryPlatform A** | Demo account, 60+ assets, 95% payout | All levels |
| **BinaryPlatform B** | $10 min trade, educational content | Beginners |
| **BinaryPlatform C** | Advanced charting, 98% payout, signals | Experienced |

**Bài viết mẫu:**
1. "BinaryPlatform A Review 2026: Features, Payouts & More"
2. "How to Trade Binary Options on BinaryPlatform A"
3. "BinaryPlatform A vs BinaryPlatform B: Which is Better?"

---

## 8. TOOLS — Công cụ (/tools)

### Mục tiêu
- Cung cấp các công cụ hữu ích cho trader

### Cấu trúc

#### Page Header
```
TRADING TOOLS
Professional tools to help you make better trading decisions
```

#### Grid công cụ
```
┌──────────────┬──────────────┐
│ 📅 ECONOMIC  │ 💰 POSITION  │
│   CALENDAR   │   SIZE CALC  │
│ Track key    │ Calculate    │
│ economic     │ optimal pos. │
│ events       │ size         │
└──────────────┴──────────────┘
┌──────────────┬──────────────┐
│ 📈 PROFIT/   │ 🔄 CURRENCY  │
│   LOSS CALC  │   CONVERTER  │
│ Calculate    │ Real-time    │
│ potential    │ currency     │
│ profit/loss  │ conversion   │
└──────────────┴──────────────┘
┌──────────────┬──────────────┐
│ 📊 MARGIN    │ ⚡ PIP       │
│   CALCULATOR │   CALCULATOR │
│ Calculate    │ Calculate    │
│ margin       │ pip value    │
│ requirements │              │
└──────────────┴──────────────┘
```

**Mỗi tool card gồm**: Icon + Tên + Mô tả + [Use Tool] button (sẽ đưa đến tool page hoặc modal sau này)

---

## 9. ABOUT US — Về chúng tôi (/about)

### Mục tiêu
- Giới thiệu công ty, mission, team
- Tạo trust với người dùng

### Cấu trúc

#### Page Header
```
ABOUT TRANTAM CAPITAL
Your trusted partner in financial market education
```

#### Section 1: Our Story
```
┌──────────────────────────────────────────────────┐
│  [Content]                                        │
│  "Trantam Capital was founded with a simple       │
│  mission: to provide accurate, unbiased, and      │
│  accessible financial market information to       │
│  traders worldwide..."                            │
│                                                    │
│  Text: 100-150 words about company history         │
└──────────────────────────────────────────────────┘
```

#### Section 2: Mission & Vision
```
┌──────────────────────┬──────────────────────┐
│  OUR MISSION         │  OUR VISION          │
│  To empower traders  │  A world where every  │
│  with knowledge and  │  trader has access   │
│  tools they need...  │  to quality info...  │
└──────────────────────┴──────────────────────┘
```

#### Section 3: Core Values
```
┌──────────┬──────────┬──────────┬──────────┐
│ Integrity │ Education│ Innovation│Community │
│ Be trust..│ Share kn.│ Embrace..│ Build a.. │
└──────────┴──────────┴──────────┴──────────┘
```

#### Section 4: Team Members (3-4 người)
```
┌──────────────┬──────────────┬──────────────┐
│ [Avatar]     │ [Avatar]     │ [Avatar]     │
│ John Doe     │ Jane Smith   │ Mike Johnson │
│ Founder & CEO│ Head Analyst │ Senior       │
│              │              │ Trader       │
│ 10+ yrs      │ 8+ yrs forex │ 12+ yrs      │
│ finance      │ & crypto     │ trading      │
└──────────────┴──────────────┴──────────────┘
```

#### Section 5: Timeline
```
┌─── 2024 ──────────────────────────────────────────┐
│  Trantam Capital founded                            │
├─── 2025 ──────────────────────────────────────────┤
│  Launched first market analysis platform            │
├─── 2026 ──────────────────────────────────────────┤
│  Expanded to global audience — 100K+ monthly       │
│  readers                                           │
└───────────────────────────────────────────────────┘
```

---

## 10. CONTACT — Liên hệ (/contact)

### Mục tiêu
- Form liên hệ cho người dùng
- Thông tin công ty

### Cấu trúc

#### Page Header
```
CONTACT US
Get in touch with our team
```

#### Main Content (2 cột)
```
┌────────────────────────┬────────────────────────┐
│  GET IN TOUCH          │  CONTACT INFORMATION    │
│                        │                         │
│  [Your Name]           │  📧 info@protradevision │
│  [Email Address]       │     .com                │
│  [Subject]             │                         │
│  [Message]             │  📞 +1 (234) 567-890    │
│                        │                         │
│  [Send Message]        │  📍 123 Financial       │
│                        │     District, NY 10004  │
│                        │                         │
│                        │  ⏰ Mon-Fri: 9AM-6PM EST│
└────────────────────────┴────────────────────────┘
```

---

## TỔNG KẾT NỘI DUNG

| Trang | Sections | Loại nội dung |
|-------|----------|---------------|
| Home | 6 sections | Hero + Bảng giá + Tin tức + Platforms + Lý do + Newsletter |
| News | 2 columns | Bài viết + Sidebar + Filter |
| For Beginners | 3 sections | Cards giới thiệu + Steps + Glossary |
| Investment Analysis | 3 sections | Cards phân tích + Báo cáo + Tools |
| Forex Broker | 3 sections | Grid brokers + Comparison table + Guide |
| Crypto Exchange | 3 sections | Grid exchanges + Comparison table |
| Binary Option | 4 sections | Grid platforms + Risk warning + Steps |
| Tools | 1 section | Grid 6 tools |
| About | 5 sections | Story + Mission/Vision + Values + Team + Timeline |
| Contact | 2 columns | Form + Contact info |
| **Footer** | 4 columns | About + Quick Links + Markets + Contact |

**Tổng số: 10 trang + Header + Footer + Price Ticker**
