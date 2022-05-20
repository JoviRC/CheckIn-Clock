import styled from 'styled-components';

export const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'auto',
  width: 'auto',
  padding: '24px',
  borderRadius: '20px',
  backgroundColor: `${(props) => props.theme.color.backgroud}`,
  boxShadow: '10px 10px #101010',
  border: '1px solid #101010',
});

export const BoxClocker = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: 'auto',
  width: 'auto',
});

export const Digit = styled.h1({
  fontSize: '100px',
  fontWeight: 'bold',
  color: `${({ theme }) => theme.color.primary}`,
  margin: 'auto',
});
export const DataText = styled.h1({
  fontSize: '18px',
  fontWeight: 'bold',
  color: `${({ theme }) => theme.color.primary}`,
  margin: 'auto',
});
