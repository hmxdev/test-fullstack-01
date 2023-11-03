import styled from "styled-components";
import { ButtonProps } from ".";


export const Container = styled.button<ButtonProps>`
 display: flex;
 align-items: center;
 justify-content: center;
 border: ${(props) => props.border};
 border-radius: ${(props) => props.borderRadius};
 background: ${(props) => props.background};
 color: ${(props) => props.color};
 font-weight: 600;
 font-size: 0.9rem;

 padding: 10px;
 cursor: pointer;
 transition: filter 0.3s ease;

  &:hover {
    filter: brightness(1.1);
  }

  @media (max-width: 360px) {
    width: fit-content;
  }

  svg {
    display: flex;
    margin-left: 8px;
  }

`
