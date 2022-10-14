import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
`;

export const ButtonItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 10px;

  &:hover,
  &:focus {
    background-color: gray;
    color: tomato};
  }
`;
