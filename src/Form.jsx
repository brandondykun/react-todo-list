import { useState } from "react";

const Form = ({ todos, setTodos, setStatus, status }) => {
  const [inputText, setInputText] = useState("");

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    if (inputText !== "") {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: inputText,
          complete: false,
        }),
      };
      fetch("http://localhost:3000/todos", requestOptions)
        .then((response) => response.json())
        .then((data) => setTodos([...todos, data]));
      setInputText("");
    } else {
    }
  };

  return (
    <div>
      <form className="input-container">
        <input
          className="input-box"
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          placeholder="Add To Do"
          maxLength="50"
        />

        <input
          className="add button"
          type="submit"
          value="Add"
          onClick={submitTodoHandler}
        ></input>
      </form>
      <div className="sort-buttons-container">
        <button
          className={`button filter all ${status === "all" ? "active" : ""}`}
          onClick={() => setStatus("all")}
        >
          View All
        </button>
        <button
          className={`button filter complete ${
            status === "complete" ? "active" : ""
          }`}
          onClick={() => setStatus("complete")}
        >
          Complete
        </button>
        <button
          className={`button filter incomplete ${
            status === "incomplete" ? "active" : ""
          }`}
          onClick={() => setStatus("incomplete")}
        >
          Incomplete
        </button>
      </div>
    </div>
  );
};

export default Form;
