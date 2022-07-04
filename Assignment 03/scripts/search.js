"use strict";
if (currentUser) {
  // Selector
  const navPagenum = document.getElementById("nav-page-num");
  const inputQuery = document.getElementById("input-query");
  const btnSearch = document.getElementById("btn-submit");

  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");
  const newsContainer = document.getElementById("news-container");
  const pageNum = document.getElementById("page-num");

  let keyword = "";
  ////////////////  FUNCTION   ////////////////////////
  // Hàm lấy dữ liệu từ webAPI
  async function getDataNewsbyKeyword(keyword, page) {
    try {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=${keyword}&sortBy=relevancy&pageSize=${currentUser.pagesize}&page=${page}&apiKey=6ddb04b0ef0047bc924f04d0fd8b3960`
      );
      const data = await res.json();
      // Check lỗi khi chạy từ tập tin không thông qua server
      if (data.code === "corsNotAllowed") {
        throw new Error(data.message);
      }
      // Hiển thị list news
      renderNewsbyKeyword(data);
    } catch (err) {
      // Báo lỗi
      alert(`Error: ${err.message}`);
    }
  }
  // Hàm hiển thị news
  function renderNewsbyKeyword(data) {
    // Tổng số bài viết trả về từ web API
    const totalNews = data.totalResults;
    // Kiểm tra điều kiện nút previous - next
    checkPrevious();
    checkNext(totalNews);
    let html = "";
    data.articles.forEach((article) => {
      html += `
      <div class="card flex-row flex-wrap">
      <div class="card mb-3" style="">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src=${
              article.urlToImage ? article.urlToImage : "../notfound.jpg"
            }
              class="card-img"
              alt="${article.title}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">"${article.title}</h5>
              <p class="card-text">${
                article.description ? article.description : ""
              }</p>
              <a href=${article.url}
                class="btn btn-primary" target="_blank">View</a>
            </div>
          </div>
        </div>
      </div>
    </div>
      `;
      newsContainer.innerHTML = html;
    });
  }

  // Hàm kiểm tra nút previous
  function checkPrevious() {
    // Khi đang ở Page số 1 thì nút "Previous" sẽ bị ẩn đi
    if (pageNum.textContent == 1) {
      btnPrev.style.display = "none";
    } else {
      btnPrev.style.display = "block";
    }
  }

  // Hàm kiểm tra nút next
  function checkNext(totalNews) {
    // totalnews/pagesize = số trang hiển thị (làm tròn lên)
    if (pageNum.textContent == Math.ceil(totalNews / currentUser.pagesize)) {
      // Nếu như không thể lấy thêm các bài viết nữa, nút "Next" sẽ bị ẩn đi
      btnNext.style.display = "none";
    } else {
      btnNext.style.display = "block";
    }
  }
  ////////////////  EVENT   ////////////////////////
  // Event nút search
  btnSearch.addEventListener("click", function () {
    // Validate xem người dùng đã nhập từ khóa hay chưa
    let isValidate = true;
    if (inputQuery.value.trim() === "") {
      alert("Please input keywords!⛔");
      isValidate = false;
    }
    if (isValidate) {
      // Lấy keyword
      keyword = inputQuery.value;
      // Lấy data từ web API và hiển thị newslist
      getDataNewsbyKeyword(keyword, 1);
    }
  });

  // Event nút Previous
  btnPrev.addEventListener("click", function () {
    getDataNewsbyKeyword("us", --pageNum.textContent);
  });

  // Event nút Next
  btnNext.addEventListener("click", function () {
    getDataNewsbyKeyword("us", ++pageNum.textContent);
  });
} else {
  // Thông báo cho người dùng cần đăng nhập vào
  alert("You need log in to the News App!😁");
  // Trở về trang login
  window.location.href = "../index.html";
}
