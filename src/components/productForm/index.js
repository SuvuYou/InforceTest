import React from "react";
import {
  Frame,
  Overlay,
  Label,
  Input,
  Button,
  Container,
  InputContainer,
} from "./styles/productForm";

export default function ProductForm({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
}

ProductForm.Overlay = function ProductFormOverlay({ ...restProps }) {
  return <Overlay {...restProps} />;
};

ProductForm.InputContainer = function ProductFormInputContainer({
  children,
  ...restProps
}) {
  return <InputContainer {...restProps}>{children}</InputContainer>;
};

ProductForm.Container = function ProductFormContainer({
  children,
  ...restProps
}) {
  return <Container {...restProps}>{children}</Container>;
};

ProductForm.Label = function ProductFormLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};

ProductForm.Input = function ProductFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

ProductForm.Button = function ProductFormButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
