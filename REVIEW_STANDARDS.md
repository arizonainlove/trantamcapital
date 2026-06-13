# Tiêu Chuẩn Viết Review Broker (Crypto Exchange)

## Mục Tiêu

Một bài review cần thuyết phục người đọc click "Visit [Broker]" — tức là họ tin tưởng broker đó đủ để ghé xem trang chủ. Review không phải để kể lể tính năng, mà để **giải quyết nỗi đau của nhà đầu tư** và **đưa ra quyết định thay họ**.

---

## 6 Yếu Tố Bắt Buộc

### 1. Bảng Phí (Fee Table)

Người đọc luôn có câu hỏi ngầm: *"Tôi sẽ mất bao nhiêu phí?"*

**Luôn** đưa phí vào dạng bảng markdown ngay sau overview:

```markdown
| Trading Type | Fee |
|-------------|-----|
| **Spot Maker/Taker** | **0.10%** |
| **Futures Maker** | **0.02%** |
| **Futures Taker** | **0.055%** |
```

- Dùng **bold** cho số và loại phí
- Tối thiểu 2-3 dòng (spot + futures)
- Nếu có chương trình giảm phí (ví dụ BNB, token native), ghi chú thêm

### 2. Phân Khúc Đối Tượng (Target Audience)

Người đọc tự hỏi: *"Nó có phù hợp với tôi không?"*

Dạng: **"Who is it for?"** — 2-3 câu:

> *"If you trade spot and futures actively, need deep liquidity, or want a single platform covering everything from staking to Web3, Binance is the benchmark. Beginners may find the feature set overwhelming — in that case, simpler alternatives like Coinbase may be a gentler entry point."*

Cấu trúc:
- Câu 1: Ai phù hợp (2-3 nhóm)
- Câu 2: Ai không phù hợp + gợi ý giải pháp thay thế

**Tính trung thực tăng trust.** Đừng ngại nói "cái này không dành cho tất cả mọi người".

### 3. USP Rõ Ràng (Unique Selling Proposition)

Mỗi exchange cần **1 câu trả lời** cho:

> *"Nếu tôi chỉ được chọn 1 exchange, tại sao tôi nên chọn cái này?"*

| Exchange | USP |
|----------|-----|
| Binance | Thanh khoản số 1, hệ sinh thái đầy đủ nhất |
| Bybit | Futures + Copy Trade mạnh nhất |
| OKX | Web3/DeFi tích hợp sâu nhất, phí spot rẻ nhất |
| Bitget | Copy Trade xuất sắc nhất |
| MEXC | List coin sớm nhất, 3,000+ coins, zero-fee maker |
| Coinbase | Trust, regulation, Nasdaq listing |

USP phải xuất hiện **ngay trong đoạn đầu tiên** của body.

### 4. Con Số Biết Nói (Social Proof)

Số cụ thể > lời khen chung chung.

Luôn đưa ít nhất 2-3 con số sau:

| Loại số | Ví dụ |
|---------|-------|
| Người dùng | 250+ million, 100+ million |
| Quốc gia | 160+ countries, 180+ countries |
| Số lượng coin | 600+, 3,000+ |
| Volume / Thanh khoản | Daily volume highest globally |
| Năm thành lập | Founded in 2017 |
| Phí cụ thể | 0.08%, 0.1%, 0% maker |

### 5. Ngôn Ngữ Cảm Xúc / Giải Quyết Nỗi Đau

Không chỉ liệt kê tính năng — hãy chỉ ra **vấn đề** và **cách giải quyết**:

| Thay vì viết | Hãy viết |
|-------------|----------|
| "High liquidity" | "fast execution, minimal slippage, and order books deep enough for institutional-sized positions" |
| "Good for beginners" | "dramatically lowers the barrier to entry — you don't need to be a chart expert" |
| "Secure" | "removes the anxiety that often comes with crypto" |

Kỹ thuật: **Nỗi đau → Giải pháp → Kết quả**

### 6. So Sánh Đối Thủ (Competitor Reference)

Giúp người đọc định vị bằng cách so sánh trực tiếp:

> *"If Web3/DeFi is your priority, OKX offers a deeper ecosystem."*
> *"Active traders who need lower fees will find better value on Binance or Bybit."*

Ít nhất **1 câu** so sánh trong mỗi review, mentioning đối thủ chính bằng tên.

---

## Cấu Trúc Body Content Mẫu

```markdown
## [Overview - 1-2 câu]
- [Tên] là ai, vị thế market
- USP + con số ấn tượng (người dùng, coins)

## [Fee Table]
| Trading Type | Fee |
| ...

## [Thế mạnh chính - 2-3 câu]
- Điểm mạnh nhất + giải quyết nỗi đau gì?
- Câu chuyện: "For traders who..., this means..."

## [Who is it for? - 2-3 câu]
- Ai nên dùng + Ai không nên dùng + gợi ý thay thế

## [Kết luận - 1 câu]
- Khẳng định lại vị thế + kêu gọi implicit
- Ví dụ: "For [target audience], [name] remains the [position] in 2026."
```

