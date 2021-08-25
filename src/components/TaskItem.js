import styled from "styled-components";
import React from "react";

const TaskCont = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  margin: 7px;
  background-color: #8bc3f5;
  border: solid grey 4px;
  color: #fff;
`;

const Button = styled.div`
  // border: red solid 4px;
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
    fill: black;
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
`;

const Svg = styled.svg`
  fill: #2a56d1;
  width: 99px;
  height: 30px;
  viewbox: 0 0 80 20;
`;
const TaskText = styled.p`
  font-family: Verdana, sans-serif;
  font-size: 24px;
`;
const TaskItem = ({ task, deleteHandler, index }) => {
  return (
    <TaskCont>
      <TaskText>{task}</TaskText>
      <Button onClick={() => deleteHandler(index)}>
        <Span>delete</Span>
        <Svg>
          <PolyOne points="98,1 98,28 1,28 1,1 98,1" />
          <PolyTwo points="98,1 98,28 1,28 1,1 98,1" />
        </Svg>
      </Button>
    </TaskCont>
  );
};

export default TaskItem;
