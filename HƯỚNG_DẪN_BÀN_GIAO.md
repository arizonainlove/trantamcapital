# Hướng Dẫn Bàn Giao Website TrantamCapital

---

## 1. Thông tin tổng quan

| Mục | Chi tiết |
|-----|----------|
| **Website** | TrantamCapital — Tin tức & đánh giá tài chính (Forex, Crypto, Binary Options) |
| **URL hiện tại** | `https://trantamcapital.vercel.app` |
| **URL chính thức** | Sẽ là `https://trantamcapital.com` sau khi mua domain và trỏ về |
| **Nền tảng** | Vercel (hosting + tự động HTTPS) |
| **Mã nguồn** | GitHub — `github.com/arizonainlove/trantamcapital` |
| **Ngôn ngữ** | Tiếng Anh (toàn bộ nội dung trang) |

---

## 2. Giai đoạn 1 — Tôi (người phát triển) cần làm

### 2.1 Thêm tài khoản GitHub của khách hàng vào repository

> Khách hàng cần cung cấp **username GitHub** của họ trước.

**Các bước thực hiện:**

1. Vào `https://github.com/arizonainlove/trantamcapital`
2. Click tab **Settings**
3. Menu bên trái → **Collaborators**
4. Click nút **Add people**
5. Nhập username GitHub của khách hàng
6. Chọn quyền **Write** (có thể đọc và ghi code)
7. Click **Add to repository**

> Kết quả: Khách hàng nhận được email mời và có quyền truy cập repository.

### 2.2 Chuyển quyền sở hữu Vercel

**Cách 1 — Thêm khách hàng vào team Vercel (dùng chung project):**

1. Vào `https://vercel.com/account/teams`
2. Tạo một Team mới → mời khách hàng vào team
3. Trong project `trantamcapital` → Settings → General → Transfer project to team
4. Thêm domain của khách hàng trong Settings → Domains

**Cách 2 — Chuyển hẳn project cho tài khoản Vercel của khách hàng:**

1. Vào Vercel Dashboard → chọn project `trantamcapital`
2. Settings → General → **Transfer Project**
3. Nhập email Vercel của khách hàng
4. Khách hàng vào email → Accept

### 2.3 Cập nhật GitHub OAuth trên Vercel

Sau khi khách hàng tạo GitHub OAuth App của họ (xem mục 3.3), tôi cần:

1. Vào Vercel Dashboard → Project `trantamcapital` → Settings → Environment Variables
2. Cập nhật 2 biến:
   - `GITHUB_CLIENT_ID` → Client ID mới của khách hàng
   - `GITHUB_CLIENT_SECRET` → Client Secret mới của khách hàng
3. Deploy lại để áp dụng thay đổi

---

## 3. Giai đoạn 2 — Khách hàng cần làm

### 3.1 Tạo tài khoản GitHub (nếu chưa có)

1. Vào `https://github.com/signup`
2. Điền email, mật khẩu, username
3. Xác nhận email
4. Chọn **Free plan**

### 3.2 Tạo tài khoản Vercel (nếu chưa có)

1. Vào `https://vercel.com/`
2. Click **Sign Up** → **Continue with GitHub**
3. Làm theo hướng dẫn

### 3.3 Tạo GitHub OAuth App (để đăng nhập Admin)

**Đây là bước quan trọng — nếu không làm, bạn không thể đăng nhập vào trang `/admin`.**

1. Vào `https://github.com/settings/developers`
2. Click **OAuth Apps** → **Register a new application**
3. Điền thông tin:

   | Trường | Giá trị |
   |--------|---------|
   | Application name | `TrantamCapital Admin` |
   | Homepage URL | `https://trantamcapital.com` (hoặc URL thật sau khi có domain) |
   | Authorization callback URL | `https://trantamcapital.com/api/auth` |

4. Click **Register application**
5. Màn hình hiện ra thông tin:
   - **Client ID** — copy ra
   - **Generate a new client secret** → click → copy chuỗi secret hiện ra

> **Lưu ý:** Client Secret chỉ hiện **1 lần duy nhất**. Hãy copy và lưu lại ngay.
> Nếu mất secret, bạn phải Generate lại cái mới.

6. Gửi **Client ID** và **Client Secret** cho người phát triển để cập nhật lên Vercel.

