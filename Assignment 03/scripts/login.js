"use strict";
// Selector
const usernameInput = document.getElementById("input-username");
const passwordInput = document.getElementById("input-password");
const btnLogin = document.getElementById("btn-submit");

////////////////  EVENT   ////////////////////////
// Event nút login
btnLogin.addEventListener("click", function () {
  // Kiểm tra dữ liệu nhập
  let isValidate = true;
  if (usernameInput.value.trim() === "" || passwordInput.value.trim() === "") {
    alert("Please type username/password!⚠");
    isValidate = false;
  }
  if (isValidate) {
    // Tìm user đã có trong userArr hay chưa?
    currentUser = userArr.find((user) => user.username === usernameInput.value);
    if (currentUser === undefined) {
      // Không tìm thấy user
      alert("User account is unavailable!🤷‍♂️");
    } else {
      // Nếu tìm thấy user
      if (currentUser?.password === passwordInput.value) {
        //lưu thông tin người dùng hiện tại xuống dưới LocalStorage
        saveToStorage("currentUser", currentUser);
        //Chuyển về trang Home
        window.location.href = "../index.html";
      }
    }
  }
});
