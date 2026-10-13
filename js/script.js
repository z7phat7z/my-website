const hoTen = "Vũ Tấn Phát";
const namSinh = 2007;
const laSinhVien = true;
let diemTB = 8.5;

console.log(
  `Họ tên: ${hoTen} - Năm sinh: ${namSinh} - Là SV: ${laSinhVien} - Điểm TB: ${diemTB}`,
);
console.log("Kiểu của hoTen:", typeof hoTen);
console.log("Kiểu của namSinh:", typeof namSinh);
console.log("Kiểu của laSinhVien:", typeof laSinhVien);
console.log("Kiểu của diemTB:", typeof diemTB);

let nhietDoC = 30;
let nhietDoF = (nhietDoC * 9) / 5 + 32;
console.log(`Chuyển đổi nhiệt độ: ${nhietDoC}°C = ${nhietDoF}°F`);

let soBatKy = 15;
let chiaHetCho3 = soBatKy % 3 === 0;
console.log(`Số ${soBatKy} có chia hết cho 3 không? Kết quả: ${chiaHetCho3}`);

console.log("Kiểm chứng '5'+3:", "5" + 3);
console.log("Kiểm chứng '5'-3:", "5" - 3);
console.log("Kiểm chứng 5==='5':", 5 === "5");
console.log("Kiểm chứng true+true:", true + true);
console.log("Kiểm chứng typeof null:", typeof null);

let giaTri1 = "100";
let giaTri2 = 500;
let giaTri3 = 0;

console.log(
  `Ép kiểu tường minh String "${giaTri1}" sang Number:`,
  Number(giaTri1),
);
console.log(
  `Ép kiểu tường minh Number ${giaTri2} sang String:`,
  String(giaTri2),
);
console.log(
  `Ép kiểu tường minh Number ${giaTri3} sang Boolean:`,
  Boolean(giaTri3),
);

function phanLoaiDiem(diem) {
  if (diem >= 8) {
    return "Giỏi";
  } else if (diem >= 6.5) {
    return "Khá";
  } else if (diem >= 5) {
    return "Trung bình";
  } else {
    return "Yếu";
  }
}

let danhSachDiem = [9, 7.5, 6, 4.5, 8.5];
console.log("--- Bảng điểm sinh viên ---");
for (let i = 0; i < danhSachDiem.length; i++) {
  let diem = danhSachDiem[i];
  let hocLuc = phanLoaiDiem(diem);
  console.log(`Điểm: ${diem} - Học lực: ${hocLuc}`);
}

let soN = 7;
console.log(`--- Bảng cửu chương ${soN} ---`);
for (let i = 1; i <= 10; i++) {
  console.log(`${soN} x ${i} = ${soN * i}`);
}

console.log("--- Số nguyên tố từ 2 đến 30 ---");
for (let n = 2; n <= 30; n++) {
  let laNguyenTo = true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      laNguyenTo = false;
      break;
    }
  }
  if (laNguyenTo) {
    console.log(n);
  }
}

function tinhGiaiThua(n) {
  let ketQua = 1;
  for (let i = 1; i <= n; i++) {
    ketQua *= i;
  }
  return ketQua;
}

const laSoChan = function (n) {
  return n % 2 === 0;
};

const timSoLonNhat = (mang) => {
  let max = mang[0];
  for (let i = 1; i < mang.length; i++) {
    if (mang[i] > max) {
      max = mang[i];
    }
  }
  return max;
};

console.log("Tính giai thừa của 5 là:", tinhGiaiThua(5));
console.log("Số 10 có phải là số chẵn không?", laSoChan(10));
console.log(
  "Số lớn nhất trong mảng [1, 9, 4, 7] là:",
  timSoLonNhat([1, 9, 4, 7]),
);

console.log("Kiểm chứng hoisting đoạn code 'console.log(a); var a = 10;' :");
console.log(a);
var a = 10;

let danhSachSinhVien = [
  { hoTen: "Nguyễn Văn A", diem: 8.5 },
  { hoTen: "Trần Thị B", diem: 7.0 },
  { hoTen: "Lê Văn C", diem: 5.5 },
  { hoTen: "Phạm Thị D", diem: 4.0 },
  { hoTen: "Hoàng Văn E", diem: 9.5 },
];

function phanLoaiDiemSV(diem) {
  if (diem >= 8) {
    return "Giỏi";
  } else if (diem >= 6.5) {
    return "Khá";
  } else if (diem >= 5) {
    return "Trung bình";
  } else {
    return "Yếu";
  }
}

console.log("--- Phân loại điểm lớp học ---");
for (let sv of danhSachSinhVien) {
  let hocLuc = phanLoaiDiemSV(sv.diem);
  console.log(`${sv.hoTen} - ${sv.diem} - ${hocLuc}`);
}

let tongDiem = 0;
for (let sv of danhSachSinhVien) {
  tongDiem += sv.diem;
}
let diemTrungBinhLop = tongDiem / danhSachSinhVien.length;
console.log(`Điểm trung bình của cả lớp: ${diemTrungBinhLop.toFixed(2)}`);

function timSinhVienDiemCao(danhSach) {
  let svDiemCao = danhSach[0];
  for (let sv of danhSach) {
    if (sv.diem > svDiemCao.diem) {
      svDiemCao = sv;
    }
  }
  return svDiemCao;
}

let sinhVienXuatSac = timSinhVienDiemCao(danhSachSinhVien);
console.log(
  `Sinh viên điểm cao nhất: ${sinhVienXuatSac.hoTen} với ${sinhVienXuatSac.diem} điểm.`,
);

// ==================== CÂU 6 - BẮT ĐẦU ====================
let thongKeHocLuc = {
  Giỏi: 0,
  Khá: 0,
  "Trung bình": 0,
  Yếu: 0,
};

for (let sv of danhSachSinhVien) {
  let hocLuc = phanLoaiDiemSV(sv.diem);
  thongKeHocLuc[hocLuc]++;
}

console.log("--- Thống kê học lực lớp ---");
console.log(`Giỏi: ${thongKeHocLuc["Giỏi"]} sinh viên`);
console.log(`Khá: ${thongKeHocLuc["Khá"]} sinh viên`);
console.log(`Trung bình: ${thongKeHocLuc["Trung bình"]} sinh viên`);
console.log(`Yếu: ${thongKeHocLuc["Yếu"]} sinh viên`);
// ==================== CÂU 6 - KẾT THÚC ====================
