import styled from "styled-components";
import React from "react";
import { enumDeclaration } from "@babel/types";
const TaskCont = styled.div`
  border: solid grey 4px;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  background: #5ca4ea;
  color: #fff;
`;

const Button = styled.button`
//   border: red solid 4px;
  height: 30px;
  margin: 5px;

  position: relative;
`;
const PolyOne = styled.polyline`
  fill: #5ca4ea;
  stroke: #91c9ff;
  transition: all 0.8s ease-in-out;

  ${Button}:hover & {
    fill: #4f95da;
  }
`;
const PolyTwo = styled.polyline`
  stroke: #fff;
  stroke-dasharray: 40 480;
  stroke-dashoffset: 40;
  transition: all 0.8s ease-in-out;

  ${Button}:hover & {
    stroke-dashoffset: -480;
  }
`;

const Span = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  line-height: 58px;
  font-size: 18px;
  letter-spacing: 1px;
  font-weight: 300;
`;

const TaskItem = ({ task, deleteHandler, index }) => {
  return (
    <TaskCont>
      <h2>your task is....{task}</h2>
      <Button onClick={() => deleteHandler(index)}>
        <Span>delete</Span>

        <svg width="180px" height="60px" viewBox="0 0 80 20">
          <PolyOne points="179,1 179,59 1,59 1,1 179,1" />
          <PolyTwo points="179,1 179,59 1,59 1,1 179,1" />
        </svg>
      </Button>
    </TaskCont>
  );
};

export default TaskItem;
