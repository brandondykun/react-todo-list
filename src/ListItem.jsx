const ListItem = ({ todo, todos, setTodos }) => {
  const deletePostHandler = (id) => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    };
    fetch("http://localhost:3000/todos/" + id, requestOptions)
      .then((response) => response.json())
      .then(() => setTodos(todos.filter((todo) => todo.id != id)));
  };

  const toggleCompleteHandler = (id) => {
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: todo.id,
        name: todo.name,
        complete: !todo.complete,
      }),
    };
    fetch("http://localhost:3000/todos/" + id, requestOptions)
      .then((response) => response.json())
      .then((data) =>
        setTodos(
          todos.map((todo) => {
            if (todo.id === id) {
              return {
                ...todo,
                complete: !todo.complete,
              };
            }
            return todo;
          })
        )
      );
  };

  return (
    <div
      className={"todo-item-container " + (todo.complete ? "completed" : "")}
    >
      <div className="todo-text-container" key={todo.id}>
        {todo.name}
      </div>
      <div className="button-container">
        <button
          className="check button"
          onClick={() => toggleCompleteHandler(todo.id)}
        >
          Check
        </button>
        <button
          className="delete button"
          onClick={() => deletePostHandler(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ListItem;
