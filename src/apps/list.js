const myLibrary = [];

class Todo {
  #title;
  #details;
  #due_date;

  constructor(title, due_date, details) {
    this.#title = title;
    this.#due_date = due_date;
    this.#details = details;
  }

  getTitle() {
    return this.#title;
  }

  getDueDate() {
    return this.#due_date;
  }

  getDetails() {
    return this.#details;
  }
}

// ----------------------------
// ------ LIST FUNCTIONS ------

// add to library
function addToLibrary(item) {
  myLibrary.push(item);
}

// Todo maker
const MakeNewTodo = (title, due, details) => {
  var todo = new Todo(title, due, details);
  return todo;
};

// Makes new entry and pushes it to library in one go
export const buildNewEntry = (title, due, details) => {
  var new_entry = MakeNewTodo(title, due, details);
  addToLibrary(new_entry);
};

const todo1 = new Todo(
  "return some videotapes",
  "JAN 20th",
  "lets see Paul Allen's todo app"
);
const todo2 = new Todo(
  "make dinner reservations",
  "JAN 20th",
  "make sure to tell everyone about it"
);

addToLibrary(todo1);
addToLibrary(todo2);

export { myLibrary };