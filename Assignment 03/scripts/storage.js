"use strict";

// Tạo class user
class User {
  constructor(firstName, lastName, username, password, confirmPass) {
    this.firstname = firstName;
    this.lastname = lastName;
    this.username = username;
    this.password = password;
    this.confirmPass = confirmPass;
  }
}
////////////////  DATA MẪU   ////////////////////////
const user1 = new User("David", "Beckham", "davidb", "123456789");
const user2 = new User("Maria", "Black", "mariab", "123456789");

////////////////  FUNCTION   ////////////////////////
// Lấy dữ liệu
function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// Lưu dữ liệu
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/////////////////////////////////////////////////////
// Lưu dữ liệu mẫu vào LocalStorage
if (!getFromStorage("userArr")) {
  saveToStorage("userArr", [user1, user2]);
}
// Lấy dữ liệu từ local storage
const userArr = getFromStorage("userArr");