### 3.4 Mua domain & trỏ về Vercel

#### Bước 1 — Mua domain

Mua domain tại một trong các nhà cung cấp:
- **Namecheap** (~$10-15/năm)
- **GoDaddy** (hỗ trợ tiếng Việt)
- **Nhân Hòa** / **PA Việt Nam** (thanh toán chuyển khoản)

#### Bước 2 — Lấy thông tin DNS từ Vercel

1. Vào Vercel Dashboard → Project `trantamcapital` → **Settings** → **Domains**
2. Nhập domain (ví dụ: `trantamcapital.com`) → **Add**
3. Vercel hiển thị các bản ghi DNS cần thêm

#### Bước 3 — Thêm bản ghi DNS

Vào trang quản lý DNS của nơi mua domain, thêm các bản ghi sau:

| Loại | Host/Name | Giá trị |
|------|-----------|---------|
| CNAME | `www` | `cname.vercel-dns.com` |
| A | `@` (hoặc để trống) | `76.76.21.21` |

#### Bước 4 — Kiểm tra

- Đợi 5-30 phút
- Vào `https://trantamcapital.com` — website hiển thị
- Kiểm tra icon ổ khóa trên trình duyệt (SSL tự động)
- Vào `https://trantamcapital.com/admin` — đăng nhập được

### 3.5 Cách đăng nhập Admin

1. Vào `https://trantamcapital.com/admin`
2. Click **Login with GitHub**
3. Cửa sổ mới hiện ra → click **Authorize**
4. Cửa sổ tự động đóng → vào được trang quản trị

### 3.6 Các chức năng trong Admin

Trang admin có 3 tab:

| Tab | Chức năng |
|-----|-----------|
| **News Articles** | Quản lý bài viết tin tức (thêm, sửa, xóa) |
| **Brokers** | Quản lý sàn giao dịch (Forex, Crypto, Binary) hiển thị trên trang chủ |
| **Reviews** | Quản lý nội dung đánh giá chi tiết cho từng sàn |

Hướng dẫn sử dụng chi tiết: `https://trantamcapital.com/admin/HƯỚNG_DẪN_SỬ_DỤNG_CMS.md`

---

## 4. Cách hoạt động của Admin

### Luồng hoạt động

1. Đăng nhập GitHub qua popup
2. Admin đọc danh sách bài viết từ GitHub
3. Thêm/sửa/xóa bài viết
4. Mỗi thay đổi tự động commit lên GitHub
5. Vercel phát hiện thay đổi → tự động build lại website
6. Sau ~1-2 phút, nội dung mới hiển thị trên website

### Lưu trữ nội dung

- **Bài viết**: file `.md` trong `src/content/news/` trên GitHub
- **Brokers**: file `.md` trong `src/content/brokers/` trên GitHub
- **Reviews**: file `.md` trong `src/content/reviews/` trên GitHub
- **Hình ảnh**: upload lên `public/images/uploads/` trên GitHub

> **Không cần database.** Toàn bộ nội dung là file Markdown trên GitHub.

---

## 5. Tùy chọn nâng cao — Chuyển repository sang tài khoản GitHub của khách hàng

> Đây là bước không bắt buộc nhưng **nên làm** để khách hàng chủ động hoàn toàn.

### Cách 1: Chuyển quyền sở hữu repository (đơn giản nhất)

1. Vào `https://github.com/arizonainlove/trantamcapital`
2. Settings → **Transfer ownership**
3. Chọn tài khoản GitHub của khách hàng làm chủ sở hữu mới
4. Nhập tên repository để xác nhận

### Cách 2: Fork + clone mới

1. Người phát triển: clone repo về máy
2. Khách hàng: tạo repo mới trên GitHub của họ (ví dụ: `trantamcapital`)
3. Người phát triển: push code lên repo mới của khách hàng:

```bash
git remote remove origin
git remote add origin https://github.com/KHACH_HANG/trantamcapital.git
git push -u origin main
```

4. Khách hàng: vào Vercel → Import repository mới
5. Khách hàng: cập nhật GitHub OAuth callback URL thành domain mới
6. Khách hàng: tạo OAuth App mới với callback URL = domain mới

---

## 6. Cấu trúc website

