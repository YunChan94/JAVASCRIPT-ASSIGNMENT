"use strict";
// Chỉ khi người dùng đăng nhập vào mới sử dụng được trang này
if (currentUser) {
  ////////////////  FUNCTION   ////////////////////////
  // Hàm lấy dữ liệu từ webAPI
  async function getDataNews(country, page) {
    try {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&page=${page}&apiKey=6ddb04b0ef0047bc924f04d0fd8b3960`
      );
      console.log(res);
      const data = await res.json();
      console.log(data);
      // Check lỗi quá 100 lần request/ ngày
      if (data.status === "error" && data.code === "rateLimited") {
        throw new Error(data.message);
      }
      // Check lỗi khi chạy từ tập tin không thông qua server
      if (data.codr === "corsNotAllowed") {
        throw new Error(data.message);
      }
      // Hiển thị list news
    } catch (err) {
      // Báo lỗi
      alert(`Error: ${err.message}`);
    }
  }
  getDataNews("us", 1);
} else {
  // Thông báo cho người dùng cần đăng nhập vào
  alert("You need log in to the News App!😁");
  // Trở về trang login
  window.location.href = "../index.html";
}
// `https://newsapi.org/v2/top-headlines?country=${country}&category=${currentUser.category}&pageSize=${currentUser.pageSize}&page=${page}&apiKey=6ddb04b0ef0047bc924f04d0fd8b3960`
