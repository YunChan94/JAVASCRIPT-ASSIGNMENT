"use strict";
if (currentUser) {
  // Selector
  const pageSizeInput = document.getElementById("input-page-size");
  const categoryInput = document.getElementById("input-category");
  const btnSetting = document.getElementById("btn-submit");
  ////////////////  FUNTION   ////////////////////////
  // Kiểm tra input của người dùng
  function validate() {
    let isValidate = true;
    if (Number.isNaN(Number.parseInt(pageSizeInput.value))) {
      alert("Input is not valid!");
      isValidate = false;
    }
    if (categoryInput.value === "General") {
      alert("Please choose a category!");
      isValidate = false;
    }
    return validate;
  }
  ////////////////  EVENT   ////////////////////////
  btnSetting.addEventListener("click", function () {
    if (validate()) {
      //Cập nhật giá trị vào currentUser
      currentUser.pagesize = Number.parseInt(pageSizeInput.value);
      currentUser.category = categoryInput.value;
      saveToStorage("currentUser", currentUser);
      // Cập nhật vào userArr
      // Tìm vị trí của currentUser trong userArr
      const index = userArr.findIndex(
        (user) => user.username === currentUser.username
      );
      userArr[index] = currentUser;
      saveToStorage("userArr", userArr);
      // reset form input và thông báo cài đặt thành công
      alert("Setting successful!");
      categoryInput.value = "General";
    }
  });
} else {
  alert("You need log in to setting!");
  window.location.href = "../index.html";
}
