"use strict";
if (currentUser) {
} else {
  // Thông báo cho người dùng cần đăng nhập vào
  alert("You need log in to the News App!😁");
  // Trở về trang login
  window.location.href = "../index.html";
}
