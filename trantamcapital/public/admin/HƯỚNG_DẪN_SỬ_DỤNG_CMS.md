# Hướng Dẫn Sử Dụng — Quản Lý Nội Dung

## Truy cập

Vào **`https://trantamcapital.vercel.app/admin`**

---

## Đăng nhập

1. Vào **`https://trantamcapital.vercel.app/admin`**
2. Click nút **Login with GitHub**
3. Cửa sổ mới hiện ra → Click **Authorize** để cấp quyền
4. Cửa sổ tự động đóng → Trang admin hiện danh sách bài viết

> Lưu ý: Nếu cửa sổ không hiện ra, hãy cho phép popup cho trang này.

---

## Chuyển đổi tab quản lý

Trang admin có 3 tab ở đầu màn hình:
- **News Articles** — Quản lý bài viết tin tức
- **Brokers** — Quản lý sàn giao dịch / broker
- **Reviews** — Quản lý nội dung review chi tiết cho từng broker

Click vào tab tương ứng để chuyển đổi.

---

## Xem danh sách bài viết

Sau khi đăng nhập, tab **News Articles** hiện danh sách tất cả bài viết dạng bảng:
- **Title**: Tiêu đề bài viết
- **Category**: Danh mục (Cryptocurrency, Forex, Binary Options, Markets)
- **Date**: Ngày đăng
- **Actions**: Nút Edit (sửa) / Delete (xóa)

---

## Tạo bài viết mới

1. Click nút **+ New Article** (góc trên bên phải)
2. Điền thông tin:

| Trường | Bắt buộc | Mô tả |
|--------|----------|-------|
| **Title** | ✅ Có | Tiêu đề bài viết |
| **Publish Date** | ❌ Không | Ngày đăng, mặc định là hôm nay |
| **Category** | ❌ Không | Chọn danh mục |
| **Author** | ❌ Không | Tác giả, mặc định "TrantamCapital" |
| **Image URL** | ❌ Không | Link ảnh đại diện (nếu có). Khuyến nghị 1200×630px, 16:9 |
| **Excerpt** | ❌ Không | Mô tả ngắn, 1-2 câu |
| **Body** | ✅ Có | Nội dung chính — viết bằng Markdown |

3. Click **Create Article** → Bài viết được lưu lên GitHub
4. Đợi ~1-2 phút → Vào **`https://trantamcapital.vercel.app/news`** kiểm tra

---

## Hướng dẫn viết Markdown

Phần **Body** dùng định dạng Markdown:

```markdown
# Tiêu đề lớn (H1)
## Tiêu đề phụ (H2)
### Tiêu đề nhỏ (H3)

**Chữ đậm**
*Chữ nghiêng*

- Danh sách bullet
- Mục thứ hai

1. Danh sách có số
2. Mục thứ hai

[Text hiển thị](https://example.com)

> Trích dẫn

--- (đường kẻ ngang)
```

---

## Sửa bài viết

1. Trong danh sách, click **Edit** ở bài muốn sửa
2. Sửa nội dung
3. Click **Update Article**
4. Bài viết được cập nhật trên GitHub

---

## Xóa bài viết

1. Trong danh sách, click **Delete** ở bài muốn xóa
2. Xác nhận **OK** trong hộp thoại
3. Bài viết bị xóa khỏi GitHub

> Cảnh báo: Hành động này không thể hoàn tác.

---

## Quản lý Brokers / Sàn giao dịch

Chuyển sang tab **Brokers** để quản lý các sàn giao dịch hiển thị trên trang chủ (mục "Featured Brokers & Exchanges").

### Xem danh sách Brokers

Tab Brokers hiện danh sách dạng bảng:
- **Name**: Tên sàn
- **Type**: Loại (Forex Broker, Crypto Exchange, Binary Options)
- **Rating**: Đánh giá sao
- **Features**: Các tính năng chính
- **Actions**: Nút Edit (sửa) / Delete (xóa)

### Thêm Broker mới

1. Click nút **+ New Broker**
2. Điền thông tin:

