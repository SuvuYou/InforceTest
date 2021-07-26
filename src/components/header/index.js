import React from "react";
import { Button, Container, LinkButton } from "./styles/header";

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Button = function HeaderButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Header.LinkButton = function HeaderLinkButton({ children, ...restProps }) {
  return <LinkButton {...restProps}>{children}</LinkButton>;
};
