import React from "react";
import { Button as ButtonContainer } from "./styles";

const Button = ({children, ...props}) => <ButtonContainer {...props}>{children}</ButtonContainer>;

export default Button;
