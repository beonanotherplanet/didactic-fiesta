import React, { CSSProperties, PropsWithChildren } from "react";
import {
  TouchableOpacity,
  Text,
  StyleProp,
  TouchableOpacityProps,
} from "react-native";
import { buttonStyle } from "../../styles/components.style";

interface ButtonProps
  extends Omit<PropsWithChildren<TouchableOpacityProps>, "style"> {
  label: string;
  onClick: () => void;
  style: CSSProperties & StyleProp<TouchableOpacityProps>;
}

const Button = (props: ButtonProps) => {
  const { label, onClick, style, ...rest } = props;
  return (
    <TouchableOpacity
      onPress={onClick}
      style={{ ...buttonStyle, ...(style as object) }}
      {...rest}
    >
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
