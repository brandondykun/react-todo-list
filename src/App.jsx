import { useState, useEffect } from "react";
import "./App.css";
import Form from "./Form";
import Footer from "./Footer";
import List from "./List";

function App() {
  const [todos, setTodos] = useState(null);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState();
  const [allCount, setAllCount] = useState(0);
  const [completeCount, setCompleteCount] = useState(0);
  const [incompleteCount, setIncompleteCount] = useState(0);

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch("http://localhost:3000/todos")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setTodos(data);
      });
  }, []);

  useEffect(() => {
    filterHandler();
  }, [status, todos]);

  const filterHandler = () => {
    switch (status) {
      case "complete":
        setFilteredTodos(todos.filter((todo) => todo.complete === true));
        break;
      case "incomplete":
        setFilteredTodos(todos.filter((todo) => todo.complete === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  useEffect(() => {
    countHandler();
  }, [todos]);

  const countHandler = () => {
    setAllCount(todos && todos.length);
    setCompleteCount(
      todos &&
        todos.filter((todo) => {
          return todo.complete;
        }).length
    );
    setIncompleteCount(
      todos &&
        todos.filter((todo) => {
          return !todo.complete;
        }).length
    );
  };

  return (
    <div className="App">
      <h1 className="title">To Do List</h1>
      <div className="main-content">
        <Form
          setTodos={setTodos}
          todos={todos}
          status={status}
          setStatus={setStatus}
        />
        <hr className="line-break"></hr>
        <List
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
          setFilteredTodos={setFilteredTodos}
        />
      </div>
      <Footer
        allCount={allCount}
        completeCount={completeCount}
        incompleteCount={incompleteCount}
      />
    </div>
  );
}

export default App;
