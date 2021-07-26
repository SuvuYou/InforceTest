import React from "react";
import {
  Frame,
  Title,
  Discription,
  CommentsContainer,
  Comment,
  Stock,
  Image,
  Stats,
  Inner,
  StatsText,
  CommentDate,
  CommentDisc,
  Button,
} from "./styles/productFullInfo";

export default function ProductForm({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
}

ProductForm.Title = function ProductFormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

ProductForm.Button = function ProductFormButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

ProductForm.Discription = function ProductFormDiscription({
  children,
  ...restProps
}) {
  return <Discription {...restProps}>{children}</Discription>;
};

ProductForm.Comment = function ProductFormComment({ children, ...restProps }) {
  return <Comment {...restProps}>{children}</Comment>;
};

ProductForm.CommentDate = function ProductFormCommentDate({
  children,
  ...restProps
}) {
  return <CommentDate {...restProps}>{children}</CommentDate>;
};

ProductForm.CommentDisc = function ProductFormCommentDisc({
  children,
  ...restProps
}) {
  return <CommentDisc {...restProps}>{children}</CommentDisc>;
};

ProductForm.CommentsContainer = function ProductFormCommentsContainer({
  children,
  ...restProps
}) {
  return <CommentsContainer {...restProps}>{children}</CommentsContainer>;
};

ProductForm.Stock = function ProductFormStock({ children, ...restProps }) {
  return <Stock {...restProps}>{children}</Stock>;
};

ProductForm.Stats = function ProductFormStats({ children, ...restProps }) {
  return <Stats {...restProps}>{children}</Stats>;
};

ProductForm.StatsText = function ProductFormStatsText({
  children,
  ...restProps
}) {
  return <StatsText {...restProps}>{children}</StatsText>;
};

ProductForm.Inner = function ProductFormInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};

ProductForm.Image = function ProductFormImage({ src, ...restProps }) {
  return <Image src={src} {...restProps} />;
};
