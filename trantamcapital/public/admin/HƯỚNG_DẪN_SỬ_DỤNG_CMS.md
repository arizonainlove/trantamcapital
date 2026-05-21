# Hướng Dẫn Sử Dụng — Quản Lý Bài Viết

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

## Xem danh sách bài viết

Sau khi đăng nhập, bạn sẽ thấy danh sách tất cả bài viết dạng bảng:
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
| **Image URL** | ❌ Không | Link ảnh đại diện (nếu có) |
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

## Cách hoạt động

- Bài viết được lưu dưới dạng file Markdown (`.md`) trong thư mục `trantamcapital/src/content/news/` trên GitHub
- Mỗi bài viết là một file riêng, tên file tự động tạo từ tiêu đề
- Khi có thay đổi, Vercel phát hiện và tự động build lại website
- Bài viết mới nhất sẽ hiện trên trang chủ và trang tin tức

---

## Xử lý lỗi thường gặp

| Lỗi | Cách xử lý |
|-----|-----------|
| "Popup was blocked" | Cho phép popup cho trang web này |
| "Session expired" | Login lại |
| "Failed to load articles" | Kiểm tra kết nối internet, thử Retry |
| Không thấy bài viết mới | Đợi 1-2 phút cho Vercel build xong |
