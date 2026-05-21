# Hướng Dẫn Sử Dụng Decap CMS — Đăng Bài Viết Mới

## Truy cập CMS

Vào **`https://trantamcapital.vercel.app/admin`**

---

## Đăng nhập

1. Click **Login with GitHub**
2. Cửa sổ hiện ra yêu cầu nhập **GitHub Personal Access Token**

### Tạo token (làm 1 lần)

1. Vào **GitHub.com** → Click avatar góc phải → **Settings**
2. Kéo xuống cuối sidebar trái → **Developer settings**
3. Click **Personal access tokens** → **Tokens (classic)**
4. Click **Generate new token** → **Generate new token (classic)**
5. Điền:
   - **Note**: `TrantamCapital CMS`
   - **Expiration**: chọn **No expiration**
   - **Scopes**: tick **`repo`** (Full control of private repositories)
6. Kéo xuống cuối → Click **Generate token**
7. **Copy token** (dạng `ghp_...`) — Sau đó paste vào cửa sổ CMS
8. Click **OK** → vào được giao diện CMS

> Giữ token an toàn, không chia sẻ với ai. Nếu mất token, tạo cái mới.

---

## Viết bài mới

1. Trong mục **News Articles**, click **New Article**
2. Điền các trường:

| Trường | Mô tả | Ví dụ |
|--------|-------|-------|
| **Title** | Tiêu đề bài viết | Bitcoin Surges Past $100K |
| **Publish Date** | Ngày đăng | 2026-05-21 |
| **Category** | Chọn danh mục | Cryptocurrency / Forex / Binary Options / Markets |
| **Author** | Tác giả | TrantamCapital (mặc định) |
| **Image** | Ảnh đại diện (không bắt buộc) | Kéo thả hoặc upload |
| **Excerpt** | Mô tả ngắn, 1-2 câu | Bitcoin has reached a new all-time high... |
| **Body** | Nội dung chính — viết bằng Markdown | Xem hướng dẫn Markdown bên dưới |

---

## Viết nội dung bằng Markdown

Body dùng định dạng Markdown:

```
# Tiêu đề lớn
## Tiêu đề phụ

**Chữ đậm**
*Chữ nghiêng*

- Danh sách bullet
- Mục thứ hai

1. Danh sách số
2. Mục thứ hai

[Link text](https://example.com)

> Trích dẫn
```

---

## Xuất bản

1. Click **Publish** (hoặc **Save** để lưu nháp)
2. Đợi ~1-2 phút
3. Vào **`https://trantamcapital.vercel.app/news`** kiểm tra bài viết mới

> CMS tự động commit file lên GitHub, Vercel phát hiện thay đổi và build lại.

---

## Chỉnh sửa / Xóa bài

- Vào mục **News Articles** → Chọn bài muốn sửa
- Click **Edit** → Sửa nội dung → **Publish**
- Hoặc click **Delete** để xóa

---

## Lưu ý

- Bài viết mới nhất sẽ hiện trên **trang chủ** mục Latest News
- Khi có nhiều bài, phân trang tự động hoạt động
- Ảnh upload sẽ được lưu tại thư mục `public/images/uploads/` trên GitHub
