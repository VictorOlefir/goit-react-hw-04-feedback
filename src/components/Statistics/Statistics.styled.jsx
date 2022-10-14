import styled from 'styled-components';

export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const StatisticsItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10 px;
  }
`;

export const Text = styled.p`
  color: black;
  font-weight: bold;
`;
