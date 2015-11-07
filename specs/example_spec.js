// You can have more describe blocks in this file.

describe('todo list', function() {
  var todoList;

  beforeEach(function() {
    browser.get('http://www.angularjs.org');

    todoList = element.all(by.repeater('todo in todoList.todos'));
  });

  it('should list todos', function() {
    expect(todoList.count()).toEqual(2);
    expect(todoList.get(1).getText()).toEqual('build an angular app');
  });

  it('should add a todo', function() {
    var addTodo = element(by.model('todoList.todoText'));
    var addButton = element(by.css('[value="add"]'));

    addTodo.sendKeys('write a protractor test');
    addButton.click();

    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual('write a protractor test');
  });
});
