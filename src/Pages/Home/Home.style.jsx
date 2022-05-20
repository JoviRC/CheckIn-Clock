/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  height: 100vh;
  background-color: ${(props) => props.theme.color.backgroud};
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  width: 300px;
  padding: 24px;
  outline: red 1px solid;
`;