| Trang | Đường dẫn | Ghi chú |
|-------|-----------|---------|
| Trang chủ | `/` | Hero, giá coin, broker nổi bật, tin tức |
| Tin tức | `/news` | Danh sách bài viết + bộ lọc |
| Chi tiết bài viết | `/news/[slug]` | Tự động tạo từ CMS |
| Forex Broker | `/forex-broker` | So sánh broker + bảng tổng hợp |
| Crypto Exchange | `/crypto-exchange` | So sánh sàn giao dịch |
| Binary Options | `/binary-option` | Sàn binary option + cảnh báo rủi ro |
| Đánh giá chi tiết | `/forex-broker/[slug]`, ... | Nội dung từ tab Reviews |
| Hướng dẫn mới bắt đầu | `/for-beginners` | Kiến thức cơ bản |
| Phân tích đầu tư | `/investment-analysis` | Phân tích thị trường |
| Công cụ | `/tools` | 6 công cụ tính toán |
| Giới thiệu | `/about` | Về công ty |
| Liên hệ | `/contact` | Form liên hệ |
| Chính sách | `/privacy-policy`, `/terms-of-service` | Trang pháp lý |

---

## 7. Thông tin kỹ thuật

### Công nghệ sử dụng

| Công nghệ | Mục đích |
|-----------|----------|
| Next.js + TypeScript | Framework chính |
| Tailwind CSS | Giao diện |
| CoinGecko API | Widget giá coin (miễn phí, không cần API key) |
| Vercel | Hosting, HTTPS, deploy tự động |
| GitHub | Lưu mã nguồn và nội dung CMS |

### Chi phí vận hành

- **Domain**: ~$10-15/năm
- **Hosting (Vercel)**: Miễn phí
- **CoinGecko API**: Miễn phí
- **GitHub**: Miễn phí
- **Tổng**: Chỉ tốn phí domain ~$10-15/năm

### Khi cần thay đổi giao diện hoặc tính năng

Cần người có chuyên môn Next.js để chỉnh sửa mã nguồn. Các file quan trọng:
- Giao diện: thư mục `src/components/` và `src/app/`
- Component dùng chung: `src/components/`
- Design system: `src/app/globals.css`

---

## 8. Checklist bàn giao

### Người phát triển
- [ ] Thêm tài khoản GitHub của khách hàng làm Collaborator
- [ ] Chuyển Vercel project (team hoặc transfer)
- [ ] Cập nhật GITHUB_CLIENT_ID và GITHUB_CLIENT_SECRET lên Vercel

### Khách hàng
- [ ] Tạo tài khoản GitHub (nếu chưa có)
- [ ] Tạo tài khoản Vercel (nếu chưa có)
- [ ] Tạo GitHub OAuth App → gửi Client ID + Secret cho người phát triển
- [ ] Mua domain
- [ ] Trỏ domain về Vercel (thêm DNS records)
- [ ] Kiểm tra website hoạt động qua domain mới
- [ ] Kiểm tra HTTPS hoạt động (icon ổ khóa)
- [ ] Vào `/admin` đăng nhập được
- [ ] Kiểm tra tạo/sửa/xóa bài viết
- [ ] Kiểm tra upload hình ảnh
- [ ] Google PageSpeed test (mục tiêu ≥ 90 điểm)

---

## 9. Liên hệ hỗ trợ

Mọi thắc mắc, vui lòng liên hệ người phát triển để được hướng dẫn chi tiết.

---

## 10. Hướng dẫn tự cập nhật — Dành cho khách hàng sau bàn giao

> Sau khi bàn giao, bạn có thể tự chỉnh sửa nội dung và code. Phần này hướng dẫn từ A-Z.

### 10.1 Cập nhật nội dung qua Admin (không cần chạy code)

Đây là cách đơn giản nhất — chỉ cần vào website:

1. Vào `https://trantamcapital.com/admin`
2. Đăng nhập GitHub
3. Thêm/sửa/xóa **Bài viết**, **Broker**, **Review** tuỳ ý
4. Lưu — tự động deploy sau ~1-2 phút

Không cần cài đặt gì trên máy tính.

### 10.2 Cập nhật hình ảnh (logo, ảnh bài viết)

- Upload trực tiếp qua Admin (tab News/Brokers → chọn file ảnh)
- Ảnh tự động lưu lên GitHub và hiển thị trên website

