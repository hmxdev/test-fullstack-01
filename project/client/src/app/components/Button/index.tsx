"use client"
import { ReactElement } from "react";
import { Container } from "./styles";

export interface ButtonProps {
  border: string;
  background: string;
  color: string;
  text?: string;
  borderRadius: string;
  icon?: ReactElement;
  onClick?: () => void;
}

export default function Button({ border, background, color, text, borderRadius, icon, onClick }: ButtonProps) {
  return (
    <Container
      onClick={onClick}
      border={border}
      background={background}
      borderRadius={borderRadius}
      color={color}>
      {text}
      <span>{icon}</span>
    </Container>
  )
}
