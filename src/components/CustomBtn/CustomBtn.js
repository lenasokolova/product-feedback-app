import React from "react";
import { Button } from "./CustomBtn.styles";

export const CustomBtn = ({ type, title }) => {
	return <Button type={type}>{title}</Button>;
};
