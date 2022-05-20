import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: auto;
  padding: 24px;
`;

export const Input = styled.input`
  width: 250px;
  min-height: 3rem;
  height: auto;
  border: none;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.secondary};
  opacity: 0.5;
  font-size: 18px;
  text-align: center;
  box-shadow: 10px 10px #101010;
  &:focus {
    outline: none;
  }
  &::placeholder {
    text-align: center;
    color: ${({ theme }) => theme.color.secondary};
  }
`;
