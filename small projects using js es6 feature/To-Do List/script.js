let todos = JSON.parse(localStorage.getItem("todos")) || [];

const addTodo = () => {
  const input = document.getElementById("todo-input");
  if (input.value.trim() === "") return;
  todos.push(input.value);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
  input.value = "";
};

const renderTodos = () => {
  const list = document.getElementById("list");
  list.innerHTML = todos.map(todo => `<li>${todo}</li>`).join("");
};

document.getElementById("add-btn").addEventListener("click", addTodo);
renderTodos();
