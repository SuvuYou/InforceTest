import React from "react";
import {
  Frame,
  Title,
  Image,
  Discription,
  Amount,
  Button,
  ButtonLink,
  Container,
} from "./styles/productCard";

export default function ProductCard({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
}

ProductCard.Title = function ProductCardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

ProductCard.Image = function ProductCardImage({ src, ...restProps }) {
  return <Image alt="Product Image" src={src} {...restProps} />;
};

ProductCard.Discription = function ProductCardDiscription({
  children,
  ...restProps
}) {
  return <Discription {...restProps}>{children}</Discription>;
};

ProductCard.Amount = function ProductCardAmount({ children, ...restProps }) {
  return <Amount {...restProps}>{children}</Amount>;
};

ProductCard.ButtonLink = function ProductCardButtonLink({
  to,
  children,
  ...restProps
}) {
  return (
    <ButtonLink to={to} {...restProps}>
      {children}
    </ButtonLink>
  );
};

ProductCard.Button = function ProductCardButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

ProductCard.Container = function ProductCardContainer({
  children,
  ...restProps
}) {
  return <Container {...restProps}>{children}</Container>;
};
