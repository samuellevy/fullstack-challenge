import styled from 'styled-components';
import { colors } from '../../styles';

interface IContainer {
  active: boolean;
}

export const Container = styled.div<IContainer>`
  display: ${props => (props.active ? 'flex' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #000000aa;
`;

export const NewOrderBox = styled.form`
  display: flex;
  width: 900px;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: ${colors.background};
  padding: 30px;
  border-radius: 10px;
  position: relative;
`;

export const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 33%;
  max-width: 66%;
  padding: 20px;

  input,
  select,
  option {
    display: inline-block;
    margin: 8px 0;
    padding: 8px;
    background-color: transparent;
    border: 1px solid #e3e3e3;
  }

  textarea {
    display: inline-block;
    margin: 8px 0;
    padding: 8px;
    background-color: transparent;
    border: 1px solid #e3e3e3;
    height: 150px;
  }
`;

export const DetailItemDescription = styled(DetailItem)`
  width: 66%;
`;

export const CloseButon = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s;
  color: #aaa;

  &:hover {
    transform: rotate(90deg);
    color: #000;
  }
`;
