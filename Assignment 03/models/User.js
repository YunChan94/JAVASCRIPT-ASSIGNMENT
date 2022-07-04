"use strict";
// Tạo class user để đại diện cho thông tin của người dùng
class User {
  constructor(
    firstName,
    lastName,
    username,
    password,
    // Thêm 2 thuộc tính này để làm tính năng số 9(thuộc tính mặc định khi chưa khai báo)
    pagesize = 10,
    category = "business"
  ) {
    this.firstname = firstName;
    this.lastname = lastName;
    this.username = username;
    this.password = password;
    // Thêm 2 thuộc tính này để làm tính năng số 9
    this.pagesize = pagesize;
    this.category = category;
  }
}
// Tạo Class để chứa các thông tin về Task trong Todo List
class Task {
  constructor(task, owner, isDone) {
    this.task = task;
    this.owner = owner;
    this.isDone = isDone;
  }
}
