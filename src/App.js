import React from "react";
import styled from "styled-components";
import TaskItem from "./components/TaskItem";
const PageWrap = styled.div`
  border: solid green 4px;
  background-color: #5ca4ea;
`;

const Form = styled.form `

`
const Button = styled.div`
  // border: red solid 4px;
  color: white;
  height: 29px;
  width: 99px;
  margin: 5px;
  margin-left: 20px;
  margin-bottom: 1px;
  position: relative;
`;
const PolyOne = styled.polyline`
  stroke: #91c9ff;
  transition: all 0.8s ease-in-out;
`;
const PolyTwo = styled.polyline`
  stroke: #fff;
  stroke-dasharray: 40 480;
  stroke-dashoffset: 40;
  transition: all 0.8s ease-in-out;

  ${Button}:hover & {
    stroke-dashoffset: -480;
    fill: #99F5EE;
  }
`;

const Span = styled.span`
  font-family: Verdana, sans-serif;
  position: absolute;
  height: 90%;
  top: 4px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 15px;
  letter-spacing: 1px;
  font-weight: 300;
  transition: all 0.8s ease-in-out;
  
  ${Button}:hover & {
    color: black;
  }
`;

const Svg = styled.svg`
  fill: #2a56d1;
  width: 99px;
  height: 30px;
  viewbox: 0 0 80 20;
`;
class App extends React.Component {
  state = {
    todos: [],
    userInput: "",
  };

  changeHandler = (event) => {
    this.setState({ userInput: event.target.value });
  };

  addHandler = (event) => {
    event.preventDefault();
    let newArr = [...this.state.todos];
    newArr.push(this.state.userInput);
    this.setState({ todos: newArr });
    this.setState({ userInput: "" });
  };

  deleteHandler = (index) => {
    let newArr = [...this.state.todos];
    newArr.splice(index, 1);
    this.setState({ todos: newArr });
  };

  render() {
    return (
      <PageWrap>
        <h1>app</h1>
        <div>
          {this.state.todos.map((todo, index) => {
            return (
              <TaskItem
                key={index}
                task={todo}
                index={index}
                deleteHandler={this.deleteHandler}
              />
            );
          })}
        </div>
        <Form onSubmit={this.addHandler}>
          <input value={this.state.userInput} onChange={this.changeHandler} />
          <Button type="submit">
          <Span>add task</Span>
          <Svg>
            <PolyOne points="98,1 98,28 1,28 1,1 98,1" />
            <PolyTwo points="98,1 98,28 1,28 1,1 98,1" />
          </Svg>
        </Button>
        </Form>
      </PageWrap>
    );
  }
}

export default App;
