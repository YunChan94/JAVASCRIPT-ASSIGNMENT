"use strict";
// Selector
const loginModal = document.getElementById("login-modal");
const welcomeModal = document.getElementById("main-content");
const welcomeMess = document.getElementById("welcome-message");
const btnLogout = document.getElementById("btn-logout");
// Check người dùng đã đăng nhập hay chưa
if (currentUser) {
  // Nếu người dùng đã đăng nhập
  loginModal.style.display = "none";
  // Hiển thị thông điệp chào mừng
  welcomeMess.textContent = `Welcome, ${currentUser.firstname}`;
} else {
  // Nếu người dùng chưa đăng nhập
  welcomeModal.style.display = "none";
}

////////////////  EVENT   ////////////////////////
// Event nút logout
btnLogout.addEventListener("click", function () {
  // Xóa User hiện tại ở Localstorage
  localStorage.removeItem("currentUser");
  // Đưa người dùng trở lại trang Login
  window.location.href = "./pages/login.html";
});
