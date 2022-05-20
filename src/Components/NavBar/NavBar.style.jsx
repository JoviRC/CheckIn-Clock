/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  min-height: 100vh;
  width: 20%;
  min-width: 100px;
  background-color: ${(props) => props.theme.color.backgroud};
  outline: red 1px solid;
`;
