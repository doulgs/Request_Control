import React from "react";
import { Text, Button, IButtonProps, useTheme } from "native-base";

interface ButtonProps extends IButtonProps {
  title: string;
  isActive?: boolean;
  type: "open" | "closed";
}

export function Filter({
  title,
  isActive = false,
  type,
  ...rest
}: ButtonProps) {
  const { colors } = useTheme();

  const colorType = type === "open" ? colors.secondary[700] : colors.green[300];
  return (
    <Button
      variant="outline"
      borderWidth={isActive ? 1 : 0}
      borderColor={colorType}
      bgColor="gray.600"
      flex={1}
      size="sm"
      {...rest}
    >
      <Text color={isActive ? colorType : "gray.300"} textTransform="uppercase">
        {title}
      </Text>
    </Button>
  );
}
