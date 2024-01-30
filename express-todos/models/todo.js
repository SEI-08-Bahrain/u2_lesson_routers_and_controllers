const todos = [
    {id: 125223, todo: 'Feed Dogs', done: true},
    {id: 127904, todo: 'Learn Express', done: false},
    {id: 139608, todo: 'Buy Milk', done: false}
  ];
 
 
  const getAll = () => {
    return todos;
  }

  const getOne = (id) => {
    let todo = todos.find((todo) => {
        //find todo where id is equal to the id parameter 
        return todo.id === parseInt(id); 
    })
    return todo; 
  }
 
  module.exports = {
    getAll,
    getOne
  };
  