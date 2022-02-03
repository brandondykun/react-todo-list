import ListItem from "./ListItem";

const List = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-list-container">
      {filteredTodos && filteredTodos.length > 0 ? (
        filteredTodos.map((todo) => (
          <ListItem
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))
      ) : (
        <i>Nothing to see Here!</i>
      )}
    </div>
  );
};

export default List;

// status === 'complete' ? 'active': ''
