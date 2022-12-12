import React from "react";
import CardDefault from "./Default";
import CardSettings from "./Settings";

const Card = React.forwardRef((props, ref) => (
	<CardDefault {...props} />
)) as unknown as ((
	props: any & {
		ref?: any;
	}
) => React.ReactElement) & {
	Settings: typeof CardSettings;
};

Card.Settings = CardSettings;

export default Card;
