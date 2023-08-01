import { TouchableOpacity, View } from "react-native";
import {
  useRestyle,
  spacing,
  border,
  backgroundColor,
  SpacingProps,
  BorderProps,
  BackgroundColorProps,
  composeRestyleFunctions,
  TextProps,
  createVariant,
  VariantProps,
} from "@shopify/restyle";

import { Text } from "../Text";
import { Theme } from "@/styles/theme";
import { FontAwesome5 } from "@expo/vector-icons";

type RestyleProps = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  VariantProps<Theme, "buttonVariants">;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  border,
  backgroundColor,
  createVariant({ themeKey: "buttonVariants" }),
]);

type Props = RestyleProps & {
  onPress?: () => void;
  label: string;
  textProps?: TextProps<Theme>;
  icon?: string;
};

export const Button = ({ onPress, label, textProps, icon, ...rest }: Props) => {
  const props = useRestyle(restyleFunctions, rest);

  return (
    <TouchableOpacity onPress={onPress}>
      <View {...props}>
        <Text variant="buttonLabel" {...textProps}>
          {label}
        </Text>

        {icon && (
          <Text variant="buttonLabel" {...textProps}>
            <FontAwesome5 name={icon} size={16} />
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};
