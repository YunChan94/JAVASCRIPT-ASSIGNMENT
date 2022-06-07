"use strict";
// Selector
const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const ageInput = document.getElementById("input-age");
const typeInput = document.getElementById("input-type");
const weightInput = document.getElementById("input-weight");
const lengthInput = document.getElementById("input-length");
const colorInput = document.getElementById("input-color-1");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");
const submitBtn = document.getElementById("submit-btn");
const healthyBtn = document.getElementById("healthy-btn");
const deleteBtn = document.getElementById("btn-danger");

// Data mẫu
const data1 = {
  id: "P001",
  name: "Tom",
  age: 3,
  type: "Cat",
  weight: 5,
  length: 50,
  color: "#ff0000",
  breed: "Tabby",
  vaccinated: true,
  dewormed: true,
  sterilized: true,
  date: new Date(),
};
const data2 = {
  id: "P002",
  name: "Tyke",
  age: 5,
  type: "Dog",
  weight: 3,
  length: 40,
  color: "#008000",
  breed: "Mixed Breed",
  vaccinated: false,
  dewormed: false,
  sterilized: false,
  date: new Date(),
};
let petarr = [];
petarr.push(data1.id);
petarr.push(data2.id);

// Submit
submitBtn.addEventListener("click", function () {
  // Lấy input
  let data = {
    id: idInput.value,
    name: nameInput.value,
    age: parseInt(ageInput.value),
    type: typeInput.value,
    weight: parseInt(weightInput.value),
    length: parseInt(lengthInput.value),
    color: colorInput.value,
    breed: breedInput.value,
    vaccinated: vaccinatedInput.checked,
    dewormed: dewormedInput.checked,
    sterilized: sterilizedInput.checked,
    date: new Date(),
  };
  // Validate dữ liệu
  // console.log(data);
  const validate = validateData(data);
  // if (validate) {
  //   petArr.push(data);
  //   clearInput();
  //   renderTable(petArr);
  // }
  // Thêm thú cưng vào danh sách
  // Hiển thị danh sách thú cưng
  // Xóa các dữ liệu nhập trong Form Input
});
function validateData(data) {
  // //   Không có trường nào bị nhập thiếu dữ liệu.
  let isValidate = true;
  // Giá trị ID không được trùng với các thú cưng còn lại.
  if (data.id.trim() === "") {
    alert("ID must fill in!");
    isValidate = false;
  }
  for (let i = 0; i < petarr.length; i++) {
    if (data.id === petarr[i]) {
      alert("ID must unique!");
      isValidate = false;
      break;
    }
  }
  // Giá trị name không để trống
  if (data.name.trim() === "") {
    alert("Name must fill in!");
    isValidate = false;
  }
  // Trường Age chỉ được nhập giá trị trong khoảng 1 đến 15.
  if (isNaN(data.age) || data.age < 1 || data.age > 15) {
    alert("Age must be between 1 and 15!");
    isValidate = false;
  }
  // Trường Weight chỉ được nhập giá trị trong khoảng 1 đến 15.
  if (isNaN(data.weight) || data.weight < 1 || data.weight > 15) {
    alert("Weight must be between 1 and 15!");
    isValidate = false;
  }
  // Trường Length chỉ được nhập giá trị trong khoảng 1 đến 100.
  if (isNaN(data.length) || data.length < 1 || data.length > 100) {
    alert("Length must be between 1 and 100!");
    isValidate = false;
  }
  // Bắt buộc phải chọn giá trị cho trường Type.
  if (data.type === "Select Type") {
    alert("Please select Type!");
    isValidate = false;
  }
  // Bắt buộc phải chọn giá trị cho trường Breed.
  if (data.breed === "Select Breed") {
    alert("Please select Breed!");
    isValidate = false;
  }
  return isValidate;
}
