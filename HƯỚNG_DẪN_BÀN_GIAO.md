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

## 10. Quy trình sửa code — Dành cho người phát triển sau bàn giao

> Sau khi bàn giao, **khách hàng tự quản lý nội dung qua Admin** (mục 3.6).
> Còn bạn — **người phát triển** — vẫn là người sửa code khi có thay đổi mới.
> 
> Phần này hướng dẫn bạn cần làm gì để tiếp tục làm việc sau khi repo và Vercel đã thuộc về khách hàng.

### 10.1 Sau khi repo được chuyển cho khách (Transfer ownership)

Khi khách hàng đã nhận repo (theo mục 5), bạn không còn quyền push vào repo cũ `arizonainlove/trantamcapital` nữa. Để tiếp tục sửa code:

#### Trường hợp 1 — Bạn được thêm làm Collaborator (khuyến nghị)

Khách hàng vào GitHub → Settings → Collaborators → thêm username GitHub của bạn với quyền **Write**.

Sau đó bạn clone lại từ repo mới:

```bash
# Nếu repo chuyển sang tài khoản khách hàng
git clone https://github.com/KHACH_HANG/trantamcapital.git
cd trantamcapital/trantamcapital
npm install
```

Quy trình sửa code vẫn như cũ:

```bash
npm run dev          # Chạy local
# ... sửa code ...
npm run build        # Kiểm tra lỗi
git add .
git commit -m "Mô tả"
git push             # Push lên repo của khách → Vercel auto-deploy
```

#### Trường hợp 2 — Fork repo (không được cấp quyền trực tiếp)

1. Vào GitHub repo của khách hàng → **Fork** về tài khoản của bạn
2. Clone fork về máy:
   ```bash
   git clone https://github.com/YOUR_USERNAME/trantamcapital.git
   cd trantamcapital/trantamcapital
   npm install
   ```
3. Sửa code, commit, push lên fork của bạn
4. Tạo **Pull Request** từ fork của bạn → repo gốc của khách hàng
5. Khách hàng (hoặc bạn nếu có quyền) merge PR → Vercel tự động deploy

### 10.2 Quy trình sửa code thường ngày

Dù repo ở đâu, quy trình vẫn giống nhau:

```
Bước 1: git pull                  → Lấy code mới nhất (nếu có người khác sửa)
Bước 2: npm run dev               → Chạy local, sửa code
Bước 3: npm run build             → Kiểm tra build không lỗi
Bước 4: git add . && git commit   → Đóng gói thay đổi
Bước 5: git push                  → Đẩy lên GitHub → Vercel auto-deploy
```

### 10.3 Sau khi Vercel được chuyển cho khách

Khi khách hàng đã nhận Vercel project (mục 2.2), bạn không còn xem được log deploy hoặc domain settings trên Vercel nữa.

Nếu cần debug lỗi deploy, bạn có 2 cách:

- **Cách 1**: Khách hàng vào Vercel Dashboard → Deployment → copy log lỗi gửi bạn
- **Cách 2**: Khách hàng thêm bạn vào Vercel team với quyền Viewer

### 10.4 Tổng kết — Ai làm gì?

| Việc | Ai làm | Công cụ |
|------|--------|---------|
| Đăng bài viết, sửa broker, upload logo | **Khách hàng** | Admin (`/admin`) |
| Thay đổi giao diện, tính năng, code | **Người phát triển** | Code + git push |
| Deploy sau khi đẩy code | **Tự động** | Vercel |
| Quản lý domain, SSL | **Khách hàng** | Vercel Dashboard |

---

*Cập nhật lần cuối — 21/05/2026*
