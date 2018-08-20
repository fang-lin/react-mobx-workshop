export default class Todos {
  todos = [];

  addTodo = (title) => {
    this.todos.push(title);
  };
}
