"use strict";

// Selector
const breedInput = document.getElementById("input-breed");
const typeInput = document.getElementById("input-type");
const submitBtn = document.getElementById("submit-btn");
const tableBodyEl = document.getElementById("tbody");

renderBreedTable(breedArr);
////////////////  FUNCTION   ////////////////////////
// Hiển thị danh sách Breed
function renderBreedTable(breedArr) {
  // Xóa nội dụng hiện có của bảng
  tableBodyEl.innerHTML = "";
  // Duyệt qua các phần tử trong breedArr
  breedArr.forEach(function (br, i) {
    const row = document.createElement("tr");
    row.innerHTML = `
                <td>${i + 1}</td>
                <td>${br.breed}</td>
                <td>${br.type}</td>
                <td>
                <button class="btn btn-danger" onclick="deleteBreed('${
                  br.breed
                }')">Delete</button>
                </td>
      `;
    tableBodyEl.appendChild(row);
  });
}
////////////
// Xóa Breed
function deleteBreed(breed) {
  const isDelete = confirm("Are you sure?");
  if (isDelete) {
    for (let i = 0; i < breedArr.length; i++) {
      if (breed === breedArr[i].breed) {
        breedArr.splice(i, 1);
        // Lưu dữ liệu vào Localstorage
        saveToStorage("breedArr", breedArr);
        // Hiển thị lại bảng
        renderBreedTable(breedArr);
      }
    }
  }
}
////////////
// Kiểm tra dữ liệu đã có chưa
function validateData(data) {
  let isValidate = true;
  // Nếu nhập vào chuỗi trống hoặc khoảng trắng
  if (data.breed.trim() === "") {
    alert("Please enter all informations!⛔");
    isValidate = false;
  }
  // Nếu chưa chọn type
  if (data.type === "Select Type") {
    alert("Please choose type!⛔");
    isValidate = false;
  }
  return isValidate;
}
////////////
// Xoá input
function clearInput() {
  breedInput.value = "";
  typeInput.value = "Select Type";
}
////////////////      EVENT     ////////////////////////
//  Submit
submitBtn.addEventListener("click", function () {
  let data = {
    breed: breedInput.value,
    type: typeInput.value,
  };
  // Validate dữ liệu
  const validate = validateData(data);
  if (validate) {
    // Thêm breed vào danh sách
    breedArr.push(data);
    // Lưu dữ liệu vào Localstorage
    saveToStorage("breedArr", breedArr);
    // Hiển thị danh sách
    renderBreedTable(breedArr);
    // Xóa các dữ liệu nhập trong Form Input
    clearInput();
  }
});

console.log(breedArr);
