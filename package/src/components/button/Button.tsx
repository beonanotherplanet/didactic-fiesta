import React, { CSSProperties, PropsWithChildren } from "react";
import { Pressable, Text, StyleProp, PressableProps } from "react-native";
import { buttonStyle } from "../../styles/components.style";

interface ButtonProps extends Omit<PropsWithChildren<PressableProps>, "style"> {
  label: string;
  onClick: () => void;
  style: CSSProperties & StyleProp<PressableProps>;
  textColor: string;
}

const Button = (props: ButtonProps) => {
  const { label, onClick, style, textColor, ...rest } = props;
  return (
    <Pressable
      onPress={onClick}
      style={{ ...buttonStyle, ...(style as object) }}
      {...rest}
    >
      <Text style={{ color: textColor }}>{label}</Text>
    </Pressable>
  );
};

export default Button;
