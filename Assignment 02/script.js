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
const tableBodyEl = document.getElementById("tbody");

renderTableData(petArr);
////////////////  FUNCTION   ////////////////////////
// Hiển thị danh sách thú cưng
function renderTableData(petArr) {
  // Xóa nội dụng hiện có của bảng
  tableBodyEl.innerHTML = "";

  // Duyệt qua các phần tử trong petArr
  for (let i = 0; i < petArr.length; i++) {
    const row = document.createElement("tr");
    row.innerHTML = `
                <th scope="row">${petArr[i].id}</th>
                <td>${petArr[i].name}</td>
                <td>${petArr[i].age}</td>
                <td>${petArr[i].type}</td>
                <td>${petArr[i].weight} kg</td>
                <td>${petArr[i].length} cm</td>
                <td>${petArr[i].breed}</td>
                <td>
                  <i class="bi bi-square-fill" 
                  style="color: ${petArr[i].color}"></i>
                </td>
                <td>
                  <i class="bi ${
                    petArr[i].vaccinated
                      ? "bi-check-circle-fill"
                      : "bi-x-circle-fill"
                  }"></i>
                </td>
                <td>
                  <i class="bi ${
                    petArr[i].dewormed
                      ? "bi-check-circle-fill"
                      : "bi-x-circle-fill"
                  }"></i>
                </td>
                <td>
                  <i class="bi ${
                    petArr[i].sterilized
                      ? "bi-check-circle-fill"
                      : "bi-x-circle-fill"
                  }"></i>
                  </td>
                <td>${petArr[i].date}</td>
                <td>
                <button class="btn btn-danger" onclick="deletePet('${
                  petArr[i].id
                }')">Delete</button>
                </td>
    `;
    tableBodyEl.appendChild(row);
  }
}

// Xoá thông tin thú cưng
function deletePet(petID) {
  const isDelete = confirm("Are you sure?");
  if (isDelete) {
    for (let i = 0; i < petArr.length; i++) {
      if (petID === petArr[i].id) {
        petArr.splice(i, 1);
        // Lưu dữ liệu vào Localstorage
        saveToStorage("petArr", petArr);
        // Hiển thị lại danh sách thú cưng
        renderTableData(petArr);
        break;
      }
    }
  }
}

// Kiểm tra dữ liệu nhập
function validateData(data) {
  // //   Không có trường nào bị nhập thiếu dữ liệu.
  let isValidate = true;
  // Giá trị ID không được trùng với các thú cưng còn lại.
  if (data.id.trim() === "") {
    alert("ID must fill in!");
    isValidate = false;
  }
  for (let i = 0; i < petArr.length; i++) {
    if (data.id === petArr[i].id) {
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

// Xóa dữ liệu nhập trên form
function clearInput() {
  idInput.value = "";
  nameInput.value = "";
  ageInput.value = "";
  typeInput.value = "Select type";
  weightInput.value = "";
  lengthInput.value = "";
  colorInput.value = "#000000";
  breedInput.value = "Select Breed";
  vaccinatedInput.checked = false;
  dewormedInput.checked = false;
  sterilizedInput.checked = false;
}

////////////////  EVENT   ////////////////////////
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
    date:
      new Date().getDate() +
      "/" +
      (new Date().getMonth() + 1) +
      "/" +
      new Date().getFullYear(),
  };

  // Validate dữ liệu
  const validate = validateData(data);
  if (validate) {
    // Thêm thú cưng vào danh sách
    petArr.push(data);
    // Lưu dữ liệu vào Localstorage
    saveToStorage("petArr", petArr);
    // Hiển thị danh sách thú cưng
    renderTableData(petArr);
    // Xóa các dữ liệu nhập trong Form Input
    clearInput();
  }
});

// Hiển thị thú cưng khỏe mạnh
let healthyCheck = true;
healthyBtn.addEventListener("click", function () {
  if (healthyCheck === true) {
    // Lọc thú cưng khỏe mạnh
    const healthyPetArr = [];
    for (let i = 0; i < petArr.length; i++) {
      if (
        petArr[i].vaccinated === true &&
        petArr[i].dewormed === true &&
        petArr[i].sterilized === true
      ) {
        healthyPetArr.push(petArr[i]);
      }
    }
    // Hiển thị ra màn hình
    renderTableData(healthyPetArr);
    // Đổi tên nút thành 'Show all pet'
    healthyBtn.textContent = "Show All Pet";
    healthyCheck = false;
  } else {
    renderTableData(petArr);
    healthyBtn.textContent = "Show Heahthy Pet";
    healthyCheck = true;
  }
});

// Hiển thị breed dựa theo type input
typeInput.addEventListener("click", renderBreed);
