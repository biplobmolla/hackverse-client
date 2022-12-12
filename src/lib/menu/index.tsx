import classNames from "classnames";
import React from "react";
import MenuItem from "./MenuItem";

const Menu = React.forwardRef((props, ref) => (
	// @ts-ignore
	<MenuWrapper {...props} />
)) as unknown as ((
	props: MenuWrapperProps & {
		ref?: any;
	}
) => React.ReactElement) & {
	Item: typeof MenuItem;
};

Menu.Item = MenuItem;

export default Menu;

type MenuWrapperProps = {
	children: any;
	className?: string;
};

function MenuWrapper({ children, className }: MenuWrapperProps) {
	return (
		<div className={classNames("rounded-xl shadow bg-white p-3", className)}>
			{children}
		</div>
	);
}
