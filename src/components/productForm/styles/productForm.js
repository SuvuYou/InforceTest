import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
`;

export const Frame = styled.div`
  font-family: sans-serif;

  width: 500px;
  height: 500px;
  padding: 10px;
  border: 1px solid gray;

  box-shadow: 0 0 10px -5px gray;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: white;

  z-index: 99;
`;

export const Overlay = styled.button`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Label = styled.label``;

export const Input = styled.input``;

export const Button = styled.button`
  border: 0;
  background-color: coral;
  color: white;
  font-weight: normal;
  text-decoration: none;
  letter-spacing: 1px;
  padding: 10px 25px;
  margin: 10px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