**Tổng độ dài body:** ~200-350 từ (không tính bảng).

---

## YAML Frontmatter Cấu Trúc

File review nằm ở `src/content/reviews/{slug}.md`:

```yaml
---
brokerSlug: "exchange-a"          # Khớp với slug của broker file
brokerName: "Binance"             # Tên hiển thị
brokerType: "Crypto Exchange"     # Enum cố định
pros:
  - "Item 1"                      # 5-6 items, bắt đầu bằng tính từ mạnh
  - "Item 2"                      # (Excellent/Very strong/Strong/Low)
cons:
  - "Item 1"                      # 3 items, trung thực về hạn chế
keyFeatures:                      # Hiển thị ở mục Key Features
  - label: "Trading Fees"         # Nhãn ngắn
    value: "0.1% (Spot)"          # Giá trị cụ thể
  - label: "Security"
    value: "Very High"
  - label: "Coins"
    value: "600+"
  - label: "Users"
    value: "250+ Million"
ratingSummary:                    # Hiển thị ở sidebar - thanh score
  - label: "Liquidity"
    score: 10                     # Thang 0-10
  - label: "Security"
    score: 9.7
trustScore: 94                    # Thang 0-100, hiển thị badge
---
Body content (Markdown, viết theo cấu trúc mẫu ở trên)
```

### Lưu ý quan trọng về YAML

- `keyFeatures` và `ratingSummary` dùng format YAML block (không dùng inline `{}`)
- `pros` và `cons` là arrays strings đơn giản
- `trustScore` là number, không phải string
- `brokerSlug` phải **khớp chính xác** với slug của broker file ở `src/content/brokers/`
- Nếu thiếu `keyFeatures` hoặc `ratingSummary`, phần đó sẽ **không hiển thị** trên page

### Gợi ý ratingSummary scores cho crypto exchange

| Hạng mục | Gợi ý |
|----------|--------|
| Liquidity | 9.5-10 cho Big 3 (Binance, Bybit, OKX) |
| Fees | 9.0-10 cho giá rẻ, 6.0-7.5 cho đắt |
| Security | 8.5-10 dựa trên broker data |
| Coin Selection | 7.0-10 dựa trên số lượng coins |
| User Experience | 8.0-9.5 tùy độ dễ dùng |
| Copy Trading | 9.0-10 cho exchange có copy trade mạnh |
| Futures Trading | 9.0-10 cho exchange mạnh về derivatives |
| Web3 Ecosystem | 8.0-10 cho OKX, 5.0-7.0 cho các exchange khác |

---

## Checklist Tự Kiểm Tra

- [ ] Có bảng phí (tối thiểu 2 dòng)?
- [ ] Có "Who is it for?" + gợi ý đối thủ thay thế?
- [ ] USP xuất hiện trong đoạn đầu tiên?
- [ ] Có ít nhất 2 con số biết nói (users, coins, năm, etc.)?
- [ ] Có ít nhất 1 câu so sánh với đối thủ bằng tên?
- [ ] Ngôn ngữ giải quyết nỗi đau (không chỉ liệt kê)?
- [ ] keyFeatures có 4-6 items?
- [ ] ratingSummary có 5 items, thang 0-10, phân hóa phù hợp?
- [ ] trustScore phù hợp với tổng thể review?
- [ ] pros có 5-6 items, cons có 3 items?
- [ ] Body ~200-350 từ, không quá ngắn?

---

## Ví Dụ Body Content Hoàn Chỉnh (Binance)

```markdown
**Binance** isn't just the biggest crypto exchange by volume — it's the closest thing the industry has to a complete trading ecosystem. With **250+ million** users and **600+** cryptocurrencies listed, Binance dominates in liquidity, product breadth, and global reach.

| Trading Type | Fee |
|-------------|-----|
| **Spot Maker/Taker** | **0.10%** (0.075% with BNB) |
| **Futures Maker** | **0.02%** |
| **Futures Taker** | **0.05%** |

Binance's greatest advantage is **liquidity**. When you trade at this scale — whether Bitcoin, Ethereum, or a mid-cap altcoin — you get fast execution, minimal slippage, and order books deep enough for institutional-sized positions. For active traders, that alone justifies the choice.

Beyond the core exchange, the ecosystem includes **Binance Earn** (staking and passive income), **Launchpad** (early access to new token projects), **Web3 Wallet** (self-custody), and **Binance Pay**. Few platforms offer this breadth of services under one roof.

**Who is it for?** If you trade spot and futures actively, need deep liquidity, or want a single platform covering everything from staking to Web3, Binance is the benchmark. Beginners may find the feature set overwhelming — in that case, simpler alternatives like Coinbase may be a gentler entry point.

With the **SAFU** insurance fund, regular Proof of Reserves, and a Strong affiliate program, Binance covers every base. For the vast majority of crypto traders, it remains the gold standard in **2026**.
```
