/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { HiOutlineArrowCircleRight } from 'react-icons/hi';

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-width: 100vw;
  height: 100vh;
  min-height: 100vh;
  background-color: #202035;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 250px;
  border-radius: 20px;
  background-color: #202035;
  box-shadow: 10px 10px #101010;
  border: 1px solid #101010;
`;
export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin: 10px auto;
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
