import styled from "styled-components";
import React from "react";

const TaskCont = styled.div`
  border: solid grey 4px;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  background: #5ca4ea;
  color: #fff;
`;

const Button = styled.div`
  // border: red solid 4px;
  height: 29px;
  width: 99px;
  margin: 5px;
  position: relative;
`;
const PolyOne = styled.polyline`

  stroke: #91c9ff;
  transition: all 0.8s ease-in-out;

`;
const PolyTwo = styled.polyline`
  // stroke: #000;

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

  position: absolute;
  height: 90%;
  top: 4px;
  left: 0;
  right: 0;
  text-align: center;
  // line-height: 58px;
  font-size: 18px;
  letter-spacing: 1px;
  font-weight: 300;
  
`;

const Svg = styled.svg `
  fill: #5C5DEA;
  width: 99px;
  height: 30px;
  viewBox: 0 0 80 20;
`

const TaskItem = ({ task, deleteHandler, index }) => {
  return (
    <TaskCont>
      <h2>your task is....{task}</h2>
      <Button onClick={() => deleteHandler(index)}>
        <Span>delete</Span>

        <Svg 
        // width="180px" height="60px" viewBox="0 0 80 20"
        >
          <PolyOne points="98,1 98,28 1,28 1,1 98,1" />
          <PolyTwo points="98,1 98,28 1,28 1,1 98,1" />
        </Svg>
      </Button>
    </TaskCont>
  );
};

export default TaskItem;
