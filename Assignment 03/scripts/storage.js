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
// Hàm để chuyển từ JS Object sang Class Instance cho Class user
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

// Hàm để chuyển từ JS Object sang Class Instance cho Class Task
function parseTask(taskData) {
  const task = new Task(taskData.task, taskData.owner, taskData.isDone);
  return task;
}
/////////////////////////////////////////////////////

// Lấy dữ liệu User từ local storage
const users = getFromStorage("userArr") ? getFromStorage("userArr") : [];
let currentUser = getFromStorage("currentUser");
// Chuyển từ JS Object sang Class Instance
const userArr = users.map((user) => parseUser(user));

// Lấy dữ liệu Todo từ local storage
const todo = getFromStorage("todoArr") ? getFromStorage("todoArr") : [];
// Chuyển từ JS Object sang Class Instance
const todoArr = todo.map((todo) => parseTask(todo));
