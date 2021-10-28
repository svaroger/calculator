import React, {useState, useEffect} from 'react'
import {Form, Dropdown, Button, DropdownButton} from 'react-bootstrap'
import './form.css';

const NumForm = () => {
  const [numOne, setNumOne] = useState("");
  const [numTwo, setNumTwo] = useState("");
  const [result, setResult] = useState("");
  const [operator, setOperator] = useState("");

  const data = {
    operator: operator,
    firstNum: numOne,
    secondNum: numTwo,
    result: ""
  }

  const oper = operator;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }

  const API = "/api"

  const sendToCalculate = () => {
    fetch(API, options).then((result) => {
    const users = result.body;
    }).catch((err) => console.log(err))
  };


// fetch('https://example.com/profile', {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });


  return (
    <div className="App-header">
      <Form className="InputContainer">
        <Form.Control className="Operand" type="number" placeholder="first operand" />
        <DropdownButton id="dropdown-basic-button" title="/">
          <Dropdown.Item href="#/action-1">Devision</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Multiplication</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Plus</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Minus</Dropdown.Item>
        </DropdownButton>
        <input
        name='number'
        placeholder='second operand'
        />
        <p>=</p>
        <Form.Control className="Result" type="text" placeholder="result" readOnly />
        <Button variant="primary">Count</Button>
      </Form>
    </div>
  );
}

export default NumForm
