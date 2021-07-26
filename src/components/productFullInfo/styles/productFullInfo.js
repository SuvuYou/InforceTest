import styled from "styled-components/macro";

export const Frame = styled.div`
  min-width: 500px;
  max-width: 700px;
  min-height: 700px;
  padding: 0px;
  margin: 20px auto;
  border: 1px solid gray;

  box-shadow: 0 0 10px -5px gray;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

export const Image = styled.div`
  width: 100%;
  height: 300px;
  background-image: ${({ src }) => src};
  background-size: cover;
  background-position: center center;
`;

export const Title = styled.h1`
  font-size: 50px;
  color: black;
  letter-spacing: 5px;
  font-weight: normal;
  text-align: center;
`;

export const Discription = styled.p`
  font-size: 24px;
  color: black;
  text-align: center;
  margin: 0;
`;

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Comment = styled.div`
  padding: 20px;
`;

export const CommentDate = styled.p`
  font-size: 12px;
  margin: 0;
`;

export const CommentDisc = styled.p`
  font-size: 16px;
  margin: 5px 0;
`;

export const Stock = styled.h3`
  font-size: 24px;
  color: coral;
  text-align: center;
  margin: 20px;
`;

export const Stats = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const StatsText = styled.h4`
  font-size: 24px;
  color: black;
  text-align: center;
  margin: 20px;
  font-weight: normal;
`;

export const Inner = styled.div`
  padding: 20px;
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
