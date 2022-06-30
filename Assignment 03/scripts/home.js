"use strict";
// Selector
const loginModal = document.getElementById("login-modal");
const welcomeModal = document.getElementById("main-content");
const welcomeMess = document.getElementById("welcome-message");

// Check người dùng đã đăng nhập hay chưa
const currentUser = getFromStorage("currentUser");
if (currentUser) {
  // Nếu người dùng đã đăng nhập
  loginModal.style.display = "none";
  // Hiển thị thông điệp chào mừng
  welcomeMess.textContent = `Welcome, ${currentUser.firstname}`;
} else {
  // Nếu người dùng chưa đăng nhập
  welcomeModal.style.display = "none";
}
