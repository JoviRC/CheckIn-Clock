/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { IoSettingsOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  align-items: flex-end;
  bottom: 0;
  margin: auto;
  justify-content: left;
  align-items: left;
  width: 50px;
  min-height: 50px;
  background-color: ${(props) => props.theme.color.backgroud};
  color: ${(props) => props.theme.color.text};
`;

export const Icon = styled(IoSettingsOutline)`
  display: block;
  font-size: 30px;
  margin: auto auto 20px 20px;
  transition: all 0.3s ease;
  &:hover {
    transform: rotate(360deg) scale(1.2);
  }
`;
export const Modal = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 250px;
  height: 140px;
  background-color: #ffffff60;
  border-radius: 20px 20px 20px 0;
  font-size: 20px;
`;
