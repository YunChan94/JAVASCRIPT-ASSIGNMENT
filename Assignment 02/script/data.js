"use strict";
// Selector
const importBtn = document.getElementById("import-btn");
const exportBtn = document.getElementById("export-btn");
const fileInput = document.getElementById("input-file");

////////////////  FUNCTION   ////////////////////////
// lưu dữ liệu xuống file
function saveStaticDataToFile() {
  // Tạo biến lưu dữ liệu xuống file
  const blob = new Blob([JSON.stringify(getFromStorage("petArr"), null, 4)], {
    type: "json",
  });
  // Lưu file
  saveAs(blob, "petArr.txt");
}

////////////////  EVENT   ////////////////////////
// Event nút export
exportBtn.addEventListener("click", saveStaticDataToFile);

// Event nút import
importBtn.addEventListener("click", function () {
  // Xác nhận đã có chọn tập tin chưa
  if (!fileInput.value) {
    alert("Please choose file!");
  } else {
    const file = fileInput.files[0];
    // Tạo File reader
    const reader = new FileReader();
    // Sự kiện load dữ liệu từ file lên
    reader.addEventListener("load", function () {
      // Lưu dữ liêu vào localstorage
      saveToStorage("petArr", JSON.parse(reader.result));
      // Thông báo import thành công
      alert("Import success!😊");
      // }
    });
    // reset file input
    fileInput.value = "";
  }
  // Đọc file
  if (file) {
    reader.readAsText(file);
  }
});
