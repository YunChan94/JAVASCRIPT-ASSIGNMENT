"use strict";
// Selector
const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const typeInput = document.getElementById("input-type");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");
const findBtn = document.getElementById("find-btn");
const healthyBtn = document.getElementById("healthy-btn");
const tableBodyEl = document.getElementById("tbody");

// Hiển thị tất cả thú cưng hiện có
renderTableData(petArr);
// Hiển thị tất cả các breed không phân biệt dog - cat
renderBreedAll();

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
    `;
    tableBodyEl.appendChild(row);
  }
}

// Hiển thị tất cả các breed đã có
function renderBreedAll() {
  breedArr.forEach((br) => {
    const option = document.createElement("option");
    option.innerHTML = `${br.breed}`;
    breedInput.appendChild(option);
  });
}

////////////////  EVENT   ////////////////////////
// Sự kiện nút find
// Note 1: nếu không nhập vào thì hiển thị toàn bộ pet
// Note 2: nếu nhập nhiều dữ liệu tìm kiếm thì kết hợp các điều kiện với nhau
findBtn.addEventListener("click", function () {
  let findArr = petArr;
  // Tìm bằng id
  if (idInput.value) {
    findArr = petArr.filter((pet) => pet.id.includes(idInput.value));
  }
  // Tìm bằng name
  if (nameInput.value) {
    findArr = petArr.filter((pet) => pet.name.includes(nameInput.value));
  }
  // Tìm bằng type
  if (typeInput.value !== "Select Type") {
    findArr = petArr.filter((pet) => pet.type === typeInput.value);
  }
  // Tìm bằng breed
  if (breedInput.value !== "Select Breed") {
    findArr = petArr.filter((pet) => pet.breed === breedInput.value);
  }
  // Nếu chọn vaccine
  if (vaccinatedInput.value === true) {
    findArr = petArr.filter((pet) => pet.vaccinated === true);
  }
  // Nếu chọn deworm
  if (dewormedInput.value === true) {
    findArr = petArr.filter((pet) => pet.dewormed === true);
  }
  // Nếu chọn Sterillized
  if (sterilizedInput.value === true) {
    findArr = petArr.filter((pet) => pet.sterilized === true);
  }
  // Hiển thị ra kết quả
  renderTableData(findArr);
});

// // Hiển thị breed dựa theo type
// typeInput.addEventListener("click", renderBreed);
