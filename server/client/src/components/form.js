import React, {useState, useEffect} from 'react'
import {Form, Dropdown, Button, DropdownButton} from 'react-bootstrap'


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
    console.log(result.body)
    }).catch((err) => console.log(err))
  };


  return (
    <div className="Form">
      <header className="App-header">
      <Form>
        <Form.Control type="number" placeholder="first operand" />
        <DropdownButton id="dropdown-basic-button" title="/">
          <Dropdown.Item href="#/action-1">Devision</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Multiplication</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Plus</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Minus</Dropdown.Item>
        </DropdownButton>
        <Form.Control type="number" placeholder="second operand"/>
        <Form.Control type="number" placeholder="result"/>
        <Button variant="primary">Count</Button>
      </Form>
      </header>
    </div>
  );
}

export default NumForm