| Trường | Bắt buộc | Mô tả |
|--------|----------|-------|
| **Name** | ✅ Có | Tên sàn giao dịch |
| **Type** | ❌ Không | Forex Broker / Crypto Exchange / Binary Options |
| **Rating** | ❌ Không | Đánh giá từ 0–5 (ví dụ: 4.5) |
| **Features** | ❌ Không | Các tính năng, mỗi dòng một tính năng |
| **Review URL** | ❌ Không | Đường dẫn đến trang review chi tiết |
| **Visit URL** | ❌ Không | Đường dẫn đến trang web của sàn |
| **Gradient** | ❌ Không | Màu nền logo (CSS gradient), để trống dùng màu mặc định |
| **Comparison Data** | ❌ Không | Dữ liệu bảng so sánh (xem bên dưới) |

#### So sánh (Comparison Data)

Các trường hiển thị trong bảng so sánh ở trang danh sách. Chỉ cần nhập các trường phù hợp với loại broker:

**Forex Broker:** Regulation, Min Deposit, Spread, Leverage, Platforms
**Crypto Exchange:** Trading Fees, Security, Features, Coins
**Binary Options:** Max Payout, Expiry Times, Asset Classes

<!-- rest stays the same -->

3. Click **Create Broker** → Lưu lên GitHub
4. Đợi ~1-2 phút → Trang chủ cập nhật

### Sửa Broker

1. Trong tab Brokers, click **Edit** ở broker muốn sửa
2. Sửa thông tin
3. Click **Update Broker**

### Xóa Broker

1. Trong tab Brokers, click **Delete** ở broker muốn xóa
2. Xác nhận **OK**
3. Broker biến mất khỏi trang chủ sau khi Vercel rebuild

> Lưu ý: Dữ liệu mặc định (7 broker) sẽ hiện lại nếu xóa hết broker trong CMS. Để thay đổi hoàn toàn, hãy tạo broker mới sau khi xóa.

## Quản lý Reviews

Tab **Reviews** cho phép quản lý nội dung trang review chi tiết cho từng broker (ví dụ: `trantamcapital.com/forex-broker/broker-a`).

### Xem danh sách Reviews

Tab Reviews hiện danh sách:
- **Broker**: Tên/slug của broker
- **Actions**: Nút Edit (sửa) / Delete (xóa)

### Tạo Review mới

1. Click **+ New Review**
2. Chọn **Broker** từ dropdown (danh sách broker đã có trong hệ thống)
3. Điền thông tin:

| Trường | Bắt buộc | Mô tả |
|--------|----------|-------|
| **Broker** | ✅ Có | Chọn broker từ danh sách |
| **Pros** | ❌ Không | Các ưu điểm, mỗi dòng một mục |
| **Cons** | ❌ Không | Các nhược điểm, mỗi dòng một mục |
| **Trust Score** | ❌ Không | Điểm tin cậy 0–100 |
| **Overview** | ✅ Có | Nội dung tổng quan, viết Markdown. Xuống dòng 2 lần để tạo đoạn mới. |

4. Click **Create Review**
5. Mỗi broker chỉ nên có 1 review

> Ghi chú: Slug của review tự động lấy từ reviewHref của broker.

### Sửa / Xóa Review

- Click **Edit** để sửa review
- Click **Delete** để xóa (không thể hoàn tác)

---

## Cách hoạt động

- **Bài viết** lưu dạng `.md` trong `trantamcapital/src/content/news/` trên GitHub
- **Brokers** lưu dạng `.md` trong `trantamcapital/src/content/brokers/` trên GitHub
- Mỗi mục là một file riêng, tên file tự động tạo từ tiêu đề/tên
- Khi có thay đổi, Vercel phát hiện và tự động build lại website
- Bài viết mới nhất hiện trên trang chủ và trang tin tức
- Broker mới/thay đổi hiện trên trang chủ mục "Featured Brokers & Exchanges"

---

## Xử lý lỗi thường gặp

| Lỗi | Cách xử lý |
|-----|-----------|
| "Popup was blocked" | Cho phép popup cho trang web này |
| "Session expired" | Login lại |
| "Failed to load articles" | Kiểm tra kết nối internet, thử Retry |
| "Failed to load brokers" | Kiểm tra kết nối internet, thử Retry |
| "Failed to load reviews" | Kiểm tra kết nối internet, thử Retry |
| Review không hiện sau khi tạo | Đợi 1-2 phút cho Vercel build xong. Kiểm tra broker có reviewHref hợp lệ không |
| Không thấy bài viết/broker mới | Đợi 1-2 phút cho Vercel build xong |
