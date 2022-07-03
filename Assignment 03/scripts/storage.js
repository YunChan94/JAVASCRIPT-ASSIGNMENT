"use strict";

////////////////  FUNCTION   ////////////////////////
// Lấy dữ liệu
function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// Lưu dữ liệu
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
// Hàm để chuyển từ JS Object sang Class Instance
function parseUser(userData) {
  const user = new User(
    userData.firstname,
    userData.lastname,
    userData.username,
    userData.password,
    // Thêm 2 thuộc tính này để làm tính năng số 9
    userData.pagesize,
    userData.category
  );

  return user;
}
/////////////////////////////////////////////////////

// Lấy dữ liệu từ local storage
const users = getFromStorage("userArr") ? getFromStorage("userArr") : [];
let currentUser = getFromStorage("currentUser");
const todo = getFromStorage("todoArr") ? getFromStorage("todoArr") : [];
// Chuyển từ JS Object sang Class Instance
const userArr = users.map((user) => parseUser(user));
const todoArr = todo.map((todoUser) => parseUser(todoUser));
