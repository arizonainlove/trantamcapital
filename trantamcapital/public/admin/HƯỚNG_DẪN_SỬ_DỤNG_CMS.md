# Hướng Dẫn Sử Dụng Decap CMS — Đăng Bài Viết Mới

## Truy cập CMS

Vào **`https://trantamcapital.vercel.app/admin`**

---

## Bước 1: Tạo GitHub OAuth App (làm 1 lần)

1. Vào **GitHub.com** → Click avatar góc phải → **Settings**
2. Kéo xuống cuối sidebar trái → **Developer settings**
3. Click **OAuth Apps** → **New OAuth App**
4. Điền:
   - **Application name**: `TrantamCapital CMS`
   - **Homepage URL**: `https://trantamcapital.vercel.app`
   - **Authorization callback URL**: `https://trantamcapital.vercel.app/api/auth`
5. Click **Register application**
6. Màn hình hiện ra:
   - **Client ID** → Copy giữ lại
   - **Client Secret** → Click **Generate a new client secret** → Copy giữ lại

---

## Bước 2: Thêm Client ID và Secret vào Vercel

1. Vào **https://vercel.com** → Dashboard → **trantamcapital**
2. Vào tab **Settings** → **Environment Variables**
3. Thêm 2 biến:
   - `GITHUB_CLIENT_ID` = Client ID vừa copy
   - `GITHUB_CLIENT_SECRET` = Client Secret vừa copy
4. **Add** → chọn **Production**
5. Sau đó vào **Deployments** → chọn deployment gần nhất → **Redeploy**
   (đợi ~2 phút cho deploy xong)

---

## Bước 3: Đăng nhập CMS

1. Vào **`https://trantamcapital.vercel.app/admin`**
2. Click **Login with GitHub**
3. Cửa sổ mới hiện ra → GitHub yêu cầu Authorize → Click **Authorize**
4. Tự động quay lại CMS — đã đăng nhập thành công

> Chỉ cần làm Bước 1 + 2 một lần duy nhất. Lần sau vào `/admin` → Login → Authorize là dùng được.

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
| **Body** | Nội dung chính — viết bằng Markdown | Xem hướng dẫn bên dưới |

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
