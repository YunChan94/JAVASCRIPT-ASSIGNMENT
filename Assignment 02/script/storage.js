"use strict";

// Bổ sung Animation cho Sidebar
const navEl = document.getElementById("sidebar");
navEl.addEventListener("click", function () {
  this.classList.toggle("active");
});

////////////////  DATA MẪU  ////////////////////////

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
  date: "1/2/2022",
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
  date: "2/2/2022",
};

const breed1 = {
  breed: "Chó Phú Quốc",
  type: "Dog",
};
const breed2 = {
  breed: "Mèo tam thể",
  type: "Cat",
};
const breed3 = {
  breed: "Tabby",
  type: "Cat",
};
const breed4 = {
  breed: "Husky",
  type: "Dog",
};

////////////////////////////////////////
// Lưu dữ liệu dưới LocalStorage

// Lưu dũ liệu vào petArr (gán dữ liệu để test petArr)
if (!getFromStorage("petArr")) {
  saveToStorage("petArr", [data1, data2]);
}
// Lấy dữ liệu petArr
const petArr = getFromStorage("petArr");

// Lưu dũ liệu vào petArr (gán dữ liệu để test breedArr)
if (!getFromStorage("breedArr")) {
  saveToStorage("breedArr", [breed1, breed2, breed3, breed4]);
}
// Lấy dữ liệu breedArr
const breedArr = getFromStorage("breedArr");

////////////////  FUNCTION   ////////////////////////
// Lấy dữ liệu
function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// Lưu dữ liệu
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Hiển thị Breed trong màn hình quản lý thú cưng
function renderBreed() {
  breedInput.innerHTML = "<option>Select Breed</option>";
  const breedDog = breedArr.filter((br) => br.type === "Dog");
  const breedCat = breedArr.filter((br) => br.type === "Cat");
  if (typeInput.value === "Dog") {
    breedDog.forEach((br) => {
      const option = document.createElement("option");
      option.innerHTML = `${br.breed}`;
      breedInput.appendChild(option);
    });
  }
  if (typeInput.value === "Cat") {
    breedCat.forEach((br) => {
      const option = document.createElement("option");
      option.innerHTML = `${br.breed}`;
      breedInput.appendChild(option);
    });
  }
}
