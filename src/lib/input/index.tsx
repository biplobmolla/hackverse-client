import React from "react";
import Input, { InputProps } from "./Input";
import RichText from "./RichText";

// @ts-ignore
const InputElem = React.forwardRef((props, ref) => (
	<Input {...props} />
)) as unknown as ((
	props: InputProps & {
		ref?: any;
	}
) => React.ReactElement) & {
	RichText: typeof RichText;
};

InputElem.RichText = RichText;

export default InputElem;
