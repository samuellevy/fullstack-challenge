import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  max-width: 920px;
`;
export const Button = styled.button`
  padding: 10px 12px;
  background: ${colors.secondary};
  color: ${colors.white};
  border-radius: 4px;
  cursor: pointer;
`;
export const TableBox = styled.table`
  border: 0;
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;
export const TableHeader = styled.thead``;
export const TableHeaderItem = styled.th`
  border: 1px solid #ddd;
  padding: 12px 8px;
  text-align: left;
  background-color: ${colors.primary};
  color: white;
`;
export const TableBody = styled.tbody``;
export const TableBodyLine = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  &:hover {
    background-color: #ddd;
  }
`;
export const TableBodyLineItem = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;