### 10.3 Chỉnh sửa code trên máy tính (nâng cao)

Nếu muốn tự sửa code (thay đổi màu sắc, thêm nội dung, sửa lỗi):

#### Bước 1 — Cài đặt công cụ

| Công cụ | Link tải | Ghi chú |
|---------|----------|---------|
| **Node.js** (bản LTS) | https://nodejs.org | Kiểm tra: mở CMD gõ `node --version` |
| **VS Code** | https://code.visualstudio.com | Soạn thảo code |
| **Git** | https://git-scm.com/downloads | Quản lý code, thường có sẵn trên Windows |

#### Bước 2 — Clone code từ GitHub về máy

```bash
# Mở CMD hoặc Terminal, gõ:
git clone https://github.com/arizonainlove/trantamcapital.git
cd trantamcapital/trantamcapital
npm install
```

> **Lưu ý:** Nếu đã chuyển repository sang tài khoản riêng, thay URL GitHub ở trên bằng URL repo của bạn.

#### Bước 3 — Chạy thử trên máy tính

```bash
npm run dev
```

Mở trình duyệt vào `http://localhost:3000` — bạn sẽ thấy website chạy local.

#### Bước 4 — Chỉnh sửa code

Dùng VS Code mở thư mục `trantamcapital` và sửa các file cần thay đổi:

| Bạn muốn | Sửa file nào |
|----------|-------------|
| Đổi màu sắc, font chữ | `src/app/globals.css` |
| Sửa nội dung trang chủ | `src/app/page.tsx` |
| Sửa menu header | `src/components/Header.tsx` |
| Sửa footer | `src/components/Footer.tsx` |
| Thêm/xoá coin trong bảng giá | `src/components/MarketOverview.tsx` |
| Thêm/xoá coin trong ticker | `src/components/PriceTicker.tsx` |
| Sửa nội dung tĩnh (About, Tools...) | `src/app/about/page.tsx`, `src/app/tools/page.tsx` |

> **Mẹo:** Cứ sửa file → lưu (Ctrl+S) → ra trình duyệt xem kết quả liền. `npm run dev` tự động reload.

#### Bước 5 — Kiểm tra trước khi đưa lên website thật

```bash
npm run build
```

Phải thấy `✓ Compiled successfully` và không có lỗi. Nếu có lỗi, đọc dòng báo lỗi để sửa.

#### Bước 6 — Đưa code lên website thật

```bash
# Trong thư mục trantamcapital (thư mục chứa file package.json)
git add .
git commit -m "Mô tả ngắn về thay đổi"
git push
```

Sau khi push, Vercel tự động build lại website. Đợi ~1-2 phút, vào website kiểm tra.

### 10.4 Lưu ý quan trọng

- **Luôn chạy `npm run build`** trước khi `git push` — nếu build lỗi thì website sẽ bị lỗi sau khi deploy
- **Không sửa file trong `src/content/`** bằng tay — các file đó do Admin quản lý, sửa qua Admin là đủ
- **Không xoá file `.gitkeep`** trong các thư mục content
- **Sao lưu**: Code đã được lưu trên GitHub, nếu mất máy tính thì clone lại từ GitHub
- **Cần hỗ trợ**: Nếu gặp lỗi không tự sửa được, liên hệ người phát triển

### 10.5 Luồng làm việc đề xuất

```
Sửa nội dung (Admin) ──────────────────────→ Website cập nhật sau 1-2p
                                              (không cần chạy code)

Sửa giao diện/tính năng (Code + Commit) ───→ Vercel rebuild → Website mới
  Clone → npm install → npm run dev
  → Sửa code → npm run build (kiểm tra)
  → git add / commit / push
```

### 10.6 Các lệnh thường dùng (tổng kết)

| Lệnh | Chạy khi nào |
|------|-------------|
| `npm run dev` | Muốn chạy thử website trên máy tính |
| `npm run build` | Muốn kiểm tra code có lỗi không |
| `git add .` | Sau khi sửa code xong, chuẩn bị đẩy lên |
| `git commit -m "nội dung"` | Đóng gói thay đổi kèm mô tả |
| `git push` | Đẩy lên GitHub → Vercel tự động deploy |

---

*Cập nhật lần cuối — 21/05/2026*
