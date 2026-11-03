// ==================== CÂU 3 - BẮT ĐẦU ====================

// 1. Khai báo mảng object dữ liệu tĩnh (danh sách kỹ năng)
const danhSachKyNang = [
  { stt: 1, tenKyNang: "Thiết kế cấu trúc", congNghe: "HTML5", mucDo: "Tốt" },
  {
    stt: 2,
    tenKyNang: "Định dạng giao diện",
    congNghe: "CSS3 / SCSS",
    mucDo: "Khá",
  },
  {
    stt: 3,
    tenKyNang: "Lập trình tương tác",
    congNghe: "JavaScript",
    mucDo: "Cơ bản",
  },
];

// 2. Viết hàm arrow function kết hợp map() để render danh sách kỹ năng ra DOM
const renderSkills = (skills) => {
  const tbody = document.getElementById("skills-tbody");
  if (!tbody) return;

  tbody.innerHTML = "";
  skills.map((skill) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${skill.stt}</td>
      <td>${skill.tenKyNang}</td>
      <td>${skill.congNghe}</td>
      <td>${skill.mucDo}</td>
    `;
    tbody.appendChild(tr);
  });
};

// 3. Xử lý sự kiện khi DOM đã tải xong
document.addEventListener("DOMContentLoaded", () => {
  // Hiển thị danh sách kỹ năng lên bảng
  renderSkills(danhSachKyNang);

  // Xử lý sự kiện submit form bằng addEventListener và validate bằng JavaScript
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Chặn form tự động reload trang

      let isValid = true;

      // Lấy giá trị các ô input
      const fullname = document.getElementById("fullname").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const dob = document.getElementById("dob").value.trim();

      // Lấy các phần tử hiển thị lỗi và thông báo thành công
      const errFullname = document.getElementById("error-fullname");
      const errEmail = document.getElementById("error-email");
      const errPhone = document.getElementById("error-phone");
      const errDob = document.getElementById("error-dob");
      const successMsg = document.getElementById("form-success-msg");

      // Reset nội dung thông báo cũ
      errFullname.textContent = "";
      errEmail.textContent = "";
      errPhone.textContent = "";
      errDob.textContent = "";
      successMsg.textContent = "";

      // Validate Họ tên: không được trống, tối thiểu 2 ký tự
      if (fullname === "") {
        errFullname.textContent = "Họ và tên không được để trống.";
        isValid = false;
      } else if (fullname.length < 2) {
        errFullname.textContent = "Họ và tên phải có ít nhất 2 ký tự.";
        isValid = false;
      }

      // Validate Email: kiểm tra định dạng cơ bản chứa '@' và '.'
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email === "") {
        errEmail.textContent = "Email không được để trống.";
        isValid = false;
      } else if (!emailRegex.test(email)) {
        errEmail.textContent =
          "Email không đúng định dạng (ví dụ: name@example.com).";
        isValid = false;
      }

      // Validate Số điện thoại: đúng 10 hoặc 11 chữ số
      const phoneRegex = /^[0-9]{10,11}$/;
      if (phone === "") {
        errPhone.textContent = "Số điện thoại không được để trống.";
        isValid = false;
      } else if (!phoneRegex.test(phone)) {
        errPhone.textContent =
          "Số điện thoại phải bao gồm đúng 10 hoặc 11 chữ số.";
        isValid = false;
      }

      // Validate Ngày sinh: không được để trống
      if (dob === "") {
        errDob.textContent = "Vui lòng chọn ngày sinh.";
        isValid = false;
      }

      // Nếu tất cả dữ liệu hợp lệ
      if (isValid) {
        successMsg.textContent = "Đăng ký thông tin thành công!";
        console.log("Dữ liệu form hợp lệ:", { fullname, email, phone, dob });
      }
    });
  }
});

// ==================== CÂU 3 - KẾT THÚC ====================
