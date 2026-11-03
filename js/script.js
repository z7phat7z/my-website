let hoTen = "Vũ Tấn Phát";
let namSinh = 2007;
let laSinhVien = true;

let tuoiHienTai = 2026 - namSinh;
console.log("Tuổi hiện tại của tôi là:", tuoiHienTai);

let kiemTraSinhVien = laSinhVien === true;
console.log("Kiểm tra laSinhVien === true:", kiemTraSinhVien);

console.log("Kiểu dữ liệu của hoTen:", typeof hoTen);
console.log("Kiểu dữ liệu của namSinh:", typeof namSinh);
console.log("Kiểu dữ liệu của laSinhVien:", typeof laSinhVien);

const truongHoc = "Đại học Văn Hiến";
console.log("Trường học:", truongHoc);

// Đã comment dòng lỗi cố tình ở bài trước để code bên dưới có thể chạy được
// truongHoc = "Đại học khác";

const phanLoaiDiem = (diem) => {
  if (diem >= 8) {
    return "Giỏi";
  } else if (diem >= 6.5) {
    return "Khá";
  } else if (diem >= 5) {
    return "Trung bình";
  } else {
    return "Yếu";
  }
};

let danhSachDiem = [9, -2, 4.5, -5, 7.5, 6, 8.5];

console.log("--- BẢNG PHÂN LOẠI ĐIỂM (ĐÃ BỎ QUA ĐIỂM ÂM) ---");
for (let i = 0; i < danhSachDiem.length; i++) {
  let diemHienTai = danhSachDiem[i];
  if (diemHienTai < 0) {
    continue;
  }

  let hocLuc = phanLoaiDiem(diemHienTai);
  console.log("Điểm: " + diemHienTai + " - Học lực: " + hocLuc);
}
