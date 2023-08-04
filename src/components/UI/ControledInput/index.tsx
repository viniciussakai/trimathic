import { Control, Controller, FieldError } from "react-hook-form";
import { Input, InputProps } from "../Input";
import { Text } from "../Text";

type Props = InputProps & {
  control: Control<any>;
  name: string;
  error?: FieldError;
};

export const ControledInput = ({ control, name, error, ...rest }: Props) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
      />
      {error && (
        <Text variant="error" marginVertical={"xs"}>
          {error.message}
        </Text>
      )}
    </>
  );
};
