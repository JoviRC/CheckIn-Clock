/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  height: 100vh;
  min-height: 100vh;
  width: 100vh;
  min-width: 100vw;
  background-color: ${(props) => props.theme.color.backgroud};
`;

export const BoxNav = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  height: 100vh;
  min-height: 100vh;
  width: 20%;
  min-width: 100px;
  outline: blue 1px solid;
  background-color: ${(props) => props.theme.color.backgroud};
`;

export const Box = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  height: 100vh;
  min-height: 400px;
  width: 80%;
  min-width: 400px;
  background-color: ${(props) => props.theme.color.backgroud};
`;
