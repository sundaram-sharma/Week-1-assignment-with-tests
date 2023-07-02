/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/
var listOfTodos = []

class Todo {

  add(todo)
  {
    listOfTodos = listOfTodos + todo;
  }
  remove(indexOfTodo)
  {
    listOfTodos.splice(indexOfTodo, 1)
  }
  update(index, updatedTodo)
  {
    listOfTodos.splice(index, 1, updatedTodo)
  }
  getAll()
  {
    return listOfTodos;
  }
  get(indexOfTodo)
  {
    
  }
}

module.exports = Todo;
