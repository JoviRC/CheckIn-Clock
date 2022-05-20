/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.backgroud};
  width: 100vw;
  height: 100vh;
`;
export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 250px;
  background-color: #01010180;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  margin: 20px;
`;
export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.color.secondary};
`;
export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #01010180;
  border-radius: 10px;
  padding: 8px;
`;
export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  color: ${({ theme }) => theme.color.secondary};
  background-color: #ffffff50;
  text-align: center;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.color.secondary};
    align-items: center;
    text-align: center;
    opacity: 0.5;
  }
`;

export const Button = styled.button`
  width: 90%;
  height: 100%;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  margin: 10px;
  background-color: ${({ theme }) => theme.color.backgroud};
  color: ${({ theme }) => theme.color.secondary};
  text-align: center;
  &:focus {
    outline: none;
    color: ${({ theme }) => theme.color.secondary};
  }
`;
