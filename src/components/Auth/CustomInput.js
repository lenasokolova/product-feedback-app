import React from "react";
import { useField } from "formik";

import { Input, InputDiv, InputError, InputLabel } from "./CustomInput.styles";

export const CustomInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<InputDiv>
			<InputLabel htmlFor={props.id || props.name}>{label}</InputLabel>
			<Input
				className="text-input"
				{...field}
				{...props}
			/>
			{meta.touched && meta.error ? (
				<InputError className="error">{meta.error}</InputError>
			) : null}
		</InputDiv>
	);
};
