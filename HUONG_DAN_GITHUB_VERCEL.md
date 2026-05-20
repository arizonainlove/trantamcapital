# HƯỚNG DẪN: TẠO GITHUB REPO & DEPLOY LÊN VERCEL

> Dành cho người chưa biết gì về Git/GitHub

---

## MỤC LỤC

1. [Tạo tài khoản GitHub](#1-tạo-tài-khoản-github)
2. [Cài đặt Git](#2-cài-đặt-git)
3. [Tạo Repository trên GitHub](#3-tạo-repository-trên-github)
4. [Kết nối Git với dự án local](#4-kết-nối-git-với-dự-án-local)
5. [Push code lên GitHub](#5-push-code-lên-github)
6. [Tạo tài khoản Vercel](#6-tạo-tài-khoản-vercel)
7. [Deploy website lên Vercel](#7-deploy-website-lên-vercel)
8. [Cập nhật code sau này](#8-cập-nhật-code-sau-này)

---

## 1. Tạo tài khoản GitHub

1. Mở trình duyệt, vào **https://github.com/**
2. Click nút **Sign up** (góc phải trên)
3. Điền thông tin:
   - **Email**: email của bạn
   - **Password**: mật khẩu mạnh (tôi khuyên dùng **1Password** hoặc **Bitwarden** để quản lý)
   - **Username**: chọn 1 tên, VD: `yourname` hoặc `trantamcapital`
4. Verify email (GitHub gửi mã về email)
5. Chọn **Free** plan

> ✅ Xong! Giờ bạn đã có tài khoản GitHub.

---

## 2. Cài đặt Git

Git là công cụ để đẩy code từ máy tính lên GitHub.

### Windows

1. Vào **https://git-scm.com/downloads**
2. Tải bản cho Windows, chạy file cài đặt
3. Cứ nhấn **Next → Next → Next → Install**
4. Sau khi cài xong, mở **Command Prompt** (CMD) hoặc **PowerShell**, gõ:
   ```
   git --version
   ```
   Nếu hiện `git version 2.x.x` là thành công.

### Cấu hình Git lần đầu

Mở **Terminal** (CMD/PowerShell), gõ từng dòng sau (Enter sau mỗi dòng):

```bash
git config --global user.name "Tên của bạn"
git config --global user.email "email@của bạn"
```

VD:
```bash
git config --global user.name "Nguyen Van A"
git config --global user.email "nguyenvana@gmail.com"
```

---

## 3. Tạo Repository trên GitHub

Repository (repo) = thư mục chứa code trên GitHub.

1. Đăng nhập **github.com**
2. Click nút **+** (góc phải trên) → **New repository**
3. Điền thông tin:
   - **Repository name**: `trantamcapital` (quan trọng: đặt đúng tên này)
   - **Description**: (tuỳ chọn) "TrantamCapital website"
   - **Public** — chọn Public (để Vercel deploy được, bản free)
   - **README**: để trống (không tick)
   - **.gitignore**: để trống
   - Click **Create repository**
4. Màn hình tiếp theo sẽ hiện ra các dòng lệnh — **đừng đóng**, để đó dùng ở bước 4.

> ✅ Xong! Giờ bạn đã có kho chứa code trên GitHub.

---

## 4. Kết nối Git với dự án local

Mở **Terminal** (CMD/PowerShell), gõ từng lệnh sau:

### Bước 4.1: Di chuyển vào thư mục dự án

```bash
cd C:\CodeProjects\trantamcapital
```

### Bước 4.2: Khởi tạo Git

```bash
git init
```

### Bước 4.3: Thêm toàn bộ code vào Git

```bash
git add .
```

> Giải thích: dấu `.` có nghĩa là "thêm tất cả file trong thư mục này"

### Bước 4.4: Tạo commit đầu tiên

```bash
git commit -m "Initial commit - TrantamCapital website"
```

> Giải thích: commit = chụp ảnh code ở thời điểm hiện tại

### Bước 4.5: Đổi tên nhánh chính thành main

```bash
git branch -M main
```

### Bước 4.6: Kết nối với GitHub repo

Quay lại GitHub (màn hình còn mở ở bước 3). Copy dòng lệnh tương tự như sau:

```bash
git remote add origin https://github.com/YOUR_USERNAME/trantamcapital.git
```

Thay `YOUR_USERNAME` bằng username GitHub thật của bạn.

> Nếu bạn copy sai, có thể sửa lại bằng: `git remote set-url origin https://github.com/USERNAME/trantamcapital.git`

### Bước 4.7: Push code lên GitHub

```bash
git push -u origin main
```

> Lần đầu push sẽ yêu cầu đăng nhập GitHub. Cửa sổ trình duyệt sẽ hiện ra → click **Authorize** hoặc **Sign in**.

### Kiểm tra

Quay lại **github.com/yourname/trantamcapital** — bạn sẽ thấy code đã được đẩy lên.

> ✅ Xong! Code đã trên GitHub.

---

## 5. Tạo tài khoản Vercel

Vercel là nơi host website (miễn phí).

1. Vào **https://vercel.com/**
2. Click **Sign Up** (góc phải trên)
3. Chọn **Continue with GitHub** — đây là cách nhanh nhất
4. Nếu được hỏi, click **Authorize** để Vercel kết nối với GitHub của bạn
5. Làm theo hướng dẫn, chọn **Hobby** (free)

> ✅ Xong! Giờ bạn đã có tài khoản Vercel.

---

## 6. Deploy website lên Vercel

### Cách 1: Nhanh — Deploy từ GitHub (khuyên dùng)

1. Vào **https://vercel.com/dashboard**
2. Click **Add New...** → **Project**
3. Tìm và chọn repository **trantamcapital** (click **Import**)
4. Màn hình Configure Project:
   - **Framework Preset**: Vercel tự động nhận là **Next.js** (không cần sửa)
   - **Root Directory**: để mặc định
   - **Build and Output Settings**: không cần sửa
   - **Environment Variables**: không cần thêm (dự án này chưa dùng)
5. Click **Deploy**
6. Chờ khoảng **2-3 phút**, Vercel sẽ build và deploy
7. Khi xong, bạn sẽ thấy màn hình **Congratulations!** và link website:
   ```
   https://trantamcapital.vercel.app
   ```
8. Click link đó — website của bạn đã live!

### Cách 2: Nhanh hơn — Deploy từ CLI

Nếu bạn thích dùng terminal:

```bash
npm i -g vercel
vercel
```

Làm theo hướng dẫn trong terminal. Xong là có link.

> ✅ Xong! Website đã online.

---

## 7. Tùy chỉnh domain (tuỳ chọn — khi muốn)

Nếu bạn đã mua domain (VD: trantamcapital.com):

1. Vào **https://vercel.com/dashboard**
2. Click project **trantamcapital**
3. Vào tab **Settings** → **Domains**
4. Nhập tên miền: `trantamcapital.com`
5. Làm theo hướng dẫn trỏ DNS:
   - Vào trang quản lý domain (Namecheap, GoDaddy...)
   - Thay đổi Nameservers hoặc thêm CNAME record trỏ đến `cname.vercel-dns.com`
6. Đợi 5-30 phút, website sẽ chạy trên domain của bạn

---

## 8. Cập nhật code sau này

Khi bạn muốn thay đổi nội dung website:

### Bước 1: Mở terminal

```bash
cd C:\CodeProjects\trantamcapital
```

### Bước 2: Xem những file đã sửa

```bash
git status
```

### Bước 3: Thêm file đã sửa vào Git

```bash
git add .
```

### Bước 4: Commit

```bash
git commit -m "Mô tả ngắn gọn thay đổi"
```

VD: `git commit -m "Update news section - add new article"`

### Bước 5: Push lên GitHub

```bash
git push
```

> Vercel tự động phát hiện code mới và build lại (khoảng 1-2 phút). Website tự động cập nhật.

---

## TÓM TẮT — Các lệnh quan trọng

```bash
# Lần đầu (chỉ làm 1 lần)
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/trantamcapital.git
git push -u origin main

# Cập nhật code mỗi lần sửa
git add .
git commit -m "Mô tả thay đổi"
git push
```

## LƯU Ý

- **Tên repo phải là `trantamcapital`** — để trùng với tên thư mục dự án
- **Repo phải là Public** — Vercel bản free không deploy được private repo
- Lần đầu push sẽ yêu cầu đăng nhập GitHub — làm theo hướng dẫn
- Mỗi lần `git push` là Vercel tự động deploy lại — không cần làm gì thêm
