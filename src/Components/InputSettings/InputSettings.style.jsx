/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { HiOutlineArrowCircleRight } from 'react-icons/hi';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #ffffff60;
  border-radius: 20px 20px 20px 0;
`;

export const Input = styled.input`
  width: 150px;
  height: 40px;
  border: none;
  border-radius: 20px;
  padding: 0 20px;
  font-size: 20px;
  outline: none;
  background-color: #ffffff60;
  color: ${(props) => props.theme.color.text};
  transition: all 0.3s ease;
  text-align: center;
  &:focus {
    color: #fff;
    outline: none;
  }
  &::placeholder {
    color: #20202040;
  }
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  border-radius: 50%;
  background-color: #202035;
  border: none;
`;
export const Icon = styled(HiOutlineArrowCircleRight)`
  font-size: 40px;
  color: #fff;
  border-radius: 50%;
  margin: 8px;
  transition: all 0.3s ease;
  :hover {
    cursor: pointer;
    font-size: 48px;
    margin: 4px;
  }
`;
