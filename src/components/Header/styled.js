import styled from 'styled-components';
import { primary } from '../../config/color';

export const Nav = styled.nav`
  background: ${primary};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  a {
    color: #fff;
    margin: 0 10px 0 0;
    font-weight: bold;
  }
`;
