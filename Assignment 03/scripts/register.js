"use strict";
// Selector
const firstNameInput = document.getElementById("input-firstname");
const lastNameInput = document.getElementById("input-lastname");
const usernameInput = document.getElementById("input-username");
const passwordInput = document.getElementById("input-password");
const confirmInput = document.getElementById("input-password-confirm");
const btnRegister = document.getElementById("btn-submit");

// Tạo class dung
////////////////  FUNCTION   ////////////////////////
// Kiểm tra dữ liệu nhập
function validateData(data) {
  // Không có trường nào bị nhập thiếu dữ liệu.
  let isValidate = true;
  if (data.firstname.trim() === "") {
    alert("Need fistname!⛔");
    isValidate = false;
  }
  if (data.lastname.trim() === "") {
    alert("Need lastname!⛔");
    isValidate = false;
  }
  // Username không được trùng với Username của các người dùng trước đó.
  for (let i = 0; i < userArr.length; i++) {
    if (data.username === userArr[i].username) {
      alert("This username must be unique!⛔");
      isValidate = false;
    }
  }
  // Password và Confirm Password phải giống nhau.
  if (data.password !== data.confirmPass) {
    alert("Confim password again!⛔");
    isValidate = false;
  }
  // Password phải có nhiều hơn 8 ký tự.
  if (data.password.length <= 8) {
    alert("Password must have over 8 letters!⛔");
    isValidate = false;
  }
  return isValidate;
}

// Hàm để chuyển từ JS Object sang Class Instance
function parseUser(userData) {
  const user = new User(
    userData.firstname,
    userData.lastname,
    userData.username,
    userData.password
  );

  return user;
}
////////////////  EVENT   ////////////////////////
btnRegister.addEventListener("click", function () {
  //Lấy dữ liệu nhập từ form
  // Khởi tạo user mới với các dữ liệu hợp lệ
  let data = new User(
    firstNameInput.value,
    lastNameInput.value,
    usernameInput.value,
    passwordInput.value,
    confirmInput.value
  );

  //Gọi hàm validate để kiểm tra form hợp lệ
  const validate = validateData(data);
  if (validate) {
    //Thêm user vào mảng
    userArr.push(data);
    //lưu mảng vào localStorage
    saveToStorage("userArr", userArr);
    // Chuyển trang đến màn hình login
    window.location.href = "../pages/login.html";
  }
});
