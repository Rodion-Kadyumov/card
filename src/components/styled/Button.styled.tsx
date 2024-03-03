import styled from 'styled-components';
import { css } from 'styled-components';

type StyledBtnPropsType = {
  color?: string
  fontSize?: string
  btnType?: "primary" | "outlined"
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  padding: 20px 0;
  border-radius: 5px;
  width: 180px;
  margin-right: 50px;

  font-weight: 700;
  font-size: ${props => props.fontSize || "2rem"};
  line-height: 20px;

  

  ${props => props.btnType === "outlined" && css<StyledBtnPropsType>`
    border: solid 3px ${props => props.color || "#4E71FE"};
    color: ${props => props.color || "#4E71FE"};
    background-color: transparent;

    &:hover {
      background-color: ${props => props.color || "#4E71FE"};
      color: #FFFFFF;
    }
  `}
  
  ${props => props.btnType === "primary" && css<StyledBtnPropsType>`
    background-color: ${props => props.color || "#4E71FE"};
    color: #FFFFFF;

    &:hover {
      border: solid 3px ${props => props.color || "#4E71FE"};
      color: ${props => props.color || "#4E71FE"};
      background-color: transparent;
    }
  `}
`