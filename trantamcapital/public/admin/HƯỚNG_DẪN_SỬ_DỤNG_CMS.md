# Hướng Dẫn Sử Dụng Decap CMS — Đăng Bài Viết Mới

## Truy cập CMS

Vào **`https://trantamcapital.vercel.app/admin`**

---

## Đăng nhập

1. Click **Login with GitHub**
2. Trình duyệt chuyển sang GitHub → Click **Authorize** (nếu được hỏi)
3. Tự động quay lại giao diện CMS

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
