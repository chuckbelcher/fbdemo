//to install reactstrap and bootstrap
//npm install --save reactstrap bootstrap
//https://www.npmjs.com/package/reactstrap
//https://reactstrap.github.io/


import React, { useState } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import {
  ListGroup,
  ListGroupItem,
  Button,
  Form,
  Input,
  InputGroup
} from "reactstrap";

const initialTodoList = [
  "Teach Intro to React Hooks",
  "Get coffee",
  "Fix all the bugs"
];

function TodoApp() {
  const [
    todo,
    todoList,
    handleInputChange,
    handleRemoveClick,
    handleSubmit
  ] = useTodoState();

  return (
    <section>
      <h1>TODO</h1>
      <ListGroup>
        {todoList.map((item, i) => {
          return <ListGroupItem key={i}>{item}
            <Button close onClick={() => handleRemoveClick(i)} />
          </ListGroupItem>;
        })}
      </ListGroup>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Input value={todo} onChange={handleInputChange} />
          <Button>Add</Button>
        </InputGroup>
      </Form>
    </section>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<TodoApp />, rootElement);


function useTodoState() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState(initialTodoList)

  function handleInputChange(e) {
    setTodo(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodoList([...todoList, todo]);
    setTodo('')
  }

  function handleRemoveClick(todoIndex) {
    const newTodoList = todoList.filter((_, i) => i !== todoIndex);
    setTodoList(newTodoList);
  }

  return [
    todo,
    todoList,
    handleInputChange,
    handleRemoveClick,
    handleSubmit
  ];
}

// Complete hooks demo
// https://fb.me/f8-react-hooks-complete

// Class example
// https://fb.me/f8-react-hooks-class

//Additional Links
//http://reactjs.org/hooks
//http://reactjs.org/docs/hooks-faq

export default TodoApp