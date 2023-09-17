import React from "react";
import classNames from "classnames";

const ButtonTypes = ["default", "primary", "dashed", "link", "text"] as const;
export type ButtonType = (typeof ButtonTypes)[number];

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  type?: ButtonType;
  prefixCls?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    type,
    prefixCls: customizePrefixCls,
    style: customStyle = {},
    className: customClassName = "",
    children,
    ...rest
  } = props;

  const prefixCls = customizePrefixCls || "btn";

  const style: React.CSSProperties = {
    border: 0,
    outline: 0,
  };

  const mergedClassName = classNames(
    prefixCls,
    {
      [`${prefixCls}-${type}`]: type,
    },
    customClassName
  );

  const mergedStyle = {
    ...style,
    ...customStyle,
  };

  return (
    <button {...rest} className={mergedClassName} style={mergedStyle}>
      {children}
    </button>
  );
};

export default Button;
