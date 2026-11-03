// ==================== CÂU 5 - BẮT ĐẦU ====================

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

// 2. Hàm arrow function render danh sách kỹ năng ra DOM
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

// 3. Hàm bất đồng bộ fetch() kết hợp async/await và try/catch để đọc dữ liệu dự án từ js/data.json
const loadProjects = async () => {
  const projectsList = document.getElementById("projects-list");
  const errorDiv = document.getElementById("projects-error");
  if (!projectsList) return;

  try {
    // Gọi fetch đọc file data.json (Yêu cầu bắt buộc chạy qua Live Server để tránh lỗi CORS)
    const response = await fetch("js/data.json");
    if (!response.ok) {
      throw new Error(
        `Không thể tải dữ liệu dự án (Mã lỗi: ${response.status})`,
      );
    }
    const projects = await response.json();

    projectsList.innerHTML = "";
    projects.forEach((project) => {
      const card = document.createElement("div");
      card.style.cssText =
        "background: rgba(0,0,0,0.02); border: 1px solid #cbd5e1; border-radius: 6px; padding: 16px;";
      card.innerHTML = `
        <h3 style="color: #2563eb; margin-bottom: 8px; font-size: 1.1rem;">${project.ten}</h3>
        <p style="margin-bottom: 6px;"><strong>Công nghệ:</strong> ${project.congNghe}</p>
        <p style="font-size: 0.9rem; color: #64748b;">Năm hoàn thành: ${project.namHoanThanh}</p>
      `;
      projectsList.appendChild(card);
    });
  } catch (error) {
    // Xử lý lỗi: log ra console và hiển thị thông báo phù hợp cho người dùng
    console.error("Lỗi khi tải dự án:", error);
    if (errorDiv) {
      errorDiv.textContent = `Lỗi tải dữ liệu dự án: ${error.message}. Vui lòng kiểm tra lại đường dẫn file hoặc kết nối Live Server.`;
    }
  }
};

// 4. Xử lý LocalStorage cho Dark Mode
const initDarkMode = () => {
  const toggleBtn = document.getElementById("dark-mode-toggle");
  if (!toggleBtn) return;

  // Kiểm tra trạng thái đã lưu trong LocalStorage khi tải lại trang
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "Light Mode";
  }

  // Lắng nghe sự kiện click nút chuyển đổi chế độ
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDarkMode = document.body.classList.contains("dark-mode");

    // Lưu trạng thái vào LocalStorage
    if (isDarkMode) {
      localStorage.setItem("theme", "dark");
      toggleBtn.textContent = "Light Mode";
    } else {
      localStorage.setItem("theme", "light");
      toggleBtn.textContent = "Dark Mode";
    }
  });
};

// 5. Xử lý sự kiện khi DOM đã tải xong
document.addEventListener("DOMContentLoaded", () => {
  // Render kỹ năng
  renderSkills(danhSachKyNang);

  // Tải danh sách dự án bất đồng bộ (Phần 4)
  loadProjects();

  // Khởi tạo tính năng Dark Mode với LocalStorage (Phần 4)
  initDarkMode();

  // Xử lý form liên hệ với addEventListener và validate
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      let isValid = true;
      const fullname = document.getElementById("fullname").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const dob = document.getElementById("dob").value.trim();

      const errFullname = document.getElementById("error-fullname");
      const errEmail = document.getElementById("error-email");
      const errPhone = document.getElementById("error-phone");
      const errDob = document.getElementById("error-dob");
      const successMsg = document.getElementById("form-success-msg");

      errFullname.textContent = "";
      errEmail.textContent = "";
      errPhone.textContent = "";
      errDob.textContent = "";
      successMsg.textContent = "";

      if (fullname === "") {
        errFullname.textContent = "Họ và tên không được để trống.";
        isValid = false;
      } else if (fullname.length < 2) {
        errFullname.textContent = "Họ và tên phải có ít nhất 2 ký tự.";
        isValid = false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email === "") {
        errEmail.textContent = "Email không được để trống.";
        isValid = false;
      } else if (!emailRegex.test(email)) {
        errEmail.textContent =
          "Email không đúng định dạng (ví dụ: name@example.com).";
        isValid = false;
      }

      const phoneRegex = /^[0-9]{10,11}$/;
      if (phone === "") {
        errPhone.textContent = "Số điện thoại không được để trống.";
        isValid = false;
      } else if (!phoneRegex.test(phone)) {
        errPhone.textContent =
          "Số điện thoại phải bao gồm đúng 10 hoặc 11 chữ số.";
        isValid = false;
      }

      if (dob === "") {
        errDob.textContent = "Vui lòng chọn ngày sinh.";
        isValid = false;
      }

      if (isValid) {
        successMsg.textContent = "Đăng ký thông tin thành công!";
        console.log("Dữ liệu form hợp lệ:", { fullname, email, phone, dob });
      }
    });
  }
});

// ==================== CÂU 5 - KẾT THÚC ====================
