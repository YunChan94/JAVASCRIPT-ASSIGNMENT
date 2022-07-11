"use strict";
if (currentUser) {
  //Selector
  const taskInput = document.getElementById("input-task");
  const todoList = document.getElementById("todo-list");
  const btnAdd = document.getElementById("btn-add");

  // Hiển thị todoList đã lưu trước đó
  renderTodoList();
  ////////////////  FUNCTION   ////////////////////////
  // Hàm hiển thị các Task có owner trùng với username của người dùng hiện tại
  function renderTodoList(todo) {
    let html = "";
    // Render lại trường hợp khi todoArr []
    if (todoArr && todoArr.length == 0) {
      todoList.innerHTML = "";
    } else {
      // Lọc trong todoArr những task của currentUser
      todoArr
        .filter((todo) => todo.owner === currentUser.username)
        .forEach((todo) => {
          html += `
          <li class="${todo.isDone ? "checked" : ""}"><p>${
            todo.task
          }</p><span class="close">×</span></li>
        `;
          todoList.innerHTML = html;
        });
      // Sự kiện toggle task
      toggleTask();
      deleteTask();
    }
  }

  ////////////////  EVENT   ////////////////////////
  // Event nút Add task vào todoList
  btnAdd.addEventListener("click", function () {
    // Kiểm tra người dùng đã nhập nhiệm vụ cần add chưa?
    if (taskInput.value.trim() === "") {
      alert("Please input task!");
    } else {
      const todo = new Task(taskInput.value, currentUser.username, false);
      // Thêm task mới vào mảng todoArr
      todoArr.push(todo);
      // Lưu dữ liệu xuống local storage
      saveToStorage("todoArr", todoArr);
      // Hiển thị list các nhiệm vụ
      renderTodoList();
      // reset dữ liệu nhập
      taskInput.value = "";
    }
  });

  // Toggle Task
  function toggleTask() {
    document.querySelectorAll("#todo-list li").forEach(function (liEl) {
      liEl.addEventListener("click", function (e) {
        // Tránh nút delete ra
        if (e.target === liEl.children[0]) {
          // Toggle class checked
          liEl.classList.toggle("checked");
          // Lấy nội dung test chứa task, trong thẻ p
          const pTag = liEl.children[0].innerHTML;
          // Tìm task vừa check vào
          const todo = todoArr.find(
            (todoItem) =>
              todoItem.owner === currentUser.username && todoItem.task === pTag
          );
          // Thay đổi thuộc tính isDone
          todo.isDone = liEl.classList.contains("checked") ? true : false;
          // Cập nhật xuống local Storage
          saveToStorage("todoArr", todoArr);
        }
      });
    });
  }
  // Delete Task
  function deleteTask() {
    document.querySelectorAll("#todo-list .close").forEach(function (closeEl) {
      closeEl.addEventListener("click", function () {
        // Xác nhận xóa task
        const isDelete = confirm("Do you want to delete task?");
        if (isDelete) {
          // Tìm task trong todoArr
          const pTag = closeEl.previousElementSibling.innerHTML;
          const index = todoArr.findIndex((todo) => {
            return todo.owner === currentUser.username && todo.task === pTag;
          });
          // Xoá task đó khỏi todoArr
          todoArr.splice(index, 1);
          // Cập nhật xuống local Storage
          saveToStorage("todoArr", todoArr);
          // Hiển thị lại todoList
          renderTodoList();
        }
      });
    });
  }
} else {
  // Thông báo cho người dùng cần đăng nhập vào
  alert("You need log in to the News App!😁");
  // Trở về trang login
  window.location.href = "../index.html";
}
