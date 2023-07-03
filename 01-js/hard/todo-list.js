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
var listOfTodos = [{
                    id: 0, 
                  lists: ""
                  }]

class Todo {

  add(todo)
  {
    listOfTodos.push(listOfTodos.id = listOfTodos.id + 1, todo)
  }
  remove(indexOfTodo)
  {
    listOfTodos.splice(indexOfTodo, listOfTodos.length);
  }
  update(index, updatedTodo)
  {
    listOfTodos.splice(index, 1, updatedTodo);
  }
  getAll()
  {
    return listOfTodos;
  }
  get(indexOfTodo)
  {
    return listOfTodos[indexOfTodo];
  }
  clear(){
    listOfTodos = [];
  }
}

let start = new Todo();
start.add("Teri maa ki chut");
//start.remove(0); //not working
//start.update(0, "SExy")
//start.getAll();
//start.get();
//start.clear();
console.log(listOfTodos);

module.exports = Todo;
