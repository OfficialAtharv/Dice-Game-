import styled from "styled-components";

export const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background-color: black;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.5s ease-in;
  cursor: pointer;
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s ease-in;
  }
`;
export const OutlineButton = styled.button`
  background-color: white;
  border-radius: 5px;
  min-width: 220px;
  padding: 10px 18px;
  font-size: 16px;
  border-color: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;
