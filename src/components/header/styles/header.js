import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  heigth: 150px;
  background-color: gray;
  display: flex;
`;

export const LinkButton = styled(Link)`
  border: 0;
  background-color: coral;
  color: white;
  font-weight: normal;
  text-decoration: none;
  letter-spacing: 1px;
  padding: 10px 25px;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Button = styled.button`
  border: 0;
  background-color: coral;
  color: white;
  font-weight: normal;
  text-decoration: none;
  letter-spacing: 1px;
  padding: 10px 25px;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
