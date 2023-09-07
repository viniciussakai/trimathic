import { Column } from "../Box";
import { RadioButton } from "./radioButton";

type RadioGroupProps = {
  options: string[];
  onSelect: Function;
  selected: string;
};

export const RadioGroup = ({
  onSelect,
  options,
  selected,
}: RadioGroupProps) => {
  return (
    <Column alignItems="flex-start">
      {options.map((option, i) => {
        const isSelect = selected == option;
        return (
          <RadioButton
            key={i}
            value={option}
            onPress={() => onSelect(option)}
            selected={isSelect}
          />
        );
      })}
    </Column>
  );
};
