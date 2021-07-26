import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
`;

export const Frame = styled.div`
  font-family: sans-serif;

  width: 200px;
  min-height: 300px;
  padding: 10px;
  margin: 20px;
  border: 1px solid gray;

  box-shadow: 0 0 10px -5px gray;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: black;
  letter-spacing: 2px;
  margin: 20px;
  text-align: center;
`;

export const Image = styled.div`
  width: 100%;
  height: 100px;
  background-image: ${({ src }) => src};
  background-size: cover;
  background-position: center center;
`;

export const Discription = styled.p`
  width: 100%;
  max-height: 40px;
  font-size: 16px;
  color: black;
  margin: 5px;
  text-align: center;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Amount = styled.h3`
  width: 100%;
  max-height: 40px;
  font-size: 16px;
  color: black;
  margin: 15px;

  text-align: center;
`;

export const ButtonLink = styled(Link)`
  border: 0;
  background-color: coral;
  color: white;
  font-weight: normal;
  text-decoration: none;
  letter-spacing: 1px;
  padding: 10px 25px;
  margin: 5px;
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
  margin: 5px;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
