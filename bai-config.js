/* =====================================================================
   bai-config.js — CẤU HÌNH DÙNG CHUNG CHO TẤT CẢ CÁC BÀI HỌC (HSK5)
   =====================================================================
   File này là NƠI DUY NHẤT cần sửa mỗi khi thêm một bài học mới.
   Tất cả các file bai1.html, bai2.html, ... và index.html đều đọc
   dữ liệu từ đây (window.BAI_CONFIG).

   Cách thêm bài học mới (vd: thêm bài 2):
     1. Tạo file bai2.html (copy từ file bài gần nhất, sửa
        CURRENT_BAI = 2 và toàn bộ nội dung LESSON).
     2. Thêm số 2 vào mảng "available" bên dưới.
     3. Thêm tên bài vào "titles" bên dưới (nếu chưa có).

   "total": tổng số bài của giáo trình HSK标准教程5（上）= 18 bài.
   "titles": tên bài [Hán tự, tiếng Việt] — dùng cho trang chủ và
   sidebar. Bài nào chưa có tên thì để trống, trang chủ sẽ hiện
   "Đang soạn".
   ===================================================================== */
window.BAI_CONFIG = {
  total: 18,
  available: [1],
  titles: {
    1: ["爱的细节", "Những điều nhỏ nhặt trong tình yêu"]
  }
};
