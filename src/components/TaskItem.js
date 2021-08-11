import styled from "styled-components";
import React from "react";
const TaskCont = styled.div`
  border: solid grey 4px;
  // display: flex;
  // align-items: center;
  // justify-content: center;
`;

const Button = styled.button`
  border: red solid 4px;
  height: 30px;
  margin: 5px;

  position: relative;
`;

const TaskItem = ({ task, deleteHandler, index }) => {
  return (
    <TaskCont>
      <h2>your task is....{task}</h2>
      <Button onClick={() => deleteHandler(index)}>
        <span>delete</span>
      </Button>
      <svg height="200" width="500">
        <polyline
          points="20,20 40,25 60,40 80,120 120,140 200,180"
          style={{ fill: "none", stroke: "black", strokeWidth: 3 }}
        />
      </svg>
    </TaskCont>
  );
};

export default TaskItem;
