"use strict";
// Tạo class user để đại diện cho thông tin của người dùng
class User {
  constructor(
    firstName,
    lastName,
    username,
    password,
    // Thêm 2 thuộc tính này để làm tính năng số 9
    pagesize,
    category
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
