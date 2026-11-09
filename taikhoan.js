const darkMode = document.getElementById("darkMode");

darkMode.addEventListener("change", function () {
  document.body.classList.toggle("dark", darkMode.checked);
});

const notification = document.getElementById("notification");

notification.addEventListener("change", function () {
  if (notification.checked) {
    alert("Đã bật thông báo!");
  } else {
    alert("Đã tắt thông báo!");
  }
});

function login() {
  const user = {
    username: document.getElementById("username").value,
    role: document.getElementById("role").value,
    food: document.getElementById("food").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    address: document.getElementById("address").value,
  };

  if (user.username === "") {
    alert("Vui lòng nhập tên người dùng!");
    return;
  }

  localStorage.setItem("userAccount", JSON.stringify(user));

  document.getElementById("message").textContent =
    "Đã lưu thông tin tài khoản!";

  alert("Đăng nhập thành công!");
}

function logout() {
  localStorage.removeItem("userAccount");

  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("role").value = "";
  document.getElementById("food").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("address").value = "";

  document.getElementById("message").textContent =
    "Đã đăng xuất và xóa thông tin đã lưu!";
}

window.onload = function () {
  const user = JSON.parse(localStorage.getItem("userAccount"));

  if (user) {
    document.getElementById("username").value = user.username;
    document.getElementById("role").value = user.role;
    document.getElementById("food").value = user.food;
    document.getElementById("phone").value = user.phone;
    document.getElementById("email").value = user.email;
    document.getElementById("address").value = user.address;
  }
};
