import React, { useState, useEffect, memo } from 'react';
import styled from 'styled-components';
import { Container, BoxClocker, Digit, DataText } from './Clock.style';
import getDate from '../../Helpers/Date';
import getTime from '../../Helpers/Time';
import Copitalizer from '../../Helpers/Copitalizer';

const Timer = memo(() => {
  const [time, setTime] = useState({
    hour: 0,
    minute: 0,
    second: 0,
  });
  useEffect(() => {
    const interval = setInterval(() => {
      const { hours, minutes, seconds } = getTime();
      setTime({ ...time, hour: hours, minute: minutes, second: seconds });
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <>
      <BoxClocker>
        <Digit>{`${time.hour}:${time.minute}:${time.second}`}</Digit>
      </BoxClocker>
    </>
  );
});

const Date = memo(() => {
  const [date, setDate] = useState({
    day: 0,
    month: 0,
    year: 0,
    dayName: '',
  });
  useEffect(() => {
    const interval = setInterval(() => {
      const { day, month, year, dayName } = getDate();
      setDate({ ...date, day, month, year, dayName });
    }, 1000);
    return () => clearInterval(interval);
  }, [date]);

  return (
    <>
      <BoxClocker>
        <DataText>{`${date.dayName} - ${date.day}/${date.month}/${date.year}`}</DataText>
      </BoxClocker>
    </>
  );
});

const Clock = () => {
  return (
    <Container>
      <Timer />
      <Date />
    </Container>
  );
};

export default Clock;
