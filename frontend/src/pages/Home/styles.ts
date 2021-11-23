import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.header`
  width: 100%;
  background-color: ${colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 100px;
    margin: 10px;
  }
`;
