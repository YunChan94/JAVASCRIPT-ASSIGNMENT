"use strict";
// Selector
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const newsContainer = document.getElementById("news-container");
const pageNum = document.getElementById("page-num");
// Chỉ khi người dùng đăng nhập vào mới sử dụng được trang này
if (currentUser) {
  ////////////////  FUNCTION   ////////////////////////
  // Hàm lấy dữ liệu từ webAPI
  async function getDataNews(country, page) {
    try {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${currentUser.category}&pageSize=${currentUser.pagesize}&page=${page}&apiKey=6ddb04b0ef0047bc924f04d0fd8b3960`
      );
      const data = await res.json();
      // Check lỗi khi chạy từ tập tin không thông qua server
      if (data.code === "corsNotAllowed") {
        throw new Error(data.message);
      }
      // Hiển thị list news
      renderNews(data);
    } catch (err) {
      // Báo lỗi
      alert(`Error: ${err.message}`);
    }
  }
  getDataNews("us", 1);
  // Hàm hiển thị news
  function renderNews(data) {
    // Tổng số bài viết trả về từ web API
    const totalNews = data.totalResults;
    // Kiểm tra điều kiện nút previous - next
    checkPrevious();
    checkNext();
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
    if (
      pageNum.textContent ===
      Number(totalNews / currentUser.pagesize).toFixed() + 1
    ) {
      // Nếu như không thể lấy thêm các bài viết nữa, nút "Next" sẽ bị ẩn đi
      btnNext.style.display = "none";
    } else {
      btnNext.style.display = "block";
    }
  }
  ////////////////  EVENT   ////////////////////////
  // Event nút Previous
  btnPrev.addEventListener("click", function () {
    getDataNews("us", pageNum.textContent--);
  });
  // Sự kiện nút Next
  btnNext.addEventListener("click", function () {
    getDataNews("us", pageNum.textContent++);
  });
} else {
  // Thông báo cho người dùng cần đăng nhập vào
  alert("You need log in to the News App!😁");
  // Trở về trang login
  window.location.href = "../index.html";
}
